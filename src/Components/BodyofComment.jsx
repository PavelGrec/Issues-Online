import React from 'react'

export const BodyofComment = ({text}) => {

  const parts = text.split('###').slice(1)
  return (
    <div className='openPostBody mt'>
      {text}
    </div>
  )
}
