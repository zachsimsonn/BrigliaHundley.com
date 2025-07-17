import React from 'react';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const About = ({ data, editableContent }) => {
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

  // Staff members from the real Briglia Hundley site
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

  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      {/* Law Firm Building Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Firm
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
        </div>
        
        {/* Building Image */}
        <div className="mb-12">
          <img 
            src="https://brigliahundley.com/wp-content/uploads/briglia-hundley-building.jpg"
            alt="Briglia Hundley Law Firm Building in Tysons Corner"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Firm Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Briglia Hundley® was founded in 1993 and features attorneys who have been named to Super Lawyers, listed in U.S. News and World Report's Best Lawyers, and achieved Martindale-Hubbell's highest "AV" rating.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are a full-service law firm that will provide an experienced and energetic team to meet your legal needs. Our attorneys practice in state and federal courts throughout the Mid-Atlantic region.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Among our ranks are former prosecutors, former federal and state law clerks, and attorneys and staff with large law firm experience. We combine our broad knowledge to vigorously pursue the best possible results for you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Providing high quality representation at boutique law firm prices, we offer a personable approach to your legal issues while maintaining our role as resourceful, results-oriented professionals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We emphasize client communication in all our cases, ensuring that you have the information needed to make sound decisions throughout the legal process.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In addition, Briglia Hundley® understands the importance of community involvement. Our team gives generously of their time and talents through our pro bono work and our active support of legal organizations serving the underprivileged.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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

        {/* Staff Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;