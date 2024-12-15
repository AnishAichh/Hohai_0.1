import React from 'react';

interface LoginButtonProps {
    onClick: (e: React.FormEvent) => void;
    loading: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
            {loading ? 'Signing in...' : 'Login'}
        </button>
    );
};

export default LoginButton;
