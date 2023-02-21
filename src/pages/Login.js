import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //submit login data
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/app/login',
        data: {
          username: username,
          password: password,
        },
      })
      // stores token to local storage
      localStorage.setItem('myToken', response.data.token)
      console.log(response)
      response.status === 200 && navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-gray-700 bg-opacity-60 p-8 h-auto w-[26rem] rounded-xl shadow-lg">
        <p className="text-xl font-medium text-[#E5E5E5]">Login</p>
        <p className="text-[#BCBABA] mt-2">Sign in to continue</p>
        <div className="flex flex-col gap-6 mt-8">
          <div>
            <label className="text-[#E5E5E5]" for="email">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="user01"
              className="bg-[#1E2835] text-sm text-white p-4 w-full rounded-lg mt-2"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label className="text-[#E5E5E5]" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-[#1E2835] text-sm text-white p-4 w-full rounded-lg mt-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            onClick={(e) => onSubmit(e)}
            className="bg-[#165BC0] py-4 rounded-lg"
          >
            <p className="text-[#e5e5e5] font-semibold">Login</p>
          </button>
        </div>

        <p className="text-xs text-[#BCBABA] mt-4">
          Not registered?{' '}
          <Link className="text-[#165BC0] font-semibold" to="/register">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
