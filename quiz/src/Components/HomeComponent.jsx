import React, { Component } from 'react'
// import "./../App.css"
export default class HomeComponent extends Component {
  handlePlayClick = ()=>{
    this.props.onPlayClick()
  }
  render() {
    return (
      <div id='home-parent'>
        <h1>QUIZ</h1>
        <button onClick={this.handlePlayClick}>Play</button>
      </div>
    )
  }
}
