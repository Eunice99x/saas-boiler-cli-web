"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, ChevronRight } from "lucide-react";
import { steps } from "@/data";

export default function HowItWorks() {
	const [activeStep, setActiveStep] = useState(0);

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
					How It Works
				</motion.h2>
				<div className="max-w-5xl mx-auto">
					<Card className="bg-white dark:bg-gray-800 shadow-xl">
						<CardContent className="p-6">
							<div className="grid md:grid-cols-3 gap-6">
								<div className="md:col-span-1">
									<ul className="space-y-4">
										{steps.map((step, index) => (
											<motion.li
												key={step.title}
												className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${
													activeStep === index
														? "bg-gray-100 dark:bg-gray-700 shadow-md"
														: "hover:bg-gray-100 dark:hover:bg-gray-700"
												}`}
												onClick={() => setActiveStep(index)}
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<div className="flex items-center">
													<div
														className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
															activeStep === index
																? "bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-indigo-400 dark:to-cyan-400"
																: "bg-gray-200 dark:bg-gray-600"
														}`}
													>
														<step.icon
															className={`w-5 h-5 ${
																activeStep === index ? "text-white" : "text-gray-500 dark:text-gray-400"
															}`}
														/>
													</div>
													<span
														className={`ml-3 font-medium ${
															activeStep === index
																? "text-teal-600 dark:text-indigo-400"
																: "text-gray-700 dark:text-gray-300"
														}`}
													>
														{step.title}
													</span>
												</div>
												<ChevronRight
													className={`w-5 h-5 ${
														activeStep === index ? "text-teal-600 dark:text-indigo-400" : "text-gray-400"
													}`}
												/>
											</motion.li>
										))}
									</ul>
								</div>
								<div className="md:col-span-2">
									<motion.div
										key={activeStep}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3 }}
										className="h-full flex flex-col justify-between"
									>
										<div>
											<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
												{steps[activeStep].title}
											</h3>
											<p className="text-gray-600 dark:text-gray-300 mb-4">{steps[activeStep].description}</p>
											<p className="text-gray-600 dark:text-gray-300 mb-6">{steps[activeStep].details}</p>
											{steps[activeStep].code && (
												<div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6">
													<div className="flex items-center justify-between">
														<code className="text-sm text-teal-600 dark:text-cyan-400">{steps[activeStep].code}</code>
														<Button
															variant="ghost"
															size="icon"
															onClick={() => {
																navigator.clipboard.writeText(steps[activeStep].code!);
															}}
														>
															<Clipboard className="h-4 w-4" />
														</Button>
													</div>
												</div>
											)}
										</div>
										<div className="flex justify-between mt-6">
											<Button
												variant="outline"
												onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
												disabled={activeStep === 0}
											>
												Previous
											</Button>
											<Button
												onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
												disabled={activeStep === steps.length - 1}
											>
												Next
											</Button>
										</div>
									</motion.div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
