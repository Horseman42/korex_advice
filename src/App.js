import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) =>{
        const {advice} = response.data.slip;

        setAdvice(advice);
      })
      .catch((error) =>{
        console.log(error)
      })
  }

  function getAdvice (){
    fetchAdvice(); 
  }

  return (
    <div className='app'>
      <div className='card'>
        <h2 className='heading'>{advice}</h2>  
        <button className='button' onClick={getAdvice}><span>GIVE ME ADVICE!</span></button>
      </div>
    </div>  
    
  );  
}  

 export default App;