import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

const BlogPostPage = ({ slug, data, onNavigate }) => {
  const blog = data.blogs.find(post => post.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Button onClick={() => onNavigate('blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const shareUrl = `https://brigliahundley.com/blog/${slug}`;

  // Enhanced SEO meta description
  const metaDescription = `${blog.excerpt.substring(0, 155)}. Read more legal insights from Briglia Hundley® attorneys in Tysons Corner, Virginia.`;
  
  const keywords = `${blog.category.toLowerCase()}, Virginia law, legal insights, ${blog.author}, Briglia Hundley, ${blog.title.toLowerCase()}, Northern Virginia attorneys`;

  // Blog post structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Briglia Hundley PC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brigliahundley.com/bhlogo.png"
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://brigliahundley.com/blog/${slug}`
    },
    "image": blog.image || "https://brigliahundley.com/bhlogo.png",
    "articleSection": blog.category,
    "keywords": keywords,
    "about": {
      "@type": "Thing",
      "name": "Legal Services"
    }
  };

  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: blog.title, url: `/blog/${slug}` }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={blog.title}
        description={metaDescription}
        keywords={keywords}
        canonical={`https://brigliahundley.com/blog/${slug}`}
        ogType="article"
        ogImage={blog.image}
        schemaData={blogSchema}
        breadcrumbs={breadcrumbItems}
      />
      
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => onNavigate('blog')}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="mb-6">
            <span className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left Aligned */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            {blog.image && (
              <div className="mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed text-left">
                {blog.excerpt}
              </div>
              
              <div className="text-gray-800 leading-relaxed space-y-6 text-left">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Share this article</h3>
                  <p className="text-gray-600">Found this helpful? Share it with others.</p>
                </div>
                <Button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: blog.title,
                        text: blog.excerpt,
                        url: shareUrl,
                      });
                    } else {
                      navigator.clipboard.writeText(shareUrl);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Author Bio - Left Aligned */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">About the Author</h3>
              <div className="flex items-start text-left">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold text-lg">
                    {blog.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                  <p className="text-gray-600">
                    {blog.author} is an experienced attorney at Briglia Hundley® specializing in {blog.category.toLowerCase()}. 
                    With years of experience serving clients in Virginia, Washington, D.C., and Maryland, {blog.author.split(' ')[0]} provides 
                    expert legal guidance and representation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Related Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="space-y-6">
                {data.blogs
                  .filter(post => post.id !== blog.id && post.category === blog.category)
                  .slice(0, 3)
                  .map((relatedBlog, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      {relatedBlog.image && (
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-4">
                        <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                          {relatedBlog.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                          <button 
                            onClick={() => onNavigate('blog-post', { slug: relatedBlog.slug })}
                            className="hover:text-blue-900 transition-colors duration-200 text-left"
                          >
                            {relatedBlog.title}
                          </button>
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="text-xs text-gray-500">
                          By {relatedBlog.author} • {relatedBlog.date}
                        </div>
                      </div>
                    </div>
                  ))}
                
                {/* If same category has less than 3, show from other categories */}
                {data.blogs
                  .filter(post => post.id !== blog.id && post.category !== blog.category)
                  .slice(0, Math.max(0, 3 - data.blogs.filter(post => post.id !== blog.id && post.category === blog.category).length))
                  .map((relatedBlog, index) => (
                    <div key={`other-${index}`} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      {relatedBlog.image && (
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-4">
                        <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                          {relatedBlog.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                          <button 
                            onClick={() => onNavigate('blog-post', { slug: relatedBlog.slug })}
                            className="hover:text-blue-900 transition-colors duration-200 text-left"
                          >
                            {relatedBlog.title}
                          </button>
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="text-xs text-gray-500">
                          By {relatedBlog.author} • {relatedBlog.date}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Contact CTA in Sidebar */}
              <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold mb-3">Need Legal Help?</h4>
                <p className="text-gray-300 mb-4 text-sm">
                  Our experienced attorneys are ready to help with your legal matter.
                </p>
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;