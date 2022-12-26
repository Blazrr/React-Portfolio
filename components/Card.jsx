import React from 'react'
import Image from 'next/image'
import {  Divider,Box, Button  } from '@chakra-ui/react'

const Card = ({element}) => {
    return (
        <Box className='flex   rounded p-4 mt-8 relative w-[300px] flex-col md:w-[400px] lg:w-[700px]' borderWidth='1px'>
            <Image src="https://codeconvey.com/wp-content/uploads/2019/12/css-tooltip-on-hover-div.png" width={800} height={800} className="rounded" alt='qui va la' />
            <h2 className="mt-4 font-bold text-xl underline ">{element.project}</h2>
            <p className='mt-2'>{element.about}
            </p>

            <div className='flex mt-2'>
                {element.techno.map((item) => {
                    return(
                        <div className='w-[50px] h-[50px] relative '>
            <Image src={item.img} layout="fill" objectFit="cover" className="rounded-[50%] absolute" alt='qui va la' />
            </div>
                    )
                })
                
            }
            </div>
            <Divider className='mt-2' />
          
            <div className='flex space-x-8 mt-4'>
            <a href={element.link} target="_blank"> <Button colorScheme='blue'>Website</Button></a>
             <a href={element.source} target="_blank"><Button colorScheme='blue' >Source Code</Button></a>
            </div>

        </Box>
    )
}

export default Card