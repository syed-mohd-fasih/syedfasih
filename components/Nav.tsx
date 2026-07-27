import Link from "next/link";

export default function Nav() {
	return (
		<header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-white/5">
			<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link href="/" className="font-display font-medium tracking-tight">
					Syed Fasih
				</Link>
				<nav className="flex gap-6 text-sm text-text-muted font-mono">
					<Link href="/projects" className="hover:text-signal-frontend transition-colors">
						projects
					</Link>
					<Link href="/contact" className="hover:text-signal-frontend transition-colors">
						contact
					</Link>
				</nav>
			</div>
		</header>
	);
}
