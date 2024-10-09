"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Terminal, Zap, Clock, Code, Database, Shield } from "lucide-react";

export default function Hero({ fadeInUp }: any) {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	const features = [
		{ icon: Code, title: "Multiple Frameworks", description: "Support for React, Vue, and Angular" },
		{ icon: Database, title: "Database Integration", description: "Easy setup with popular databases" },
		{ icon: Shield, title: "Authentication", description: "Built-in auth and user management" },
	];

	return (
		<section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-20 sm:py-32">
			<div className="absolute inset-0 z-0">
				<svg
					className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-gray-700"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							x="50%"
							y={-1}
							patternUnits="userSpaceOnUse"
						>
							<path d="M100 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
				</svg>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<motion.h1
							className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<span className="block text-gray-900 dark:text-white">Build Your SaaS</span>
							<span className="block mt-2">
								<span className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 text-transparent bg-clip-text">
									in Minutes, Not Months
								</span>
							</span>
						</motion.h1>
						<motion.p
							className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
							variants={fadeInUp}
							initial="initial"
							animate="animate"
						>
							A comprehensive and flexible SaaS boilerplate CLI designed for modern developers. Choose your stack,
							configure your services, and launch your SaaS product with just one command.
						</motion.p>
						<motion.div
							className="mt-10 flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Button
								size="lg"
								className="bg-teal-600 hover:bg-teal-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white"
							>
								npx saas-boiler-cli
								<ChevronRight className="ml-2 h-5 w-5" />
							</Button>
							<Button size="lg" variant="outline" onClick={() => setIsVideoOpen(true)}>
								Watch Demo
							</Button>
						</motion.div>
					</div>
					<div className="lg:pl-8">
						<motion.div
							className="relative rounded-2xl bg-gray-900 shadow-xl overflow-hidden"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 opacity-10"></div>
							<div className="relative p-6">
								<Terminal className="w-12 h-12 text-teal-500 dark:text-indigo-400 mb-6" />
								<h3 className="text-2xl font-bold text-white mb-4">Lightning Fast Setup</h3>
								<p className="text-gray-300 mb-6">
									Get your SaaS project up and running in minutes with our intuitive CLI tool.
								</p>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex items-center text-teal-300 dark:text-indigo-300">
										<Zap className="w-5 h-5 mr-2" />
										<span>Instant Deployment</span>
									</div>
									<div className="flex items-center text-emerald-300 dark:text-cyan-300">
										<Clock className="w-5 h-5 mr-2" />
										<span>Save 100+ Hours</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				<motion.div
					className="mt-20"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
							>
								<feature.icon className="w-10 h-10 text-teal-500 dark:text-indigo-400 mb-4" />
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
								<p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
			<AnimatePresence>
				{isVideoOpen && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-3xl w-full mx-4"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.9 }}
						>
							<div className="aspect-w-16 aspect-h-9 mb-4">
								<iframe
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="w-full h-full rounded"
								></iframe>
							</div>
							<Button onClick={() => setIsVideoOpen(false)} className="w-full">
								Close
							</Button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
