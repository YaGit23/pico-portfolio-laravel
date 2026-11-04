export type Category = 'web' | '3d';

export type CaseStudy = {
    title: string;
    meta: string;
    stats: [string, string][];
    challenge: string;
    solution: string;
};

export type ProjectItem = {
    id: number;
    title: string;
    category: Category;
    label: string;
    description: string;
    tech: string[];
    image: string;
    alt: string;
    study: CaseStudy;
};

export const featuredStudy: CaseStudy = {
    title: 'Personal Portfolio Website',
    meta: 'Designer & Developer, 2026',
    stats: [
        ['3', 'Core technologies'],
        ['100%', 'Responsive layout'],
        ['1', 'Custom Figma design'],
    ],
    challenge:
        'I needed a professional online space to present my skills and projects as an IT student, one that looks good and works on any screen size.',
    solution:
        'I designed the layout in Figma, then built it with HTML, Tailwind CSS, and vanilla JavaScript, making it fully responsive and easy to update as I add new projects.',
};

// Hard-coded for now. After the CRUD is built, this list comes from the database.
export const projects: ProjectItem[] = [
    {
        id: 1,
        title: 'Python Website Recreation',
        category: 'web',
        label: 'Web Development Lab 5, 2026',
        description: 'A recreation of the Python.org homepage with a navigation bar, news list, and footer.',
        tech: ['HTML', 'CSS', 'Layout'],
        image: '/images/python-website.png',
        alt: 'Screenshot of my Python website recreation with a blue navigation bar and the Python logo',
        study: {
            title: 'Python Website Recreation',
            meta: 'Student Developer, 2026',
            stats: [['7', 'Navigation links'], ['2', 'Content columns'], ['1', 'Page recreated']],
            challenge:
                'I wanted to practice building a real-world homepage layout from scratch, including a navigation bar, a hero banner, and a multi-column content area.',
            solution:
                'I studied the structure of the Python.org homepage and recreated it with semantic HTML and CSS, matching the spacing, colors, and sections as closely as I could.',
        },
    },
    {
        id: 2,
        title: 'Anime Web Blog',
        category: 'web',
        label: 'Personal project, 2026',
        description: 'A blog website with anime recommendations, an About page, and sign-up and log-in pages.',
        tech: ['HTML', 'CSS', 'Web design'],
        image: '/images/anime-blog.png',
        alt: 'Screenshot of my anime web blog homepage with a welcome message and navigation buttons',
        study: {
            title: 'Anime Web Blog',
            meta: 'Student Developer, 2026',
            stats: [['4', 'Navigation buttons'], ['2', 'Languages used'], ['1', 'Blog homepage']],
            challenge:
                'I wanted a simple, friendly space to share anime recommendations, and a chance to practice building a multi-page website.',
            solution:
                'I built a blog homepage with a welcome section, a recommendations area, and navigation to the About, Contact, Sign-Up, and Log-In pages.',
        },
    },
    {
        id: 3,
        title: 'KAIEN 3D Logo Animation',
        category: '3d',
        label: 'Personal project, 2026',
        description: 'A 3D animated logo with a metallic finish, shown from several camera angles.',
        tech: ['3D modeling', 'Animation', 'Blender'],
        image: '/images/kaien-logo.jpg',
        alt: '3D animated KAIEN logo with a metallic finish on a green background',
        study: {
            title: 'KAIEN 3D Logo Animation',
            meta: '3D Designer, 2026',
            stats: [['3', 'Camera angles'], ['1', 'Custom logo'], ['3D', 'Metallic finish']],
            challenge:
                'A flat logo can feel lifeless, so I wanted to see how the KAIEN mark would look with depth, lighting, and movement.',
            solution:
                'I modeled the logo in 3D, gave it a dark metallic finish with light edges, and animated the camera to show it from several angles.',
        },
    },
    {
        id: 4,
        title: 'Lighthouse Island',
        category: '3d',
        label: 'Personal project, 2026',
        description: 'A low-poly island scene with a lighthouse, a village, a forest, and a bridge.',
        tech: ['3D modeling', 'Scene design', 'Blender'],
        image: '/images/lighthouse-island.jpg',
        alt: '3D low-poly island with a lighthouse, a small village, trees, and a wooden bridge',
        study: {
            title: 'Lighthouse Island',
            meta: '3D Designer, 2026',
            stats: [['5', 'Scene elements'], ['3', 'Camera views'], ['1', 'Complete scene']],
            challenge:
                'I wanted to practice building a full 3D environment, not just a single object, with a clear focal point and a sense of scale.',
            solution:
                'I modeled a low-poly island with a lighthouse, a village, a forest, a small lake, and a wooden bridge, then added clouds and water to bring the scene together.',
        },
    },
];

export const skills = [
    { group: 'Design', items: ['UI design', 'Layout design', '3D modeling', 'Animation'] },
    { group: 'Tooling', items: ['HTML and CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Blender'] },
    { group: 'Soft skills', items: ['Problem solving', 'Time management', 'Teamwork', 'Willingness to learn'] },
];

export const education = [
    { years: '2022 to present', school: 'Urdaneta City University', detail: 'Program: Bachelor of Science in Information Technology' },
    { years: '2021 to 2022', school: 'Santa Maria East Integrated School', detail: 'Senior High School' },
    { years: '2017 to 2021', school: 'Luciano Millan National High School', detail: 'Junior High School' },
    { years: '2011 to 2017', school: 'Narciso R Ramos Elementary School SPED Center', detail: 'Elementary' },
];
