import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ozadminImg from "../assets/imgs/common/ozadmin_thumb.jpg"
import publisherImg from "../assets/imgs/common/webp_thumb.jpg"
const projects = [
    {
        title: "웹퍼블리셔 프로젝트",
        category: "Web Publishing",
        description: "웹 표준과 접근성을 준수한 퍼블리싱 프로젝트 모음입니다.",
        link: "/projects/publisher",
        img: publisherImg
    },
    {
        title: "[Portfolio]StudyHub Admin",
        category: "FE DEV",
        description: ["혼자 공부하기 어려운 사람들이 함께 스터디를 만들고 운영할 수 있는 StudyHub 서비스의 운영 정보를 관리하는 내부 관리자(Admin) 페이지", "React, TypeScript, Tailwind CSS v4"],
        link: "https://oz-admin.vercel.app/",
        img: ozadminImg
    },
    // {
    //     title: "E-Commerce Concept",
    //     category: "UI/UX Design",
    //     description: "A high-performance shopping experience with smooth transitions.",
    //     link: "#"
    // }
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-32 px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <h1 className="text-6xl font-black mb-3 tracking-tighter">SELECTED WORKS</h1>
                <p className="text-gray-500 text-xl font-light">A collection of things I've built with passion.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <Link to={project.link} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-16/10 bg-gray-50 rounded-3xl mb-8 overflow-hidden relative">
                                <div className="relative inset-0 bg-black/5 group-hover:bg-white/90 transition-colors duration-500" >
                                    <img src={project.img} alt={project.title} className='opacity-40' />
                                </div>
                                {/* Image placeholder could go here */}
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-accent mb-2 block">
                                {project.category}
                            </span>
                            <h2 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {project.title}
                            </h2>
                            <p className="text-gray-500 text-lg">{project.description}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
