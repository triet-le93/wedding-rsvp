"use client"

import FullScreenContainer from "@/components/FullScreenContainer/FullScreenContainer";
import { motion } from "framer-motion";
import MainLayout from "@/components/MainLayout/MainLayout";
import GlassCard from "@/components/GlassCard/GlassCard";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
    <FullScreenContainer>
      <div className="w-full aspect-w-16 aspect-h-9 mb-4 relative">
        <motion.img
          className="w-full h-auto"
          src={`${process.env.basePath}/images/cover.jpg`}
          alt="Home Image"
          width={100}
          height={30}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center w-full h-full backdrop-blur-sm md:backdrop-blur">
          <div className="p-4 md:p-16 rounded-lg border border-gray-100/10 shadow-outline">
            <h1 className="text-2xl md:text-9xl text-white text-center font-dancing mb-4 md:mb-16 font-bold">Save the date</h1>
            <h3 className="text-xl md:text-5xl text-center font-dancing font-bold text-white">
              <span className="">Lê Nguyễn Minh Triết</span>
              <span className=""> & </span>
              <span className="">Nguyễn Ngọc Linh</span>
            </h3>
          </div>
        </div>
      </div>
      {/* Get place id from https://developers.google.com/maps/documentation/embed/quickstart?hl=en#api-key */}
      <MainLayout>
        <GlassCard
          targetDate="2024-11-11T18:00:00+07:00"
          male={false}
          locationName="Diamond Palace"
          location="58 Phan Chu Trinh, Bãi Cháy, Thành phố Hạ Long, Quảng Ninh, Vietnam"
          mapSrc="https://maps.app.goo.gl/aH9zn9sbb7k8oYsP6"
        />
        <GlassCard
          targetDate="2024-11-16T18:00:00+07:00"
          male={true}
          locationName="White Palace"
          location="194 Đ. Hoàng Văn Thụ, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh"
          mapSrc="https://maps.app.goo.gl/k3L1P6WqYoFK5Hv38"
        />
      </MainLayout>
    </FullScreenContainer>
  );
}
