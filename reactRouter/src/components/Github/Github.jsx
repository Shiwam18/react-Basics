import React, { useEffect, useState } from 'react'

import { Link, useLoaderData } from 'react-router-dom'

const  Github = ()=> {
    // const data=useLoaderData()
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://api.github.com/users/Shiwam18')
        .then(res=>res.json())
        .then(data=>setData(data))
    }, [])
const handleProject1 = (e) => {
  e.preventDefault();
  window.location.href='https://genpwd18.netlify.app/' 
}
const handleSrcCode = (e) => {
  e.preventDefault();
  window.location.href='https://github.com/Shiwam18/react-Basics/tree/main/05passwordGenerator' 
}
const handleProject2 = (e) => {
  e.preventDefault();
  window.location.href='https://currconversion.netlify.app/' 
}
const handleSrcCode2 = (e) => {
  e.preventDefault();
  window.location.href='https://github.com/Shiwam18/react-Basics/tree/main/06currencyConverter' 
}
  return (
    <>
        <div className=' text-center bg-green-600 font-semibold p-4'>Followers:{data.followers} </div>
        <p className='  flex items-center justify-center bg-indigo-600 text-white font-serif font-semibold rounded-sm mb-4 p-4'>Overview & projects</p>
        <div className='flex'>
          
          <img className=' py-10 px-10 rounded-full' src={data.avatar_url} alt="Profile pic" width={400}/>
          
          
          
          <div className=''>
          <p className=' bg-gray-800 mx-4 p-4 rounded-3xl text-white font-mono'>1. Password generator <br /> Description: It uses mostly useState hooks to update and display passwords with factors such as passwords length special characters and numbers. One can generate password from length 1 to 100 with his choice of wheather numbers and speacial characters will be allowed or not.
          A copy button is also present to copy that password to clipboard and use it anywhere they want.</p>
          <button className=' bg-orange-700 rounded-md p-2 text-mono text-white font-semibold m-2'
          onClick={handleProject1}>Open Project</button> 
          <button className='bg-orange-700 rounded-md p-2 text-mono text-white font-semibold m-2'
          onClick={handleSrcCode}>View Source Code</button>
          </div>
          <div className=''>
          <p className=' bg-gray-800 mx-4 p-4 rounded-3xl text-white font-mono'>2. Currency converter <br /> Description: It converts any currency to any other currency of users choice. It uses api call to fetch json data and manages to convert the currency.
          It is a basic project, and its goal was to learn hooks and managing api calls.</p>
          <button className=' bg-orange-700 rounded-md p-2 text-mono text-white font-semibold m-2'
          onClick={handleProject2}>Open Project</button> 
          <button className='bg-orange-700 rounded-md p-2 text-mono text-white font-semibold m-2'
          onClick={handleSrcCode2}>View Source Code</button>
          </div>
          
        </div>
        
    </>
  )
}

export default Github

// export const githubInfo = async () => {
//     const res = await fetch('http://api.github.com/users/Amit-shaw-404')
//     return res.json()
// }