import React, {useRef} from 'react'
import { Label } from './Label'
import { Link } from 'react-router-dom'
import {AiTwotoneMessage, AiFillCopy} from 'react-icons/ai'
import './Post.css'


export const Post = ({data}) => {
//cons
const article = useRef(null)
//return
  return (
    <Link to={"Post/"+data.number.toString()}>
        <article ref={article} className="between post">
        <div className="flex">
            <div className='flex x rel'>
            <p className='messageNumber'>{data.comments}</p>
            <AiTwotoneMessage className={data.state==='open'?'messageIcon active':'messageIcon'}/>
            </div>
            <div className='pl'>
                <h2>{data.title}</h2>
                <div className='flex x'>
                    <p className='pl test1'>včera</p>
                    {data.labels.map(x=><Label key={x.id} data={x}/>)}
                </div>
            </div>
        </div>
        <div className='flexcol flexend'>
            <div className='flex rel'>
                <AiFillCopy className='hide copyIcon'/>
                <p className='test1'>#{data.number}</p>
            </div>
            <p className='test1'>{data.user.login}</p>
        </div>
    </article>
    </Link>
  )
}
