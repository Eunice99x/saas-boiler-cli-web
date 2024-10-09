import { Layers, Server, CreditCard, Shield, Database, Mail, Code, Settings, Zap, Terminal } from "lucide-react";

export const features = [
	{ icon: Code, title: "Multiple Frameworks", description: "Support for React, Vue, and Angular" },
	{ icon: Database, title: "Database Integration", description: "Easy setup with popular databases" },
	{ icon: Shield, title: "Authentication", description: "Built-in auth and user management" },
];

export const keyFeatures = [
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

export const steps = [
	{
		title: "Install",
		icon: Terminal,
		description: "Get started with a single command",
		code: "npx saas-boiler-cli",
		details:
			"Our CLI tool is designed for quick and easy installation. Just run this command in your terminal, and you'll be up and running in no time.",
	},
	{
		title: "Configure",
		icon: Settings,
		description: "Choose your preferred technologies",
		details:
			"Customize your stack by selecting from a variety of frontend frameworks, backend technologies, databases, and more. Our intuitive configuration process ensures you get exactly what you need.",
	},
	{
		title: "Launch",
		icon: Zap,
		description: "Your boilerplate is ready to customize",
		details:
			"Once configured, your boilerplate is instantly generated. You'll have a fully functional SaaS foundation that you can immediately start building upon.",
	},
];

export const faqItems = [
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
