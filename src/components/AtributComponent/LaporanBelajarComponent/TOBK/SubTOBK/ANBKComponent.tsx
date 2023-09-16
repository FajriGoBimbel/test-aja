import React from 'react'
import { IlustrasiEmptyFile } from '../../../../../../public/assets/svg'

const ANBKComponent = () => {
  return (
    <div className='text-center flex flex-col items-center pb-24'>
      <IlustrasiEmptyFile className="h-[22rem] w-auto"/>
      <h3 className='text-2xl font-bold text-black'>Whoopss!</h3>
      <p>Data laporan ANBK tidak ditemukan karena di tingkatan kelasmu saat ini sudah tidak ada ujian ANBK, sob</p>
    </div>
  )
}

export default ANBKComponent