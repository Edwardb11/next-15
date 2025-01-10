import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex w-64 bg-gray-800 h-screen">
      <nav className="flex flex-col space-y-2 p-4 text-white">
        <Link href="/" className="px-2 py-1 rounded hover:bg-teal-500">
          Home
        </Link>
        <Link href="/dashboard" className="px-2 py-1 rounded hover:bg-teal-500">
          Dashboard
        </Link>
        <Link href="/settings" className="px-2 py-1 rounded hover:bg-teal-500">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
