import Image from "next/image";

interface RoundedAvatarProps {
  src: string;
  alt: string;
}

const RoundedAvatar: React.FC<RoundedAvatarProps> = ({ src, alt }) => {
  return (
    <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        unoptimized
      />
    </div>
  );
}

export default RoundedAvatar;
