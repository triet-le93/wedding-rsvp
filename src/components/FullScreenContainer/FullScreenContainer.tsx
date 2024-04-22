import React from "react";
import Navigation from "@/components/Navigation/Navigation";

interface FullScreenContainerProps {
  children: React.ReactNode;
}

const FullScreenContainer: React.FC<FullScreenContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-countdown-bg bg-cover bg-center bg-no-repeat overflow-auto">
      <Navigation />
      <div className="flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default FullScreenContainer;
