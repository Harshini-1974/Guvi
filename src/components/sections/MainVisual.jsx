import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Terminal, TrendingUp, Award } from 'lucide-react';

const stats = [
    { label: "Future-Ready Skills", value: "100+", icon: <Terminal size={20} color="#60A5FA" /> },
    { label: "Industry Partners", value: "50+", icon: <Award size={20} color="#A855F7" /> },
    { label: "Success Rate", value: "95%", icon: <CheckCircle size={20} color="#4ADE80" /> },
    { label: "Student Growth", value: "∞", icon: <TrendingUp size={20} color="#FB923C" /> },
];

const MainVisual = () => {
    return (
        <section className="section" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    {/* Left: Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            background: '#1e293b', borderRadius: '1rem', border: '1px solid var(--color-border)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden'
                        }}>
                            {/* Mock Browser/App Header */}
                            <div style={{ background: '#0f172a', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                                <div className="flex gap-2">
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }}></div>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }}></div>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }}></div>
                                </div>
                                <div style={{ marginLeft: '1rem', background: '#1e293b', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', color: '#94a3b8', width: '200px' }}>
                                    dashboard.kec-guvi.edu
                                </div>
                            </div>

                            {/* App Content Mockup */}
                            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ gridColumn: 'span 2', height: '8rem', background: 'rgba(51, 65, 85, 0.5)', borderRadius: '0.5rem' }}></div>
                                <div style={{ height: '6rem', background: 'rgba(51, 65, 85, 0.5)', borderRadius: '0.5rem' }}></div>
                                <div style={{ height: '6rem', background: 'rgba(51, 65, 85, 0.5)', borderRadius: '0.5rem' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Stats & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', lineHeight: 1.2 }}>
                            Accelerate Your <br />
                            <span style={{ color: 'var(--color-secondary)' }}>Tech Career Journey</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            {stats.map((stat, idx) => (
                                <div key={idx} style={{
                                    background: 'rgba(30, 41, 59, 0.5)', border: '1px solid var(--color-border)',
                                    padding: '1.25rem', borderRadius: '0.75rem'
                                }}>
                                    <div style={{ marginBottom: '0.5rem' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Industry-recognized certification upon completion",
                                "Lifetime access to course materials and updates",
                                "Dedicated mentor support and code reviews",
                                "Exclusive access to hiring drives and job portal"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    <CheckCircle size={20} color="var(--color-secondary)" style={{ minWidth: '20px', marginTop: '4px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MainVisual;
