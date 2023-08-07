import React, { useState } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function Testimonial(props) {
  let reviews = props.reviews;
  const [index,setIndex] = useState(0);
  function leftHandler(){
    if(index - 1 < 0){
      setIndex(reviews.length - 1);
    }else{
      setIndex(index - 1);
    }
  }
  function rightHandler(){
    if(index + 1 > reviews.length - 1){
      setIndex(0);
    }else{
      setIndex(index + 1);
    }
  }
  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className='card'>
      <Card reviews={reviews[index]}></Card>
      <div className='btnBox'>
        <button onClick={leftHandler}>< FaAngleLeft /></button>
        <button onClick={rightHandler}>< FaAngleRight /></button>
      </div>
      <div onClick={surpriseHandler} className='supriseBtn'><button>Surprise Me</button></div>
    </div>
  )
}

export default Testimonial