import type { ReactNode } from 'react';

type Props = {
    label: string;
    title: string;
    id: string;
    children?: ReactNode;
};

export default function SectionTitle({ label, title, id, children }: Props) {
    return (
        <>
            <p className="lbl">{label}</p>
            <h2 id={id} className="h2 mt-1">
                {title}
            </h2>
            {children && <p className="mt-2 max-w-xl text-mute">{children}</p>}
        </>
    );
}
