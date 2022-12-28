import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const Experiences = () => {
  return (
    <div>
        <Head>
                <title>Experiences</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <Navbar index={1}/>
        <h1 className='text-center text-xl underline underline-offset-4 font-bold  md:text-4xl'> Experiences</h1>
        <div className='mt-12 w-4/5 mx-auto max-w-[768px]'>
            <div className='flex flex-col space-x-4'>
                <h3 className='font-semibold grow underline md:text-xl'>2022</h3>
                <div className='flex flex-col mt-2 md:mt-4'>
                    <h4 className='font-bold md:text-xl'>Operations Technician OPEN/MAINFRAME</h4>
                    <h5 className='mt-2 font-semibold md:text-lg'>DCS Easyware</h5>
                    <p className='mt-4 md:text-lg'>Discovered new technical skills like Mainframe and worked with CAGIP.  Designed and developed a small portal with a co-worker to help the team with work management .</p>
                </div>
            </div>

            <div className='flex flex-col space-x-4 mt-6'>
                <h3 className='font-semibold  underline md:text-xl' >Ongoing</h3>
                <div className='flex flex-col mt-2 md:mt-4'>
                    <h4 className='font-bold md:text-xl'>Ongoing activities</h4>
                    <h5 className='mt-2 font-semibold md:text-lg'>At home</h5>
                    <p className='mt-4 md:text-lg'>OpenClassrooms, Udemy, FrontEndMentor, FreeCodeCamp,Leetcode</p>
                </div>
            </div>

             <div className='flex flex-col space-x-4 mt-6'>
                <h3 className='font-semibold underline md:text-xl'>2016</h3>
                <div className='flex flex-col mt-2 md:mt-4'>
                    <h4 className='font-bold md:text-xl'>IT Technician</h4>
                    <h5 className='mt-2 font-semibold md:text-lg'>IUT of Montreuil</h5>
                    <p className='mt-4 md:text-lg'>First time seeing how applications are made, a large view of how servers works and fixing hardware incidents.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences