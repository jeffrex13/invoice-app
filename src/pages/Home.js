import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import InvoiceForm from '../components/InvoiceForm'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-gray-800 h-screen">
      <Navbar />
      {/* Invoice list */}
      <div className="py-12">
        <Link
          to="/invoice-list"
          className="flex gap-2 items-center mx-12 float-right text-white"
        >
          View Invoice list
          <AiOutlineArrowRight />
        </Link>
        {/* Invoice Form */}
        <InvoiceForm />
      </div>
    </div>
  )
}

export default Home
