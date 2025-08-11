'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiMariadb, SiPostgresql, SiMysql, SiExpress, SiFastapi,
  SiJsonwebtokens, SiAuth0, SiDocker, SiVercel, SiRender,
  SiAmazon, SiGithub, SiTensorflow, SiGoogleearthengine,
  SiLangchain, SiArchlinux, SiHashicorp, SiLinux,
  SiPython, SiC, SiCplusplus, SiJavascript,
  SiTypescript, SiHtml5, SiCss3, SiGnubash, SiGit
} from 'react-icons/si';

import {
  FaJava, FaWifi, FaRobot, FaProjectDiagram, FaNetworkWired
} from 'react-icons/fa';

const skills = [
	{ name: 'Frontend Development (React, Tailwind)', level: 60, category: 'Web Technologies' },
	{ name: 'Backend (Node.js, FastAPI)', level: 55, category: 'Server & APIs' },
	{ name: 'Linux & Shell (Arch, Hyprland)', level: 70, category: 'System Skills' },
	{ name: 'Cybersecurity (tools, Wi-Fi testing)', level: 50, category: 'Security' },
	{ name: 'Cloud & DevOps (AWS, Docker basics)', level: 45, category: 'Infra' },
	{ name: 'AI/ML (TensorFlow, Earth Engine)', level: 40, category: 'Intelligent Systems' },
	// { name: 'Blockchain (Solidity, Web3)', level: 35, category: 'Emerging Tech' },
	// { name: '3D Graphics (Three.js)', level: 50, category: 'Visual Tech' },
	{ name: 'UI/UX & Visual Design', level: 50, category: 'Design' },
	{ name: 'Git & Version Control', level: 65, category: 'Collaboration' },
	{ name: 'RIZZ/no. chicks pulled', level: 0, category: 'i aint got no rizz bro ;-;'}
];

