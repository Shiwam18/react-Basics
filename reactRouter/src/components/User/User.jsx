import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className=' text-center text-white bg-green-600 items-center p-4 font-serif font-bold'>User {id}</div>
  )
}

export default User