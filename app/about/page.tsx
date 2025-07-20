'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';

const skills = [
	{ name: 'Frontend Development', level: 95, category: 'Web Technologies' },
	{ name: 'Backend Architecture', level: 88, category: 'Server Systems' },
	{ name: '3D Graphics & WebGL', level: 90, category: 'Visual Computing' },
	{ name: 'UI/UX Design', level: 85, category: 'Digital Design' },
	{ name: 'Cloud Infrastructure', level: 82, category: 'DevOps' },
	{ name: 'Blockchain Tech', level: 78, category: 'Emerging Tech' },
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
									Welcome to my digital realm. I'm a cyber artist and developer
									specializing in creating immersive digital experiences that blur the
									line between reality and virtuality.
								</p>
								<p>
									With over 8 years navigating the digital frontier, I architect
									complex systems, design stunning interfaces, and bring impossible
									ideas to life through code and creativity.
								</p>
								<p>
									My passion lies in pushing the boundaries of what's possible with
									modern web technologies, 3D graphics, and emerging digital paradigms.
								</p>
							</div>

							{/* Stats Grid */}
							<div className="mt-8 pt-6 border-t border-purple-500/30 grid grid-cols-3 gap-6">
								<div className="text-center">
									<div className="cyber-text text-2xl font-bold text-white neon-glow">
										8+
									</div>
									<div className="text-xs text-purple-400">YEARS</div>
								</div>
								<div className="text-center">
									<div className="cyber-text text-2xl font-bold text-white neon-glow">
										50+
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

					{/* Skills Matrix */}
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
									SKILL.MATRIX
								</h2>
							</div>

							<div className="space-y-6">
								{skills.map((skill, index) => (
									<motion.div
										key={skill.name}
										className="space-y-3"
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: 0.6 + index * 0.1,
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
					</motion.div>
				</div>

				{/* Back Navigation */}
				<motion.div
					className="fixed bottom-8 left-8 z-30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<Link href="/">
						<motion.div
							className="cyber-panel px-6 py-3 cursor-pointer group hover:scale-110 transition-transform duration-200"
							whileHover={{ scale: 1.1 }}
						>
							<span className="cyber-text text-purple-300 group-hover:text-white transition-colors duration-200">
								← RETURN.HOME
							</span>
						</motion.div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}