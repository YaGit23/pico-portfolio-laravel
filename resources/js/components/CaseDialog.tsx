import { useEffect, useRef } from 'react';
import type { CaseStudy } from '@/data/portfolio';

type Props = {
    study: CaseStudy | null;
    onClose: () => void;
};

export default function CaseDialog({ study, onClose }: Props) {
    const ref = useRef<HTMLDialogElement>(null);

    // Open or close the native <dialog> whenever `study` changes
    useEffect(() => {
        const dlg = ref.current;
        if (!dlg) return;
        if (study && !dlg.open) dlg.showModal();
        if (!study && dlg.open) dlg.close();
    }, [study]);

    return (
        <dialog
            ref={ref}
            onClose={onClose}
            onClick={(e) => e.target === ref.current && onClose()}
            aria-labelledby="case-title"
            className="m-auto max-h-[88vh] w-[min(92vw,40rem)] overflow-y-auto rounded-2xl border border-line bg-panel p-6 text-paper backdrop:bg-black/75"
        >
            {study && (
                <>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="lbl">{study.meta}</p>
                            <h2 id="case-title" className="mt-1 font-serif text-2xl">
                                {study.title}
                            </h2>
                        </div>
                        <button type="button" onClick={onClose} className="rounded-full border border-line px-3 py-1 text-sm hover:border-amber">
                            Close
                        </button>
                    </div>
                    <dl className="mt-5 grid grid-cols-3 gap-3">
                        {study.stats.map(([value, label]) => (
                            <div key={label} className="rounded-xl border border-line p-3">
                                <dd className="font-serif text-xl">{value}</dd>
                                <dt className="font-mono text-xs text-mute">{label}</dt>
                            </div>
                        ))}
                    </dl>
                    <h3 className="mt-6 font-medium">The challenge</h3>
                    <p className="mt-1 text-mute">{study.challenge}</p>
                    <h3 className="mt-4 font-medium">The solution</h3>
                    <p className="mt-1 text-mute">{study.solution}</p>
                </>
            )}
        </dialog>
    );
}
