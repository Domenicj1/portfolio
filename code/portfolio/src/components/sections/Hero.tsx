import { Github, Linkedin, Mail, FileText} from "lucide-react";

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
            <p className="text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed">
                I&apos;m a third-year at UC San Diego studying Computer Science and
        Cognitive Science (ML &amp; Neural Computation). I&apos;m especially
        interested in applied ML, full-stack engineering, and the security
        side of AI systems.
            </p>
        </section>
    );
}