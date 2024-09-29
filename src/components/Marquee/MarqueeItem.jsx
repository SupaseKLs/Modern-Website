'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <Image className="pr-20" width={200} height={100} src={image} key={index} />;
        })}
      </motion.div>

    </div>
  );
};

export default MarqueeItem;