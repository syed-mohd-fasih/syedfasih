import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const signalColor = {
	frontend: "text-signal-frontend",
	backend: "text-signal-backend",
	infra: "text-signal-infra",
} as const;

const projects = projectsData.projects as Project[];

export function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const sorted = [...projects].sort((a, b) => a.order - b.order);
	const project = sorted.find((p) => p.slug === slug);
	if (!project) notFound();

	const currentIndex = sorted.findIndex((p) => p.slug === slug);
	const next = sorted[(currentIndex + 1) % sorted.length];

	return (
		<div className="max-w-3xl mx-auto px-6 py-24">
			<Link href="/projects" className="font-mono text-sm text-signal-frontend hover:underline">
				← all projects
			</Link>

			<h1 className="font-display text-4xl mt-6 mb-4">{project.name}</h1>
			<p className="text-text-muted text-lg mb-6">{project.hook}</p>

			<div className="flex flex-wrap gap-2 font-mono text-xs mb-6">
				{project.tags.map((tag) => (
					<span key={tag} className={signalColor[project.tagColors[tag]]}>
						{tag}
					</span>
				))}
			</div>

			<div className="flex gap-4 font-mono text-sm mb-10">
				{project.links.live && (
					<a href={project.links.live} className="text-signal-frontend hover:underline">
						live demo ↗
					</a>
				)}
				{project.links.source && (
					<a href={project.links.source} className="text-text-muted hover:text-signal-frontend">
						view source ↗
					</a>
				)}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm mb-10 border-y border-white/5 py-6">
				<div>
					<p className="text-text-muted text-xs mb-1">Role</p>
					<p>{project.role}</p>
				</div>
				<div>
					<p className="text-text-muted text-xs mb-1">Timeline</p>
					<p>{project.timeline}</p>
				</div>
				<div>
					<p className="text-text-muted text-xs mb-1">Year</p>
					<p>{project.year}</p>
				</div>
				<div>
					<p className="text-text-muted text-xs mb-1">Status</p>
					<p className="capitalize">{project.status}</p>
				</div>
			</div>

			{project.cover && (
				<div className="mb-12 rounded-lg overflow-hidden border border-white/5">
					<Image src={project.cover} alt={project.name} width={1200} height={675} className="w-full h-auto" />
				</div>
			)}

			<article className="space-y-10 text-text-muted leading-relaxed">
				<section>
					<h2 className="font-mono text-sm text-signal-frontend mb-2">01 / Overview</h2>
					<p>{project.overview}</p>
				</section>
				<section>
					<h2 className="font-mono text-sm text-signal-backend mb-2">02 / The challenge</h2>
					<p>{project.challenge}</p>
				</section>
				<section>
					<h2 className="font-mono text-sm text-signal-infra mb-2">03 / The solution</h2>
					<p>{project.solution}</p>
				</section>
				<section>
					<h2 className="font-mono text-sm text-text mb-2">04 / Reflection</h2>
					<p>{project.reflection}</p>
				</section>
			</article>

			<div className="mt-16 pt-8 border-t border-white/5 flex justify-between font-mono text-sm">
				<Link href={`/projects/${next.slug}`} className="text-signal-frontend hover:underline">
					next: {next.name} →
				</Link>
				<Link href="/contact" className="text-text-muted hover:text-signal-frontend">
					want something like this? →
				</Link>
			</div>
		</div>
	);
}
