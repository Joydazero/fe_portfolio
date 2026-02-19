import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const MainPage: React.FC = () => {
    let navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                    Creative Frontend Developer
                </span>
                <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                    CRAFTING<br />
                    <span className="text-gray-300">EXPERIENCES</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                    Building minimalist, high-performance web applications with a focus on clean code and user-centric design.
                </p>
                <motion.div
                    className="mt-12 flex gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105" onClick={() => navigate('/projects')}>
                        View Projects
                    </button>
                    {/* <button className="px-8 py-4 border border-black rounded-full font-bold hover:bg-gray-50 transition-all">
                        Get in Touch
                    </button> */}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MainPage;
