import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full h-screen relative">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
