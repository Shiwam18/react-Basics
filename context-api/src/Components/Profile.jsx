import React, { createContext, useContext } from 'react'
import usercontext from '../Context/UserContext'


function Profile() {
    const {user} = useContext(usercontext)
    const {error} = useContext(usercontext)
    if(!user) return <div>Please login!</div>
    return <div>Welcome {user.username}</div>
}

export default Profile