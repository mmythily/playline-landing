import React, { useState, useEffect }  from 'react'
import './PlayersContainer.css'
import {players} from '../playline-test.json';

export default function PlayersContainer(){
  const [playersData, setPlayersData] = useState(players)
  const [isLoading, setIsLoading] = useState(false)

  useEffect (()=>{
    setIsLoading(true)
    setPlayersData(players)
    setIsLoading(false)
  }, [])

  return(
    <>
      { isLoading ? (
        <div>Loading...</div>
      ):( 
      <ul id='players-container'>
        {playersData.map(({last_name, headshot, points})=>(
          <li id='player-list' key={last_name}>
            <img id='player-img' src={headshot} alt={last_name} />
            <p id='player-name-pts'>{last_name}</p>
            <p id='player-points'>{points}</p>
            <p id='player-name-pts'> PTS </p>
          </li>
        
        ))}
      </ul>)
    }
    </>
  )
}