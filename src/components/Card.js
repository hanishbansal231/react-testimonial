import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
function Card(props) {
    let reviews = props.reviews;
    console.log(reviews)
  return (
    <div>
        <div className='image'><img src={reviews.image} alt={reviews.name} /><div className='circle'></div></div>
        <div><h2>{reviews.name}</h2></div>
        <div><h3>{reviews.job}</h3></div>
        <div className='quote'><FaQuoteLeft /></div>
        <div><p>{reviews.text}</p></div>
        <div className='quote'><FaQuoteRight /></div>
        {/* <div className='btnBox'>
            <button>< FaAngleLeft/></button>
            <button>< FaAngleRight/></button>
        </div>
        <div className='supriseBtn'><button>Surprise Me</button></div> */}
    </div>
  )
}

export default Card