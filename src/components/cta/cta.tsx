"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta({ fadeInUp }: any) {
	return (
		<section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-20">
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
			<div className="container mx-auto px-4 text-center relative z-10">
				<motion.h2
					className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					Ready to build your SaaS?
				</motion.h2>
				<motion.p
					className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					Get started in minutes with our powerful SaaS Boilerplate CLI.
				</motion.p>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button className="bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 text-white hover:from-teal-500 hover:to-emerald-600 dark:hover:from-indigo-600 dark:hover:to-cyan-600 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300">
						Start Building Now
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
