import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Intro', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Practice', path: '/practice/code' },
        // { name: 'Guestbook', path: '/guestbook' },
    ];

    return (
        <>
            <nav className="flex items-center justify-between px-10 py-8 sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <Link to="/" className="text-2xl font-black tracking-tighter dark:text-white">
                    DAYOUNG<span className="text-accent">.</span>
                </Link>
                <div className="flex gap-12 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === item.path ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            {item.name}
                            {location.pathname === item.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black dark:bg-white"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
            <div className="flex justify-end">
                <ThemeToggle />
            </div>
        </>
    );
};

export default Navbar;
