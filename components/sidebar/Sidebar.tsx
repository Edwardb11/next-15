"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-black dark:text-white p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex`}
      >
        <nav className="flex flex-col space-y-2">
          <Link
            href="/"
            className="px-2 py-1 rounded hover:bg-teal-500 dark:hover:bg-teal-600"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="px-2 py-1 rounded hover:bg-teal-500 dark:hover:bg-teal-600"
          >
            Dashboard
          </Link>
          <Link
            href="/settings"
            className="px-2 py-1 rounded hover:bg-teal-500 dark:hover:bg-teal-600"
          >
            Settings
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
