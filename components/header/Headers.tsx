import DarkModeToggle from "../mode/DarkModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">My App</h1>
      <DarkModeToggle />
    </header>
  );
}
