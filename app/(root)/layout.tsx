import React from 'react';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <h1>My App</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
                </nav>
            </header>
            <main style={{ padding: '2rem' }}>
                {children}
            </main>
            <footer style={{ padding: '1rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
