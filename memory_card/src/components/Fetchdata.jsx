import {useEffect, useState} from 'react'
import Loading from './Loading';
import Congratulation from './Congratulation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import '../styles/fetchdata.css'

function Fetchdata({score,setScore,highscore,setHighscore}) {
    const [pokemon,setPokemon]=useState([]);
    const [clickedCards,setClickedCards]=useState([]);
    const [gameover,setGameover]=useState(false);
    const [gamestarted,setgamestarted]=useState(false);
    const [gamewon,setgamewon]=useState(false);
    const [limit,setlimit]=useState(12);

    const shuffle=(array)=>{
        for(let i=array.length-1;i>0;i--){
            let j=Math.floor(Math.random()*i);
            [array[i],array[j]]=[array[j],array[i]];
        }
        return array
    }

    const handleclickcard=(id)=>{
        if(clickedCards.includes(id)){
            if(score>highscore){
                setHighscore(score);
            }
                setScore(0);
                setClickedCards([]);
                setGameover(true);
        }
            else{
                setScore(score+1);
                const newclickedcards=[...clickedCards,id]
                setClickedCards(newclickedcards)
                if(newclickedcards.length===limit)
                    setgamewon(true)
            }
            const shuffledCards=shuffle([...pokemon])
            setPokemon(shuffledCards)
        }

    const restart=()=>{
        setGameover(false);
        setgamewon(false);
        setHighscore(0);
        setScore(0);
        setClickedCards([]);
        setgamestarted(false);
    }
    
    const fetchingdata=async(limit)=>{
        try {
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
            console.log("Response status:", response.status); 
            const data=await response.json();

            const fetchpokemon=await Promise.all(
            data.results.map(async(pok)=>{
                const pokres=await fetch(pok.url);
                const pokdata=await pokres.json();
                console.log("Pokdata:", pokdata); 
                return{
                    id:pokdata.id,
                    name:pokdata.name,
                    image:pokdata.sprites.front_default
                };
            })
        )
        setPokemon(fetchpokemon)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchingdata(limit)
    },[limit])

    const startgame=(difficulty)=>{
        let cardlimit;
        switch (difficulty) {
            case "Easy":
                cardlimit=4;    
                break;
            case "Medium":
                cardlimit=8;    
                break;
            case "Hard":
                cardlimit=12;    
                break;
        
            default:
                cardlimit=18;
        }

        setlimit(cardlimit)
        setgamestarted(true)
        setgamewon(false)
        fetchingdata(cardlimit)
    }

  return (
    <>
       {!gamestarted&&<Loading startgame={startgame} />}
       {gamewon&&<Congratulation startAgain={restart} />}

       {!gameover&&gamestarted&&!gamewon&&(
            <div className="pokemon-cards" style={{display:"grid"}}>
                {pokemon.map((pok)=>(
                    <button className='pictures' key={pok.id} onClick={()=>handleclickcard(pok.id)}>
                        <img src={pok.image} alt={pok.name} />
                        <p>{pok.name}</p>
                    </button>
       ))}
            </div>
       )}

       <div className="Game-over" style={{display:gameover?"block":"none"}}>
            <h2>Game Over</h2>
            <h3>Your best score is : {highscore}</h3>
            <button onClick={restart}><FontAwesomeIcon icon={faRotateRight} style={{ marginRight:"10px" }} />Restart</button>
       </div>
    </>
  )
}

export default Fetchdata