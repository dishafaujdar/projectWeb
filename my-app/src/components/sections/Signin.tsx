import React from 'react';
import SignInForm from '../auth/SignInForm';

const Signin: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#667eea] to-[#764ba2]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
                <SignInForm />
                <div className="flex justify-between">
                    <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                    <a href="/signup" className="text-sm text-blue-500 hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Signin;