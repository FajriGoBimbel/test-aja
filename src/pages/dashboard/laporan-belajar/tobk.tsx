import DetailNilai from '@/components/AtributComponent/LaporanBelajarComponent/TOBK/TOBKDetail/DetailNilai';
import ProfileNilai from '@/components/AtributComponent/LaporanBelajarComponent/TOBK/TOBKDetail/ProfileNilai';
import BlankLayout from '@/components/Layouts/BlankLayout';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const TOBK = () => {

  const data = [
    {
      label: "Profile Nilai",
      value: "profile_nilai",
    },
    {
      label: "Detail Nilai",
      value: "detail_nilai",
    }
  ];

  const options = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Basic Radar Chart'
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  }
  };

  return (
    <div className='bg-secondary-graylight-100 min-h-screen'>
      <div className='container mx-auto pt-6 px-4 sm:px-0'>
        <div className='flex gap-4 mb-12'>
          <Link href="/dashboard/laporan-belajar">
            <FiArrowLeft className="w-6 h-6" />
          </Link>
          <span>
            <h4 className='font-bold text-black'>Try Out Super Intensif 3</h4>
            <p>18 Mei 2023</p>
          </span>
        </div>
        <div>
          <Tabs id="custom-animation" value="profile_nilai">
            <TabsHeader style={{ backgroundColor: 'white' }} className="rounded-full shadow-sm sm:w-1/2 mx-auto" indicatorProps={{ style: { backgroundColor: "#F9E1D1", borderRadius: '99px' } }}>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
            className='pt-6'
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  {
                    value === "profile_nilai" ? (
                      <ProfileNilai/>
                    )
                    :
                    (
                      <DetailNilai/>
                    )

                  }
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

TOBK.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default TOBK