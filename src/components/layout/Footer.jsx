import React from 'react';
import { BookOpen, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#020617', padding: '4rem 0 2rem', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                            <div style={{
                                width: 32, height: 32, borderRadius: 8,
                                background: 'var(--gradient-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <BookOpen color="white" size={16} />
                            </div>
                            <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>KEC x GUVI</span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Empowering students with industry-relevant skills and fostering innovation through collaborative excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'
                                }}>
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                            {['About Us', 'Programs', 'Manifesto', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>Top Programs</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                            {['Full Stack Development', 'Data Science', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity'].map((link) => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                            <li>Kongu Engineering College</li>
                            <li>Perundurai, Erode - 638060</li>
                            <li>Tamil Nadu, India</li>
                            <li style={{ paddingTop: '0.5rem', color: 'white' }}>kec_guvi@kongu.edu</li>
                            <li style={{ color: 'white' }}>+91 123 456 7890</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
                    <div>© 2024 KEC x GUVI Partnership. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
