import MenuProduct from '@/data/MenuProduct'
import { Card, CardBody } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const ProductMenuComponent = () => {
  return (
    <div className='absolute -top-8 sm:-top-12 z-10 w-full'>
        <div className='container mx-auto px-2 sm:px-0 max-w-fit'>
          <div className='flex justify-between items-center sm:gap-2 lg:gap-6 product-menu py-0 sm:py-4 md:px-4 rounded-xl'>
            {
              MenuProduct.map((menuData:any, index:number) => (
                <div key={index} className='bg-none sm:bg-gradient-to-tr from-primary-yellow to-primary-red-500 cursor-pointer rounded-2xl max-w-fit'>
                  <Link href={menuData.path}>
                  <div className='p-2 md:px-4 md:py-3 lg:py-4 lg:px-8 flex lg:flex-row items-center gap-2 lg:gap-6'>
                    <div className='rounded-full bg-primary-yellow-100 sm:bg-white sm:bg-opacity-30'>
                    <menuData.icon className="w-7 h-7 m-2"/>
                    </div>
                    <p className="text-black md:text-white text-[0.5rem] sm:text-sm lg:text-xl font-bold">{menuData.name}</p>
                  </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductMenuComponent