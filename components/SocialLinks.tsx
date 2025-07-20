import { motion } from 'framer-motion';

const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/your-profile',
		icon: '/icons/linkedin.svg',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/your-profile',
		icon: '/icons/github.svg',
	},
];

export default function SocialLinks() {
	return (
		<div className="absolute top-4 right-4 flex space-x-4 z-50">
			{socialLinks.map((link) => (
				<motion.a
					key={link.name}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-full border border-purple-500 hover:bg-purple-400 transition-all duration-300"
					whileHover={{
						scale: 1.2,
						boxShadow: '0px 0px 10px 2px #8b5cf6',
					}}
				>
					<img src={link.icon} alt={link.name} className="w-6 h-6 text-purple-300" />
				</motion.a>
			))}
		</div>
	);
}