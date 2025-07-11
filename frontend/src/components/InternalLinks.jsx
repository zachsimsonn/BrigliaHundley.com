import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';

const InternalLinks = ({ data, currentPage, currentEntity }) => {
  const generateRelatedLinks = () => {
    const links = [];
    
    // Based on current page, suggest related content
    switch (currentPage) {
      case 'practice-area':
        // Link to related attorneys
        if (currentEntity?.attorneys) {
          links.push({
            title: "Meet Our Attorneys",
            subtitle: "Experienced lawyers in this practice area",
            items: currentEntity.attorneys.slice(0, 3).map(attorneyName => {
              const attorney = data.attorneys.find(a => a.name === attorneyName);
              return {
                name: attorney?.name || attorneyName,
                url: `/attorney-profile/${attorney?.name.toLowerCase().replace(/\s+/g, '-')}`,
                description: attorney?.position || 'Attorney'
              };
            })
          });
        }
        
        // Link to related blog posts
        const relatedBlogs = data.blogs.filter(blog => 
          blog.category.toLowerCase().includes(currentEntity?.title.toLowerCase().split(' ')[0]) ||
          blog.title.toLowerCase().includes(currentEntity?.title.toLowerCase().split(' ')[0])
        ).slice(0, 2);
        
        if (relatedBlogs.length > 0) {
          links.push({
            title: "Related Articles",
            subtitle: "Learn more about this practice area",
            items: relatedBlogs.map(blog => ({
              name: blog.title,
              url: `/blog/${blog.slug}`,
              description: blog.excerpt.substring(0, 80) + '...'
            }))
          });
        }
        break;
        
      case 'attorney-profile':
        // Link to attorney's practice areas
        if (currentEntity?.practiceAreas) {
          const practiceAreaLinks = currentEntity.practiceAreas.map(areaName => {
            const area = data.practiceAreas.find(p => p.title === areaName);
            return {
              name: area?.title || areaName,
              url: `/practice-area/${area?.title.toLowerCase().replace(/\s+/g, '-')}`,
              description: area?.description?.substring(0, 80) + '...' || 'Legal services'
            };
          });
          
          links.push({
            title: "Practice Areas",
            subtitle: "Areas of legal expertise",
            items: practiceAreaLinks.slice(0, 3)
          });
        }
        break;
        
      case 'blog-post':
        // Link to related blog posts in same category
        const sameCategoryBlogs = data.blogs.filter(blog => 
          blog.category === currentEntity?.category && blog.slug !== currentEntity?.slug
        ).slice(0, 2);
        
        if (sameCategoryBlogs.length > 0) {
          links.push({
            title: "Related Articles",
            subtitle: `More ${currentEntity?.category} articles`,
            items: sameCategoryBlogs.map(blog => ({
              name: blog.title,
              url: `/blog/${blog.slug}`,
              description: blog.excerpt.substring(0, 80) + '...'
            }))
          });
        }
        break;
        
      default:
        // For other pages, show popular content
        links.push({
          title: "Popular Practice Areas",
          subtitle: "Our most requested legal services",
          items: data.practiceAreas.slice(0, 3).map(area => ({
            name: area.title,
            url: `/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`,
            description: area.description.substring(0, 80) + '...'
          }))
        });
    }
    
    return links;
  };

  const relatedLinks = generateRelatedLinks();

  if (relatedLinks.length === 0) return null;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {relatedLinks.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          <Link 
                            to={item.url}
                            className="hover:text-blue-900 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {item.description}
                        </p>
                        <Link 
                          to={item.url}
                          className="inline-flex items-center text-blue-900 hover:text-blue-700 text-sm font-medium"
                        >
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalLinks;