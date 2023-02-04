import React from "react";
import Image from "next/image";
import { Divider, Box, Button } from "@chakra-ui/react";

const Card = ({ element }) => {
  return (
    <Box
      className="flex   rounded p-4 mt-8 relative  flex-col max-w-[600px]"
      borderWidth="1px"
      borderColor="purple.400"
    >
      <Image
        src={element.img}
        width={800}
        height={800}
        className="rounded"
        alt="qui va la"
      />
      <h2 className="mt-4 font-bold text-xl underline ">{element.project}</h2>
      <p className="mt-2">{element.about}</p>

      <div className="flex mt-2 space-x-2 items-center ">
        {element.techno.map((item, id) => {
          return (
            <a
              className="w-[50px] h-[50px] relative"
              href={item.link}
              rel="noreferrer"
              target="_blank"
              key={id}
            >
              <Image
                src={item.img}
                width={800}
                height={800}
                className="rounded-[50%] absolute top-1/2 transform  -translate-y-1/2"
                alt="qui va la"
              />
            </a>
          );
        })}
      </div>
      <Divider className="mt-2" />

      <div className="flex space-x-8 mt-4">
        <a href={element.link} target="_blank" rel="noreferrer">
          {" "}
          <Button colorScheme="blue">Website</Button>
        </a>
        <a href={element.source} target="_blank" rel="noreferrer">
          <Button colorScheme="blue">Source Code</Button>
        </a>
      </div>
    </Box>
  );
};

export default Card;
