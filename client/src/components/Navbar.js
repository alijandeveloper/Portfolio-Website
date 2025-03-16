import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Portfolio</h1>
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/projects">Projects</Link>
        <Link className="mr-4" to="/dashboard">Dashboard</Link>
        <Link className="bg-white text-blue-600 px-3 py-1 rounded" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
