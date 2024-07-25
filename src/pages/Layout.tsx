import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-black via-black/50 to-transparent z-10">
        <div className="flex justify-center py-4">
          <Link to="/" className="text-white hover:text-blue-500 mx-4">Home</Link>
          <Link to="/fragrances" className="text-white hover:text-blue-500 mx-4">Fragrances</Link>
          <Link to="/contact" className="text-white hover:text-blue-500 mx-4">Contact</Link>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
