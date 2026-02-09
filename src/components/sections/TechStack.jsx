import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    { name: "React", color: "#60A5FA" },
    { name: "Node.js", color: "#4ADE80" },
    { name: "Python", color: "#FDE047" },
    { name: "TensorFlow", color: "#FB923C" },
    { name: "AWS", color: "#818CF8" },
    { name: "Docker", color: "#3B82F6" },
    { name: "Java", color: "#F87171" },
    { name: "MongoDB", color: "#4ADE80" }
];

const TechStack = () => {
    return (
        <section style={{ padding: '3rem 0', background: '#0f172a', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
            <div className="container text-center" style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
                    Master the tools used by top tech companies
                </p>
            </div>

            <div style={{ position: 'relative', display: 'flex', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                {/*  Marquee Container - Needs manual CSS animation because Tailwind is gone */}
                <div className="marquee" style={{ display: 'flex', gap: '4rem', padding: '0 2rem', whiteSpace: 'nowrap', animation: 'scroll 30s linear infinite' }}>
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#94a3b8' }}>
                            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: tech.color }}></span>
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default TechStack;
