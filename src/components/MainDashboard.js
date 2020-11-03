import React from 'react'
import './MainDashboard.css'

import PlayersContainer from '../containers/PlayersContainer'

export default function MainDashboard() {
  return (
    <main id='main-container' role='main'>
        <img id='progress-logo' src="../assets/icons/progress.svg" alt="Progress Bar Icon"/>
        <div id='time-container'>
          <h1 id='playline-set'>Your Playline is set!</h1>
          <p id='playline-time'>Come Back @ 7:30pm to track it live!</p>
          <hr/>
        </div>
        <p id='playline-protip'>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</p>
        
        <PlayersContainer />

        <div id='buttons-container'>
          <div className='notify-deposit-button'>
            <img className='notify-deposit-img' src="../assets/icons/notify-me.svg" alt="Notify Me Icon"/> 
            <span>Notify Me</span>
          </div>
          <div className='notify-deposit-button'>
            <img className='notify-deposit-img' src="../assets/icons/money-bag.svg" alt="Deposit Icon"/>
            <span>Deposit</span>
          </div>
        </div>

        <div id='download-container'>
          <p id='download-app'>Download the app</p>
          <img src="../assets/icons/ios-app.svg" alt="Go to IOS App Store"/>
          <img src="../assets/icons/google-play.svg" alt="Go to Google Play Store"/>
        </div>
      </main>
  )
}