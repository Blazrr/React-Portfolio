import {
    Button, TabList,  useColorMode, Tabs,  Tab, Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'



const Navbar = ({index}) => {

    const { colorMode, toggleColorMode } = useColorMode()



    return (
        <>
       
               
                        <div className=" pt-4 justify-between fixed top-0 w-full space-x-8 items-center pl-[10%] pr-[10%] left-50 inset-x-0 mx-auto backdrop-blur-sm flex z-20 "
                            >
                            <div >
                                <Link href="/"> <h1>Sami EL MHAMEDI</h1></Link>
                            </div>
                            <div className='grow hidden md:flex justify-center'>
                                <Tabs  defaultIndex={index} colorScheme="purple" align='center'>
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
                                        <MenuItem>Works</MenuItem>
                                        <MenuItem>Experiences</MenuItem>
                                        <MenuItem>Contact</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <div>
                                <Button colorScheme="pink" onClick={toggleColorMode}  > Switch to {colorMode === 'light' ? 'Dark' : 'Light'} </Button>
                            </div>
                        </div>


     
                    <div className='h-[140px]'></div>
        </>
    )
}

export default Navbar