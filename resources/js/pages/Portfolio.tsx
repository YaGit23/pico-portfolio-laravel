import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Card from '@/components/Card';
import CaseDialog from '@/components/CaseDialog';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import { education, featuredStudy, projects, skills, type CaseStudy, type Category } from '@/data/portfolio';

const EMAIL = 'shikinimiki23@gmail.com';

const filters: { key: 'all' | Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web/UI design' },
    { key: '3d', label: '3D designs' },
];

const stats = [
    ['3+', 'Projects built'],
    ['3', 'Core languages (HTML, CSS, JS)'],
    ['1st', 'Portfolio website'],
    ['BSIT', '3rd year, UCU'],
];

export default function Portfolio() {
    const [filter, setFilter] = useState<'all' | Category>('all');
    const [study, setStudy] = useState<CaseStudy | null>(null);
    const [copyNote, setCopyNote] = useState('');

    const visible = projects.filter((p) => filter === 'all' || p.category === filter);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopyNote('Copied');
        } catch {
            setCopyNote('Copy failed. Select the address manually.');
        }
        setTimeout(() => setCopyNote(''), 2000);
    };

    return (
        <div className="min-h-screen bg-ink font-sans text-paper antialiased">
            <Head title="Emman Pico | IT Student">
                <meta name="description" content="Portfolio of Emmanuel Pico, an IT student and aspiring web developer." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-amber focus:px-3 focus:py-2 focus:text-ink">
                Skip to content
            </a>

            <Navbar />

            <main id="main" className="mx-auto max-w-5xl px-5 pb-28 md:pb-12">
                {/* HOME */}
                <section id="home" className="scroll-mt-20 py-10 md:py-16" aria-labelledby="hero-title">
                    <h1 id="hero-title" className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                        Building clean, responsive websites with modern web technologies.
                    </h1>
                    <p className="mt-5 max-w-xl text-mute">
                        IT student and aspiring web developer. I work with HTML, Tailwind CSS, and JavaScript to turn designs into working websites.
                    </p>
                    <a href="#work" className="btn mt-7">
                        View my projects
                    </a>

                    <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {stats.map(([value, label]) => (
                            <Card key={label}>
                                <dd className="font-serif text-3xl">{value}</dd>
                                <dt className="lbl mt-1">{label}</dt>
                            </Card>
                        ))}
                    </dl>

                    <Card as="article" className="mt-10 grid gap-5 md:grid-cols-2 md:items-center">
                        <img src="/images/portfolio-preview.png" alt="Screenshot of my personal portfolio website" className="aspect-video w-full rounded-xl border border-line object-cover" />
                        <div>
                            <p className="lbl">Featured project, 2026</p>
                            <h2 className="mt-2 font-serif text-2xl">Personal Portfolio Website</h2>
                            <p className="mt-2 text-mute">A responsive portfolio website built from my own Figma design, using HTML, Tailwind CSS, and vanilla JavaScript.</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {['HTML', 'Tailwind CSS', 'Figma'].map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </div>
                            <button type="button" onClick={() => setStudy(featuredStudy)} className="btn mt-5 w-full md:w-auto">
                                Explore case study
                            </button>
                        </div>
                    </Card>

                    <div className="mt-10">
                        <h2 className="lbl mb-3">Trusted collaborations</h2>
                        <ul className="flex flex-wrap gap-2">
                            {['Claude', 'Chatgpt', 'Deepseek', 'Gemini'].map((n) => (
                                <li key={n} className="card px-4 py-2">
                                    {n}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* WORK */}
                <section id="work" className="scroll-mt-20 py-10" aria-labelledby="work-title">
                    <SectionTitle id="work-title" label="Projects" title="Selected work">
                        Web projects and school activities I've built while studying IT, 2023 to 2026.
                    </SectionTitle>

                    <div role="group" aria-label="Filter projects" className="mt-6 flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                type="button"
                                aria-pressed={filter === f.key}
                                onClick={() => setFilter(f.key)}
                                className="rounded-full border border-line px-4 py-2 text-sm aria-pressed:border-amber aria-pressed:bg-amber aria-pressed:text-ink"
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {visible.map((p) => (
                            <ProjectCard key={p.id} project={p} onView={(proj) => setStudy(proj.study)} />
                        ))}
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="scroll-mt-20 py-10" aria-labelledby="about-title">
                    <div className="grid items-center gap-8 md:grid-cols-[18rem_1fr]">
                        <img src="/images/profile.jpg" alt="Portrait of me sitting outdoors among tall pine trees" className="mx-auto aspect-[3/4] w-full max-w-xs rounded-3xl border border-line object-cover object-[50%_80%] md:mx-0" />
                        <div>
                            <p className="lbl">Profile and biography</p>
                            <h2 id="about-title" className="h2 mt-1">
                                About me
                            </h2>
                            <p className="mt-4 max-w-prose text-mute">
                                Hi, I’m an Information Technology student who enjoys building things for the web. I’m learning to turn ideas into clean, responsive websites using HTML, Tailwind CSS, and JavaScript, and I’m always looking for ways to sharpen my
                                skills and take on new challenges. This portfolio showcases my projects and the progress I’ve made along the way.
                            </p>
                            <p className="mt-3 max-w-prose text-mute">
                                <strong className="text-paper">Goal:</strong> To become a well-rounded web developer who creates fast, accessible, and thoughtfully designed digital experiences.
                            </p>
                        </div>
                    </div>

                    <h3 className="mt-12 font-serif text-2xl">Skills</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {skills.map((g) => (
                            <Card key={g.group}>
                                <h4 className="font-medium">{g.group}</h4>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {g.items.map((s) => (
                                        <li key={s} className="tag">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                    <h3 className="mt-12 font-serif text-2xl">Education</h3>
                    <ol className="mt-4 space-y-3 border-l border-line pl-5">
                        {education.map((e) => (
                            <Card as="li" key={e.school}>
                                <p className="lbl">{e.years}</p>
                                <p className="mt-1 font-medium">{e.school}</p>
                                <p className="text-sm text-mute">{e.detail}</p>
                            </Card>
                        ))}
                    </ol>
                </section>

                {/* CONTACT */}
                <section id="contact" className="scroll-mt-20 py-10" aria-labelledby="contact-title">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 id="contact-title" className="h2">
                                Let's work together
                            </h2>
                            <p className="mt-3 max-w-prose text-mute">I'm open to web development projects, school collaborations, and learning opportunities. Send me a message and I'll get back to you.</p>
                            <p className="mt-6 flex flex-wrap items-center gap-3">
                                <a href={`mailto:${EMAIL}`} className="text-amber underline underline-offset-4">
                                    {EMAIL}
                                </a>
                                <button type="button" onClick={copyEmail} className="rounded-full border border-line px-3 py-1 text-sm hover:border-amber">
                                    Copy email
                                </button>
                                <span role="status" className="lbl">
                                    {copyNote}
                                </span>
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a className="text-mute underline hover:text-paper" href="https://github.com">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="text-mute underline hover:text-paper" href="https://www.linkedin.com">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer />
            <CaseDialog study={study} onClose={() => setStudy(null)} />
        </div>
    );
}
