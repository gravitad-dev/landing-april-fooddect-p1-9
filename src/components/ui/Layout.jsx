const Layout = ({ children }) => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};
export default Layout;
