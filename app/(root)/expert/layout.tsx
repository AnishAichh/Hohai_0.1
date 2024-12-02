import React from 'react';
import Sidebar from '@/components/shared/sidebar/sidebar'
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>
                <Sidebar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
