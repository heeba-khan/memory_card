import React from 'react'
import '../styles/loading.css'
import PokemonLogo from '../assets/poki.png'

function Loading({startgame}) {
  return (
    <>
        <div className="start-game">
            <div className="headers">
                <img src={PokemonLogo} alt='POkemon Logo' className='pokemon-image' />
                <h2>Select a difficulty level</h2>
            </div>

            <div className="buttons">
                <button onClick={()=>startgame("Easy")}>Easy</button>
                <button onClick={()=>startgame("Medium")}>Medium</button>
                <button onClick={()=>startgame("Hard")}>Hard</button>
            </div>
        </div>
    </>
  )
}

export default Loading