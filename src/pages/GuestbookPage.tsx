import React from 'react';
import { motion } from 'framer-motion';

const GuestbookPage: React.FC = () => {
    return (
        <div className="container mx-auto py-32 px-10 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-black mb-4 tracking-tighter italic underline decoration-gray-100 underline-offset-8">GUESTBOOK</h1>
                <p className="text-gray-500">Leave a note for me!</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
            >
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                    />
                    <button className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all uppercase tracking-widest text-sm">
                        Leave a note
                    </button>
                </form>

                <div className="pt-12 border-t border-gray-100">
                    <p className="text-center text-sm text-gray-400 font-mono">
                        Powered by Supabase (Coming Soon)
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default GuestbookPage;
