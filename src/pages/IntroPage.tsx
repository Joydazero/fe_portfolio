import React from 'react';
import { motion } from 'framer-motion';

const IntroPage: React.FC = () => {
    return (
        <div className="container mx-auto py-32 px-10 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-black mb-12 tracking-tighter italic">🙌</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Hey there! I'm <span className="text-black font-bold underline decoration-accent decoration-2 underline-offset-4">Dayoung</span>,
                            a developer who believes that the web should be minimal yet full of life in its UI.
                        </p>
                        <p>
                            "I am a frontend developer dedicated to bridging the structural value of user interfaces with logic to complete the flow of UI"
                        </p>
                    </div>
                    <div className="border-l border-gray-100 pl-16 space-y-12">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Core Skills</h3>
                            <ul className="space-y-2 font-bold text-xl">
                                <li>React / Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Focus</h3>
                            <p className="font-medium">Frontend Architecture, Interaction Design, Performance Optimization.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default IntroPage;
