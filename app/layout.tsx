import { UserProvider } from '@/context/UserContext';
import './globals.css';

export const metadata = {
  title: 'Hohai',
  description: 'Stuck anywhere, Use Hohai',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
