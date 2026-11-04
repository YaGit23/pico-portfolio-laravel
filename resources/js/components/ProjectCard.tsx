import type { ProjectItem } from '@/data/portfolio';
import Card from './Card';
import Tag from './Tag';

type Props = {
    project: ProjectItem;
    onView: (project: ProjectItem) => void;
};

export default function ProjectCard({ project, onView }: Props) {
    return (
        <Card as="article">
            <img src={project.image} alt={project.alt} className="mb-4 aspect-video w-full rounded-xl border border-line object-cover" />
            <p className="lbl">{project.label}</p>
            <h3 className="mt-1 font-serif text-xl">{project.title}</h3>
            <p className="mt-2 text-mute">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                ))}
            </div>
            <button type="button" onClick={() => onView(project)} className="mt-4 text-amber underline underline-offset-4">
                View project<span className="sr-only">: {project.title}</span>
            </button>
        </Card>
    );
}
