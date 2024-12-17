// components/Layout.tsx
import { ReactNode } from 'react';
import { UserProvider } from '@/context/UserContext'; // Import UserProvider
import ProtectedRoute from '@/components/shared/protected-route/ProtectedRoute';

export default function CreatorRootLayout({ children }: { children: ReactNode }) {
    return (
        // Wrap the entire layout with UserProvider to make user context available in all children
        <UserProvider>
            <ProtectedRoute>
                <div className="flex min-h-screen flex-col">
                    {/* Main content area */}
                    <main className="flex-1">{children}</main>
                </div>
            </ProtectedRoute>
        </UserProvider>
    );
}
