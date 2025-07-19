'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';

const projects = [
	{
		id: '01',
		title: 'Neural Commerce Engine',
		description:
			'AI-powered e-commerce platform with real-time neural network product recommendations and quantum-encrypted payments.',
		tech: ['React', 'Three.js', 'Node.js', 'TensorFlow', 'Blockchain'],
		status: 'ACTIVE',
		type: 'Web Application',
		github: '#',
		demo: '#',
	},
	{
		id: '02',
		title: 'Holographic Data Viz',
		description:
			'Advanced 3D data visualization platform using WebGL shaders for real-time analytics in virtual space.',
		tech: ['WebGL', 'GLSL', 'D3.js', 'WebAssembly', 'Python'],
		status: 'BETA',
		type: 'Data Platform',
		github: '#',
		demo: '#',
	},
	{
		id: '03',
		title: 'Quantum Task Matrix',
		description:
			'Distributed project management system with blockchain verification and AI-assisted workflow optimization.',
		tech: ['Next.js', 'TypeScript', 'Solidity', 'GraphQL', 'Redis'],
		status: 'ACTIVE',
		type: 'Enterprise Tool',
		github: '#',
		demo: '#',
	},
	{
		id: '04',
		title: 'Cyber Weather Grid',
		description:
			'Real-time atmospheric monitoring system with predictive ML models and immersive 3D weather simulation.',
		tech: ['Vue.js', 'Three.js', 'FastAPI', 'TensorFlow', 'WebGL'],
		status: 'ACTIVE',
		type: 'IoT Platform',
		github: '#',
		demo: '#',
	},
	{
		id: '05',
		title: 'Digital Twin Engine',
		description:
			'Virtual reality environment creator for digital twin simulations with real-time physics synchronization.',
		tech: ['Unity', 'C#', 'WebRTC', 'Socket.io', 'AWS'],
		status: 'DEVELOPMENT',
		type: 'VR Application',
		github: '#',
		demo: null,
	},
	{
		id: '06',
		title: 'Neon Portfolio Core',
		description:
			'This very portfolio - a showcase of advanced web technologies and immersive 3D experiences.',
		tech: ['Next.js', 'Three.js', 'Framer Motion', 'WebGL', 'GLSL'],
		status: 'LIVE',
		type: 'Portfolio',
		github: '#',
		demo: '#',
	},
];

function ProjectCard({ project, index }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="cyber-panel p-6 relative overflow-hidden group cursor-pointer"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			{/* Holographic background */}
			<div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

			{/* Project ID */}
			<div className="absolute top-4 right-4 cyber-text text-sm text-purple-500 opacity-60">
				{project.id}
			</div>

			<div className="relative z-10 space-y-4">
				{/* Header */}
				<div className="space-y-2">
					<div className="cyber-text text-xs text-purple-400">
						{project.type}
					</div>
					<h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 neon-glow">
						{project.title}
					</h3>
				</div>

				{/* Description */}
				<p className="text-gray-300 leading-relaxed text-sm">
					{project.description}
				</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech, i) => (
						<span
							key={i}
							className="px-2 py-1 text-xs border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-white transition-colors duration-200"
						>
							{tech}
						</span>
					))}
				</div>

				{/* Status and Actions */}
				<div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
					<div className="flex items-center space-x-2">
						<div
							className={`w-2 h-2 rounded-full animate-pulse ${
								project.status === 'ACTIVE' || project.status === 'LIVE'
									? 'bg-green-400'
									: project.status === 'BETA'
									? 'bg-yellow-400'
									: 'bg-purple-400'
							}`}
						></div>
						<span className="cyber-text text-xs text-purple-400">
							{project.status}
						</span>
					</div>

					<div className="flex space-x-3">
						<a
							href={project.github}
							className="cyber-text text-xs text-purple-400 hover:text-white transition-colors duration-200"
						>
							SOURCE
						</a>
						{project.demo && (
							<a
								href={project.demo}
								className="cyber-text text-xs text-purple-400 hover:text-white transition-colors duration-200"
							>
								DEMO
							</a>
						)}
					</div>
				</div>
			</div>

			{/* Hover effect line */}
			<div
				className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-500 ${
					isHovered ? 'w-full' : 'w-0'
				}`}
			></div>
		</motion.div>
	);
}

export default function ProjectsPage() {
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
			<div className="absolute inset-0 scan-lines opacity-15"></div>

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
						PROJECTS.DB
					</h1>
					<p className="text-purple-300 mb-8">
						Digital creations from the cyber realm
					</p>
					<div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
				</motion.div>

				{/* Projects Grid */}
				<div className="max-w-7xl mx-auto mb-20">
					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</div>

				{/* Stats Panel */}
				<motion.div
					className="max-w-4xl mx-auto cyber-panel p-8 relative overflow-hidden mb-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="holographic absolute inset-0 opacity-10"></div>

					<div className="relative z-10">
						<div className="flex items-center mb-6">
							<div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
							<h2 className="cyber-text text-xl font-bold text-purple-300">
								SYSTEM.STATS
							</h2>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							{[
								{ label: 'Total Projects', value: '50+', metric: 'DEPLOYED' },
								{ label: 'Code Commits', value: '5.2K', metric: 'PUSHED' },
								{ label: 'Technologies', value: '25+', metric: 'MASTERED' },
								{ label: 'Uptime', value: '99.9%', metric: 'AVAILABILITY' },
							].map((stat, index) => (
								<div key={stat.label}>
									<div className="cyber-text text-2xl font-bold text-white neon-glow mb-2">
										{stat.value}
									</div>
									<div className="text-xs text-purple-400">
										{stat.metric}
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Back Navigation */}
				<motion.div
					className="fixed bottom-8 left-8 z-30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<Link href="/">
						<div className="cyber-panel px-6 py-3 cursor-pointer group hover:scale-105 transition-transform duration-300">
							<span className="cyber-text text-purple-300 group-hover:text-white transition-colors duration-300">
								← RETURN.HOME
							</span>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}