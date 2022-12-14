import React from "react";
import ReactDom from "react-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
import './modal.css'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 10000000
}


const Close_btn = {
    backgroundColor: 'black',
    color:'white',
    fontSize: '20',

  }
  


export default function Modal({ open, onClose,ProfilePosts }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div style={MODAL_STYLES}>


      <h1 style={{color:'#fff',textAlign:'center',marginRight:'50px'}}>Your Posts</h1>
<div style={{display:'flex',flexWrap:'wrap'}}>
 
{ProfilePosts.length > 0
            
            ? ProfilePosts.map((comment)=>
       
             <div key={comment.id} style={{}}>
            <div className="add-comment" style={{display:'flex',marginLeft:'15vh',flexDirection:'row',marginBottom:'5vh',width:'35vw',marginRight:'5vw', backgroundColor:'black', color:'#fff',marginTop:'0',border:'1px solid #B7CADB',boxShadow:' 0 0 19px 10px rgb(226 30 228 / 24%)',height:'auto'}}>
            
            <img src={comment.img} style={{width:'60px', borderRadius:'50%', height:'60px'}}/>

            <div style={{display:'flex',flexDirection:'column'}}>

              <h5 style={{color:'#fff',fontWeight:'800'}}>{comment.name}</h5>
              <p style={{color:'#fff',fontSize:'15px'}}>{comment.comment}</p>
            

      </div>
      </div>
        </div>
      
        ) : null}
<button style={Close_btn}  onClick={onClose}>Close</button>

</div>

        
      </div>
    </>,
    document.getElementById('portal')
  )
}