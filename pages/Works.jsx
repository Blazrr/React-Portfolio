import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const Works = () => {
    return (
        <>
            <Navbar index={0} />
            <AnimatePresence>
                <motion.div
                    initial={{ y: "-300px", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    exit={{ y: "-300px", opacity: 0 }}>

                    
                    
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Works