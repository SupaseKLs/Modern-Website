'use client'
import React from "react";
import MarqueeItem from "./MarqueeItem";
import './globals.css'

const Marquee = () => {
  const upperMarquee = [
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
    "/aw.png",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;