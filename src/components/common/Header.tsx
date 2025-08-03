import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <header
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 shadow-md
        ${theme === "theme2" ? "bg-black text-white" : ""}
        ${theme === "theme3" ? "bg-pink-200 text-black" : ""}
        ${theme === "theme1" ? "bg-white text-black" : ""}
      `}
    >
      <div className="flex justify-between items-center w-full sm:w-auto">
        {theme === "theme2" && (
          <button
            className="sm:hidden p-2 bg-gray-700 text-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        )}
        <p
          className={`text-lg font-bold text-center flex-1 sm:flex-none ${
            theme === "theme2" ? "text-white" : "text-black"
          }`}
        >
          Theme Switcher App
        </p>
      </div>
      {theme !== "theme2" && (
        <nav className="flex justify-center w-full gap-4 mt-2 sm:mt-0">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      )}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
        <select
          value={theme}
          onChange={handleToggleTheme}
          className={`border rounded px-2 py-1 focus:outline-none ${
            theme === "theme2"
              ? "bg-black text-white border-white"
              : theme === "theme3"
              ? "bg-pink-200 text-black border-gray-400"
              : "bg-white text-black border-gray-400"
          }`}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
