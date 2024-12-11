import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-red-500 font-bold text-lg">HOHAI</div>
            <Link href="/login" className="px-4 py-2 text-sm border rounded-full border-gray-300 hover:bg-gray-100">
                Login
            </Link>
        </header>
    );
}
