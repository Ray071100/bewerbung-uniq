type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} style={{ padding: '100vh 20px', borderBottom: '1px solid #ccc' }}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

//obsolete file