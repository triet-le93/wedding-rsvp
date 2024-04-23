import { format } from "date-fns";
import { motion, useInView } from "framer-motion";
import MapContainer from "@/components/MapContainer/MapContainer";
import { useRef, useState } from "react";
import RoundedAvatar from "../RoundedAvatar/RoundedAvatar";

interface GlassCardProps {
  male: boolean;
  targetDate: string | number;
  locationName: string;
  location: string;
  location2: string;
  placeId: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ male, targetDate, locationName, location, location2, placeId }) => {
  const titleColors = ["text-cyan-600", "text-rose-600/70"];
  const textColors = ["text-cyan-600/50", "text-rose-600/50"];
  const bgColors = ["bg-cyan-600", "bg-rose-600/70"];
  const names = ["Lê Nguyễn Minh Triết", "Nguyễn Ngọc Linh"];
  const displayDate = format(new Date(targetDate), "HH:mm:ss - dd/MM/yyyy");

  const ref = useRef(null);
  const isInView = useInView(ref);

  const calculateDayLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let dayLeft: number = 0;

    if (difference > 0) {
      dayLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    }

    return dayLeft;
  };

  const [dayLeft, setDayLeft] = useState(calculateDayLeft());

  return (
    <motion.div
      className="backdrop-blur-md bg-glass rounded-lg border border-gray-100/10 shadow-wedding mb-4 flex flex-col items-center w-[100%] md:w-[90%] font-pacifico"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full flex flex-row justify-start p-2 space-x-2">
        <RoundedAvatar src={`${process.env.basePath}/images/${male ? "anh" : "em"}.jpeg`} alt="Avatar" />
        <div className="flex-grow flex flex-col items-start mb-2">
          <div className="text-xs md:text-base mb-2">
            <span className={`${titleColors[1 - +male]}`}>{names[1 - +male]}</span>
            <span> cùng với </span>
            <span className={`${titleColors[+male]}`}>{names[+male]}</span>
          </div>
          <span className="text-xs md:text-base">{displayDate}</span>
        </div>
      </div>
      <div className="w-full p-2 mb-2 text-center">
        <p className={`text-2xl mb-2 font-bold ${titleColors[1 - +male]}`}>{locationName}</p>
        <p className={`text-lg mb-2 ${textColors[1 - +male]}`}>{location}</p>
        <p className={`text-lg ${textColors[1 - +male]}`}>{location2}</p>
      </div>
      <motion.div
        ref={ref}
        className="w-full text-center"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <MapContainer placeId={placeId} />
      </motion.div>
      <div className="w-full p-2 flex flex-row items-center justify-between">
        <div className="items-center justify-center text-xs md:text-base">❤️ Cả thế giới đã thả tim</div>
        <div className="items-center flex flex-row justify-center">
          <motion.div
            className={`text-xs md:text-base text-white font-semibold font-serif text-center rounded-lg mr-2 p-1 ${bgColors[1 - +male]}`}
            animate={{
              scale: [0.8, 1.2]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <div> {dayLeft} </div>
          </motion.div>
          <div className={`text-xs md:text-base ${textColors[1 - +male]}`}>ngày đếm ngược</div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-200" />
      <div className="w-full flex flex-row justify-start p-2 space-x-2">
        <RoundedAvatar src={`${process.env.basePath}/images/${male ? "anh" : "em"}.jpeg`} alt="Avatar" />
        <div className="flex-grow flex flex-col items-start mb-2 rounded-lg bg-gray-200/50 p-4">
          <div className={`text-xs md:text-base mb-2 ${titleColors[1 - +male]}`}>{names[1 - +male]}</div>
          <span className="text-xs md:text-base">Nhớ đi nhé!</span>
        </div>
      </div>
    </motion.div>
  );
}

export default GlassCard;
