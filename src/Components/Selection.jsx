import './Selection.css'
import { useState } from 'react'

export const Selection = ({setsort, sort}) => {
  return (
    <div className='select flex x'>
        <p className='white'>sort:</p>
        {<button 
          onClick={()=>{setsort('new')}}
          className={sort==='new'?'active':''}>
            Newest
          </button>}
        <button 
          onClick={()=>{setsort('old')}}
          className={sort==='old'?'active':''}>
            Oldest
        </button>
        <button onClick={()=>{setsort('most')}}
        className={sort==='most'?'active':''}>
        Most Comment
        </button>


    </div>
  )
}
