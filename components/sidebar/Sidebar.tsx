"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { logout } from "@/utils/auth";

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
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex flex-col shadow-md`}
      >
        <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-4">Menu</h2>
        <nav className="flex flex-col space-y-4 flex-grow">
          <Link
            href="/dashboard/"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">🏠</span> Dashboard
          </Link>
          <Link
            href="/dashboard/payment"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">👥</span> Payments
          </Link>
          <Link
            href="/dashboard/attendances"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">✅</span> Attendances
          </Link>
          <Link
            href="/dashboard/calendar"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">📅</span> Calendar
          </Link>
          <Link
            href="/dashboard/leaves"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">🌴</span> Leaves
          </Link>
          <Link
            href="/dashboard/payroll"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">💰</span> Payroll
          </Link>
          <Link
            href="/dashboard/documents"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">📁</span> Documents
          </Link>
        </nav>

        <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mt-8 mb-4">
          User
        </h2>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/dashboard/apps"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">🔌</span> Apps & Integration
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">⚙️</span> Settings
          </Link>
          <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
          Cerrar sesión
        </button>
        </nav>

        <div className="mt-auto flex items-center space-x-3 border-t pt-4 border-gray-200 dark:border-gray-700">
          <img
            src="/path-to-avatar.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Edward Brito
            </p>
            <p className="text-xs text-gray-500">@edwardb11</p>
          </div>
        </div>
      </div>

      {/* Fondo oscuro para móviles */}
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
