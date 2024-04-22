import FullScreenContainer from "@/components/FullScreenContainer/FullScreenContainer";
import VerticalSplitLayout from "@/components/VerticalSplitLayout/VerticalSplitLayout";
import CountDown from "@/components/CountDown/CountDown";
import SaveTheDate from "@/components/SaveTheDate/SaveTheDate";
import Image from "next/image";

export default function Home() {
  return (
    <FullScreenContainer>
      <div className="w-full mb-4">
        <Image
          src={`${process.env.basePath}/images/main_picture.JPG`}
          alt="Avatar"
          layout="responsive"
          width={100}
          height={30}
          objectFit="cover"
          unoptimized
        />
      </div>
      <h1 className="text-3xl md:text-4xl text-cyan-700 text-center font-pacifico mb-4">Save the date</h1>
      <h3 className="text-xl md:text-2xl text-center font-satisfy mb-8">
        <span className="text-cyan-600">Lê Nguyễn Minh Triết</span> & <span className="text-rose-600/70">Nguyễn Ngọc Linh</span>
      </h3>
      <VerticalSplitLayout
        left={<div className="flex items-center justify-center">
          <CountDown
            title="Nhà ♀"
            targetDate="2024-11-11T18:00:00+07:00"
            imgSrc={`${process.env.basePath}/images/left_countdown.JPG`}
            male={false}
          />
        </div>}
        right={<div className="flex items-center justify-center font-serif">
          <CountDown
            title="Nhà ♂"
            targetDate="2024-11-16T18:00:00+07:00"
            imgSrc={`${process.env.basePath}/images/right_countdown.JPG`}
            male={true}
          />
        </div>}
      />
      {/* <SaveTheDate /> */}
    </FullScreenContainer>
  );
}
