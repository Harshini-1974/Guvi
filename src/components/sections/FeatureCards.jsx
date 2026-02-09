import React from 'react';
import { Code, Cpu, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Code size={24} color="white" />,
        title: "Skill Development",
        desc: "Industry-relevant curriculum designed by experts to make you job-ready.",
        color: "#3B82F6"
    },
    {
        icon: <Cpu size={24} color="white" />,
        title: "AI & Innovation",
        desc: "Master cutting-edge technologies including AI, ML, and Data Science.",
        color: "#A855F7"
    },
    {
        icon: <Globe size={24} color="white" />,
        title: "Online Learning",
        desc: "Flexible learning platform accessible anytime, anywhere at your pace.",
        color: "#10B981"
    },
    {
        icon: <Users size={24} color="white" />,
        title: "Industry Connect",
        desc: "Direct access to top companies, mentorship, and real-world projects.",
        color: "#F97316"
    }
];

const FeatureCards = () => {
    return (
        <section id="features" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Why Choose <span className="text-gradient">KEC x GUVI?</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A unique partnership delivering world-class technical education and career transformation opportunities.
                    </p>
                </motion.div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            whileHover={{ y: -10 }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                display: 'inline-flex', padding: '12px', borderRadius: '12px',
                                background: feature.color, marginBottom: '1.5rem',
                                boxShadow: `0 10px 20px -5px ${feature.color}40`
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                {feature.desc}
                            </p>

                            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500 }}>
                                Learn more <span style={{ marginLeft: '0.5rem' }}>→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
