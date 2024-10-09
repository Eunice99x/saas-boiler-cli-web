"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Layers, Server, CreditCard, Shield, Database, Mail } from "lucide-react";

const features = [
	{
		category: "Frontend",
		items: [
			{
				name: "Next.js",
				description: "React framework for production",
				icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
			},
			{
				name: "Angular",
				description: "Platform for building web applications",
				icon: "https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000",
			},
			{
				name: "Nuxt",
				description: "Intuitive Vue Framework",
				icon: "https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000",
			},
		],
		icon: Layers,
		color: "from-blue-400 to-blue-600",
	},
	{
		category: "Backend",
		items: [
			{
				name: "GoFiber",
				description: "Express inspired web framework in Go",
				icon: "https://img.icons8.com/?size=100&id=44442&format=png&color=000000",
			},
			{
				name: "Django",
				description: "High-level Python Web framework",
				icon: "https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000",
			},
			{
				name: "Express",
				description: "Minimalist web framework for Node.js",
				icon: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
			},
		],
		icon: Server,
		color: "from-green-400 to-green-600",
	},
	{
		category: "Payments",
		items: [
			{
				name: "Stripe",
				description: "Online payment processing for businesses",
				icon: "https://img.icons8.com/?size=100&id=iouv9vHfqHvP&format=png&color=000000",
			},
			{
				name: "Lemon Squeezy",
				description: "Platform for selling digital products",
				icon: "https://cdn.prod.website-files.com/6347244ba8d63489ba51c08e/6347244ba8d63469e851c0d6_footer%20small%20logo.svg",
			},
			{
				name: "PayPal",
				description: "Online payments and money transfers",
				icon: "https://img.icons8.com/?size=100&id=13611&format=png&color=000000",
			},
		],
		icon: CreditCard,
		color: "from-yellow-400 to-yellow-600",
	},
	{
		category: "Authentication",
		items: [
			{
				name: "NextAuth",
				description: "Authentication for Next.js",
				icon: "https://next-auth.js.org/img/logo/logo-sm.png",
			},
			{
				name: "Clerk",
				description: "Complete user management solution",
				icon: "https://cdn.sanity.io/images/o0o2tn5x/production/2399b991025c365aafaa6fca85d91deac801e654-1046x1046.png",
			},
			{
				name: "Firebase Auth",
				description: "Multi-provider authentication",
				icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
			},
		],
		icon: Shield,
		color: "from-red-400 to-red-600",
	},
	{
		category: "Database",
		items: [
			{
				name: "MySQL",
				description: "Open-source relational database",
				icon: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000",
			},
			{
				name: "PostgreSQL",
				description: "Advanced open source database",
				icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
			},
			{
				name: "MongoDB",
				description: "Document-oriented NoSQL database",
				icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
			},
			{
				name: "Supabase",
				description: "Open source Firebase alternative",
				icon: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000",
			},
		],
		icon: Database,
		color: "from-purple-400 to-purple-600",
	},
	{
		category: "Email",
		items: [
			{
				name: "Mailgun",
				description: "Transactional Email APIs",
				icon: "https://seeklogo.com/images/M/mailgun-logo-5388F66106-seeklogo.com.png",
			},
			{
				name: "SendGrid",
				description: "Customer communication platform",
				icon: "https://sendgrid.com/content/dam/sendgrid/legacy/themes/sgdotcom/pages/resource/brand/img/SendGrid-Logomark-Color.png",
			},
		],
		icon: Mail,
		color: "from-pink-400 to-pink-600",
	},
];

export default function KeyFeatures() {
	const [activeFeature, setActiveFeature] = useState(features[0]);

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
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Key Features
				</motion.h2>
				<div className="grid md:grid-cols-3 gap-8">
					<Card className="col-span-1 bg-gray-50 dark:bg-gray-800 shadow-lg">
						<CardContent className="p-6">
							<ul className="space-y-4">
								{features.map((feature) => (
									<motion.li
										key={feature.category}
										className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${
											activeFeature.category === feature.category
												? "bg-white dark:bg-gray-700 shadow-md"
												: "hover:bg-white dark:hover:bg-gray-700"
										}`}
										onClick={() => setActiveFeature(feature)}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="flex items-center">
											<feature.icon
												className={`w-6 h-6 mr-3 ${
													activeFeature.category === feature.category ? "text-primary" : "text-gray-500"
												}`}
											/>
											<span
												className={`font-medium ${
													activeFeature.category === feature.category
														? "text-primary"
														: "text-gray-700 dark:text-gray-300"
												}`}
											>
												{feature.category}
											</span>
										</div>
										<ChevronRight
											className={`w-5 h-5 ${
												activeFeature.category === feature.category ? "text-primary" : "text-gray-400"
											}`}
										/>
									</motion.li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card className="col-span-2 bg-white dark:bg-gray-800 shadow-lg">
						<CardContent className="p-6">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeFeature.category}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									className="grid md:grid-cols-2 gap-6"
								>
									{activeFeature.items.map((item, index) => (
										<motion.div
											key={item.name}
											className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											<div className="flex items-center mb-4">
												<div className="w-12 h-12 rounded-full bg-white dark:bg-gray-600 flex items-center justify-center mr-4 shadow-md">
													<img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
												</div>
												<h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
											</div>
											<p className="text-gray-600 dark:text-gray-300">{item.description}</p>
										</motion.div>
									))}
								</motion.div>
							</AnimatePresence>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
