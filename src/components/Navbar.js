import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 bg-opacity-30 flex justify-end w-screen py-4 px-8">
      <button className="flex gap-2 text-[#E5E5E5] items-center">
        <BiLogOut className="text-lg" />
        <p
          className="text-sm"
          onClick={() => {
            // deletes stored token from local storage and navigates back to login page
            localStorage.removeItem('myToken')
            navigate('/')
          }}
        >
          Logout
        </p>
      </button>
    </div>
  )
}

export default Navbar
