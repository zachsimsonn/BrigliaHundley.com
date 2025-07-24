import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gray-900 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          
          <div className="text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Practice Areas
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need legal help? Call us at <a href="tel:(703) 783-5185" className="text-gray-700 font-semibold">(703) 783-5185</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;