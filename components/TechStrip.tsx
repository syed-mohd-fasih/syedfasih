import { Dot } from "lucide-react";

export default function TechStrip() {
	const technologies = [
		"C/C++/C#",
		"DotNet",
		"TS/JS",
		"ReactJS",
		"NextJS",
		"NestJS",
		"NodeJS",
		"Python",
		"Flask",
		"FastApi",
		"Django",
		"MongoDB",
		"SQL",
		"MS-SQL",
		"MySQL",
		"PostgreSQL",
		"Firebase",
	];
	return (
		<div className="flex shrink-0 items-center gap-6 whitespace-nowrap">
			{technologies.map((tech) => (
				<div key={tech} className="flex items-center gap-6 font-mono text-lg text-text-muted">
					<span>{tech}</span>
					<Dot size={18} />
				</div>
			))}
		</div>
	);
}
