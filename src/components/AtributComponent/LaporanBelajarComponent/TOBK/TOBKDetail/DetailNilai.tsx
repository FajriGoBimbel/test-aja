import { Card, CardBody } from '@material-tailwind/react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
import React from 'react'

const DetailNilai = () => {

    const series = [44, 55, 0];
    const options: any = {
        chart: {
            type: 'donut',
        },
        colors: ['#3EBF83', '#EA4654', '#344054'],
        labels: ['Benar', 'Salah', 'Kosong'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 280
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <div>
            <div className='flex gap-6 grid grid-cols-1 sm:grid-cols-2'>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DetailNilai