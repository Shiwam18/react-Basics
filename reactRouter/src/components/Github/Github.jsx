import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const  Github = ()=> {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // }, [])
  return (
    <>
        <div className=' text-center bg-green-600 font-semibold p-4'>Followers:{data.followers} </div>
        <img className=' py-10 px-10' src={data.avatar_url} alt="Profile pic" width={300}/>
    </>
  )
}

export default Github

export const githubInfo = async () => {
    const res = await fetch('http://api.github.com/users/Amit-shaw-404')
    return res.json()
}