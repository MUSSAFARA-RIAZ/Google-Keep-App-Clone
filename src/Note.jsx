import React from 'react'

export default function Note(props) {
  const deleteitems=()=>{
    props.deleteitem(props.id);
    

  }
  return (
  
    <div className='note'>
        <div>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className='delete-btn' onClick={deleteitems}>-</button>
        </div>
      
    </div>
  
  )
}
