import React, { Component } from "react";

export default class QuizComponent extends Component {
  state = {
    count : 0
  }
  handleQuitClick = ()=>{
    this.props.onQuitClick()
  }
  nextQuestion = ()=>{
    if (this.state.count<this.props.questions.length-1){
      this.setState({
        count : this.state.count+1
      })
    }
  }
  prevQuestion = ()=>{
    if(this.state.count>0){
      this.setState({
        count : this.state.count-1
      })
    }
  }
  quit = ()=>{
    alert("Are you sure you want to quit ?")
    this.handleQuitClick()
  }
  render() {
    return (
      <div id="quiz-parent">
        <div id="quiz-box">
          <div id="quiz-head">
            <div id="heading">Question</div>
            <div id="q-num"> {this.state.count+1} of {this.props.questions.length}</div>
            <div id="question">{this.props.questions[this.state.count].question}</div>
          </div>
          <div id="options-div">
            <div className="opt-row">
              <div className="option">{this.props.questions[this.state.count].optionA}</div>
              <div className="option">{this.props.questions[this.state.count].optionB}</div>
            </div>
            <div className="opt-row">
              <div className="option">{this.props.questions[this.state.count].optionC}</div>
              <div className="option">{this.props.questions[this.state.count].optionD}</div>
            </div>
          </div>
          <div id="buttons">
            <button className="prev" onClick={this.prevQuestion}>PREVIOUS</button>
            <button className="quit" onClick={this.quit}>QUIT</button>
            <button className="next" onClick={this.nextQuestion}>NEXT</button>
          </div>
        </div>
      </div>
    );
  }
}
