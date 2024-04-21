"use client"

import React, { useState, useEffect } from 'react';

interface CountDownProps {
  targetDate: string | number;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });


  return (
    <div className="text-center font-dancing">
      <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold mb-4">Countdown</h1>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 mr-4">
          <div className="text-3xl md:text-4xl text-gray-800 font-semibold">
            {timeLeft.days}
          </div>
          <div className="text-gray-600">Days</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 mr-4">
          <div className="text-3xl md:text-4xl text-gray-800 font-semibold">
            {timeLeft.hours}
          </div>
          <div className="text-gray-600">Hours</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 mr-4">
          <div className="text-3xl md:text-4xl text-gray-800 font-semibold">
            {timeLeft.minutes}
          </div>
          <div className="text-gray-600">Minutes</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="text-3xl md:text-4xl text-gray-800 font-semibold">
            {timeLeft.seconds}
          </div>
          <div className="text-gray-600">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
