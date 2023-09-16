import BlankLayout from '@/components/Layouts/BlankLayout';
import { Button } from '@material-tailwind/react';
import React from 'react'
import { Ilustrasi404 } from '../../public/assets/svg';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-4'>
        <Ilustrasi404 className='w-64 h-64'/>
        <div className='text-center mt-12'>
        <h2 className='text-2xl font-bold mb-2'>Waduh, kamu salah tujuan!</h2>
        <p className='mb-4'>Tujuan yang kamu cari tidak ditemukan, ikuti arahan kami agar anda tidak tersesat lagi, Klik Button Kembali ya anak muda!</p>
        <Link href="/">
        <Button className='normal-case'>Kembali</Button>
        </Link>
        </div>
    </div>
  )
}

NotFound.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default NotFound