'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';

const projects = [
	{
		id: '01',
		title: 'Serene-Sphere',
		description:
			'AI-powered platform equiped with personal ai therapist and ai powered assessments and mood tracker with real time analytics.',
		tech: ['React', 'Tailwindcss', 'Node.js', 'GenAI', 'Express','MongoDB'],
		status: 'LIVE',
		type: 'Web Application',
		github: 'https://github.com/D-Zoro/Serene-sphere.git',
		demo: 'https://serene-sphere-neonpulse.vercel.app/',
	},
	{
		id: '02',
		title: 'Books4All',
		description:
			'A web application where people can resell or buy used books without any hassle.',
		tech: ['Nextjs', 'MongoDB', 'tailwindcss', 'Node.js', 'NextAuth'],
		status: 'LIVE',
		type: 'Web Application',
		github: 'https://github.com/D-Zoro/Books4All-remastered.git',
		demo: 'https://books4all.me',
	},
	{
		id: '03',
		title: 'PrAIya',
		description:
			'AI api powered ai gf(just being considerate about my fellow homies  (^_^) )',
		tech: ['Shell', 'GenAI', 'API'],
		status: 'BETA',
		type: 'Script',
		github: 'https://github.com/D-Zoro/PrAIya.git',
		demo: '#',
	},
	{
		id: '04',
		title: 'AIRO',
		description:
			'Real time air pollution prediction using trained ai models based on data set from ground and satellite stations',
		tech: ['Vue.js', 'Three.js', 'FastAPI', 'TensorFlow', 'WebGL'],
		status: 'DEVELOPMENT',
		type: 'AIML Application',
		github: 'https://github.com/D-Zoro/protoType.git',
		demo: '#',
	},
	{
		id: '05',
		title: 'Search Engine Result Page',
		description:
			'Simple search engine result page implemented using serper api key for processing query',
		tech: ['Nextjs', 'Tailwindcss', 'API', 'Nodejs'],
		status: 'BETA',
		type: 'Web Application',
		github: 'https://github.com/D-Zoro/next-serp-app.git',
		demo: null,
	},
	{
		id: '06',
		title: 'Neonpulse Portfolio Core',
		description:
			'This very portfolio - a showcase of advanced web technologies and immersive 3D experiences.',
		tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwindcss'],
		status: 'LIVE',
		type: 'Portfolio',
		github: 'https://github.com/D-Zoro/next-serp-app.git',
		demo: '/',
	},
];

function ProjectCard({ project, index }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="cyber-panel p-6 relative overflow-hidden group cursor-pointer bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			// onClick={ () => window.open(project.demo || project.github,'_blank')}
		>
			{/* Holographic background */}
			<div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

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
				<div className="mt-8 pt-6 border-t border-purple-500/30 grid grid-cols-3 gap-6"></div>

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
								 { label: 'Repos Explored', value: '69+', metric: 'Repos Explored' },
								 { label: 'Keybinds Burned', value: '1337', metric: 'Keybinds Burned' },
								 { label: 'Linux Hours', value: '420+', metric: 'Linux Hours' },
								 { label: 'Sleep Uptime', value: '0%', metric: 'Sleep Time' },
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