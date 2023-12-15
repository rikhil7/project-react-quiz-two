import React, { Component } from 'react'

export default class ResultComponent extends Component {
  handleHomeClick = ()=>{
    this.props.onHomeClick()
  }
  handlePlayAgainClick = ()=>{
    this.props.onPlayAgainClick()
  }
  render() {
    return (
      <div id='result-parent'>
        <div id='heading'>RESULT</div>
        <div id='result-box'>
            <div id='tagline'>You need more practice!</div>
            <div id='score'>Your score is --%</div>
            <div id='stats'>
                <div id='stat'>
                    <div className='stat-name'>Total No. of Questions</div>
                    <div className='stat-number'>15</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of Attempted Questions</div>
                    <div className='stat-number'>-</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of correct answers</div>
                    <div className='stat-number'>-</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of Wrong Answers</div>
                    <div className='stat-number'>-</div>
                </div>
            </div>
            <div id='buttons'>
                <button className='play-again' onClick={this.handlePlayAgainClick}>Play Again</button>
                <button className='home' onClick={this.handleHomeClick}>Back to Home</button>
            </div>
        </div>
      </div>
    )
  }
}
