import { Card, CardBody, Rating } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const KuisDetailComponent = () => {

  const series = [44, 55];
  const options: any = {
    chart: {
      type: 'donut',
    },
    colors: ['#3EBF83', '#EA4654'],
    labels: ['Benar', 'Salah'],
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
    <div className='pb-24'>
      <div className='flex gap-6 grid grid-cols-1 sm:grid-cols-2'>
        <Card className='w-full'>
          <CardBody>
              <h3 className='text-xl font-bold text-black'>Soal Bintang 1</h3>
              <p>Tingkat Kesulitan Soal : <span className='font-bold'>Sangat Mudah</span></p>
              <Rating value={1} readonly unratedColor='green' ratedColor='green'/>
            <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
          </CardBody>
        </Card>
        <Card className='w-full'>
          <CardBody>
              <h3 className='text-xl font-bold text-black'>Soal Bintang 2</h3>
              <p>Tingkat Kesulitan Soal : <span className='font-bold'>Mudah</span></p>
              <Rating value={2} readonly unratedColor='green' ratedColor='green'/>
            <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
          </CardBody>
        </Card>
        <Card className='w-full'>
          <CardBody>
              <h3 className='text-xl font-bold text-black'>Soal Bintang 3</h3>
              <p>Tingkat Kesulitan Soal : <span className='font-bold'>Sedang</span></p>
              <Rating value={3} readonly unratedColor='orange' ratedColor='orange'/>
            <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
          </CardBody>
        </Card>
        <Card className='w-full'>
          <CardBody>
              <h3 className='text-xl font-bold text-black'>Soal Bintang 4</h3>
              <p>Tingkat Kesulitan Soal : <span className='font-bold'>Sulit</span></p>
              <Rating value={4} readonly unratedColor='red' ratedColor='red'/>
            <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
          </CardBody>
        </Card>
        <Card className='w-full'>
          <CardBody>
              <h3 className='text-xl font-bold text-black'>Soal Bintang 5</h3>
              <p>Tingkat Kesulitan Soal : <span className='font-bold'>Sangat Sulit</span></p>
              <Rating value={5} readonly unratedColor='red' ratedColor='red'/>
            <ReactApexChart series={series} options={options} type="donut" height={350} width={'100%'} />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default KuisDetailComponent