"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
	ChevronRight,
	Menu,
	Terminal,
	Clipboard,
	Database,
	CreditCard,
	Shield,
	Mail,
	Zap,
	ArrowRight,
	Github,
	Twitter,
	Layers,
	Server,
	Settings,
	Sun,
	Moon,
} from "lucide-react";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [theme, setTheme] = useState("light");
	const controls = useAnimation();

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	useEffect(() => {
		controls.start((i) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.1 },
		}));
	}, [controls]);

	const fadeInUp: any = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	const staggerChildren = {
		animate: { transition: { staggerChildren: 0.1 } },
	};

	const techStack = [
		{
			name: "Next.Js",
			pic: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
		},
		{
			name: "Angular",
			pic: "https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000",
		},
		{
			name: "GoFiber",
			pic: "https://img.icons8.com/?size=100&id=44442&format=png&color=000000",
		},
		{
			name: "Django",
			pic: "https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000",
		},
		{
			name: "Express",
			pic: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 via-teal-50 to-white dark:from-gray-900 dark:via-indigo-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300">
			{/* Animated background */}
			<div className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200 via-teal-100 to-transparent dark:from-indigo-800 dark:via-indigo-900 dark:to-transparent opacity-50"></div>
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
			</div>

			{/* Content */}
			<div className="relative z-10">
				{/* Header */}
				<header className="container mx-auto py-6 px-4">
					<div className="flex justify-between items-center">
						<Link href="/" className="flex items-center space-x-2">
							<motion.div
								className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
								whileHover={{ scale: 1.1, rotate: 360 }}
								whileTap={{ scale: 0.9 }}
							>
								<Terminal className="h-6 w-6 text-white" />
							</motion.div>
							<motion.span
								className="font-bold text-2xl bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								SaaS Boilerplate CLI
							</motion.span>
						</Link>
						<nav className="hidden md:flex space-x-8">
							{["Features", "Documentation", "Pricing"].map((item, index) => (
								<motion.div key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
									<Link
										href="#"
										className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
									>
										{item}
									</Link>
								</motion.div>
							))}
						</nav>
						<div className="flex items-center space-x-4">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									variant="outline"
									className="bg-transparent text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-colors"
								>
									Get Started
								</Button>
							</motion.div>
							<button
								onClick={toggleTheme}
								className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
							>
								{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
							</button>
							<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
								<Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
							</button>
						</div>
					</div>
					<AnimatePresence>
						{isMenuOpen && (
							<motion.nav
								className="mt-4 md:hidden"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
							>
								{["Features", "Documentation", "Pricing"].map((item, index) => (
									<Link
										key={index}
										href="#"
										className="block py-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
									>
										{item}
									</Link>
								))}
							</motion.nav>
						)}
					</AnimatePresence>
				</header>

				{/* Hero Section */}
				<section className="container mx-auto py-20 px-4 text-center">
					<motion.h1
						className="text-5xl md:text-7xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<span className="bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text">
							Build Your SaaS
						</span>
						<br />
						<motion.span
							className="bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 text-white px-4 py-2 rounded-lg inline-block mt-2"
							initial={{ scale: 0.5 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
						>
							in Minutes, Not Months
						</motion.span>
					</motion.h1>
					<motion.p
						className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
					>
						A comprehensive and flexible SaaS boilerplate CLI designed for modern developers. Choose your stack,
						configure your services, and launch your SaaS product with just one command.
					</motion.p>
					<motion.div
						className="mb-12"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Button className="bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 text-white hover:from-teal-500 hover:to-emerald-600 dark:hover:from-indigo-600 dark:hover:to-cyan-600 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300">
							npx saas-boiler-cli
							<ChevronRight className="ml-2 h-5 w-5" />
						</Button>
					</motion.div>
					<motion.div
						className="flex flex-wrap justify-center items-center gap-8"
						variants={staggerChildren}
						initial="initial"
						animate="animate"
					>
						{techStack.map((tech, index) => (
							<motion.div key={index} className="flex flex-col items-center" variants={fadeInUp} whileHover={{ y: -5 }}>
								<div className="size-16 flex items-center justify-center mb-2 shadow-custom rounded-full">
									<Image src={`${tech.pic}`} alt={tech.name} width={32} height={32} />
								</div>
								<span className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
							</motion.div>
						))}
					</motion.div>
				</section>

				{/* Features Section */}
				<section className="container mx-auto py-20 px-4">
					<motion.h2
						className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
						variants={fadeInUp}
					>
						Key Features
					</motion.h2>
					<motion.div
						className="grid md:grid-cols-3 gap-8"
						variants={staggerChildren}
						initial="initial"
						animate="animate"
					>
						{[
							{
								title: "Frontend",
								description: "Choose from Next.js, Angular, or Nuxt for your frontend framework.",
								icon: Layers,
								color: "from-blue-400 to-blue-600",
							},
							{
								title: "Backend",
								description: "Powered by GoFiber, Django, or Express for robust server-side operations.",
								icon: Server,
								color: "from-green-400 to-green-600",
							},
							{
								title: "Payments",
								description: "Integrated with Stripe, Lemon Squeezy, or PayPal for seamless transactions.",
								icon: CreditCard,
								color: "from-yellow-400 to-yellow-600",
							},
							{
								title: "Authentication",
								description: "Secure login with NextAuth or Clerk, plus Firebase integration.",
								icon: Shield,
								color: "from-red-400 to-red-600",
							},
							{
								title: "Database",
								description: "Support for MySQL, Postgres, MongoDB, or Supabase to store your data.",
								icon: Database,
								color: "from-purple-400 to-purple-600",
							},
							{
								title: "Email",
								description: "Seamless email delivery via Mailgun or SendGrid for user communications.",
								icon: Mail,
								color: "from-pink-400 to-pink-600",
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
								className="group"
							>
								<Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden h-full relative group transition-all duration-300 hover:shadow-xl dark:hover:bg-gray-700">
									<CardContent className="p-6">
										<div
											className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
											style={
												{
													backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
													"var(--tw-gradient-from)": feature.color.split(" ")[1],
													"--tw-gradient-to": feature.color.split(" ")[3],
												} as React.CSSProperties & { [key: string]: string }
											}
										></div>
										<div className="flex items-center mb-4">
											<div
												className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}
											>
												<feature.icon className="h-6 w-6 text-white" />
											</div>
											<h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">{feature.title}</h3>
										</div>
										<p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
										<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 ease-in-out"></div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</section>

				{/* How It Works Section */}
				<section className="container mx-auto py-20 px-4">
					<motion.h2
						className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
						variants={fadeInUp}
					>
						How It Works
					</motion.h2>
					<motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
						<div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-indigo-500/10">
							{[
								{
									title: "Install",
									icon: Terminal,
									iconTwo: Clipboard,
									description: "Get started with a single command",
									code: "npx saas-boiler-cli",
								},
								{ title: "Configure", icon: Settings, description: "Choose your preferred technologies" },
								{ title: "Launch", icon: Zap, description: "Your boilerplate is ready to customize" },
							].map((step, index) => (
								<motion.div
									key={index}
									className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}
								>
									<div className="flex-shrink-0 size-12 bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 rounded-full flex items-center justify-center">
										<step.icon className="size-6 text-white" />
									</div>
									<div className="ml-6 flex-grow">
										<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{step.title}</h3>
										<p className="text-gray-600 dark:text-gray-300">{step.description}</p>
										{step.code && (
											<div className="mt-2 bg-gray-100 dark:bg-gray-900 p-2 rounded-md inline-block">
												<code className="text-teal-600 dark:text-cyan-400 flex items-center justify-between">
													{step.code}
													<step.iconTwo
														onClick={() => {
															navigator.clipboard.writeText(step.code);
														}}
														className="size-6 ml-4 text-white hover:cursor-pointer"
													/>
												</code>
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				{/* FAQ Section */}
				<section className="container mx-auto py-20 px-4">
					<motion.h2
						className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
						variants={fadeInUp}
					>
						Frequently Asked Questions
					</motion.h2>
					<motion.div className="max-w-3xl mx-auto" variants={staggerChildren} initial="initial" animate="animate">
						<Accordion type="single" collapsible className="space-y-4">
							{[
								{
									question: "What is SaaS Boilerplate CLI?",
									answer:
										"SaaS Boilerplate CLI is a command-line tool that helps developers quickly set up a fully-featured SaaS application with customizable tech stack and integrations.",
								},
								{
									question: "Which technologies are supported?",
									answer:
										"We support a variety of modern technologies including Next.js, Angular, Nuxt for frontend; GoFiber, Django, Express for backend; Stripe, Lemon Squeezy, PayPal for payments; and more.",
								},
								{
									question: "Is it free to use?",
									answer:
										"Yes, the CLI tool is free to use. However, some of the services it integrates with may have their own pricing plans.",
								},
								{
									question: "Can I customize the boilerplate after generation?",
									answer:
										"The generated code is yours to modify and extend as needed for your specific SaaS application.",
								},
								{
									question: "Do you offer support?",
									answer:
										"We provide documentation and community support through our GitHub repository. For premium support, please check our website for paid plans.",
								},
							].map((item, index) => (
								<motion.div key={index} variants={fadeInUp}>
									<AccordionItem
										value={`item-${index}`}
										className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
									>
										<AccordionTrigger className="text-left text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors py-4 px-6 bg-white dark:bg-gray-800">
											<span className="text-lg font-semibold">{item.question}</span>
										</AccordionTrigger>
										<AccordionContent className="text-gray-600 dark:text-gray-300 p-6 bg-gray-50 dark:bg-gray-900">
											{item.answer}
										</AccordionContent>
									</AccordionItem>
								</motion.div>
							))}
						</Accordion>
					</motion.div>
				</section>

				{/* CTA Section */}
				<section className="container mx-auto py-20 px-4 text-center">
					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text"
						variants={fadeInUp}
					>
						Ready to build your SaaS?
					</motion.h2>
					<motion.p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl" variants={fadeInUp}>
						Get started in minutes with our powerful SaaS Boilerplate CLI.
					</motion.p>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button className="bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 text-white hover:from-teal-500 hover:to-emerald-600 dark:hover:from-indigo-600 dark:hover:to-cyan-600 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300">
							Start Building Now
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</motion.div>
				</section>

				{/* Footer */}
				<footer className="bg-gray-100 dark:bg-gray-800 py-12">
					<div className="container mx-auto px-4">
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
							<div className="w-full md:w-1/3 mb-6 md:mb-0">
								<ul className="flex justify-center space-x-6">
									{["About", "Blog", "Careers", "Contact"].map((item, index) => (
										<li key={index}>
											<Link
												href="#"
												className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400 transition-colors"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
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
							© 2024 SaaS Boilerplate CLI. All rights reserved.
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
