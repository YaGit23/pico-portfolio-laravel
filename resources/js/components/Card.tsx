import type { ElementType, ReactNode } from 'react';

type Props = {
    as?: ElementType;
    className?: string;
    children: ReactNode;
};

export default function Card({ as: Component = 'div', className = '', children }: Props) {
    return <Component className={`card ${className}`}>{children}</Component>;
}
