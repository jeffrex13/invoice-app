import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  //submit user data for registration
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/app/register',
        data: {
          name: name,
          username: username,
          password: password,
        },
      })
      console.log(response)
      response.status === 201 && setSuccess(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-gray-700 bg-opacity-60 p-8 h-auto w-[30rem] rounded-xl shadow-lg">
        <p className="text-xl font-medium text-[#E5E5E5]">Register</p>
        {success && <p className="text-green-600 text-center">Success!</p>}
        <div className="flex flex-col gap-6 mt-6">
          <div>
            <label className="text-[#E5E5E5]" for="name">
              Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className="bg-[#1E2835] text-sm text-white p-4 w-full rounded-lg mt-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label className="text-[#E5E5E5]" for="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
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
            <p className="text-[#e5e5e5] font-semibold">Register</p>
          </button>
        </div>
        <p className="text-xs text-[#BCBABA] mt-4">
          Already have an account?{' '}
          <Link className="text-[#165BC0] font-semibold" to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
