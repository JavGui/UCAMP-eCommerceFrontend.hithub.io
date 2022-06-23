import React from 'react'
import LoginList from './LoginList'
import '../../AppLog.css'

export default function Login() {
  return (
    <>
      <div className='Login'>
        <h1 className='titulo'>Inicio de Sesión</h1>
      </div>
      <LoginList />
    </>
  )
}