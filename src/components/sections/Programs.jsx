import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Brain, Cloud, Shield, Smartphone, ArrowRight } from 'lucide-react';

const programs = [
    { icon: <Layout />, title: "Full Stack Development", desc: "MERN Stack, Java Spring Boot", color: "blue" },
    { icon: <Brain />, title: "AI & Machine Learning", desc: "Python, TensorFlow, Deep Learning", color: "purple" },
    { icon: <Database />, title: "Data Science", desc: "Analytics, Visualization, Big Data", color: "green" },
    { icon: <Cloud />, title: "Cloud Computing", desc: "AWS, Azure, DevOps Practices", color: "cyan" },
    { icon: <Shield />, title: "Cybersecurity", desc: "Ethical Hacking, Network Security", color: "red" },
    { icon: <Smartphone />, title: "Mobile Development", desc: "React Native, Flutter, iOS/Android", color: "orange" },
];

const Programs = () => {
    return (
        <section id="programs" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Explore Our <span className="text-gradient">Programs</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Curriculum designed in collaboration with industry leaders to ensure you learn what matters most.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="glass-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '0.5rem',
                                background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1rem', color: 'var(--color-primary)'
                            }}>
                                {React.cloneElement(program.icon, { size: 24 })}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{program.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{program.desc}</p>

                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500 }}>
                                View Curriculum <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
