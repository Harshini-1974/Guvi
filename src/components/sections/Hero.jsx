import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Code2, Cpu, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'var(--color-secondary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ position: 'relative', zIndex: 1 }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'left' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '99px', marginBottom: '1.5rem' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Admissions Open 2024</span>
                    </div>

                    <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Empowering <br />
                        <span className="text-gradient">Tomorrow's</span> <br />
                        Innovators
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
                        Bridging the gap between academic excellence and industry demands.
                        Join the KEC x GUVI Center of Excellence to master cutting-edge technologies.
                    </p>

                    <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                        <button className="btn btn-primary">
                            Explore Programs <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn btn-secondary">
                            <Play size={20} style={{ marginRight: '8px', fill: 'currentColor' }} />
                            Watch Demo
                        </button>
                    </div>

                   
                </motion.div>

                
            </div>
        </section>
    );
};

export default Hero;
