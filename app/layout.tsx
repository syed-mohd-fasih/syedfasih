import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const body = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
	title: "Syed Muhammad Fasih — Full-Stack Developer",
	description: "Full-stack developer building systems that talk to each other.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-bg text-text`}>
				<Nav />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
