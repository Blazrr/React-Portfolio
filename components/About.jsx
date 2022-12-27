import React from 'react'
import Navbar from './Navbar'
import { Link } from '@chakra-ui/react'
import {FaGithub, FaLinkedin, FaExternalLinkAlt} from "react-icons/fa"
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
    return (
<>
<Navbar index={-2} />
        <AnimatePresence>
        <motion.div className='w-4/5 mx-auto'
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0}}
         transition={{duration: 0.4 }}
        >
       

            <div className='flex items-center justify-center'>
                <h2 className=' px-8 md:text-2xl rounded py-4 backdrop-blur-md backdrop-brightness-95 hover:backdrop-brightness-150 transition-all ease-in duration-75'> Currently looking for a job</h2>
            </div>

            <div className='mt-8 mx-auto flex justify-center flex-col max-w-xl'>
                <h3 className='underline underline-offset-4 font-semibold decoration-2'>About me</h3>
                <p className='mt-4'>Hi Im Sami. After an experience as an operations technician, I'm directing my career in development. My assets and knowledge in this field are reinforced by my current training in development with ReactJS .</p>

            </div>

            <div className='mt-8 mx-auto flex justify-center flex-col max-w-xl'>
            <h3 className='underline underline-offset-4 font-semibold decoration-2'>Tools & Technologies</h3>

            <div className='flex mt-6'>
                    <h4 className='font-bold '>Languages</h4>
                    <p className='ml-4 font-semibold'>Python, Javascript, Typescript</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Frameworks and Libraries</h4>
                    <p className='ml-4 font-semibold'>React, NextJS, NodeJS</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Styling and Components</h4>
                    <p className='ml-4 font-semibold'>TailwindCSS, ChakraUI, Bootstrap (S)CSS</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Others</h4>
                    <p className='ml-4 font-semibold'>Git, Figma, Unix</p>
                </div>

            </div>

            <div className='mt-8 mx-auto flex justify-center flex-col max-w-xl'>
                <h3 className='underline underline-offset-4 font-semibold decoration-2'>Education</h3>
                <div className='flex mt-6'>
                    <h4 className='font-bold '>2023</h4>
                    <p className='ml-4'>ReactJS Bootcamp at GRETA92 in Boulogne</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>2021</h4>
                    <p className='ml-4'>Bachelor of Computer Science at Paris XIII in Villetaneuse</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>2020</h4>
                    <p className='ml-4'>High school degree (Speciality sciences of engeneering) at Charles de Gaulle in Rosny</p>
                </div>
            </div>

            <div className='mt-8 mx-auto flex justify-center flex-col max-w-xl'>
                <h3 className='underline underline-offset-4 font-semibold decoration-2'>Socials</h3>
                <Link href='https://www.linkedin.com/in/sami-el-mhamedi-8284621b4/' isExternal className='mt-6 flex items-center space-x-2'>
                <FaLinkedin/> <p>My linkedin</p> <FaExternalLinkAlt />
                </Link>

                <Link href='https://chakra-ui.com' isExternal className='mt-4 flex items-center space-x-2'>
                   <FaGithub/> <p>https://github.com/Blazrr</p> <FaExternalLinkAlt />
                </Link>
            </div>


            <div className='mt-8 mx-auto flex justify-center flex-col max-w-xl'>
            <h3 className='underline underline-offset-4 font-semibold decoration-2'>Hobbies</h3>

            <div className='flex mt-6'>
                    <h4 className='font-bold '>Video Games</h4>
                    <p className='ml-4 font-semibold'>Fun way to discover, learn and connect with people</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Programming</h4>
                    <p className='ml-4 font-semibold'>Help problem solving in real life</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Keyboards</h4>
                    <p className='ml-4 font-semibold'>Because making something with your own hands and using it daily feels amazing.</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Manga and Animes</h4>
                    <p className='ml-4 font-semibold'>Fun way to increase your general Knowledge</p>
                </div>
                <div className='flex mt-4'>
                    <h4 className='font-bold'>Music</h4>
                    <p className='ml-4 font-semibold'>allows us to feel nearly or possibly all emotions that we experience in our lives</p>
                </div>

            </div>
        </motion.div>
       </AnimatePresence>
       </>
    )
}

export default About