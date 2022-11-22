import React from 'react'
import BtnQuote from './BtnQuote'

const QuotesBox = ({ quoteRandom, handleClick, clrRandom }) => {

  const objStyle = {
    color: clrRandom
  }
  const objStyleBtn = {
    backgroundColor: clrRandom
  }

  return (
    <article className='card' style={objStyle}>
      <i className='card__icon fa-solid fa-quote-left'></i>
      <p className='card__quote'>{quoteRandom.quote}</p>
      <h1 className='card__author'>{quoteRandom.author}</h1>
      <BtnQuote
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
      />
    </article>
  )
}

export default QuotesBox