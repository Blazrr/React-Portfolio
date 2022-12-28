import {
    Button, TabList, useColorMode, Tabs, Tab, Menu,
    MenuButton,
    MenuList,
    MenuItem,


} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun, FaGithub, FaExternalLinkAlt } from "react-icons/fa"


const Navbar = ({ index }) => {

    const { colorMode, toggleColorMode } = useColorMode()



    return (
        <>
            <div className=" pt-4  fixed top-0 w-full space-x-8 items-center pl-[10%] pr-[10%]  inset-x-0  backdrop-blur-sm  z-20 flex justify-between  "
            >
                <div className='w-[200px]'>
                    <Link href="/"> <h1 className='underline font-semibold text-xl'>HOME</h1></Link>
                </div>
                <div className=' hidden md:flex mx-auto '>
                    <Tabs defaultIndex={index} colorScheme="purple" align='center'>
                        <TabList mb='1em' >
                            <Link href="/Works"> <Tab>Works</Tab> </Link>
                            <Link href="/Experiences"> <Tab>Experiences</Tab> </Link>
                            <Link href="/Contact">  <Tab>Contact</Tab> </Link>
                        </TabList>

                    </Tabs>
                </div>
                <div className="md:hidden text-center">
                    <Menu >
                        <MenuButton as={Button} colorScheme="purple" >
                            Menu
                        </MenuButton>
                        <MenuList>
                            <Link href="/Works"><MenuItem>Works</MenuItem> </Link>
                            <Link href="/Experiences"> <MenuItem>Experiences</MenuItem> </Link>
                            <Link href="/Contact"> <MenuItem>Contact</MenuItem> </Link>
                        </MenuList>
                    </Menu>
                </div>
                <div className='flex  space-x-4 items-center w-[200px] justify-end'>
                    <a href='https://github.com/Blazrr/React-Portfolio' target="_blank" rel="noreferrer"  className='flex items-center space-x-2'>
                        <FaGithub /> <p className='hidden lg:block'>Source code</p> <FaExternalLinkAlt />
                    </a>
                    <Button colorScheme="purple" onClick={toggleColorMode}  >  {colorMode === 'light' ? <FaMoon /> : <FaSun />} </Button>
                </div>
            </div>



            <div className='h-[140px]'></div>
        </>
    )
}

export default Navbar