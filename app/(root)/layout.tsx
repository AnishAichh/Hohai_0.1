import ProtectedRoute from "@/components/shared/protected-route/ProtectedRoute";

export default function CreatorRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProtectedRoute>
            <div className=" flex min-h-screen flex-col">
                <main className="flex-1">{children}</main>
            </div>
        </ProtectedRoute>
    );
}