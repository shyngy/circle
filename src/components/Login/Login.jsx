import React from 'react'
import {  useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory()
  console.log(history);
  const isAuth = useSelector(({auth})=>auth.isAuth)
  console.log(isAuth);
  if(isAuth){
    return <Redirect to="/profile"/>
  }
  return (
    <div>
      this redirect
    </div>
  )
}
