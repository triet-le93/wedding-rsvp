import React from "react";

interface VerticalSplitLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const VerticalSplitLayout: React.FC<VerticalSplitLayoutProps> = ({ left, right }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen mb-4">
      <div className="md:w-1/2 md:h-full w-full">{left}</div>
      <div className="md:w-1/2 md:h-full w-full">{right}</div>
    </div>
  );
}

export default VerticalSplitLayout;
