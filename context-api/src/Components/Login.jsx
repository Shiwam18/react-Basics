import React, { useContext, useState } from 'react'
import usercontext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {setUser} = useContext(usercontext)
    const handleSubmit = (e) =>{
        if(username===''||password==='') setError('please fill all fields to login!')
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <input 
        type="text"
        placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}
     />
     <br />
     <input 
        type="text"
        placeholder='pasword'
        onChange={(e)=>setPassword(e.target.value)}
    />
    <br /><br /> 
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login