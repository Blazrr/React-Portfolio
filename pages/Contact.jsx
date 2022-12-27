import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'


const Contact = () => {
    return (
        <div >
            <Navbar index={2} />
            <AnimatePresence>
                <motion.div className='max-w-[80%] mx-auto '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                    <Form />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Contact