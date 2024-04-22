import Avatar from "@/components/Avatar/Avatar";
import { format } from "date-fns";

interface GlassCardProps {
  title: string;
  children: React.ReactNode;
  imgSrc: string;
  male: boolean;
  targetDate: string | number;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, imgSrc, children, male, targetDate }) => {
  const textColor = male ? "text-cyan-600" : "text-rose-600/70";
  const displayDate = format(new Date(targetDate), "HH:mm:ss - dd/MM/yyyy")

  return (
    <div className="backdrop-blur-md bg-glass rounded-lg p-8 md:p-12 border border-gray-100/10 shadow-wedding font-satisfy mb-6 flex flex-col items-center w-[100%] md:w-[90%]">
      <h1 className={`text-2xl md:text-4xl ${textColor} font-semibold mb-2 font-satisfy`}>{title}</h1>
      <Avatar imgSrc={imgSrc} />
      <p className={`text-xl mb-4 ${textColor}`}>{displayDate}</p>
      <div>{children}</div>
    </div>
  );
}

export default GlassCard;
