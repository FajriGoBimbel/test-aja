import BlankLayout from '@/components/Layouts/BlankLayout';
import { Button, Card, Input } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const LupaPassword = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card shadow={false} className='px-6 py-4'>
            <Link href="/auth/signin">
                <FiArrowLeft className="w-6 h-6 mb-12"/>
            </Link>
            <h2 className='font-bold text-2xl mb-1'>Atur Ulang Kata Sandi</h2>
            <p className='mb-8'>
                Masukkan email yang terdaftar. Kami akan <br/> mengirimkan Link verifikasi untuk atur ulang kata sandi.
            </p>
            <form>
                <Input type='email' label="Email"/>
                <Button type='submit' className='mt-4' fullWidth>Lanjut</Button>
            </form>
        </Card>
    </div>
  )
}

LupaPassword.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default LupaPassword