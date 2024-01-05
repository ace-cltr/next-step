import './index.css';
import React, { useState } from 'react';


const messages = [
  "Learn Html+CSS 🌐",
  "Learn JavaScript #️⃣",
  "Learn React ⚛️",
  "Apply for jobs 💼",
];

function App() {
  const [step, setStep] = useState(1)

  const handlePrev = () => {
    if(step > 1)
    setStep(step - 1)
  }
  const handleNext = () => {
    if(step < 4)
    setStep(step + 1)
  }

  return (
    <div className="steps">
      <h1>Frontend Mastery Steps :</h1>
      <div className='numbers'>
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
        <div className={step >= 4 ? 'active' : ''}>4</div>
      </div>
      <div className='message'>Step {step}: {messages[step - 1]}</div>
      <div className='buttons'>
        <button onClick={handlePrev} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Previous</button>
        <button onClick={handleNext} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Next</button>
      </div>
    </div>
  );
}

export default App;
