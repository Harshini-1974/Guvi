import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
    return (
        <section id="join" className="section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            {/* Background Gradients */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '100%', maxWidth: '800px', height: '100%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                zIndex: -1, pointerEvents: 'none'
            }}></div>

            <div className="container">
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    Building the <span className="text-gradient">Future</span> Together
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Don't just learn technology, master it with the power of KEC and GUVI.
                    Start your transformation today.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary">
                        Explore Programs <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </button>
                    <button className="btn btn-secondary">
                        Contact Admissions <Mail size={20} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
