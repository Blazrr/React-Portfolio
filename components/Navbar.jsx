import {
    Button, TabList, useColorMode, Tabs, Tab, Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa"


const Navbar = ({ index }) => {

    const { colorMode, toggleColorMode } = useColorMode()



    return (
        <>
            <div className=" pt-4 justify-between fixed top-0 w-full space-x-8 items-center pl-[10%] pr-[10%] left-50 inset-x-0 mx-auto backdrop-blur-sm flex z-20 "
            >
                <div >
                    <Link href="/"> <h1 className='underline font-semibold text-xl'>HOME</h1></Link>
                </div>
                <div className='grow hidden md:flex justify-center'>
                    <Tabs defaultIndex={index} colorScheme="purple" align='center'>
                        <TabList mb='1em' >
                            <Link href="/Works"> <Tab>Works</Tab> </Link>
                            <Link href="/Experiences"> <Tab>Experiences</Tab> </Link>
                            <Link href="/Contact">  <Tab>Contact</Tab> </Link>
                        </TabList>

                    </Tabs>
                </div>
                <div className="md:hidden">
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
                <div>
                    <Button colorScheme="purple" onClick={toggleColorMode}  >  {colorMode === 'light' ? <FaMoon /> : <FaSun />} </Button>
                </div>
            </div>



            <div className='h-[140px]'></div>
        </>
    )
}

export default Navbar