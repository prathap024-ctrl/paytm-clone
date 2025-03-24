

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#e8f8fd]">
      <div
        
        className="flex-1 container px-4 py-4 pb-24 md:pb-8 overflow-x-hidden"
      >
        <div className="max-w-lg mx-auto">{children}</div>
      </div>
    </div>
  );
};
