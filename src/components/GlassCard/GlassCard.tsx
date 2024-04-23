import Avatar from "@/components/Avatar/Avatar";
import { format } from "date-fns";
import { motion, useInView } from "framer-motion";
import MapContainer from "@/components/MapContainer/MapContainer";
import { useRef } from "react";

interface GlassCardProps {
  title: string;
  children: React.ReactNode;
  imgSrc: string;
  male: boolean;
  targetDate: string | number;
  locationName: string;
  location: string;
  location2: string;
  placeId: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, imgSrc, children, male, targetDate, locationName, location, location2, placeId }) => {
  const titleColor = male ? "text-cyan-600" : "text-rose-600/70";
  const textColor = male ? "text-cyan-600/50" : "text-rose-600/50";
  const displayDate = format(new Date(targetDate), "HH:mm:ss - dd/MM/yyyy");

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className="backdrop-blur-md bg-glass rounded-lg py-8 border border-gray-100/10 shadow-wedding mb-6 flex flex-col items-center w-[100%] md:w-[90%] font-pacifico"
      initial={{ opacity: 0, x: male ? 300 : -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={`text-2xl md:text-3xl ${titleColor} mb-4`}>{title}</h1>
      <Avatar imgSrc={imgSrc} />
      <p className={`text-xl mb-4 text-center ${textColor}`}>{displayDate}</p>
      <div>{children}</div>
      <hr className="w-full my-4 border-t border-gray-200" />
      <div className="w-full p-8 mb-4 text-center">
        <p className={`text-2xl mb-4 font-bold ${titleColor}`}>{locationName}</p>
        <p className={`text-lg mb-2 ${textColor}`}>{location}</p>
        <p className={`text-lg ${textColor}`}>{location2}</p>
      </div>
      <motion.div
        ref={ref}
        className="w-full text-center"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 300 }}
        transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
      >
        <MapContainer placeId={placeId} />
      </motion.div>
    </motion.div>
  );
}

export default GlassCard;
