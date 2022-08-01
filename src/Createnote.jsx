import React, { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Button from '@mui/material/Button';



export default function Createnote(props) {
  const [node,setnode]=useState({


    title:'',
    content:''

  });
  const InputEvent=(event)=>{
    const {name,value}=event.target;

    setnode((prevData)=>{
      return{
        ...prevData,
        [name]:value,

      }
    })
  }
  const newnode=()=>{
 props.func(node);
 setnode({


  title:'',
  content:''

})


  }
  return (
 
    <div className='main_note'>
        <form>

            <input type="text"
            name='title'
            value={node.title}
            onChange={InputEvent}
            placeholder='title' />
            <textarea rows='10' column='20'     value={node.content}
            name='content'
            onChange={InputEvent} placeholder='write a note...' autoComplete='off'></textarea>
            
          

           
         
        </form>
        <button className='main-btn' onClick={newnode}>+</button>
      
    </div>
  )
  }
