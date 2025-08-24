import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye } from 'lucide-react';

const GuestDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] text-white">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 p-4 rounded-xl">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Guest Dashboard</h1>
          <p className="text-gray-400 mb-8">Explore our platform features without signing up</p>
          
          <div className="bg-[#1a1a3a]/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Demo Features</h2>
            <p className="text-gray-400 mb-6">This is a preview of what you can do with our platform.</p>
            
            <div className="space-y-4">
              <Link
                to="/signup"
                className="block w-full bg-gradient-to-r from-[#8a5cf6] to-[#525ce6] text-white py-3 px-6 rounded-lg font-medium hover:from-[#7c52f4] hover:to-[#4a52d9] transition-all duration-200"
              >
                Sign Up to Access Full Features
              </Link>
              <Link
                to="/signin"
                className="block w-full border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard;