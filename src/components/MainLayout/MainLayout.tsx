interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col text-center items-center justify-between mx-auto">
      <main className="w-full md:w-1/2 px-2">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
