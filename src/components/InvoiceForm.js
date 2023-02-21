import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InvoiceForm = () => {
  const [productName, setProductName] = useState()
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState(0)
  const [inputList, setInputList] = useState([
    {
      product: '',
      quantity: 0,
      price: 0,
    },
  ])
  const [product, setProduct] = useState()

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  // adds input and creates product
  const handleAddClick = async () => {
    setInputList([...inputList, { product: '', quantity: 0, price: 0 }])

    try {
      const token = localStorage.getItem('myToken')
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/app/product',
        headers: { Authorization: `Bearer ${token}` },
        data: {
          productName: productName,
          productQuantity: quantity,
          productPrice: price,
        },
      })
      setProduct(response.data)
      console.log(response.data)
      // handleGetInvoice()
    } catch (error) {
      console.log(error)
    }
  }

  //submit invoice data
  const onSubmitInvoice = async () => {
    try {
      const token = localStorage.getItem('myToken')
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/app/invoice',
        headers: { Authorization: `Bearer ${token}` },
        data: [
          {
            productId: product?._id,
            quantity: product?.productQuantity,
          },
        ],
      })
      // handleGetInvoice()
    } catch (error) {
      console.log(error)
    }
  }

  // removes input field
  const handleRemoveClick = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  return (
    <div className="bg-white h-auto w-[50rem] my-16 mx-auto rounded-md p-8 shadow-lg">
      <p className="font-semibold">Invoice Form</p>
      <div className="flex justify-between mt-8 px-4">
        <div className="flex flex-col">
          <p>Invoice Number</p>
          <p>Customer Name</p>
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
        {inputList.map((x, i) => {
          return (
            <div>
              <div className="grid grid-cols-4 grid-flow-col mt-2 text-center place-items-center">
                <input
                  name="product"
                  type="text"
                  placeholder="Add product"
                  className="font-semibold text-sm w-[80%] border border-black rounded-md p-2"
                  onChange={(e) => {
                    handleInputChange(e, i)
                    setProductName(e.target.value)
                  }}
                  value={x.product}
                />
                <input
                  name="quantity"
                  type="number"
                  className="font-semibold text-sm w-16 border border-black rounded-md p-2"
                  onChange={(e) => {
                    handleInputChange(e, i)
                    setQuantity(e.target.value)
                  }}
                  value={x.quantity}
                />
                <input
                  name="price"
                  type="number"
                  className="font-semibold text-sm w-16 border border-black rounded-md p-2"
                  onChange={(e) => {
                    handleInputChange(e, i)
                    setPrice(e.target.value)
                  }}
                  value={x.price}
                />
                <p className="font-semibold">{x.quantity * x.price}</p>
              </div>

              {/* Button for deleting input fields */}
              {inputList.length !== 1 && (
                <button
                  className="ml-5 mt-2"
                  onClick={() => handleRemoveClick(i)}
                >
                  <p className="text-sm">Delete</p>
                </button>
              )}
            </div>
          )
        })}
        {inputList.length && (
          <button className="ml-5 my-4" onClick={() => handleAddClick()}>
            <p className="text-sm">Add</p>
          </button>
        )}
        <div className="flex w-full justify-end gap-4 px-20">
          <div>
            <p className="font-semibold">Total:</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <button className="mt-12 mx-4" onClick={() => onSubmitInvoice()}>
        Submit
      </button>
    </div>
  )
}

export default InvoiceForm
