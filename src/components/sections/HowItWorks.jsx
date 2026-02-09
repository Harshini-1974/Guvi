import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Code, Award, Rocket } from 'lucide-react';

const steps = [
    { icon: <UserPlus />, title: "Enroll", desc: "Register for your desired program" },
    { icon: <BookOpen />, title: "Learn", desc: "Attend live classes & workshops" },
    { icon: <Code />, title: "Build", desc: "Work on real-world projects" },
    { icon: <Award />, title: "Certify", desc: "Get industry recognized key" },
    { icon: <Rocket />, title: "Launch", desc: "Start your tech career" },
];

const HowItWorks = () => {
    return (
        <section id="works" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Your Learning <span className="text-gradient">Journey</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A structured path designed to take you from beginner to industry-ready professional.
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block" style={{
                        position: 'absolute', top: '2.5rem', left: 0, width: '100%', height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)', zIndex: 0
                    }}></div>
                    <style>{`@media(max-width: 768px) { .hidden.md\\:block { display: none; } }`}</style>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '1rem', background: '#1e293b',
                                    border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.5rem', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    color: 'var(--color-secondary)'
                                }}>
                                    {step.icon}
                                    <div style={{
                                        position: 'absolute', bottom: '-8px', right: '-8px', width: '24px', height: '24px',
                                        borderRadius: '50%', background: '#0f172a', border: '1px solid var(--color-border)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold'
                                    }}>
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{step.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
