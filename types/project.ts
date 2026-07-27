export type SignalLayer = "frontend" | "backend" | "infra";

export interface Project {
	slug: string;
	name: string;
	flagship: boolean;
	order: number;
	status: "completed" | "in-progress";
	role: string;
	timeline: string;
	year: number;
	tags: string[];
	tagColors: Record<string, SignalLayer>;
	hook: string;
	overview: string;
	challenge: string;
	solution: string;
	reflection: string;
	links: { live: string | null; source: string };
	cover: string;
}
