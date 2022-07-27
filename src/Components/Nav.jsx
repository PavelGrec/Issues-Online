import './Nav.css'
import { Selection } from './Selection'
import React from 'react'

//start
export const Nav = ({setsort, sort,JustOpen,setJustOpen}) => {
  return (
    <nav className='flexwidth mt'>
        <div className="width between">
            <Selection 
              setsort={setsort}
              sort={sort}
              />

          <button className={JustOpen?'active':''} onClick={()=>setJustOpen(!JustOpen)}>{JustOpen?'Just open':'close included'}</button>
        </div>
    </nav>
  )
}
