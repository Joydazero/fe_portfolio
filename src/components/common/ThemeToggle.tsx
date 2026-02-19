import { useDarkMode } from "../../hooks/useDarkMode";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useDarkMode();
    return (
        <div className="flex justify-end p-5">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDark}
                    onChange={() => setIsDark(!isDark)}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent transition-colors"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
            </label>
        </div >
    )
}
