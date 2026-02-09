import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '0.5rem', borderRadius: '50%',
                background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} color="#EAB308" />
            ) : (
                <Moon size={20} color="#3B82F6" />
            )}
        </button>
    );
};

export default ThemeToggle;
