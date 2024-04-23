"use client"

import FullScreenContainer from "@/components/FullScreenContainer/FullScreenContainer";
import { motion } from "framer-motion";
import MainLayout from "@/components/MainLayout/MainLayout";
import GlassCard from "@/components/GlassCard/GlassCard";

export default function Home() {
  return (
    <FullScreenContainer>
      <div className="w-full mb-4 relative">
        <motion.img
          className="w-full h-auto"
          src={`${process.env.basePath}/images/main_picture.JPG`}
          alt="Home Image"
          width={100}
          height={30}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center w-full h-full backdrop-blur-sm md:backdrop-blur-sm">
          <div className="p-4 md:p-16 rounded-lg border border-gray-100/10 shadow-outline">
            <h1 className="text-xl md:text-5xl text-white text-center font-pacifico mb-4 md:mb-16">Save the date</h1>
            <h3 className="text-base md:text-2xl text-center font-satisfy">
              <span className="text-cyan-600">Lê Nguyễn Minh Triết</span>
              <span className="text-white"> & </span>
              <span className="text-rose-600/90">Nguyễn Ngọc Linh</span>
            </h3>
          </div>
        </div>
      </div>
      {/* Get place id from https://developers.google.com/maps/documentation/embed/quickstart?hl=en#api-key */}
      <MainLayout>
        <GlassCard
          targetDate="2024-11-11T18:00:00+07:00"
          male={false}
          locationName="Thiên Tân Palace"
          location="Vĩnh Thực, Bãi Cháy"
          location2="Thành phố Hạ Long, Quảng Ninh"
          placeId="ChIJF4ugUPVZSjER6BZKwz39jd4"
        />
        <GlassCard
          targetDate="2024-11-16T18:00:00+07:00"
          male={true}
          locationName="White Palace"
          location="194 Đ. Hoàng Văn Thụ"
          location2="Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh"
          placeId="ChIJPaYDQigpdTER7RvTfnEiTR4"
        />
      </MainLayout>
    </FullScreenContainer>
  );
}
