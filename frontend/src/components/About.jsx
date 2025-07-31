import React from 'react';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const About = ({ data, editableContent, showStaff = true }) => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: "Tier 1 Ranked",
      description: "Recognized by Best Lawyers® Best Law Firms"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-900" />,
      title: "Since 1993",
      description: "Over 30 years of legal excellence"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: "14 Attorneys",
      description: "Experienced legal professionals"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-900" />,
      title: "Northern Virginia",
      description: "Serving Loudoun County, Fairfax, Arlington, Prince William County"
    }
  ];

  // Staff members
  const staff = [
    {
      name: "Amanda Moellendick",
      position: "Firm Administrator",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-amanda-moellendick-u800ds-400x400.jpg"
    },
    {
      name: "Carmen Escalera",
      position: "Executive Administrative Assistant",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-carmen-escalera-u800ds-400x400.jpg"
    },
    {
      name: "Abbi Marsh",
      position: "Paralegal",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-abbi-marsh-u800ds-400x400.jpg"
    },
    {
      name: "Nini Daker",
      position: "Legal Assistant",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-nini-daker-u800ds-400x400.jpg"
    },
    {
      name: "Terence Bowles",
      position: "Senior Accounts Administrator",
      image: "https://brigliahundley.com/wp-content/uploads/bh-terence-bowles-800-400x400.jpg"
    },
    {
      name: "Jacob Rimland",
      position: "Paralegal",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-jacob-rimland-uc-400x400.jpg"
    }
  ];

  // Define different content for About page vs Home page
  const aboutPageContent = `Briglia Hundley® was founded in 1993 and features attorneys who have been named to Super Lawyers, listed in U.S. News and World Report's Best Lawyers, and achieved Martindale-Hubbell's highest "AV" rating.

We are a full-service law firm that will provide an experienced and energetic team to meet your legal needs. Our attorneys practice in state and federal courts throughout the Mid-Atlantic region. Among our ranks are former prosecutors, former federal and state law clerks, and attorneys and staff with large law firm experience. We combine our broad knowledge to vigorously pursue the best possible results for you.

Providing high quality representation at boutique law firm prices, we offer a personable approach to your legal issues while maintaining our role as resourceful, results-oriented professionals. We emphasize client communication in all our cases, ensuring that you have the information needed to make sound decisions throughout the legal process.

In addition, Briglia Hundley® understands the importance of community involvement. Our team gives generously of their time and talents through our pro bono work and our active support of legal organizations serving the underprivileged.`;

  // Mock LinkedIn announcements data (replace with real API call)
  const linkedInPosts = [
    {
      id: 1,
      title: "Briglia Hundley® Attorneys Named to 2025 Super Lawyers List",
      content: "We are proud to announce that several of our attorneys have been recognized by Super Lawyers for their outstanding legal work in 2025.",
      date: "January 15, 2025",
      link: "https://www.linkedin.com/company/briglia-hundley"
    },
    {
      id: 2,
      title: "New Developments in Virginia Corporate Law",
      content: "Our corporate law team discusses recent legislative changes affecting businesses in Virginia and how they impact our clients.",
      date: "January 8, 2025", 
      link: "https://www.linkedin.com/company/briglia-hundley"
    },
    {
      id: 3,
      title: "Community Involvement: Supporting Local Legal Aid",
      content: "Briglia Hundley® continues its commitment to pro bono work, providing legal services to underserved communities in Northern Virginia.",
      date: "December 28, 2024",
      link: "https://www.linkedin.com/company/briglia-hundley"
    }
  ];

  // Award images with backlinks
  const awards = [
    {
      image: "https://brigliahundley.com/wp-content/uploads/Best-Lawyers-2025-Law-Firm-Badge.png",
      link: "https://www.bestlawyers.com/",
      alt: "Best Lawyers 2025 Law Firm"
    },
    {
      image: "https://brigliahundley.com/wp-content/uploads/Super-Lawyers-2025.png", 
      link: "https://www.superlawyers.com/",
      alt: "Super Lawyers 2025"
    },
    {
      image: "https://brigliahundley.com/wp-content/uploads/Martindale-Hubbell-AV-Rating.png",
      link: "https://www.martindale.com/",
      alt: "Martindale-Hubbell AV Rating"
    }
  ];

  // Split content into paragraphs - use different content based on showStaff
  const contentToUse = showStaff ? aboutPageContent : editableContent.about.content;
  const paragraphs = contentToUse.split('\n\n');

  return (
    <>
      {/* Header - only show on About page (when showStaff is true) */}
      {showStaff && (
        <div className="gdlr-page-title-wrapper" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1636652966850-5ac4d02370e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxZnxjb3VydGhvdXNlfGVufDB8fHx8MTc1MjU5OTYyNXww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="gdlr-page-title-overlay"></div>
          <div className="gdlr-page-title-container container">
            <h1 className="gdlr-page-title">Our Firm</h1>
          </div>
        </div>
      )}

      <section id="about" className={`py-20 relative ${showStaff ? 'bg-white' : 'bg-gray-50'}`}>
      {/* Background Image - only on home page (when showStaff is false) */}
      {!showStaff && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://brigliahundley.com/wp-content/uploads/courthouse-header-500h.jpg')",
            opacity: 1.0
          }}
        ></div>
      )}
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-4xl lg:text-5xl font-bold ${showStaff ? 'text-gray-600' : 'text-white'}`}>
                  {editableContent.about.title}
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full"></div>
              </div>

              <div className="space-y-8">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-lg leading-relaxed text-left ${showStaff ? 'text-gray-600' : 'text-white'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Content - Building Image (when showStaff is true) or Grid (when on home page) */}
            {showStaff ? (
              <div className="flex justify-center">
                <img 
                  src="https://brigliahundley.com/wp-content/uploads/briglia-hundley-building.jpg" 
                  alt="Briglia Hundley Law Firm Building" 
                  className="w-full max-w-2xl rounded-xl shadow-lg"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        {highlight.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Staff Section */}
          {showStaff && (
            <div className="mt-20 bg-white py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Staff
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full mx-auto mb-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {staff.map((member, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-80 h-80 rounded-lg overflow-hidden mb-6">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.position} at Briglia Hundley®`}
                        className="w-full h-full object-cover" 
                        loading="lazy" 
                        decoding="async" 
                        style={{objectPosition: '50% 30%'}}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;