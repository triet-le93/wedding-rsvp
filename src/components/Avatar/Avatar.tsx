import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return (
    <div className="w-60 h-60 mb-4 relative text-center md:w-80 md:h-80 md:mb-6">
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
