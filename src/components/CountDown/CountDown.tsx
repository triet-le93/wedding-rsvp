"use client"

import React, { useState } from 'react';
import GlassCard from "@/components/GlassCard/GlassCard";
import { motion } from "framer-motion";

interface CountDownProps {
  targetDate: string | number;
  male: boolean;
  locationName: string;
  location: string;
  location2: string;
  placeId: string;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate, male, locationName, location, location2, placeId }) => {
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
    <GlassCard male={male} targetDate={targetDate} locationName={locationName} location={location} location2={location2} placeId={placeId} />
  );
}

export default CountDown;
