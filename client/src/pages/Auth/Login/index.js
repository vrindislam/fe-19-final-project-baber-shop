import React from 'react'
import './styles.less'

function Login () {
  return (
      <div>Login Page <span onClick={test}>test push</span> <h1>Commit now</h1></div>

  )
}

function test() {
  console.log('test')
}

export default Login