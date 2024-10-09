"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Github, Twitter } from "lucide-react";

export default function Footer() {
	const date = new Date().getFullYear();
	return (
		<footer className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-12">
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
				<div className="flex flex-wrap justify-between items-center">
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<Link href="/" className="flex items-center space-x-2">
							<motion.div
								className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
								whileHover={{ scale: 1.1, rotate: 360 }}
								whileTap={{ scale: 0.9 }}
							>
								<Terminal className="h-5 w-5 text-white" />
							</motion.div>
							<span className="font-bold text-xl bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text">
								SaaS Boilerplate CLI
							</span>
						</Link>
					</div>

					<Link
						href="#"
						className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
					>
						Documentation
					</Link>

					<div className="w-full md:w-1/3 flex justify-end space-x-4">
						<motion.a
							href="#"
							className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Github className="h-6 w-6" />
						</motion.a>
						<motion.a
							href="#"
							className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Twitter className="h-6 w-6" />
						</motion.a>
					</div>
				</div>
				<div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
					&copy; {date} SaaS Boilerplate CLI. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
