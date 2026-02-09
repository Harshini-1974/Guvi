import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Programs', href: '#programs' },
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#works' },
        { name: 'Success Stories', href: '#testimonials' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <div className="logo-icon" style={{
                        width: '40px', height: '40px',
                        background: 'var(--gradient-primary)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <BookOpen color="white" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', lineHeight: 1 }}>
                            KEC <span style={{ color: 'var(--color-secondary)' }}>x</span> GUVI
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            Center of Excellence
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8" style={{ display: 'none' }}> {/* Hidden on mobile, flex on desktop via CSS media query needs class */}
                    <div className="desktop-menu flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} style={{ fontWeight: 500 }}>
                                {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                        <a href="#join" className="btn btn-primary">
                            Get Started <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                        </a>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="mobile-controls flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: 'var(--color-text-main)', background: 'transparent' }}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--color-bg-dark)',
                            borderTop: '1px solid var(--color-border)',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="container" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--color-border)' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#join" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 768px) {
                    .hidden.md\\:flex { display: flex !important; }
                    .mobile-controls { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
