import { formatInTimeZone } from "date-fns-tz";
import { motion } from "framer-motion";
import RoundedAvatar from "@/components/RoundedAvatar/RoundedAvatar";

interface GlassCardProps {
  male: boolean;
  targetDate: string | number;
  locationName: string;
  location: string;
  mapSrc: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ male, targetDate, locationName, location, mapSrc }) => {
  const textColors = ["text-cyan-600", "text-rose-600"];
  const bgColors = ["bg-cyan-600", "bg-rose-600"];
  const names = ["Lê Nguyễn Minh Triết", "Nguyễn Ngọc Linh"];
  const person = ["Chú rể", "Cô dâu"];
  const fbIds = [process.env.NEXT_PUBLIC_FB_MESS_PER_1, process.env.NEXT_PUBLIC_FB_MESS_PER_2];

  const displayDate = formatInTimeZone(targetDate, "Asia/Ho_Chi_Minh", "'Lúc' HH:mm 'Ngày' dd 'Tháng' MM 'Năm' yyyy");

  const calculateDayLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let dayLeft: number = 0;

    if (difference > 0) {
      dayLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    }

    return dayLeft;
  };
  const dayLeft = calculateDayLeft();

  return (
    <motion.div
      className="backdrop-blur-md bg-glass rounded-lg border border-gray-100/10 shadow-wedding mb-4 flex flex-col items-center w-[100%] md:w-[90%] font-platypi font-bold"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full flex flex-row justify-start p-2 space-x-2">
        <RoundedAvatar src={`${process.env.basePath}/images/${male ? "anh" : "em"}.jpeg`} alt="Avatar" />
        <div className="flex-grow flex flex-col items-start mb-2">
          <div className="text-xs md:text-base mb-2">
            <span className={`${textColors[1 - +male]}`}>{names[1 - +male]}</span>
            <span> cùng với </span>
            <span className={`${textColors[+male]}`}>{names[+male]}</span>
          </div>
          <span className="text-xs md:text-base">sắp lên xe bông đến
            <a className={`text-xs md:text-base text-bold ${textColors[1 - +male]}`} href={mapSrc} target="_blank" rel="noopener noreferrer"> &gt;&gt; {locationName} <i className={`fas fa-location-dot ${textColors[1 - +male]}`} /> &lt;&lt;</a>
          </span>
        </div>
      </div>
      <div className="relative w-full mb-6">
        <div className="w-full text-center">
          <div className="bg-gray-200 aspect-ratio-iframe overflow-hidden shadow-lg"></div>
        </div>
        <div className="absolute w-full text-center flex justify-center items-center -bottom-6">
          <div className="w-12 h-12">
            <i className={`far fa-regular fa-face-grin-hearts ${textColors[1 - +male]} text-4xl`} />
          </div>
        </div>
      </div>
      <div className="w-full p-2 mb-2 text-center">
        <p className={`text-lg md:text-xl mb-2 font-bold ${textColors[1 - +male]}`}><i className="fas fa-utensils" /> {locationName}</p>
        <p className={`text-lg md:text-xl mb-2 font-bold ${textColors[1 - +male]}`}><i className="fas fa-clock" /> {displayDate}</p>
      </div>
      <div className="w-full p-2 flex flex-row items-center justify-between">
        <div className="items-center justify-center text-xs md:text-base">❤️🥳 Cả thế giới đã thả tim</div>
        <div className="items-center flex flex-row justify-center">
          <motion.div
            className={`text-xs md:text-base text-white font-semibold font-serif text-center rounded-lg mr-2 p-1 ${bgColors[+male]}`}
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
          <div className="text-xs md:text-base">ngày đếm ngược</div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-200" />
      <div className="w-full flex flex-row p-2">
        <div className="flex-1 text-center"><a href={`https://www.facebook.com/messages/t/${fbIds[+male]}`} target="_blank" className={`${textColors[+male]}`}><i className="fas fa-message" /> {person[+male]}</a></div>
        <div className="flex-1 text-center"><a href={`https://www.facebook.com/messages/t/${fbIds[1 - +male]}`} target="_blank" className={`${textColors[1 - +male]}`}><i className="fas fa-message" /> {person[1 - +male]}</a></div>
      </div>
      <hr className="w-full border-t border-gray-200" />
      <div className="w-full flex flex-row justify-start p-2 space-x-2">
        <RoundedAvatar src={`${process.env.basePath}/images/${male ? "anh" : "em"}.jpeg`} alt="Avatar" />
        <div className="flex-grow flex flex-col items-start mb-2 rounded-lg bg-gray-200/50 p-4">
          <div className={`text-xs md:text-base mb-2 ${textColors[1 - +male]}`}>{names[1 - +male]}</div>
          <span className="text-xs md:text-base text-start">Hẹn mọi người tại <span className={`${textColors[1 - +male]}`}>{location}</span>!</span>
        </div>
      </div>
    </motion.div>
  );
}

export default GlassCard;
