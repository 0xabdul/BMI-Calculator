import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setweight]=useState(50);
  const [height,setheight]=useState(160);
  const [bmi,setbmi]=useState(0);
  const [result,setresult]=useState("")
  const [showres,setshowres]=useState(false);
  const [showme,setshowme]=useState(true);
  const cal=()=>{
    const sum = weight/((height/100) *(height/100));
    setbmi(sum.toFixed(2));
    setshowres(true);
    setshowme(false);
    if (bmi < 18.5){
      setresult("Under Weight 🤭");
    }
    else if (bmi >=18.5 && bmi <= 24.9){
      setresult("Normal Weight 😀");
    }
    else if (bmi >=25 && bmi <= 29.9){
      setresult("Over Weight 🤡");
    }
    else if (bmi >=30 && bmi <= 40){
      setresult("obesity 👾");
    }
  }
  const add=()=>{
    setweight(weight + 1);
  };
  const sub=()=>{
    setweight(weight - 1);
  };
  const adds=()=>{
    setheight(height + 1);
  };
  const subs=()=>{
    setheight(height - 1);
  };
  const no=()=>{
  setshowme(true);
  setshowres(false);
  }
  return (
    <div>
      <div className='main-container'>
      {showme &&(
      <div className='fi'>
      <h1>BMI CALCULATOR</h1>
      <div className='box'>
      <div className='age-cont'>
        <div className='age-name'>
          <p>WEIGHT</p>
        </div> 
        <div className='age-number'>
          <p>{weight}</p>
        </div> 
        <div className='fl'>
        <div className='incre'>
          <p onClick={add}>+</p>
        </div>
        <div className='decre'>
          <p onClick={sub}>-</p>
        </div>
        </div>
      </div>
      <div className='height-cont'>
        <div className='height-name'>
          <p>HEIGHT</p>
        </div>
        <div className='height-number'>
          <p>{height}</p>
        </div>
        <div className='fl2'>
          <div className='in'>
            <p onClick={adds}>+</p>
          </div>
          <div className='de'>
            <p onClick={subs}>-</p>
          </div>
        </div>
      </div> 
      </div> 
      <div className='btn'>
        <button className='hi' onClick={cal}>CALCULATE BMI</button>
      </div>
      </div>
      )}
      {showres &&(
      <div className='show'>
        <p className='he'>BMI RESULT</p>
        <h2>{bmi}</h2>
        <div className='result'>
        <p className='ui'>{result}</p>  
        </div>
        <div className='slex'>
        <p>Under Weight: BMI less than 18.5</p>
        <p>Normal Weight: BMI 18.5 to 24.9</p>
        <p>Over Weight: BMI 25 to 29.9</p>
        <p>Obesity: BMI 30 to 40</p>
      </div>
      <button onClick={no} className='li'>MOVE TO PAGE</button>
      </div>
      )}
      </div>
    </div>
  )
}

export default App
