import KuisDetailComponent from '@/components/AtributComponent/LaporanBelajarComponent/Kuis/KuisDetailComponent'
import BlankLayout from '@/components/Layouts/BlankLayout';
import Link from 'next/link';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const Kuis = () => {
  return (
    <div className='bg-secondary-graylight-100 min-h-screen'>
      <div className='container mx-auto pt-6 px-4 sm:px-0'>
        <div className='flex gap-4 mb-12'>
          <Link href="/dashboard/laporan-belajar">
            <FiArrowLeft className="w-6 h-6" />
          </Link>
          <span>
            <h4 className='font-bold text-black'>233 - KUIS Matematika Penalaran</h4>
            <p>18 Mei 2023</p>
          </span>
        </div>
        <div>
          <KuisDetailComponent/>
        </div>
      </div>
    </div>
  )
}

Kuis.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Kuis