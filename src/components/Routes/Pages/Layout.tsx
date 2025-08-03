import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { fetchProducts } from "../../../store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

const Layout = () => {
  const { theme } = useAppSelector((state) => state?.theme);
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getThemeClasses = () => {
    switch (theme) {
      case "theme2":
        return "bg-black text-white";
      case "theme3":
        return "bg-pink-100 text-black";
      default:
        return "bg-white text-black";
    }
  };

  return (
    <div className={`flex flex-col h-screen ${getThemeClasses()}`}>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        {theme === "theme2" && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        <main className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
