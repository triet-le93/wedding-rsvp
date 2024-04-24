import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
  isLogo?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc, isLogo = false }) => {

  const imgClasses = [
    "relative",
    "text-center",
    !isLogo ? "w-full aspect-square overflow-hidden mb-4 md:mb-6" : "w-16 h-16",
    !isLogo ? "shadow-lg" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={imgClasses}>
      <div className="relative w-full h-0 pb-[100%]">
        <Image
          src={imgSrc}
          alt="Avatar"
          layout="responsive"
          width={100}
          height={100}
          className="absolute top-0 left-0 w-full h-full"
          objectFit="cover"
          unoptimized
        />
      </div>
    </div>
  );
}

export default Avatar;
