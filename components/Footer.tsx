import { AtSignIcon } from "./ui/at-sign";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";

export default function Footer() {
	return (
		<footer className="border-t border-white/5 mt-24">
			<div className="max-w-5xl mx-auto px-6 py-10 flex justify-around gap-6 text-sm text-text-muted font-mono">
				<a href="mailto:syedfaseeh374@gmail.com" className="hover:text-signal-frontend transition-colors">
					<div className="flex items-center justify-center gap-2">
						<AtSignIcon />
						Email
					</div>
				</a>
				<a href="https://github.com/syed-mohd-fasih" className="hover:text-signal-frontend transition-colors">
					<div className="flex items-center justify-center gap-2">
						<GithubIcon />
						GitHub
					</div>
				</a>
				<a
					href="https://www.linkedin.com/in/syed-muhammad-fasih/"
					className="hover:text-signal-frontend transition-colors"
				>
					<div className="flex items-center justify-center gap-2">
						<LinkedinIcon />
						LinkedIn
					</div>
				</a>
			</div>
		</footer>
	);
}
