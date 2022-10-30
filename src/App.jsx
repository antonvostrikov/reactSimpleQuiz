import { useState } from 'react';
import './App.css';

const questions = [
  {
    title: 'В каком году началась Вторая мировая война?',
    variants: ['1939', '1941', '1942', '1938'],
    correct: 0
  },
  {
    title: 'Сколько лет В.В Путину?',
    variants: ['68', '69', '75', '70'],
    correct: 3
  },
  {
    title: 'Почему люди совершают самоубийства?',
    variants: ['Из-за проблем в личной жизни', 'Из-за неразделенной любви', 'Из-за чувства одиночества', 'Все ответы верны'],
    correct: 3
  },
  {
    title: 'Какая комания производила двигатели для самолетов люфтвафе во Вторую мировую войну?',
    variants: ['Volkswagen', 'Mercedes', 'Renault', 'Ford'],
    correct: 1
  }
]

function Game({question, nextVariant, progress}) {
  return (
    <div className="game">
      <div className="game-title">
        <h3>{question.title}</h3>
      </div>
      <div className="game-questions">
        <ul className="list-variants">
          {question.variants.map((variant, index) => {
            return <li onClick={() => nextVariant(index)} className="variant" key={index}>{variant}</li>
          })}
        </ul>
      </div>
      <div className="game-progress">
          <div className="progress-out">
            <div className="progress-in" style={{width: `${progress}%`}}></div>
          </div>
      </div>
    </div>
  )
}

function Result({correctAnswer}) {
  return (
    <div className="result">
      <div className="result-title">
        <p>Вы набрали {correctAnswer} из {questions.length} очков</p>
      </div>
      <div className="result-button">
        <button><a href="/">Пройти еще раз</a></button>
      </div>
    </div>
  )
}

function App() {
  const [step, setStep] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const question = questions[step]
  const progress = Math.floor(step / questions.length * 100)

  function nextVariant(index) {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrectAnswer(correctAnswer + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game progress={progress} nextVariant={nextVariant} question={question} /> 
        : <Result correctAnswer={correctAnswer}/>
      }
    </div>
  );
}

export default App;
