import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && onClose) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <aside
      className={`${
        theme === "theme2" ? "bg-black text-white" : "bg-white text-black"
      } w-48 p-4 transition-transform transform sm:translate-x-0
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:static fixed h-full z-50`}
    >
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="hover:underline"
          onClick={() => onClose && onClose()}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline"
          onClick={() => onClose && onClose()}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:underline"
          onClick={() => onClose && onClose()}
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
