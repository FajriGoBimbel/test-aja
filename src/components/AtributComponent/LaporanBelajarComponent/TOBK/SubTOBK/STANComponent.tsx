import React from 'react'
import { IlustrasiEmptyFile } from '../../../../../../public/assets/svg'

const STANComponent = () => {
  return (
    <div className='text-center flex flex-col items-center pb-24'>
      <IlustrasiEmptyFile className="h-[22rem] w-auto"/>
      <h3 className='text-2xl font-bold text-black'>Whoopss!</h3>
      <p>Data laporan STAN tidak ditemukan karena kamu tidak memilih program kedinasan , sob</p>
    </div>
  )
}

export default STANComponent