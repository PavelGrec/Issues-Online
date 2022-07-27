import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Wall } from "./Components/Wall";
import {smazat} from './Components/feeds.js';
import { OpenPost } from "./Components/OpenPost";
import { Route,Routes,useLocation } from "react-router-dom";


function App() {
  const [sort, setsort] = useState('new')
  const [data, setdata] = useState(undefined)
  const [JustOpen, setJustOpen] = useState(true)
  const [Page, setPage] = useState(1)

  useEffect(()=>{
    return ()=>getData()
  },[useLocation().pathname,JustOpen,sort,Page])

  // console.log(`https://api.github.com/search/issues?page=${Page}&q=is%3Aissue+is${JustOpen?'%3Aopen':''}${sort==='old'?'+sort%3Acreated-asc':''}${sort==='new'?'+sort%3Acreated-desc':''}${sort==='most'?'+sort%3Acomments-desc':''}`);
  
  function getData(){
    const getDataHeader = {
      'x-ratelimit-limit': 5000,
      'x-ratelimit-remaining': 4966,
      'x-ratelimit-used': 34,
      'x-ratelimit-reset': 1372700873,
    }
    if(JustOpen===true&&sort==='new'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=is%3Aopen+is%3Aissue`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
    if(JustOpen===false&&sort==='new'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
    if(JustOpen===true&&sort==='old'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=is%3Aopen+sort%3Acreated-asc`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
    if(JustOpen===false&&sort==='old'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=sort%3Acreated-asc`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
    if(JustOpen===true&&sort==='most'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=is%3Aopen+sort%3Acomments-desc`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
    if(JustOpen===false&&sort==='most'){return axios.get(`https://api.github.com/repos/angular/angular/issues?page=${Page}&q=is%3Aopen+sort%3Acomments-desc`).then(res=>setdata(res.data)).catch(err=>console.log(err))}
  }

  //Absolute sort
  // ${sort==='old'?'+sort%3Acreated-desc':''}${sort==='new'?'+sort%3Acreated-asc':''}${sort==='most'?'+sort%3Acomments-desc':''}

//return
  return (
    <div className="rel">
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Nav data={data}/>}/> */}
        <Route path="/" element={<Wall 
          data={data} 
          setsort={setsort}
          sort={sort}
          setJustOpen={setJustOpen}
          JustOpen={JustOpen}
          setPage={setPage}
          Page={Page}
          />}/>
        <Route path="/post/:post" element={<OpenPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
