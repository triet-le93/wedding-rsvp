import Avatar from "@/components/Avatar/Avatar";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface GlassCardProps {
  title: string;
  children: React.ReactNode;
  imgSrc: string;
  male: boolean;
  targetDate: string | number;
  locationName: string;
  location: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, imgSrc, children, male, targetDate, locationName, location }) => {
  const textColor = male ? "text-cyan-600" : "text-rose-600/70";
  const displayDate = format(new Date(targetDate), "HH:mm:ss - dd/MM/yyyy");

  return (
    <motion.div
      className="backdrop-blur-md bg-glass rounded-lg p-8 md:p-12 border border-gray-100/10 shadow-wedding font-satisfy mb-6 flex flex-col items-center w-[100%] md:w-[90%]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={`text-2xl md:text-4xl ${textColor} font-semibold mb-2 font-satisfy`}>{title}</h1>
      <Avatar imgSrc={imgSrc} />
      <p className={`text-xl mb-4 text-center ${textColor}`}>{displayDate}</p>
      <div>{children}</div>
      <hr className="w-full my-4 border-t border-gray-200" />
      <p className={`text-2xl mb-4 text-center font-bold ${textColor}`}>{locationName}</p>
      <p className={`text-xl mb-4 text-center ${textColor}`}>{location}</p>
    </motion.div>
  );
}

export default GlassCard;
