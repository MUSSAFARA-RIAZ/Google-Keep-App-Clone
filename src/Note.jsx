import React from 'react'

export default function Note(props) {
  return (
  
    <div className='note'>
        <div>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        </div>
      
    </div>
  
  )
}
