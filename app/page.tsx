import Link from "next/link";
import { Dot } from "lucide-react";

import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";
import TechStrip from "@/components/TechStrip";

const projects = projectsData.projects as Project[];
const signalColor = {
	frontend: "text-signal-frontend",
	backend: "text-signal-backend",
	infra: "text-signal-infra",
} as const;

export default function Home() {
	const flagships = projects.filter((p) => p.flagship).sort((a, b) => a.order - b.order);

	return (
		<div className="px-6">
			{/* Hero */}
			<section className="py-24 max-w-5xl mx-auto">
				<p className="font-mono text-sm text-signal-frontend mb-4">{"> full-stack developer"}</p>
				<h1 className="font-display lg:text-9xl md:text-8xl sm:text-7xl font-semibold tracking-tight mb-6">
					Syed Muhammad <span className="text-signal-frontend">Fasih</span>
				</h1>
				<p className="text-text-muted text-lg max-w-xl">
					I build systems where the frontend, backend, and data layer actually talk to each other — cleanly,
					in real time, without duct tape.
				</p>
			</section>

			{/* Tech strip */}
			<section className="relative py-6 border-y border-white/5 overflow-hidden">
				<div className="flex w-max gap-6 animate-marquee">
					<TechStrip />
					<TechStrip />
				</div>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-bg to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-bg to-transparent" />
			</section>

			{/* About */}
			<section className="py-16 max-w-5xl mx-auto">
				<h2 className="font-display text-xl mb-4">About</h2>
				<p className="text-text-muted leading-relaxed">
					Write 2-3 sentences here, in your own voice — background, what you focus on, what you're into
					outside pure output (Blender, Linux internals, whatever's true).
				</p>
			</section>

			{/* Flagships */}
			<section className="py-16 max-w-5xl mx-auto">
				<div className="flex items-baseline justify-between mb-8">
					<h2 className="font-display text-xl">Selected work</h2>
					<Link href="/projects" className="font-mono text-sm text-signal-frontend hover:underline">
						see all projects →
					</Link>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{flagships.map((p) => (
						<Link
							key={p.slug}
							href={`/projects/${p.slug}`}
							className="block bg-surface border border-white/5 rounded-lg p-6 hover:border-signal-frontend/40 transition-colors"
						>
							<h3 className="font-display text-lg mb-2">{p.name}</h3>
							<p className="text-text-muted text-sm mb-4">{p.hook}</p>
							<div className="flex flex-wrap gap-2 font-mono text-xs">
								{p.tags.map((tag) => (
									<span
										key={tag}
										className={signalColor[p.tagColors[tag] as keyof typeof signalColor]}
									>
										{tag}
									</span>
								))}
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Contact — visible on Home, not just linked */}
			<section className="py-16 max-w-5xl mx-auto border-t border-white/5">
				<h2 className="font-display text-xl mb-4">Get in touch</h2>
				<div className="flex flex-wrap gap-6 font-mono text-sm">
					<a href="mailto:you@example.com" className="text-signal-frontend hover:underline">
						you@example.com
					</a>
					<a href="https://github.com/syed-mohd-fasih" className="text-text-muted hover:text-signal-frontend">
						github.com/syed-mohd-fasih
					</a>
					<a
						href="https://www.linkedin.com/in/syed-muhammad-fasih/"
						className="text-text-muted hover:text-signal-frontend"
					>
						linkedin
					</a>
				</div>
			</section>
		</div>
	);
}
