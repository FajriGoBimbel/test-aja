import React from 'react'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import Data3B from '@/data/Data3B'

const Component3B = () => {
    return (
        <div className='pt-20'>
            <div className='text-center mb-12'>
                <h2 className='text-xl lg:text-3xl font-bold'>Apa yang Kami Terapkan?</h2>
                <p className='text-sm lg:text-xl text-primary-gray'>3B Inilah cara GO Bantu Kamu Mencapai Target Akademik</p>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 '>
                {
                    Data3B.map((menuData: any, i:number) => (
                    <Card key={i} className="mt-6">
                        <CardBody className='flex flex-col items-center text-center'>
                            <menuData.icon className="h-12 w-12 mb-4"/>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {menuData.title}
                            </Typography>
                            <Typography>
                                {menuData.deskripsi}
                            </Typography>
                        </CardBody>
                    </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Component3B