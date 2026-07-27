import Link from "next/link";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const signalColor = {
	frontend: "text-signal-frontend",
	backend: "text-signal-backend",
	infra: "text-signal-infra",
} as const;

const projects = projectsData.projects as Project[];

export default function ProjectsList() {
	const sorted = [...projects].sort((a, b) => a.order - b.order);

	return (
		<div className="max-w-5xl mx-auto px-6 py-24">
			<h1 className="font-display text-4xl mb-2">Projects</h1>
			<p className="text-text-muted mb-12">Everything I've shipped, and what's still cooking.</p>

			<div className="divide-y divide-white/5">
				{sorted.map((p) => (
					<Link
						key={p.slug}
						href={`/projects/${p.slug}`}
						className="group flex items-center justify-between py-6 hover:bg-surface/50 -mx-6 px-6 transition-colors"
					>
						<div>
							<div className="flex items-center gap-3 mb-1">
								<h2 className="font-display text-xl group-hover:text-signal-frontend transition-colors">
									{p.name}
								</h2>
								{p.status === "in-progress" && (
									<span className="font-mono text-xs text-signal-infra border border-signal-infra/40 rounded px-2 py-0.5">
										in progress
									</span>
								)}
							</div>
							<p className="text-text-muted text-sm max-w-lg">{p.hook}</p>
							<div className="flex flex-wrap gap-2 font-mono text-xs mt-2">
								{p.tags.map((tag) => (
									<span key={tag} className={signalColor[p.tagColors[tag]]}>
										{tag}
									</span>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
