export default function Contact() {
	return (
		<div className="max-w-2xl mx-auto px-6 py-24">
			<h1 className="font-display text-4xl mb-4">Let's talk</h1>
			<p className="text-text-muted mb-12">Reach out about work, a project idea, or just to compare notes.</p>

			<div className="space-y-4 font-mono">
				<a
					href="mailto:you@example.com"
					className="block bg-surface border border-white/5 rounded-lg p-5 hover:border-signal-frontend/40 transition-colors"
				>
					you@example.com
				</a>
				<a
					href="https://github.com/syed-mohd-fasih"
					className="block bg-surface border border-white/5 rounded-lg p-5 hover:border-signal-backend/40 transition-colors"
				>
					github.com/syed-mohd-fasih
				</a>
				<a
					href="https://www.linkedin.com/in/syed-muhammad-fasih/"
					className="block bg-surface border border-white/5 rounded-lg p-5 hover:border-signal-infra/40 transition-colors"
				>
					linkedin.com/in/syed-muhammad-fasih
				</a>
			</div>
		</div>
	);
}
