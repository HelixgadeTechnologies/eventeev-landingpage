import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-100 p-4">
    <h2 className="text-xl font-bold mb-4">rayna UI</h2>
    <nav>
      <Link to="/home" activeClassName="text-blue-500" className="block py-2">
        Home
      </Link>
      <Link
        to="/profile"
        activeClassName="text-blue-500"
        className="block py-2"
      >
        Profile
      </Link>
      <Link
        to="/analytics"
        activeClassName="text-blue-500"
        className="block py-2"
      >
        Analytics
      </Link>
      <Link
        to="/settings"
        activeClassName="text-blue-500"
        className="block py-2"
      >
        Settings
      </Link>
    </nav>
  </div>
);

export default Sidebar;
