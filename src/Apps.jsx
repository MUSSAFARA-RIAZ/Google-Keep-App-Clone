import React, { useState } from 'react';
import Createnote from './Createnote';
import Footer from './Footer';

import Header from './Header';
import Note from './Note';

export default function Apps() {
  const[item,setitem]=useState([]);

  const addnote=(node)=>{
    setitem((prevData)=>{
      return[...prevData,node];
    })

  }
  const ondelete=(id)=>{
    setitem((olddata)=>olddata.filter((currentdata,index)=>{
      return index!==id;




    })
    );

  };
  return (
    <>
    <Header/>
 
    <Createnote func={addnote}/>
   
    {item.map((val,index)=>{
      return(
        <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteitem={ondelete}
        />

      )

    })
  }

   
<Footer/>    
    </>
  )
}
