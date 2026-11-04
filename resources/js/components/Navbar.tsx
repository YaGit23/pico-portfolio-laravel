import { useEffect, useState } from 'react';

const links = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');

    // Highlight the link of the section that is currently on screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-40% 0px -55% 0px' },
        );
        document.querySelectorAll('main section').forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const linkClass = (id: string, extra = '') =>
        `${extra} ${active === id ? 'text-amber' : 'text-mute hover:text-paper'}`;

    return (
        <>
            <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
                    <a href="#home" className="font-serif text-xl">
                        Emmanuel Pico
                    </a>
                    <nav aria-label="Main" className="hidden gap-6 md:flex">
                        {links.map((l) => (
                            <a key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                                {l.label}
                            </a>
                        ))}
                    </nav>
                    <svg role="img" aria-label="Avatar of Emmanuel Pico" className="size-9 rounded-full border border-line" viewBox="0 0 40 40">
                        <rect width="40" height="40" fill="#2e2a23" />
                        <text x="20" y="26" textAnchor="middle" fontSize="16" fill="#f4b860" fontFamily="Newsreader,serif">
                            EP
                        </text>
                    </svg>
                </div>
            </header>

            <nav aria-label="Mobile" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-line bg-ink/95 backdrop-blur md:hidden">
                {links.map((l) => (
                    <a key={l.id} href={`#${l.id}`} className={linkClass(l.id, 'py-4 text-center text-sm')}>
                        {l.label}
                    </a>
                ))}
            </nav>
        </>
    );
}
