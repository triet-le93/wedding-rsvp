import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
  isLogo?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc, isLogo = false }) => {
  const imgClasses = [
    "relative",
    "text-center",
    !isLogo ? "w-60 h-60 mb-4 md:w-80 md:h-80 md:mb-6" : "w-16 h-16"
  ].filter(Boolean).join(" ");

  return (
    <div className={imgClasses}>
      <Image
        src={imgSrc}
        alt="Avatar"
        layout="fill"
        className="rounded-lg"
        objectFit="cover"
        unoptimized
      />
    </div>
  );
}

export default Avatar;
