import {useEffect} from 'react'
import { Link } from 'react-router-dom'

export const Label = ({data}) => {
  const style = {backgroundColor:'#'+data.color}
useEffect(()=>{
  if(true){}
}
)
  return (
    <Link to={data.url}>
        <p className={
          data.color==='000000'
          ||data.color==='ee0701'
          ||data.color==='5319e7'
          ||data.color==='e11d21'
          ||data.color==='5588cc'
          ||data.color==='343e96'
          ||data.color==='1a6c99'
          ||data.color==='89871c'
          ||data.color==='0052cc'
          ||data.color==='006b75'
          ||data.color==='000000'
          
          ?'ml tag white':'ml tag'} style={style}>
            {data.name}
        </p>
    </Link>
  )
}
