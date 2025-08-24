import React from 'react';
import SignUpForm from '../auth/SignUpForm';

const Signup: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#667eea] to-[#764ba2]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
                <SignUpForm />
            </div>
        </div>
    );
};

export default Signup;