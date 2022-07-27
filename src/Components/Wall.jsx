import {useEffect} from 'react'
import './Wall.css'
import { Post } from './Post'
import { Nav } from './Nav'
import { Pagination } from './Pagination'
import { Loading } from './Loading'

//Start
export const Wall = ({data, setsort,sort,JustOpen,setJustOpen,Page, setPage}) => {

//UseEffect
  useEffect(()=>{
    return console.log('už');
  },[data])

//return
  if(data===undefined) return (<Loading/>)
  if(data!==undefined) return (
    
    <main className='flexwidth'>
        <div className="width">
        <Nav 
        setsort={setsort}
        sort={sort}
        JustOpen={JustOpen}
        setJustOpen={setJustOpen}
        />
            
            {data.map(x=>
            <Post
                key={x.id}
                data = {x}

            />)}
          <Pagination
            Page={Page}
            setPage={setPage}
          />
        </div>
    </main >
  )
}
