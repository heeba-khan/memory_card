import React, { useState } from 'react'
import Fetchdata from './Fetchdata'
import '../styles/header.css'

function Header() {
    const [score,setScore]=useState(0)
    const [highscore,setHighscore]=useState(0)

  return (
    <>
      <div className='header'>
        <h1 className='title'>Pokemon Memory Game</h1>
        <div className="score-box">
            <h3 className="score">Score : {score}</h3>
            <h3 className="high-score">| Highscore : {highscore}</h3>
        </div>
      </div>  
      <Fetchdata score={score} setScore={setScore} highscore={highscore} setHighscore={setHighscore} />
    </>
  )
}

export default Header