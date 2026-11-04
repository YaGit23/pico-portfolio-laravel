import { useState, type FormEvent } from 'react';

type Field = 'name' | 'email' | 'message';

const rules: Record<Field, (v: string) => string> = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Enter your name (at least 2 characters).'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email, like name@example.com.'),
    message: (v) => (v.trim().length >= 10 ? '' : 'Write at least 10 characters about your project.'),
};

const empty = { name: '', email: '', message: '' };

// Front-end only demo form: nothing is sent to the server.
export default function ContactForm() {
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState(empty);
    const [status, setStatus] = useState('');

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const next = {
            name: rules.name(values.name),
            email: rules.email(values.email),
            message: rules.message(values.message),
        };
        setErrors(next);
        if (next.name || next.email || next.message) {
            setStatus('');
            return;
        }
        setStatus(`Thanks, ${values.name.trim()}. Your message is ready to send (demo only, nothing was transmitted).`);
        setValues(empty);
    };

    const input = (name: Field, label: string, type = 'text') => (
        <div>
            <label htmlFor={name} className="mb-1 block text-sm">
                {label}
            </label>
            {name === 'message' ? (
                <textarea id={name} rows={4} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} className="field" aria-invalid={Boolean(errors[name])} />
            ) : (
                <input id={name} type={type} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} className="field" aria-invalid={Boolean(errors[name])} />
            )}
            <p className="mt-1 text-sm text-red-300">{errors[name]}</p>
        </div>
    );

    return (
        <form onSubmit={submit} className="card space-y-4" noValidate>
            {input('name', 'Name')}
            {input('email', 'Email', 'email')}
            {input('message', 'Message')}
            <button type="submit" className="btn w-full">
                Send message
            </button>
            <p role="status" className="text-sm text-amber">
                {status}
            </p>
        </form>
    );
}
