import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LocationPracticeAreaPage from './pages/LocationPracticeAreaPage';

const LocationPageRouter = ({ data, handleContentEdit, handleNavigate }) => {
  const { locationPracticeUrl } = useParams();

  // List of valid location-practice combinations
  const validLocationPracticeUrls = [
    // Alexandria
    'alexandria-criminal-defense-lawyer',
    'alexandria-family-law-lawyer', 
    'alexandria-divorce-lawyer',
    'alexandria-dui-lawyer',
    'alexandria-dui-attorney',
    'alexandria-personal-injury-lawyer',
    'alexandria-reckless-driving-lawyer',
    'alexandria-drug-crime-lawyer',
    'alexandria-domestic-violence-lawyer',
    'alexandria-car-accident-lawyer',
    'alexandria-wrongful-death-lawyer',
    'alexandria-employment-lawyer',
    'alexandria-real-estate-lawyer',
    'alexandria-child-custody-lawyer',
    'alexandria-traffic-lawyer',
    'alexandria-protective-order-lawyer',
    'alexandria-premises-liability-lawyer',
    'alexandria-contract-lawyer',
    'alexandria-estate-planning-lawyer',
    'alexandria-business-lawyer',
    'alexandria-bankruptcy-lawyer',
    'alexandria-immigration-lawyer',
    'alexandria-tax-lawyer',
    'alexandria-municipal-lawyer',
    'alexandria-appellate-lawyer',
    'alexandria-probate-lawyer',
    'alexandria-wills-lawyer',
    'alexandria-trust-lawyer',
    'alexandria-commercial-litigation-lawyer',
    'alexandria-workers-compensation-lawyer',
    'alexandria-medical-malpractice-lawyer',
    'alexandria-social-security-disability-lawyer',

    // Arlington  
    'arlington-criminal-defense-lawyer',
    'arlington-family-law-lawyer',
    'arlington-divorce-lawyer', 
    'arlington-dui-lawyer',
    'arlington-dui-attorney',
    'arlington-personal-injury-lawyer',
    'arlington-reckless-driving-lawyer',
    'arlington-drug-crime-lawyer',
    'arlington-domestic-violence-lawyer',
    'arlington-car-accident-lawyer',
    'arlington-wrongful-death-lawyer',
    'arlington-employment-lawyer',
    'arlington-real-estate-lawyer',
    'arlington-child-custody-lawyer',
    'arlington-traffic-lawyer',
    'arlington-protective-order-lawyer',
    'arlington-premises-liability-lawyer',
    'arlington-contract-lawyer',
    'arlington-estate-planning-lawyer',
    'arlington-business-lawyer',
    'arlington-bankruptcy-lawyer',
    'arlington-immigration-lawyer',
    'arlington-tax-lawyer',
    'arlington-municipal-lawyer',
    'arlington-appellate-lawyer',
    'arlington-probate-lawyer',
    'arlington-wills-lawyer',
    'arlington-trust-lawyer',
    'arlington-commercial-litigation-lawyer',
    'arlington-workers-compensation-lawyer',
    'arlington-medical-malpractice-lawyer',
    'arlington-social-security-disability-lawyer',

    // Ashburn
    'ashburn-criminal-defense-lawyer',
    'ashburn-family-law-lawyer',
    'ashburn-divorce-lawyer',
    'ashburn-dui-lawyer',
    'ashburn-personal-injury-lawyer',
    'ashburn-reckless-driving-lawyer',
    'ashburn-drug-crime-lawyer',
    'ashburn-domestic-violence-lawyer',
    'ashburn-car-accident-lawyer',
    'ashburn-wrongful-death-lawyer',
    'ashburn-employment-lawyer',
    'ashburn-real-estate-lawyer',
    'ashburn-child-custody-lawyer',
    'ashburn-traffic-lawyer',
    'ashburn-protective-order-lawyer',
    'ashburn-premises-liability-lawyer',
    'ashburn-contract-lawyer',
    'ashburn-estate-planning-lawyer',
    'ashburn-business-lawyer',
    'ashburn-bankruptcy-lawyer',
    'ashburn-immigration-lawyer',
    'ashburn-tax-lawyer',

    // Burke
    'burke-criminal-defense-lawyer',
    'burke-family-law-lawyer',
    'burke-divorce-lawyer',
    'burke-dui-lawyer',
    'burke-personal-injury-lawyer',
    'burke-reckless-driving-lawyer',
    'burke-drug-crime-lawyer',
    'burke-domestic-violence-lawyer',
    'burke-car-accident-lawyer',
    'burke-wrongful-death-lawyer',
    'burke-employment-lawyer',
    'burke-real-estate-lawyer',
    'burke-child-custody-lawyer',
    'burke-traffic-lawyer',
    'burke-protective-order-lawyer',
    'burke-premises-liability-lawyer',
    'burke-contract-lawyer',
    'burke-estate-planning-lawyer',
    'burke-business-lawyer',
    'burke-bankruptcy-lawyer',

    // Sterling
    'sterling-criminal-defense-lawyer',
    'sterling-family-law-lawyer',
    'sterling-divorce-lawyer',
    'sterling-dui-lawyer',
    'sterling-personal-injury-lawyer',
    'sterling-reckless-driving-lawyer',
    'sterling-drug-crime-lawyer',
    'sterling-domestic-violence-lawyer',
    'sterling-car-accident-lawyer',
    'sterling-wrongful-death-lawyer',
    'sterling-employment-lawyer',
    'sterling-real-estate-lawyer',
    'sterling-child-custody-lawyer',
    'sterling-traffic-lawyer',

    // Woodbridge
    'woodbridge-criminal-defense-lawyer',
    'woodbridge-family-law-lawyer',
    'woodbridge-divorce-lawyer',
    'woodbridge-dui-lawyer',
    'woodbridge-reckless-driving-lawyer',
    'woodbridge-drug-crime-lawyer',
    'woodbridge-domestic-violence-lawyer',
    'woodbridge-car-accident-lawyer',

    // Springfield
    'springfield-criminal-defense-lawyer',
    'springfield-family-law-lawyer',
    'springfield-divorce-lawyer',
    'springfield-dui-lawyer',

    // Annandale
    'annandale-criminal-defense-lawyer',
    'annandale-family-law-lawyer', 
    'annandale-divorce-lawyer',
    'annandale-dui-lawyer',

    // Centreville
    'centreville-criminal-defense-lawyer',
    'centreville-family-law-lawyer',
    'centreville-divorce-lawyer',
    'centreville-dui-lawyer',

    // Chantilly
    'chantilly-criminal-defense-lawyer',
    'chantilly-family-law-lawyer',
    'chantilly-divorce-lawyer',
    'chantilly-dui-lawyer',

    // Winchester
    'winchester-dui-lawyer',
    'winchester-divorce-lawyer',

    // Manassas
    'manassas-dui-lawyer',
    'manassas-car-accident-lawyer',
    'manassas-reckless-driving-lawyer',
    'manassas-divorce-lawyer',

    // Tysons Corner
    'tysons-corner-criminal-defense-lawyer',
    'tysons-corner-family-law-lawyer',
    'tysons-corner-personal-injury-lawyer',
    'tysons-corner-dui-defense-lawyer',
    'tysons-corner-dui-defense-attorney',
    'tysons-corner-traffic-defense-lawyer',
    'tysons-corner-traffic-defense-attorney',

    // Fairfax County
    'fairfax-county-criminal-defense-lawyer',
    'fairfax-county-family-law-lawyer',
    'fairfax-county-personal-injury-lawyer',
    'fairfax-county-dui-defense-lawyer',
    'fairfax-county-dui-defense-attorney',

    // Reston
    'reston-criminal-defense-lawyer',
    'reston-family-law-lawyer',
    'reston-dui-lawyer',

    // And continue with other locations...
    'leesburg-dui-lawyer',
    'leesburg-criminal-defense-lawyer',
    'leesburg-family-law-lawyer',
    'leesburg-divorce-lawyer',
    'leesburg-personal-injury-lawyer',

    'great-falls-dui-lawyer',
    'great-falls-criminal-defense-lawyer',
    'great-falls-family-law-lawyer',
    'great-falls-divorce-lawyer',

    'oakton-dui-lawyer',
    'oakton-criminal-defense-lawyer',
    'oakton-family-law-lawyer',
    'oakton-divorce-lawyer',

    'prince-william-county-dui-lawyer',
    'prince-william-county-criminal-defense-lawyer',
    'prince-william-county-family-law-lawyer',
    'prince-william-county-divorce-lawyer',

    'loudoun-county-dui-lawyer',
    'loudoun-county-criminal-defense-lawyer',
    'loudoun-county-family-law-lawyer',
    'loudoun-county-divorce-lawyer',

    'south-riding-dui-lawyer',
    'south-riding-criminal-defense-lawyer',
    'south-riding-family-law-lawyer',
    'south-riding-divorce-lawyer',

    'clifton-criminal-defense-lawyer',
    'clifton-family-law-lawyer',
    'clifton-divorce-lawyer',

    'manassas-park-dui-lawyer',
    'manassas-park-criminal-defense-lawyer',
    'manassas-park-family-law-lawyer',

    'middleburg-dui-lawyer',
    'middleburg-criminal-defense-lawyer', 
    'middleburg-family-law-lawyer',

    'district-of-columbia-dui-lawyer',
    'district-of-columbia-criminal-defense-lawyer',
    'district-of-columbia-family-law-lawyer'
  ];

  // Check if this is a valid location-practice URL
  if (!validLocationPracticeUrls.includes(locationPracticeUrl)) {
    return (
      <div>
        <Header 
          data={data} 
          onEdit={handleContentEdit} 
          onNavigate={handleNavigate}
          currentPage="404"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600">The requested page could not be found.</p>
          </div>
        </div>
        <Footer data={data} />
      </div>
    );
  }

  // Parse location and practice area from URL
  const parseLocationPractice = (url) => {
    // Remove lawyer/attorney suffix
    const cleanUrl = url.replace(/-lawyer$|attorney$/, '');
    
    // Split by last hyphen to get practice area
    const parts = cleanUrl.split('-');
    
    // Define practice area patterns
    const practicePatterns = {
      'dui': 'criminal-defense',
      'criminal-defense': 'criminal-defense',
      'family-law': 'family-law',
      'divorce': 'family-law',
      'child-custody': 'family-law',
      'personal-injury': 'personal-injury',
      'car-accident': 'personal-injury',
      'wrongful-death': 'personal-injury',
      'premises-liability': 'personal-injury',
      'workers-compensation': 'personal-injury',
      'medical-malpractice': 'personal-injury',
      'employment': 'employment-law',
      'real-estate': 'real-estate-law',
      'estate-planning': 'estate-planning',
      'business': 'corporate-law',
      'contract': 'corporate-law',
      'commercial-litigation': 'business-litigation',
      'reckless-driving': 'criminal-defense',
      'drug-crime': 'criminal-defense',
      'domestic-violence': 'criminal-defense',
      'traffic': 'criminal-defense',
      'protective-order': 'criminal-defense'
    };

    // Find the practice area in the URL
    let practiceArea = 'criminal-defense'; // default
    let location = '';

    for (const [pattern, area] of Object.entries(practicePatterns)) {
      if (cleanUrl.includes(pattern)) {
        practiceArea = area;
        location = cleanUrl.replace(`-${pattern}`, '');
        break;
      }
    }

    return { location, area: practiceArea };
  };

  const { location, area } = parseLocationPractice(locationPracticeUrl);

  return (
    <div>
      <Header 
        data={data} 
        onEdit={handleContentEdit} 
        onNavigate={handleNavigate}
        currentPage="location-practice-area"
      />
      <LocationPracticeAreaPage data={data} location={location} area={area} />
      <Footer data={data} />
    </div>
  );
};

export default LocationPageRouter;