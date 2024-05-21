import React from 'react'
import { Link } from 'react-router-dom'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

const Products = () => {
  return (
    <>
    <div className="">
        <p>
        <div className=" flex flex-row gap-4 w-full">
          <RecentOrders />
          <PopularProducts />
        </div></p><Link to="/" className=' underline' > go to dashboard</Link>
    </div>

    </>
  )
}

export default Products
