"use client"

import FullScreenContainer from "@/components/FullScreenContainer/FullScreenContainer";
import VerticalSplitLayout from "@/components/VerticalSplitLayout/VerticalSplitLayout";
import CountDown from "@/components/CountDown/CountDown";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <FullScreenContainer>
      <div className="w-full mb-4">
        <motion.img
          className="w-full h-auto"
          src={`${process.env.basePath}/images/main_picture.JPG`}
          alt="Avatar"
          width={100}
          height={30}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <h1 className="text-3xl md:text-4xl text-cyan-700 text-center font-pacifico mb-4">Save the date</h1>
      <h3 className="text-xl md:text-2xl text-center font-satisfy mb-8">
        <span className="text-cyan-600">Lê Nguyễn Minh Triết</span> & <span className="text-rose-600/70">Nguyễn Ngọc Linh</span>
      </h3>
      <VerticalSplitLayout
        left={<div className="flex items-center justify-center">
          <CountDown
            title="Nhà nàng"
            targetDate="2024-11-11T18:00:00+07:00"
            imgSrc={`${process.env.basePath}/images/left_countdown.JPG`}
            male={false}
            locationName="Thiên Tân Palace"
            location="Vĩnh Thực, Bãi Cháy, Thành phố Hạ Long, Quảng Ninh"
          />
        </div>}
        right={<div className="flex items-center justify-center font-serif">
          <CountDown
            title="Nhà chàng"
            targetDate="2024-11-16T18:00:00+07:00"
            imgSrc={`${process.env.basePath}/images/right_countdown.JPG`}
            male={true}
            locationName="White Palace"
            location="194 Đ. Hoàng Văn Thụ, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh"
          />
        </div>}
      />
      {/* <SaveTheDate /> */}
    </FullScreenContainer>
  );
}
