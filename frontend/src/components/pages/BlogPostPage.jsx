import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Calendar, User, Share2, Scale } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

const BlogPostPage = ({ data, onNavigate }) => {
  const { slug } = useParams();
  const blog = data.blogs.find(post => post.slug === slug);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
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
      <div className="gdlr-page-title-wrapper" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1505664063603-28e48ca204eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGJvb2tzfGVufDB8fHx8MTc1MjU5OTYzMnww&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="gdlr-page-title-overlay"></div>
        <div className="gdlr-page-title-container container">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-200 hover:text-white mb-6 px-3 py-2 rounded-md transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            {blog.category}
          </span>
          <h1 className="gdlr-page-title">{blog.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-gray-200 mt-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{blog.date}</span>
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

            {/* Related Content Links */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Legal Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Practice Area Links */}
                {data.practiceAreas.filter(area => 
                  blog.category.toLowerCase().includes(area.title.toLowerCase().split(' ')[0]) || 
                  blog.title.toLowerCase().includes(area.title.toLowerCase().split(' ')[0]) ||
                  blog.content.toLowerCase().includes(area.title.toLowerCase().split(' ')[0])
                ).slice(0, 2).map((area, index) => (
                  <Link 
                    key={index}
                    to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                  >
                    <Scale className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200">
                        {area.title} Legal Services
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Expert representation in {area.title.toLowerCase()} matters
                      </p>
                    </div>
                  </Link>
                ))}
                
                {/* Author Link */}
                {(() => {
                  const author = data.attorneys.find(att => att.name === blog.author);
                  return author ? (
                    <Link 
                      to={`/attorney-profile/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                    >
                      <User className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200">
                          About {author.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {author.position} at Briglia Hundley®
                        </p>
                      </div>
                    </Link>
                  ) : null;
                })()}
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
                {(() => {
                  const author = data.attorneys.find(att => att.name === blog.author);
                  return author && author.image ? (
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      style={{objectPosition: '50% 30%'}}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-bold text-lg">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  );
                })()}
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
              <div className="space-y-4">
                {/* Same category posts first */}
                {data.blogs
                  .filter(post => post.id !== blog.id && post.category === blog.category)
                  .slice(0, 3)
                  .map((relatedBlog, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      {relatedBlog.image && (
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-24 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-3">
                        <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                          {relatedBlog.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 mb-2 leading-tight text-sm">
                          <Link 
                            to={`/blog/${relatedBlog.slug}`}
                            className="hover:text-blue-900 transition-colors duration-200 text-left line-clamp-2"
                          >
                            {relatedBlog.title}
                          </Link>
                        </h4>
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
                    <div key={`other-${index}`} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      {relatedBlog.image && (
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-24 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-3">
                        <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                          {relatedBlog.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 mb-2 leading-tight text-sm">
                          <Link 
                            to={`/blog/${relatedBlog.slug}`}
                            className="hover:text-blue-900 transition-colors duration-200 text-left line-clamp-2"
                          >
                            {relatedBlog.title}
                          </Link>
                        </h4>
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
                <Link to="/contact">
                  <Button 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;