import React from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function Profile() {
  const userCtx = useContext(UserContext)
  const { users } = userCtx

  console.log('users: ', users)


  return (
    <div>Página del Profile</div>
  )
}
