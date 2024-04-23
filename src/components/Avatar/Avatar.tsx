import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AvatarProps {
  imgSrc: string;
  isLogo?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc, isLogo = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const imgClasses = [
    "relative",
    "text-center",
    !isLogo ? "w-full aspect-square overflow-hidden mb-4 md:mb-6" : "w-16 h-16",
    "shadow-lg"
  ].filter(Boolean).join(" ");

  return (
    <motion.div
      ref={ref}
      className={imgClasses}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-0 pb-[100%]">
        <Image
          src={imgSrc}
          alt="Avatar"
          layout="fill"
          className="absolute top-0 left-0 w-full h-full"
          objectFit="cover"
          unoptimized
        />
      </div>
    </motion.div>
  );
}

export default Avatar;
