import React from 'react';
import './KityKatch.css';
import cross_icon from '../Assest/cross.png';
import circle_icon from '../Assest/circle.png';
import cat_icon from '../Assest/cat.jpg'

let data = ["","","","","","","","",""];

const KityKatch = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] =useState(false);

  const toggle = (w,num) => {
    if(lock) {
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = '<img src = ${cross_icon}>';
      data[num] = "x";
      setCount(++count);
    }
    else{
      e.target.innerHTML= '<img src= ${circle_icon}>';
      data[num] = "o";
      setCount(++count);
    }

  }
  return (
    <div className="container">
        <h1 className ="title">Kity Katch Game</h1>

        <div className="board">
          <div className="row1">
            <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,2)}}></div>
          </div>
          <div className="row2">
            <div className="boxes"onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,5)}}></div>
          </div>
          <div className="row3">
            <div className="boxes"onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes"onClick={(e)=>{toggle(e,8 )}}></div>
          </div>
        </div>

        <button className ="reset">Reset</button>
        
   
    </div>
  );
}

export default KityKatch;
