import React from 'react'
import './Comment.css'


//start
export const Comment = ({data}) => {
  return (
    <div className='post Comment' loading="lazy">
        <div className='flex'>
            <div className='commentPhoto' style={{background:`url('${data.user.avatar_url})`,backgroundSize: 'cover'}}></div>
            <h4 >{data.user.login}</h4>
            <p className='gray'>{data.created_at.slice(0,10)}</p>
        </div>
        <p className='commentText'>Comment text one day</p>
    </div>
  )
}
