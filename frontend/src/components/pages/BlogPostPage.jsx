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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
            {blog.excerpt}
          </div>
          
          <div className="text-gray-800 leading-relaxed space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
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

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Author</h3>
          <div className="flex items-start">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span className="text-gray-600 font-bold text-lg">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{blog.author}</h4>
              <p className="text-gray-600">
                {blog.author} is an experienced attorney at Briglia Hundley® specializing in {blog.category.toLowerCase()}. 
                With years of experience serving clients in Virginia, Washington, D.C., and Maryland, {blog.author.split(' ')[0]} provides 
                expert legal guidance and representation.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.blogs
              .filter(post => post.id !== blog.id && post.category === blog.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-gray-600 font-medium">{relatedPost.category}</span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Button
                      onClick={() => onNavigate('blog-post', { slug: relatedPost.slug })}
                      variant="outline"
                      size="sm"
                      className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have questions about {blog.category.toLowerCase()} or need expert legal guidance, 
            our experienced attorneys are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.location.href = `tel:${data.business.phone}`}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;