
import './App.css';
// import Header from './Header';
import Student from './component/Student';
import Header from './component/Header';
import Movie from './component/Movie';

import movies from "./movie.json"
import { element } from 'prop-types';
import React, {useState} from 'react';


function App() {
  let name = "Setera"
  const [num,setNum] = useState(1)
  
  function increase(){
    setNum(num+1);
  }

  function decrease(){
    setNum(num-1);
  }
  function mulparam(n){
    setNum(num*n)

  }


  return(
    <div className='App'>
      <Header/>
      <h1 className='heading'>{num}</h1>
      <div className='main'>
        <button className='btn' onClick={increase}>Increment</button>
        <button className='btn' onClick={decrease}> Dcrement</button>

        <button className='btn' onClick={()=>mulparam(3)}> Multiple with parameter</button>
      </div>
      

    </div>

    
  )
}

export default App;














// function App() {
//   let name = "Setera "
//   return (
//     <div className='App'>
//       <Student name="Setera "/>
    
  
//     </div>

//   );
//     }

// export default App;
