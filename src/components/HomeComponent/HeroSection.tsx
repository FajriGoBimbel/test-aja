import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
// import Image from 'next/image'
import { IlustrasiHero } from '../../../public/assets/svg'

const HeroSection = () => {
  return (
    <div className='h-[60vh] md:h-[50vh] bg-gradient-to-b from-primary-red-500 to-primary-yellow relative flex items-center overflow-hidden'>
      <div className='w-72 h-72 bg-primary-red rounded-full bg-opacity-30 absolute -left-40 -bottom-24'/>
      <div className='w-72 h-72 border-4 border-primary-red border-dashed rounded-full absolute -left-24 -bottom-52'/>
      <div className='w-72 h-72 bg-primary-red rounded-full bg-opacity-30 absolute -right-40 -bottom-24'/>
      <div className='w-72 h-72 bg-primary-red rounded-full bg-opacity-30 absolute -right-24 -bottom-52'/>
      <div className='container mx-auto px-4 sm:px-0 flex justify-center items-center'>
        <div className='flex flex-col justify-center lg:basis-2/3'>
          <h2 className='text-5xl md:text-7xl text-white font-bold mb-[1rem] z-10'>Ganesha Operation</h2>
          <p className='text-md md:text-xl text-white font-medium mb-[1.2rem] sm:mb-[2.72rem] z-10'>Bimbingan Belajar Terbaik dan Terbesar Se-Indonesia</p>
          <div className='z-10'>
          <Button className='flex bg-white text-black gap-2 items-center'>
            Hubungi Kami
            <BsWhatsapp className="h-6 w-6 text-primary-success"/>  
          </Button>
          </div>
        </div>
        <div className='hidden relative lg:flex justify-end items-center lg:basis-1/3'>
          <div className='absolute top-12 -left-16 py-2 px-3 bg-white bg-opacity-20 rounded-md animate-wiggle'>
            <Typography variant="h4" className="text-sm lg:text-xl font-bold text-primary-yellow">47.000+++</Typography>
            <Typography variant="paragraph" className="text-white text-xs lg:text-md">Siswa yang Lulus ke PTN & PT <br/> kedinasan</Typography>
          </div>
          <div className='absolute -left-20 bottom-24 2xl:bottom-12 py-2 px-3 bg-white bg-opacity-20 rounded-md animate-wiggle'>
            <Typography variant="h4" className="text-sm lg:text-xl font-bold text-primary-red">Leaderboard</Typography>
            <Typography variant="paragraph" className="text-white text-xs lg:text-md">Melihat ranking TOBK, Buku <br/> Sakti, dan Racing se-Indonesia</Typography>
          </div>
          <div className='absolute top-8 -right-12 py-2 px-3 bg-white bg-opacity-20 rounded-md animate-wiggle'>
            <Typography variant="h4" className="text-sm lg:text-xl font-bold text-primary-red">TO & Sistem IRT</Typography>
            <Typography variant="paragraph" className="text-white text-xs lg:text-md">TOBK GO menggunakan sistem <br/> IRT seperti UTBK-SNBT</Typography>
          </div>
          <div className='absolute -right-16 2xl:-right-24 bottom-24 2xl:bottom-12 py-2 px-3 bg-white bg-opacity-20 rounded-md animate-wiggle'>
            <Typography variant="h4" className="text-sm lg:text-xl font-bold text-primary-red">Social Network</Typography>
            <Typography variant="paragraph" className="text-white text-xs lg:text-md">Siswa GO se-Indonesia bisa saling <br/> terhubung dan berkomunikasi</Typography>
          </div>
          <IlustrasiHero className="h-[26rem] w-[26rem]"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection