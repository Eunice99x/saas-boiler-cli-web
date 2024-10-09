"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const staggerChildren = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const faqItems = [
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
		answer: "The generated code is yours to modify and extend as needed for your specific SaaS application.",
	},
	{
		question: "Do you offer support?",
		answer:
			"We provide documentation and community support through our GitHub repository. For premium support, please check our website for paid plans.",
	},
];

export default function Faq({ fadeInUp }: any) {
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
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					Frequently Asked Questions
				</motion.h2>
				<motion.div className="max-w-3xl mx-auto" variants={staggerChildren} initial="initial" animate="animate">
					<Accordion type="single" collapsible className="space-y-4">
						{faqItems.map((item, index) => (
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
			</div>
		</section>
	);
}
