import React, { useState } from 'react';
import './css/app.css'
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import questions from './Questions';

function App() {

  const [preStep, setPreStep] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [resultScreen, setResultScreen] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);

  const [givenAnswer, setGivenAnswer] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("");
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);


  const handleAnswerButtonClick = (btn, answerOption, index) => {
    setShowNextBtn(true);
    setSelectedIndex(index)
    setGivenAnswer(answerOption.isCorrect)

    if (answerOption.isCorrect)
      setCorrectAnswerCount(correctAnswerCount + 1)

    btn.classList.add("active");
    document.querySelectorAll(".answer-section button").forEach((btn) => {
      btn.setAttribute("disabled", "disabled");
    })
  }

  const nextQue = () => {
    setShowNextBtn(false);
    if (questions.length > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResultScreen(true)
    }

    document.querySelectorAll(".answer-section button").forEach((btn) => {
      btn.classList.remove("active");
      btn.removeAttribute("disabled");
    })
  }

  const reset = () => {
    setResultScreen(false)
    setPreStep(false)
    setIsStart(false)
    setCurrentQuestion(0)
    setCorrectAnswerCount(0)
  }

  const startApp = () => {
    setIsStart(true);
  }

  return (
    <>
      <div className="container">
        {
          (preStep === false && resultScreen === false) && (
            <button onClick={() => { setPreStep(true) }} className='start-btn anim-hover-button'>Start the app</button>
          )
        }
        {
          (preStep === true && isStart === false) && (
            <section className="app rules">
              <div className="app-header">
                <div className="mac-terminal">
                  <div className="left">
                    <span className="apple_icon apple_icon1"></span>
                    <span className="apple_icon apple_icon2"></span>
                    <span className="apple_icon apple_icon3"></span>
                  </div>
                  <div className="right">
                    <small>root@10.0.0.1:~$</small>
                  </div>
                </div>
              </div>
              <div className="app-body">
                <div className='title'>Test Kuralları</div>
                <ol className='rules'>
                  <li>Her soru için 15 saniye süreniz vardır.</li>
                  <li>Cevap seçildikten sonra değiştirilemez.</li>
                  <li>Soru için süreniz biterse boş bırakmış sayılırsınız.</li>
                  <li>Test sonunda cevaplarınıza göre puan alacaksınız.</li>
                </ol>
              </div>
              <div className="app-footer">
                <button onClick={() => { setPreStep(false) }} className='exit-btn'>Exit App</button>
                <button onClick={startApp} className='contiune-btn'>Contiune</button>
              </div>
            </section>
          )
        }
        {
          (isStart && resultScreen === false) && (
            <>
              <section className='app quiz-box'>
                <div className="app-header">
                  <div className="mac-terminal">
                    <div className="left">
                      <span className="apple_icon apple_icon1"></span>
                      <span className="apple_icon apple_icon2"></span>
                      <span className="apple_icon apple_icon3"></span>
                    </div>
                    <div className="right">
                      <small>root@10.0.0.1:~$</small>
                    </div>
                  </div>
                  <div className="time-line"></div>
                </div>
                <div className="app-body">
                  <div className="question-section">
                    <span className="question-count"> {currentQuestion + 1} . </span>
                    {questions[currentQuestion].questionText}
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                      <button className={showNextBtn && answerOption.isCorrect ? "active" : ""} onClick={(e) => { handleAnswerButtonClick(e.target, answerOption, index) }} key={index}>
                        <div className="answer-text"> {answerOption.answerText}  </div>
                        {showNextBtn && (answerOption.isCorrect ? (<FaCircleCheck style={{ color: "#009c0d" }} />)
                          :
                          (givenAnswer === false && (selectedIndex === index && (<FaCircleXmark style={{ color: "#ff413e" }} />))))}
                      </button>))}
                  </div>
                </div>
                <div className="app-footer">
                  <div className="order"> {currentQuestion + 1} / {questions.length}</div>
                  {showNextBtn && (
                    <button onClick={() => { nextQue() }} className='next-btn'>Next Que</button>
                  )}
                </div>
              </section>
            </>
          )
        }
        {
          resultScreen && (
            <section className="app result">
              <div className="app-header">
                <div className="mac-terminal">
                  <div className="left">
                    <span className="apple_icon apple_icon1"></span>
                    <span className="apple_icon apple_icon2"></span>
                    <span className="apple_icon apple_icon3"></span>
                  </div>
                  <div className="right">
                    <small>root@10.0.0.1:~$</small>
                  </div>
                </div>
              </div>
              <div className="app-body">
                <div className='title'>{questions.length} soruda {correctAnswerCount} doğru yaptınız. </div>
              </div>
              <div className="app-footer">
                <button onClick={reset} className='contiune-btn'>Again</button>
              </div>
            </section>
          )
        }
      </div>
    </>
  );
}

export default App;
