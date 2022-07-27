import React from 'react'
import './Pagination.css'
import { MdArrowForward, MdArrowBack} from 'react-icons/md'

//const
export const Pagination = ({Page,setPage}) => {

//return
  return (
    <div className='flexcol mt'>
        <div className='flexcenter x mt'>
        <MdArrowBack onClick={()=>{setPage(x=>x-1)}} className={Page!==1?'arrow':'arrow opa'}/>
            <h2 className='white'>{Page}</h2>
        <MdArrowForward onClick={()=>setPage(x=>x+1)} className={Page!==100?'arrow':'arrow opa'}/>
        </div>
        <div className='flexcenter mt'>
            <input type="range" nim="1" max="100" value={Page} onChange={(e)=>setPage(Number(e.target.value))}/>
        </div>
        
    </div>
  )
}
