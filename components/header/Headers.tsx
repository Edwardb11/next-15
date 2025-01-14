import DarkModeToggle from "../mode/DarkModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white"></h1>
      <DarkModeToggle />
    </header>
  );
}
