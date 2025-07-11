import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Calendar, User, ExternalLink } from 'lucide-react';

const Blog = ({ data, onNavigate }) => {

  // Get unique categories
  const categories = [...new Set(data.blogs.map(blog => blog.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Briglia Hundley Blogs
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal insights, industry news, and expert analysis from our experienced attorneys.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-md transition-colors"
          >
            All Posts
          </Link>
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-600 rounded-md"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.blogs.slice(0, 6).map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer block"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                {blog.image ? (
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="text-gray-900 hover:text-gray-700 p-0 h-auto group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore All Legal Resources
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Access our complete library of legal insights, case studies, and expert commentary to stay informed about the latest developments in law.
            </p>
            <Button 
              onClick={() => onNavigate('blog')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;