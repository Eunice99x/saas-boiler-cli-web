"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header({ theme, toggleTheme }: any) {
	return (
		<header className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-6">
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
			<div className="flex container justify-between items-center relative z-10">
				<Link href="/" className="flex items-center space-x-2">
					<motion.span
						className="font-bold text-2xl bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						SB-CLI
					</motion.span>
				</Link>
				<div className="flex items-center space-x-4">
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link
							// variant="outline"
							href="/docs"
							className="bg-transparent text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-colors"
						>
							Documentation
						</Link>
					</motion.div>
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
					>
						{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
					</button>
				</div>
			</div>
		</header>
	);
}
