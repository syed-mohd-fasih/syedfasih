export default function Footer() {
	return (
		<footer className="border-t border-white/5 mt-24">
			<div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap gap-6 text-sm text-text-muted font-mono">
				<a href="mailto:you@example.com" className="hover:text-signal-frontend transition-colors">
					you@example.com
				</a>
				<a href="https://github.com/syed-mohd-fasih" className="hover:text-signal-frontend transition-colors">
					github
				</a>
				<a
					href="https://www.linkedin.com/in/syed-muhammad-fasih/"
					className="hover:text-signal-frontend transition-colors"
				>
					linkedin
				</a>
			</div>
		</footer>
	);
}
