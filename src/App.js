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
  const [isOpen, setIsOpen] = useState(true)

  const handlePrev = () => {
    if (step > 1)
      setStep((step) => step - 1)
  }
  const handleNext = () => {
    if (step < 4)
      setStep((step) => step + 1)
    //      setStep((step)=>step+1) we used step as a cb function to get the current value of the step state
    //                              for the next time it gets called we get the updated value.
  }
  // const close = () => {   Hard coded logic we don't need these many lines for it
  //   if (isOpen === true) {
  //     setIsOpen(false)
  //   } else {
  //     setIsOpen(true)
  //   }
  // }

  //  const closeOpen = isOpen ? 'close' : 'open' again hard coded 

  return (
    <>
      <button className='close' onClick={() => setIsOpen((is)=>!is)}>{isOpen ? 'close' : 'open'}</button>
      {isOpen &&
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
        </div>}
    </>

  );
}

export default App;

// The ! operator in JavaScript is the logical NOT operator. It flips the boolean value of whatever follows it.
// If isOpen is true, !isOpen will be false, and if isOpen is false, !isOpen will be true.