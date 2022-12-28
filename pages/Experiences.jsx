import React from 'react'
import Navbar from '../components/Navbar'

const Experiences = () => {
  return (
    <div>
        <Navbar index={1}/>
        <h1 className='text-center text-xl underline underline-offset-4 font-bold  md:text-4xl'> Experiences</h1>
        <div className='mt-12 w-4/5 mx-auto max-w-[768px]'>
            <div className='flex flex-col space-x-4'>
                <h3 className='font-semibold grow underline'>2022</h3>
                <div className='flex flex-col mt-2'>
                    <h4 className='font-bold'>Operations Technician OPEN/MAINFRAME</h4>
                    <h5 className='mt-2 font-semibold'>DCS Easyware</h5>
                    <p className='mt-4'>Discovered new technical skills like Mainframe and worked with CAGIP.  Designed and developed a small portal with a co-worker to help the team with work management .</p>
                </div>
            </div>

            <div className='flex flex-col space-x-4 mt-6'>
                <h3 className='font-semibold  underline'>Ongoing</h3>
                <div className='flex flex-col mt-2'>
                <h4 className='font-bold'>Ongoing activities</h4>
                    <h5 className='mt-2 font-semibold'>At home</h5>
                    <p className='mt-4'>OpenClassrooms, Udemy, FrontEndMentor, FreeCodeCamp,Leetcode</p>
                </div>
            </div>

             <div className='flex flex-col space-x-4 mt-6'>
                <h3 className='font-semibold underline'>2016</h3>
                <div className='flex flex-col mt-2'>
                    <h4 className='font-bold'>IT Technician</h4>
                    <h5 className='mt-2 font-semibold'>IUT of Montreuil</h5>
                    <p className='mt-4'>First time seeing how applications are made, a large view of how servers works and fixing hardware incidents.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences