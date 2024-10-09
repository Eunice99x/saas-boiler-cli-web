"use client";
import { useState, useEffect } from "react";
import KeyFeatures from "@/components/features/features";
import HowItWorks from "@/components/howitworks/howitworks";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Faq from "@/components/faq/faq";
import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import { useAnimation } from "framer-motion";

export default function Home() {
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

	return (
		<>
			<div className="relative z-10">
				<Header theme={theme} toggleTheme={toggleTheme} />
				<Hero fadeInUp={fadeInUp} />
				<KeyFeatures />
				<HowItWorks />
				<Faq fadeInUp={fadeInUp} staggerChildren={staggerChildren} />
				<Cta fadeInUp={fadeInUp} />
				<Footer />
			</div>
		</>
	);
}
