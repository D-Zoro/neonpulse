'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';

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
			<div className="relative z-10 p-8 overflow-y-auto h-screen">
				{/* Header */}
				<motion.div
					className="text-center mb-16 pt-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="cyber-text text-5xl md:text-7xl font-bold text-white neon-glow mb-6">
						ABOUT.EXE
					</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
				</motion.div>

				{/* Main Content Grid */}
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mb-20">
					{/* Bio Section */}
					<motion.div
						className="cyber-panel p-8 relative overflow-hidden"
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

					{/* Known Languages Section */}
					<motion.div
						className="cyber-panel p-8 relative overflow-hidden"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="holographic absolute inset-0 opacity-10"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-6">
								<div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
								<h2 className="cyber-text text-2xl font-bold text-purple-300">
									LANGUAGE.ARSENAL
								</h2>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{[
									{ name: 'Python', icon: '🐍', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
									{ name: 'C', icon: 'C', color: 'text-blue-400', bg: 'bg-blue-400/20' },
									{ name: 'C++', icon: 'C++', color: 'text-blue-500', bg: 'bg-blue-500/20' },
									{ name: 'Java', icon: '☕', color: 'text-orange-500', bg: 'bg-orange-500/20' },
									{ name: 'JavaScript', icon: 'JS', color: 'text-yellow-300', bg: 'bg-yellow-300/20' },
									{ name: 'TypeScript', icon: 'TS', color: 'text-blue-400', bg: 'bg-blue-400/20' },
									{ name: 'HTML', icon: 'HTML', color: 'text-orange-400', bg: 'bg-orange-400/20' },
									{ name: 'CSS', icon: 'CSS', color: 'text-blue-300', bg: 'bg-blue-300/20' },
									{ name: 'Shell', icon: '$', color: 'text-green-400', bg: 'bg-green-400/20' },
								].map((lang, index) => (
									<motion.div
										key={lang.name}
										className="cyber-panel p-3 text-center group cursor-pointer relative overflow-hidden"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.5,
											delay: 0.6 + index * 0.1,
										}}
										whileHover={{ 
											scale: 1.1,
											y: -5,
											boxShadow: `0 0 15px ${lang.color.includes('yellow') ? '#facc15' : lang.color.includes('blue') ? '#60a5fa' : lang.color.includes('orange') ? '#fb923c' : '#4ade80'}33`
										}}
									>
										<div className={`absolute inset-0 ${lang.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
										<div className="holographic absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
										
										<div className="relative z-10">
											<motion.div 
												className={`text-2xl mb-2 ${lang.color}`}
												whileHover={{ 
													scale: 1.2,
													rotate: [0, -10, 10, -5, 5, 0],
													transition: { duration: 0.5 }
												}}
											>
												{lang.icon}
											</motion.div>
											<div className="cyber-text text-xs text-purple-300 group-hover:text-white transition-colors duration-300 font-semibold">
												{lang.name}
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
				<div className="mt-8 pt-6 border-t border-purple-500/30 grid grid-cols-3 gap-6"></div>
				{/* Skills Matrix */}
				<motion.div
					className="max-w-7xl mx-auto mb-16"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="cyber-panel p-8 relative overflow-hidden">
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
					className="mb-8 flex justify-start"
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
							<div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
							{/* Glowing dot */}
							<div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}