export default function AboutPage() {
	return (
		<div className="relative w-full min-h-screen overflow-hidden">
			{/* 3D Background */}
			<div className="absolute inset-0">
				<Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 2]}>
					<Suspense fallback={null}>
						<CyberScene />
					</Suspense>
				</Canvas>
			</div>

			{/* Scan lines overlay */}
			<div className="absolute inset-0 scan-lines opacity-20"></div>

			{/* Content */}
			<div className="relative z-10 p-4 sm:p-6 lg:p-8 overflow-y-auto h-screen">
				{/* Header */}
				<motion.div
					className="text-center mb-8 sm:mb-12 lg:mb-16 pt-16 sm:pt-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="cyber-text text-3xl sm:text-5xl md:text-7xl font-bold text-white neon-glow mb-4 sm:mb-6">
						ABOUT.EXE
					</h1>
					<div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
				</motion.div>

				{/* Main Content Grid */}
				<div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 mb-8 sm:mb-16 lg:mb-20">
					{/* Bio Section */}
					<motion.div
						className="cyber-panel p-4 sm:p-6 lg:p-8 relative overflow-hidden"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="holographic absolute inset-0 opacity-10"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-6">
								<div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
								<h2 className="cyber-text text-2xl font-bold text-purple-300">
									NEURAL.PROFILE
								</h2>
							</div>

							<div className="space-y-6 text-gray-300 leading-relaxed">
								<p>
								Yo, I’m Nishanth P. Ouseph aka NEONPULSE I'm a tech and cyber enthusiast who lives and breathes the terminal. 
								This is my digital space where I build, break, and rebuild — mostly with code, sometimes with chaos.
								</p>
								<p>
								My work revolves around backend systems, ethical hacking, and open-source tech. 
								I spend most of my time deep in Linux, customizing every corner, scripting tools, and ofc yanking solution for every single error from openai and claude ;-;
								</p>
								<p>
									I USE ARCH BTW,
									( altho i almost break it with every single -Syu ;-; )

								</p>
							</div>

							{/* Stats Grid */}
							<div className="mt-8 pt-6 border-t border-purple-500/30 grid grid-cols-3 gap-6">
								<div className="text-center">
									<div className="cyber-text text-2xl font-bold text-white neon-glow">
										2
									</div>
									<div className="text-xs text-purple-400">YEARS</div>
								</div>
								<div className="text-center">
									<div className="cyber-text text-2xl font-bold text-white neon-glow">
										7
									</div>
									<div className="text-xs text-purple-400">PROJECTS</div>
								</div>
								<div className="text-center">
									<div className="cyber-text text-2xl font-bold text-white neon-glow">
										∞
									</div>
									<div className="text-xs text-purple-400">POSSIBILITIES</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Tools & Technologies Section */}
					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{/* Enhanced Background */}
						<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
						<div className="holographic absolute inset-0 opacity-5"></div>
						
						{/* Content */}
						<div className="relative z-10 p-4 sm:p-6 lg:p-8">
							<div className="flex items-center justify-center mb-8 sm:mb-12">
								<div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
								<h2 className="cyber-text text-xl sm:text-2xl font-bold text-purple-300">
									TOOLS.&.TECHNOLOGIES
								</h2>
							</div>

							{/* Main Grid Layout */}
							<div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
								{/* Languages Section */}
								<div>
									<motion.div 
										className="cyber-text text-base sm:text-lg text-purple-400 mb-6 sm:mb-8 flex items-center justify-center"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.5 }}
									>
										<div className="w-1 h-1 bg-purple-400 mr-3 animate-pulse"></div>
										Programming Languages
										<div className="w-1 h-1 bg-purple-400 ml-3 animate-pulse"></div>
									</motion.div>
									<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 sm:gap-4 lg:gap-6 place-items-center max-w-5xl mx-auto">
										{[
											{ name: 'Python', icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
											{ name: 'C', icon: <SiC className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
											{ name: 'C++', icon: <SiCplusplus className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
											{ name: 'Java', icon: <FaJava className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
											{ name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-yellow-300', bg: 'bg-yellow-300/10' },
											{ name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
											{ name: 'HTML', icon: <SiHtml5 className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-orange-400', bg: 'bg-orange-400/10' },
											{ name: 'CSS', icon: <SiCss3 className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-blue-300', bg: 'bg-blue-300/10' },
											{ name: 'Shell', icon: <SiGnubash className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-green-400', bg: 'bg-green-400/10' },
										].map((lang, index) => (
											<motion.div
												key={lang.name}
												className="group cursor-pointer relative"
												initial={{ opacity: 0, scale: 0.8, y: 20 }}
												animate={{ opacity: 1, scale: 1, y: 0 }}
												transition={{
													duration: 0.6,
													delay: 0.6 + index * 0.05,
													ease: "easeOut"
												}}
												whileHover={{ 
													scale: 1.1,
													y: -5,
													transition: { duration: 0.3 }
												}}
											>
												<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl backdrop-blur-sm bg-gray-900/40 border border-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-purple-500/20">
													<div className={`absolute inset-0 ${lang.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-xl`}></div>
													
													<motion.div 
														className={`mb-1 ${lang.color} relative z-10`}
														whileHover={{ 
															scale: 1.1,
															transition: { duration: 0.2 }
														}}
													>
														{lang.icon}
													</motion.div>
													
													<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
														{lang.name}
													</div>
												</div>
											</motion.div>
										))}
									</div>
								</div>

								{/* Technology Categories Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
									{/* Frontend */}
									<div className="bg-gradient-to-br from-purple-900/20 to-violet-800/10 p-4 sm:p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-purple-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 1.0 }}
										>
											<div className="w-1 h-1 bg-purple-400 mr-3 animate-pulse"></div>
											Frontend
											<div className="w-1 h-1 bg-purple-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
											{[
												{ name: 'React.js', icon: <SiReact className="w-10 h-10" />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
												{ name: 'Next.js', icon: <SiNextdotjs className="w-10 h-10" />, color: 'text-white', bg: 'bg-gray-200/10' },
												{ name: 'Tailwind CSS', icon: <SiTailwindcss className="w-10 h-10" />, color: 'text-sky-400', bg: 'bg-sky-400/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 1.1 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-24 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-purple-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-2 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* Database */}
									<div className="bg-gradient-to-br from-violet-900/20 to-purple-800/10 p-4 sm:p-6 rounded-xl border border-violet-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-violet-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 1.4 }}
										>
											<div className="w-1 h-1 bg-violet-400 mr-3 animate-pulse"></div>
											Database
											<div className="w-1 h-1 bg-violet-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-2 gap-3 sm:gap-4">
											{[
												{ name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: 'text-green-400', bg: 'bg-green-400/10' },
												{ name: 'MariaDB', icon: <SiMariadb className="w-8 h-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
												{ name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
												{ name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: 'text-blue-300', bg: 'bg-blue-300/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 1.5 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-20 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-violet-500/20 group-hover:border-violet-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-violet-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-1 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* Backend & Auth */}
									<div className="bg-gradient-to-br from-pink-900/20 to-purple-800/10 p-4 sm:p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-pink-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 1.9 }}
										>
											<div className="w-1 h-1 bg-pink-400 mr-3 animate-pulse"></div>
											Backend & Auth
											<div className="w-1 h-1 bg-pink-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-2 gap-3 sm:gap-4">
											{[
												{ name: 'Express.js', icon: <SiExpress className="w-8 h-8" />, color: 'text-gray-400', bg: 'bg-gray-400/10' },
												{ name: 'FastAPI', icon: <SiFastapi className="w-8 h-8" />, color: 'text-green-300', bg: 'bg-green-300/10' },
												{ name: 'JWT Auth', icon: <SiJsonwebtokens className="w-8 h-8" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
												{ name: 'NextAuth.js', icon: <SiAuth0 className="w-8 h-8" />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 2.0 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-20 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-pink-500/20 group-hover:border-pink-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-pink-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-1 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* DevOps & Cloud */}
									<div className="bg-gradient-to-br from-purple-900/20 to-pink-800/10 p-4 sm:p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-purple-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 2.4 }}
										>
											<div className="w-1 h-1 bg-purple-400 mr-3 animate-pulse"></div>
											DevOps & Cloud
											<div className="w-1 h-1 bg-purple-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
											{[
												{ name: 'Docker', icon: <SiDocker className="w-8 h-8" />, color: 'text-sky-400', bg: 'bg-sky-400/10' },
												{ name: 'Vercel', icon: <SiVercel className="w-8 h-8" />, color: 'text-white', bg: 'bg-gray-200/10' },
												{ name: 'Render', icon: <SiRender className="w-8 h-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
												{ name: 'AWS', icon: <SiAmazon className="w-8 h-8" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
												{ name: 'Git', icon: <SiGit className="w-8 h-8" />, color: 'text-red-400', bg: 'bg-red-400/10' },
												{ name: 'GitHub', icon: <SiGithub className="w-8 h-8" />, color: 'text-gray-300', bg: 'bg-gray-300/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 2.5 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-20 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-purple-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-1 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* AI/ML */}
									<div className="bg-gradient-to-br from-violet-900/20 to-pink-800/10 p-4 sm:p-6 rounded-xl border border-violet-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-violet-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 3.0 }}
										>
											<div className="w-1 h-1 bg-violet-400 mr-3 animate-pulse"></div>
											AI/ML
											<div className="w-1 h-1 bg-violet-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-2 gap-3 sm:gap-4">
											{[
												{ name: 'TensorFlow', icon: <SiTensorflow className="w-8 h-8" />, color: 'text-orange-400', bg: 'bg-orange-400/10' },
												{ name: 'Earth Engine', icon: <SiGoogleearthengine className="w-8 h-8" />, color: 'text-green-400', bg: 'bg-green-400/10' },
												{ name: 'LangChain', icon: <SiLangchain className="w-8 h-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
												{ name: 'Vector DB', icon: <FaProjectDiagram className="w-8 h-8" />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
												{ name: 'MCP', icon: <FaRobot className="w-8 h-8" />, color: 'text-pink-400', bg: 'bg-pink-400/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 3.1 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-20 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-violet-500/20 group-hover:border-violet-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-violet-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-1 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* Security */}
									<div className="bg-gradient-to-br from-pink-900/20 to-violet-800/10 p-4 sm:p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
										<motion.div 
											className="cyber-text text-base sm:text-lg text-pink-400 mb-4 sm:mb-6 flex items-center justify-center"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 3.5 }}
										>
											<div className="w-1 h-1 bg-pink-400 mr-3 animate-pulse"></div>
											Security
											<div className="w-1 h-1 bg-pink-400 ml-3 animate-pulse"></div>
										</motion.div>
										<div className="grid grid-cols-2 gap-3 sm:gap-4">
											{[
												{ name: 'Arch Linux', icon: <SiArchlinux className="w-8 h-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
												{ name: 'BlackArch', icon: <SiLinux className="w-8 h-8" />, color: 'text-red-400', bg: 'bg-red-400/10' },
												{ name: 'Airgeddon', icon: <FaProjectDiagram className="w-8 h-8" />, color: 'text-green-400', bg: 'bg-green-400/10' },
												{ name: 'Aircrack-ng', icon: <FaWifi className="w-8 h-8" />, color: 'text-green-300', bg: 'bg-green-300/10' },
												{ name: 'Hashcat', icon: <SiHashicorp className="w-8 h-8" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
												{ name: 'Nmap', icon: <FaNetworkWired className="w-8 h-8" />, color: 'text-blue-300', bg: 'bg-blue-300/10' },
											].map((tool, index) => (
												<motion.div
													key={tool.name}
													className="group cursor-pointer relative"
													initial={{ opacity: 0, scale: 0.8, y: 20 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														duration: 0.6,
														delay: 3.6 + index * 0.1,
														ease: "easeOut"
													}}
													whileHover={{ 
														scale: 1.05,
														y: -5,
														transition: { duration: 0.3 }
													}}
												>
													<div className="h-20 rounded-lg backdrop-blur-sm bg-gray-900/40 border border-pink-500/20 group-hover:border-pink-400/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-pink-500/20">
														<div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg`}></div>
														
														<motion.div 
															className={`mb-1 ${tool.color} relative z-10`}
															whileHover={{ 
																scale: 1.1,
																transition: { duration: 0.2 }
															}}
														>
															{tool.icon}
														</motion.div>
														
														<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-medium text-center relative z-10">
															{tool.name}
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Skills Matrix */}
				<motion.div
					className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="cyber-panel p-4 sm:p-6 lg:p-8 relative overflow-hidden">
						<div className="holographic absolute inset-0 opacity-10"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-6">
								<div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
								<h2 className="cyber-text text-2xl font-bold text-purple-300">
									SKILL.MATRIX
								</h2>
							</div>

							<div className="grid lg:grid-cols-2 gap-8">
								{skills.map((skill, index) => (
									<motion.div
										key={skill.name}
										className="space-y-3"
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: 1.0 + index * 0.1,
										}}
									>
										<div className="flex justify-between items-end">
											<div>
												<h3 className="text-white font-medium">{skill.name}</h3>
												<span className="text-xs text-purple-400 cyber-text">
													{skill.category}
												</span>
											</div>
											<div className="cyber-text text-sm text-purple-300">
												{skill.level}%
											</div>
										</div>

										<div className="w-full bg-purple-900/30 h-2 relative overflow-hidden">
											<motion.div
												className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 relative"
												initial={{ width: 0 }}
												animate={{ width: `${skill.level}%` }}
												transition={{
													duration: 1.5,
													delay: 0.8 + index * 0.1,
													ease: 'easeOut',
												}}
											>
												<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
												<div className="absolute right-0 top-0 w-1 h-full bg-white/80"></div>
											</motion.div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
				

				{/* Back Navigation */}
				<motion.div
					className="mb-8 sm:mb-12 flex justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<Link href="/">
						<div className="relative cursor-pointer group">
							<span className="cyber-text text-lg text-purple-300 group-hover:text-purple-100 transition-colors duration-300 font-semibold tracking-wider">
								← RETURN.HOME
							</span>
							{/* Dynamic underline */}
							<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
							{/* Glowing dot */}
							<div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}