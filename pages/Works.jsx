import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { data } from "../data/Works";
import Head from "next/head";
const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar index={0} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-[80%] mx-auto">
            <h2 className="text-center text-xl underline underline-offset-4 font-bold  md:text-4xl">
              My Works
            </h2>
            <div className="flex justify-center flex-col items-center">
              {data.map((item, id) => {
                return <Card element={item} key={id} />;
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Works;
