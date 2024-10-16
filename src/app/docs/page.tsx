"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Search, Menu, X, Terminal } from "lucide-react";

const sidebarItems = [
	{
		title: "Getting Started",
		items: ["Quick Start", "Installation", "Configuration"],
	},
	{
		title: "Core Concepts",
		items: ["Project Structure", "Routing", "State Management"],
	},
	{
		title: "Advanced Topics",
		items: ["Authentication", "API Integration", "Deployment"],
	},
	{
		title: "API Reference",
		items: ["CLI Commands", "Configuration Options", "Hooks"],
	},
];

export default function Docs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeSection, setActiveSection] = useState("");

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		const handleScroll = () => {
			const headings = document.querySelectorAll("h2");
			const scrollPosition = window.scrollY;

			for (let i = headings.length - 1; i >= 0; i--) {
				const heading = headings[i];
				if (heading.offsetTop <= scrollPosition + 100) {
					setActiveSection(heading.id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
			<header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-500 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
							whileHover={{ scale: 1.1, rotate: 360 }}
							whileTap={{ scale: 0.9 }}
						>
							<Terminal className="h-5 w-5 text-white" />
						</motion.div>
						<span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400 text-transparent bg-clip-text">
							SaaS Boilerplate CLI
						</span>
					</Link>
					<div className="flex items-center space-x-4">
						<div className="relative hidden md:block">
							<Input
								type="text"
								placeholder="Search documentation..."
								className="w-64 pl-10"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
						</div>
						<button className="md:hidden" onClick={toggleMenu}>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</header>

			<div className="flex-1 flex">
				<aside
					className={`w-64 bg-gray-100 dark:bg-gray-800 overflow-y-auto fixed inset-y-0 left-0 transform ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30`}
				>
					<ScrollArea className="h-full py-6 px-4">
						<nav>
							{sidebarItems.map((section, index) => (
								<div key={index} className="mb-4">
									<h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{section.title}</h3>
									<ul className="space-y-2">
										{section.items.map((item, itemIndex) => (
											<li key={itemIndex}>
												<Link
													href="#"
													className="block text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400"
												>
													{item}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</nav>
					</ScrollArea>
				</aside>

				<main className="flex-1 overflow-y-auto p-6 md:p-8 bg-white dark:bg-gray-900">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Quick Start Guide</h1>
						<p className="text-gray-600 dark:text-gray-300 mb-6">
							Welcome to the SaaS Boilerplate CLI! This guide will help you get up and running quickly. Follow these
							steps to start building your application in no time.
						</p>

						<h2 id="installation" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Step 1: Installation
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							To get started, you&apos;ll need to run our CLI tool. Open your terminal and run the following command:
						</p>
						<pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
							<code className="text-sm">npx saas-boiler-cli</code>
						</pre>

						<h2 id="select-options" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Step 2: Select Options
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							After running the command, you&apos;ll be presented with a series of options to customize your project.
							Select the options that best fit your needs.
						</p>

						<h2 id="install-dependencies" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Step 3: Install Dependencies
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Once you&apos;ve made your selections, install the project dependencies by running:
						</p>
						<pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
							<code className="text-sm">npm install</code>
						</pre>

						<h2 id="run-project" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Step 4: Run Your Project
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Now you&apos;re ready to run your project! Use the following command:
						</p>
						<pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
							<code className="text-sm">npm run dev</code>
						</pre>

						<p className="text-gray-600 dark:text-gray-300 mb-6">
							Your project should now be running on <code>http://localhost:3000</code>. Open this URL in your browser to
							see your application in action!
						</p>

						<div className="bg-teal-100 dark:bg-indigo-900 border-l-4 border-teal-500 dark:border-indigo-500 p-4 mb-6">
							<p className="text-teal-700 dark:text-indigo-300">
								<strong>Pro Tip:</strong> Check out our video tutorials for more in-depth guidance on getting started
								and making the most of our platform.
							</p>
						</div>

						<h2 id="next-steps" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Next Steps
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Now that you have your project up and running, here are some next steps to explore:
						</p>
						<ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
							<li>Explore the project structure</li>
							<li>Learn about the routing system</li>
							<li>Customize the UI components</li>
							<li>Set up your database and API integrations</li>
							<li>Configure authentication (if selected)</li>
							<li>Prepare your project for deployment</li>
						</ul>

						<div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
							<Button variant="outline" className="flex items-center">
								<ChevronRight className="mr-2 h-4 w-4" />
								Next: Project Structure
							</Button>
							<p className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 15, 2023</p>
						</div>
					</div>
				</main>

				<aside className="w-64 hidden lg:block overflow-y-auto sticky top-16 self-start max-h-[calc(100vh-4rem)] border-l border-gray-200 dark:border-gray-700">
					<nav className="p-4">
						<h3 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">On this page</h3>
						<ul className="space-y-2">
							{["installation", "select-options", "install-dependencies", "run-project", "next-steps"].map((id) => (
								<li key={id}>
									<a
										href={`#${id}`}
										className={`text-sm ${
											activeSection === id
												? "text-teal-600 dark:text-indigo-400 font-medium"
												: "text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-indigo-400"
										}`}
									>
										{id
											.split("-")
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(" ")}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</aside>
			</div>
		</div>
	);
}
