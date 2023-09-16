import { Card, CardBody } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const UjianSekolahComponent = () => {

  const series = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
}]
const options: any = {
    chart: {
        height: 350,
        type: 'radar',
    },
    title: {
        text: 'Basic Radar Chart'
    },
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', , 'April', 'May', 'June']
    }
};

const seriesDonut = [44, 55, 0];
    const optionsDonut: any = {
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
      <div className='w-full sm:w-[80%] mx-auto'>
      <ReactApexChart className="bg-white mb-12" series={series} options={options} type="radar" height={350} width={'100%'} />
      </div>
      <div className='flex gap-6 grid grid-cols-1 sm:grid-cols-2'>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={seriesDonut} options={optionsDonut} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={seriesDonut} options={optionsDonut} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={seriesDonut} options={optionsDonut} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
                <Card className='w-full'>
                    <CardBody>
                        <div className='flex gap-4 mb-4'>
                            <h3 className='text-xl font-bold text-black'>KPU - Penalaran Induktif</h3>
                            <span className="bg-primary-yellow-300 flex items-center text-black text-md font-medium mr-2 px-2.5 py-0.5 rounded-md">Skor : 433</span>
                        </div>
                        <ReactApexChart series={seriesDonut} options={optionsDonut} type="donut" height={350} width={'100%'} />
                    </CardBody>
                </Card>
            </div>
    </div>
  )
}

export default UjianSekolahComponent