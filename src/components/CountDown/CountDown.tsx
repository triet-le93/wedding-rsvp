"use client"

import React, { useState } from 'react';
import GlassCard from "@/components/GlassCard/GlassCard";
import { motion } from "framer-motion";

interface CountDownProps {
  title: string;
  imgSrc: string;
  targetDate: string | number;
  male: boolean;
  locationName: string;
  location: string;
  location2: string;
  placeId: string;
}

const CountDown: React.FC<CountDownProps> = ({ title, imgSrc, targetDate, male, locationName, location, location2, placeId }) => {
  const calculateDayLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let dayLeft: number = 0;

    if (difference > 0) {
      dayLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    }

    return dayLeft;
  };

  const [dayLeft, setDayLeft] = useState(calculateDayLeft());

  const dayLeftClasses = [
    "text-xl",
    "md:text-2xl",
    "text-white",
    "font-semibold",
    "font-serif",
    "text-center",
    "rounded-lg",
    "p-4",
    male ? "bg-cyan-600" : "bg-rose-600/70"
  ].filter(Boolean).join(" ");

  const dayLeftTxtClasses = [
    "p-4",
    male ? "text-cyan-600/50" : "text-rose-600/50"
  ].filter(Boolean).join(" ");

  return (
    <GlassCard title={title} imgSrc={imgSrc} male={male} targetDate={targetDate} locationName={locationName} location={location} location2={location2} placeId={placeId}>
      <div className="flex justify-center">
        <div className="bg-transparent rounded-lg p-4 text-center flex flex-row items-center justify-between">
          <motion.div
            className={dayLeftClasses}
            animate={{
              scale: [0.8, 1.2]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <div>{dayLeft}</div>
          </motion.div>
          <div className={dayLeftTxtClasses}>ngày đếm ngược</div>
        </div>
      </div>
    </GlassCard>
  );
}

export default CountDown;
