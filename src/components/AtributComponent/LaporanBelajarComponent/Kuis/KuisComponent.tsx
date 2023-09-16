import { Card, CardBody } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import { Quiz } from '../../../../../public/assets/svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const KuisComponent = () => {
  return (
    <div>
      <div>
                <h3 className='text-xl font-bold mb-4 text-black'>List Kuis</h3>
                <div className='flex flex-col gap-4'>
                    <Link href="/dashboard/laporan-belajar/kuis">
                        <Card shadow={false} className='cursor-pointer'>
                            <CardBody className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <span>
                                        <Quiz className="w-5 h-5" />
                                    </span>
                                    <span>
                                        <h3 className='text-md font-medium text-black'>223 - KUIS Matematika Penalaran</h3>
                                        <p className='text-base'>18 Mei 2023</p>
                                    </span>
                                </div>
                                <span>
                                    <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                                </span>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link href="/dashboard/laporan-belajar/kuis">
                        <Card shadow={false} className='cursor-pointer'>
                            <CardBody className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <span>
                                        <Quiz className="w-5 h-5" />
                                    </span>
                                    <span>
                                        <h3 className='text-md font-medium text-black'>223 - KUIS Matematika Penalaran</h3>
                                        <p className='text-base'>18 Mei 2023</p>
                                    </span>
                                </div>
                                <span>
                                    <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                                </span>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link href="/dashboard/laporan-belajar/kuis">
                        <Card shadow={false} className='cursor-pointer'>
                            <CardBody className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <span>
                                        <Quiz className="w-5 h-5" />
                                    </span>
                                    <span>
                                        <h3 className='text-md font-medium text-black'>223 - KUIS Matematika Penalaran</h3>
                                        <p className='text-base'>18 Mei 2023</p>
                                    </span>
                                </div>
                                <span>
                                    <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                                </span>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link href="/dashboard/laporan-belajar/kuis">
                        <Card shadow={false} className='cursor-pointer'>
                            <CardBody className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <span>
                                        <Quiz className="w-5 h-5" />
                                    </span>
                                    <span>
                                        <h3 className='text-md font-medium text-black'>223 - KUIS Matematika Penalaran</h3>
                                        <p className='text-base'>18 Mei 2023</p>
                                    </span>
                                </div>
                                <span>
                                    <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                                </span>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default KuisComponent