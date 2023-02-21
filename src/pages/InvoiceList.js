import React, { useState } from 'react'
// import InvoiceForm from '../components/InvoiceForm'

import { AiTwotoneEdit, AiOutlineArrowLeft } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Navbar from '../components/Navbar'

const InvoiceList = () => {
  const [selected, setSelected] = useState('')

  const sampleData = [
    {
      _id: 0,
      invoiceNumber: 0,
      customerName: 'John Doe',
      invoiceDetails: [
        {
          productName: 'Chair',
          quantity: 2,
          price: 1500,
          subtotal: 3000,
        },
        {
          productName: 'Table',
          quantity: 2,
          price: 1000,
          subtotal: 2000,
        },
      ],
    },
    {
      _id: 1,
      invoiceNumber: 1,
      customerName: 'Jane Doe',
      invoiceDetails: [
        {
          productName: 'Mouse',
          quantity: 2,
          price: 500,
          subtotal: 1000,
        },
        {
          productName: 'Keyboard',
          quantity: 2,
          price: 800,
          subtotal: 1600,
        },
      ],
    },
  ]

  const handleClick = (id) => {
    setSelected(id)
  }

  const handleDelete = (id) => {
    console.log('deleted')
  }

  return (
    <div className="bg-gray-800 h-screen">
      <Navbar />
      <div className="py-12 px-16">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-2 mb-8 text-white cursor-pointer"
        >
          <AiOutlineArrowLeft />
          <p>Back</p>
        </div>

        <p className="text-white">Invoice List</p>
        <div className="flex items-center gap-4 mb-16 p-4">
          {/* Card */}
          {sampleData.map((items) => (
            <div className="flex w-[20rem] px-4 py-6 bg-white rounded-md items-center justify-between">
              <div>
                <p className="text-sm">Invoice no: {items?.invoiceNumber}</p>
                <p className="text-sm">Customer name: {items?.customerName}</p>
              </div>
              <div>
                <p className="text-sm">
                  <AiTwotoneEdit
                    title="Edit Invoice"
                    className="cursor-pointer"
                    onClick={() => handleClick(items)}
                  />
                </p>
                <p className="text-sm mt-2">
                  <RiDeleteBin6Fill
                    title="Delete Invoice"
                    className="cursor-pointer"
                    onClick={() => handleDelete(items?._id)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="bg-white h-auto w-[50rem] my-16 mx-auto rounded-md p-8 shadow-lg">
            <p className="font-semibold">Invoice Form</p>
            <div className="flex justify-between mt-8 px-4">
              <div className="flex flex-col">
                <p>Invoice Number: {selected.invoiceNumber}</p>
                <p>Customer Name: {selected.customerName}</p>
              </div>
              <p>Invoice Date</p>
            </div>
            <div className="w-[85%] mx-auto">
              <div className="grid grid-cols-4 grid-flow-col mt-8 mb-4 text-center">
                <p className="font-semibold">Product name</p>
                <p className="font-semibold">Quantity</p>
                <p className="font-semibold">Price</p>
                <p className="font-semibold">Subtotal</p>
              </div>
              <hr className=" border-[1px] mb-8" />
              {selected.invoiceDetails.map((i) => {
                return (
                  <div>
                    <div className="grid grid-cols-4 grid-flow-col mt-2 text-center place-items-center">
                      {/* <input type="text" value={selected.customerName} /> */}
                      <input
                        name="product"
                        type="text"
                        className="font-semibold text-sm w-[80%] border border-black rounded-md p-2"
                        // onChange={(e) => handleInputChange()}
                        value={i.productName}
                      />
                      <input
                        name="quantity"
                        type="number"
                        className="font-semibold text-sm w-[80%] border border-black rounded-md p-2"
                        // onChange={(e) => handleInputChange()}
                        value={i.quantity}
                      />
                      <input
                        name="price"
                        type="number"
                        className="font-semibold text-sm w-[80%] border border-black rounded-md p-2"
                        // onChange={(e) => handleInputChange()}
                        value={i.price}
                      />
                      <p className="font-semibold">{i.subtotal}</p>
                    </div>
                  </div>
                )
              })}
              <div className="flex w-full justify-end gap-4 mt-12 px-20">
                <div>
                  <p className="font-semibold">Total:</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
            <button className="mt-12 mx-4">Submit</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default InvoiceList
