import React, { useState } from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';
import QuizQuestions from "././resources/quizQuestion.json"
function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePlayClick = () => {
    setCurrentPage('quiz');
  };
  const handleQuitClick = ()=>{
    setCurrentPage('result');
  }
  const handleHomeClick = ()=>{
    setCurrentPage('home');
  }
  const handlePlayAgainClick = () => {
    setCurrentPage('quiz');
  };

  const renderPage = ()=>{
    console.log(QuizQuestions)
    switch(currentPage){
      case "home":
        return <HomeComponent onPlayClick={handlePlayClick} />;
      case 'quiz':
        return <QuizComponent questions={QuizQuestions} onQuitClick={handleQuitClick}/>;
      case 'result':
        return <ResultComponent onHomeClick={handleHomeClick} onPlayAgainClick={handlePlayAgainClick}/>;
    }
  }
  return <div className="App">{renderPage()}</div>;
}

export default App;