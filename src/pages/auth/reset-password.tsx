import BlankLayout from '@/components/Layouts/BlankLayout';
import { Button, Card, Input } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

const ResetPassword = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card shadow={false} className='px-6 py-4'>
            <Link href="/auth/signin">
                <FiArrowLeft className="w-6 h-6 mb-12"/>
            </Link>
            <h2 className='font-bold text-2xl mb-1'>Kata Sandi Baru</h2>
            <p className='mb-8'>
            Buat kata sandi baru untuk akun dengan <br/> email kecoaalbino18@gmail.com
            </p>
            <form>
                <div className='flex flex-col gap-4'>
                <Input type='password' label="New Password"/>
                <Input type='password' label="Confirm Password"/>
                </div>
                <Button type='submit' className='mt-4' fullWidth>Lanjut</Button>
            </form>
        </Card>
    </div>
  )
}

ResetPassword.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default ResetPassword