export default function Home() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 lg:px-12"
        >
            <p className="font-mono text-accent text-sm mb-5">Hi, my name is.</p>
            <h1 className="text-5x1 sm:text-7xl font-bold text-zin-100 mb-4">
                Domenic Jernigan.
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-zinc-400 mb-8">
                I build at the intersection of AI/ML and systems security.
            </h2>
        </section>
    );
}