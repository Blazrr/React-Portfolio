import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar index={2} />
      <AnimatePresence>
        <motion.div
          className="max-w-[80%] mx-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Form />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Contact;
