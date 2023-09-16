import BlankLayout from '@/components/Layouts/BlankLayout';
import React, { useState } from 'react'
import { ITB, IlustrasiUniv, LogoGoWithColor } from '../../public/assets/svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Card, CardBody } from '@material-tailwind/react';
import Select, { components } from 'react-select'
import OptionUniversitas from '@/data/OptionUniversitas';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { UtbkCalendar } from '@/components/ElementComponent';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const PtnClopedia = () => {

    const [isEmptyPTN, setIsEmptyPTN] = useState(true)

    const { Option } = components;
    const IconOption = (props:any) => {
      return (
      <Option {...props}>
        <div className='flex gap-4'>
        <props.data.icon className='h-6 w-6'/>
        {props.data.label}
        </div>
      </Option>
      )
    };

    const seriesDaya = [
        {
            name: "Jumlah Peminat",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Daya Tampung",
            data: [12, 51, 25, 31, 79, 22, 59, 61, 108]
        }
    ]

    const optionsDaya:any = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            enabled: false
          }
        },
        colors: ['#DF6A18', '#FDD100'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Daya Tampung & Peminat ',
          align: 'left'
        },
        grid: {
            show: false
        //   row: {
        //     borderColor: '#DF6A18',
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        },
        xaxis: {
          categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        }
      }

      const seriesSimulasi = [
        {
            name: "Passing Grade",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Skor TOBK",
            data: [12, 51, 25, 31, 79, 22, 59, 61, 108]
        }
    ]

    const optionsSimulasi:any = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#DF6A18', '#17B26A'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Simulasi UTBK',
          align: 'left'
        },
        grid: {
            show: false
        //   row: {
        //     borderColor: '#DF6A18',
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        },
        xaxis: {
          categories: ['TOBK 1', 'TOBK 2', 'TOBK 3', 'TOBK I1', 'TOBK I2', 'TOBK I3', 'TOBK SI1', 'TOBK SI2', 'TOBK SI3'],
        }
      }

  return (
    <main>
        <div className='container mx-auto px-4 sm:px-0'>
            <div>
                <LogoGoWithColor className="w-36 h-20"/>
            </div>
            <div className='flex justify-between mt-4'>
                <Link href="/">
                <FiArrowLeft className="w-6 h-6 mb-12"/>
                </Link>
                <UtbkCalendar year={2024} day={299}/>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-2'>PTN-Clopedia</h3>
                <p className='mb-6'><span className='font-bold'>PTN-Clopedia</span> adalah kaca mata pilihan <br/>yang memperjelas pilihanmu dalam <span className='font-bold'>menentukan kampus impian</span></p>
                <div className='sm:flex justify-between gap-6'>
                    <div className='w-full mb-6 sm:mb-0'>
                    <label className='font-bold'>PTN</label>
                    <Select placeholder="Pilih PTN Impian" components={{ Option: IconOption }} options={OptionUniversitas} onChange={() => setIsEmptyPTN(!isEmptyPTN)} className='w-full mt-3'/>
                    </div>
                    <div className='w-full'>
                    <label className='font-bold'>Jurusan</label>
                    <Select placeholder="Pilih Jurusan Impian" options={OptionUniversitas} onChange={() => setIsEmptyPTN(!isEmptyPTN)} className='w-full mt-3'/>
                    </div>
                </div>
            </div>
            {
                isEmptyPTN?
                <div className='flex flex-col justify-center items-center py-12'>
                    <IlustrasiUniv className="h-52 w-52 lg:h-96 lg:w-96 mb-4"/>
                    <p className='text-2xl text-center'>Pilih PTN dan jurusan impianmu terlebih dahulu, ya sob!</p>
                </div>
                :
                <div className='py-12'>
                    <div className='flex mb-4'>
                        <Card shadow={false} className='border-2 border-primary-grey bg-secondary-graylight-100'>
                            <CardBody className='flex gap-2 sm:gap-6 items-center relative'>
                            <div>
                                <ITB className="w-16 h-16 sm:h-24 sm:w-24"/>
                            </div>
                            <div>
                                <p className='text-[0.6rem] sm:text-sm mb-1'>INSTITUT TEKNOLOGI BANDUNG</p>
                                <h3 className='font-bold text-xs sm:text-xl mb-1'>SEKOLAH BISNIS DAN MANAJEMEN</h3>
                                <p className='text-xs sm:text-sm'>Passing Grade: <span className='font-bold'>879</span> | Peminat: <span className='font-bold'>600</span> | Daya Tampung: <span className='font-bold'>150</span></p>
                            </div>
                            <div className='bg-primary-gray-100 sm:px-4 px-2 py-1 sm:py-2 rounded-full absolute top-2 right-2'>
                                <p className='text-xs sm:text-sm font-bold text-black'>
                                SOSHUM
                                </p>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='lg:flex gap-6'>
                        <div className='w-full'>
                        <ReactApexChart series={seriesDaya} options={optionsDaya} type="line" height={350} width={'100%'} />
                        </div>
                        <div className='w-full'>
                        <ReactApexChart series={seriesSimulasi} options={optionsSimulasi} type="line" height={350} width={'100%'} />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='font-bold mb-2'>Deskripsi Jurusan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. </p>
                        <h3 className='font-bold mt-4 mb-2'>Lapangan Kerja</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. </p>
                    </div>
                </div>
            }
        </div>
    </main>
  )
}

PtnClopedia.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default PtnClopedia