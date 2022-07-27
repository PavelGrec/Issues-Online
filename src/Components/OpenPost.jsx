import './OpenPost.css'
import React, { Suspense } from 'react'
import { useParams} from 'react-router-dom'
import { Loading } from './Loading'
import {Comment} from './Comment'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { BodyofComment } from './BodyofComment'
import { smazat, smazatComments} from './oneUser'


export const OpenPost = () => {
//consts
  const [data, setdata] = useState(undefined)
  const [comments, setcomments] = useState(undefined)
  const parameter = useParams().post
  // const Comment = React.lazy(() => import('./Comment'));

//useEffect
  useEffect(()=>{
   return ()=>getData();
  },[data])
//getData
  function getData(){
    const getDataHeader = {
      'x-ratelimit-limit': 5000,
      'x-ratelimit-remaining': 4966,
      'x-ratelimit-used': 34,
      'x-ratelimit-reset': 1372700873,
    }
    if(data===undefined)axios.get(`https://api.github.com/repos/angular/angular/issues/${parameter}`).then(res=>setdata(res.data)).catch(err=>console.log(err))
    if(data!==undefined)axios.get(data.comments_url).then(res=>setcomments(res.data)).catch(err=>console.log(err))
  }
//return
  if(data===undefined)return(<Loading/>)

  if(data!==undefined)return (
    <main className='flexwidth'>
      <div className="width flex gap flexStart">

        <div className='openPostLeft'>
        <article className='openPost'>
          <h2 className='openPostHeading'>
            {data.title}
          </h2>
          {data.closed_at===null&&<p className='gray'>created: {data.created_at.slice(0,10)}</p>}
          {data.closed_at!==null&&<p className='gray'>ended: {data.closed_at.slice(0,10)}</p>}
          <p className='gray'>{data.comments} comments</p>

            <BodyofComment text={data.body}/>
          <div className='flexcol'>
            <p>{data.id}</p>
            <p>{data.user.login}</p>
          </div>


        </article>
        <div className='mt' loading="lazy">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {comments!==undefined&&comments.map(x=><Comment key={x.id} data={x}/>)}
          {/* </Suspense> */}


        </div>

        </div>

        <div className='openPostRight openPost'>
          <p>milestone</p>
          <p>Assignees</p>
          <p>Reviewers</p>
          <p>Labels</p>
        </div>
      </div>
    </main>
  )
}
