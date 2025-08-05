import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LocationPracticeAreaPage from './pages/LocationPracticeAreaPage';
import NotFoundPage from './pages/NotFoundPage';

const LocationPageRouter = ({ data, handleContentEdit, handleNavigate }) => {
  const currentLocation = useLocation();
  const locationPracticeUrl = currentLocation.pathname.substring(1); // Remove leading slash

  // List of valid location-practice combinations
  const validLocationPracticeUrls = [
    // Tysons Corner - THE MISSING ONES!
    'tysons-corner-criminal-defense-lawyer',
    'tysons-corner-criminal-defense-attorney', 
    'best-tysons-corner-criminal-defense-attorneys',
    'tysons-corner-family-law-lawyer',
    'tysons-corner-family-law-attorney',
    'best-tysons-corner-family-law-attorneys',
    'tysons-corner-personal-injury-lawyer',
    'tysons-corner-personal-injury-attorney',
    'best-tysons-corner-personal-injury-attorneys',
    'tysons-corner-dui-defense-lawyer',
    'tysons-corner-dui-defense-attorney',
    'best-tysons-corner-dui-defense-attorneys',
    'tysons-corner-dui-lawyer',
    'tysons-corner-divorce-lawyer',
    'tysons-corner-child-custody-lawyer',
    'tysons-corner-traffic-defense-lawyer',
    'tysons-corner-traffic-defense-attorney',
    'tysons-corner-traffic-lawyer',
    'tysons-corner-reckless-driving-lawyer',
    'tysons-corner-domestic-violence-lawyer',
    'tysons-corner-assault-lawyer',
    'tysons-corner-protective-order-lawyer',
    'tysons-corner-drug-crime-lawyer',

    // Fairfax County - THE MISSING ONES! 
    'fairfax-county-criminal-defense-lawyer',
    'fairfax-county-criminal-defense-attorney',
    'best-fairfax-county-criminal-defense-attorneys',
    'fairfax-county-family-law-lawyer',
    'fairfax-county-family-law-attorney',
    'best-fairfax-county-family-law-attorneys',
    'fairfax-county-personal-injury-lawyer',
    'fairfax-county-personal-injury-attorney',
    'best-fairfax-county-personal-injury-attorneys',
    'fairfax-county-dui-defense-lawyer',
    'fairfax-county-dui-defense-attorney',
    'best-fairfax-county-dui-defense-attorneys',
    'fairfax-county-dui-lawyer',
    'fairfax-county-divorce-lawyer',
    'fairfax-county-child-custody-lawyer',
    'fairfax-county-traffic-lawyer',
    'fairfax-county-reckless-driving-lawyer',
    'fairfax-county-domestic-violence-lawyer',
    'fairfax-county-assault-lawyer',
    'fairfax-county-protective-order-lawyer',
    'fairfax-county-drug-crime-lawyer',
    'fairfax-county-commercial-litigation-lawyer',
    'fairfax-county-municipal-lawyer',
    'fairfax-county-appellate-lawyer',

    // Arlington - MISSING ONES!
    'arlington-criminal-defense-lawyer',
    'arlington-criminal-defense-attorney',
    'best-arlington-criminal-defense-attorneys',
    'arlington-family-law-lawyer',
    'arlington-family-law-attorney',
    'best-arlington-family-law-attorneys',
    'arlington-dui-defense-lawyer',
    'arlington-dui-defense-attorney',
    'arlington-dui-lawyer',
    'arlington-divorce-lawyer',
    'arlington-child-custody-lawyer',
    'arlington-traffic-lawyer',
    'arlington-reckless-driving-lawyer',
    'arlington-domestic-violence-lawyer',
    'arlington-assault-lawyer',
    'arlington-protective-order-lawyer',
    'arlington-drug-crime-lawyer',
    'arlington-dui-attorney',
    'arlington-personal-injury-lawyer',
    'arlington-car-accident-lawyer',
    'arlington-wrongful-death-lawyer',
    'arlington-employment-lawyer',
    'arlington-real-estate-lawyer',
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
    'arlington-premises-liability-lawyer',
    'arlington-contract-lawyer',

    // McLean - MISSING ONES!  
    'mclean-criminal-defense-lawyer',
    'mclean-criminal-defense-attorney',
    'mclean-family-law-lawyer',
    'mclean-family-law-attorney',

    // Virginia Statewide - MISSING ONES!
    'virginia-criminal-defense-lawyer',
    'virginia-criminal-defense-attorney',
    'virginia-criminal-defense-law-firm',
    'virginia-family-law-lawyer',
    'virginia-family-law-attorney',
    'virginia-family-law-firm',
    'virginia-dui-defense-lawyer',
    'virginia-dui-defense-attorney',
    'virginia-dui-lawyer',
    'virginia-divorce-lawyer',

    // Vienna - MISSING ONES!
    'vienna-criminal-defense-lawyer',
    'vienna-family-law-lawyer',
    'vienna-dui-lawyer',

    // Falls Church - MISSING ONES!
    'falls-church-criminal-defense-lawyer',
    'falls-church-family-law-lawyer',
    'falls-church-dui-lawyer',

    // Herndon - MISSING ONES!
    'herndon-criminal-defense-lawyer',
    'herndon-family-law-lawyer',
    'herndon-dui-lawyer',

    // Reston - MISSING ONES!
    'reston-criminal-defense-lawyer',
    'reston-family-law-lawyer',
    'reston-dui-lawyer',

    // Springfield - MISSING ONES!
    'springfield-criminal-defense-lawyer',
    'springfield-family-law-lawyer',
    'springfield-divorce-lawyer',
    'springfield-dui-lawyer',

    // Annandale - MISSING ONES!  
    'annandale-criminal-defense-lawyer',
    'annandale-family-law-lawyer',
    'annandale-divorce-lawyer',
    'annandale-dui-lawyer',

    // Centreville - MISSING ONES! 
    'centreville-criminal-defense-lawyer',
    'centreville-family-law-lawyer',
    'centreville-divorce-lawyer',
    'centreville-dui-lawyer',

    // Chantilly - MISSING ONES!
    'chantilly-criminal-defense-lawyer',
    'chantilly-family-law-lawyer',
    'chantilly-divorce-lawyer',
    'chantilly-dui-lawyer',
    'chantilly-reckless-driving-lawyer',

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

    // Ashburn - ALL THE MISSING ONES!
    'ashburn-dui-lawyer',
    'ashburn-criminal-defense-lawyer',
    'ashburn-family-law-lawyer',
    'ashburn-divorce-lawyer',
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

    // Burke - ALL THE MISSING ONES!
    'burke-dui-lawyer',
    'burke-criminal-defense-lawyer',
    'burke-family-law-lawyer',
    'burke-divorce-lawyer',
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
    'burke-estate-planning-lawyer',
    'burke-business-lawyer',
    'burke-bankruptcy-lawyer',

    // Sterling - ALL THE MISSING ONES!
    'sterling-dui-lawyer',
    'sterling-criminal-defense-lawyer',
    'sterling-family-law-lawyer',
    'sterling-divorce-lawyer',
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
    'sterling-estate-planning-lawyer',
    'sterling-business-lawyer',

    // Woodbridge - ALL THE MISSING ONES!
    'woodbridge-dui-lawyer',
    'woodbridge-criminal-defense-lawyer',
    'woodbridge-family-law-lawyer',
    'woodbridge-divorce-lawyer',
    'woodbridge-reckless-driving-lawyer',
    'woodbridge-drug-crime-lawyer',
    'woodbridge-domestic-violence-lawyer',
    'woodbridge-car-accident-lawyer',

    // Winchester - ALL THE MISSING ONES!
    'winchester-dui-lawyer',
    'winchester-divorce-lawyer',

    // Manassas - ALL THE MISSING ONES!  
    'manassas-dui-lawyer',
    'manassas-reckless-driving-lawyer',
    'manassas-car-accident-lawyer',
    'manassas-divorce-lawyer',

    // Clifton - ALL THE MISSING ONES!
    'clifton-dui-lawyer',
    'clifton-criminal-defense-lawyer',
    'clifton-family-law-lawyer',
    'clifton-divorce-lawyer',

    // Leesburg - ALL THE MISSING ONES!
    'leesburg-dui-lawyer',
    'leesburg-criminal-defense-lawyer',
    'leesburg-family-law-lawyer',
    'leesburg-divorce-lawyer',
    'leesburg-personal-injury-lawyer',

    // Great Falls - ALL THE MISSING ONES!
    'great-falls-dui-lawyer',
    'great-falls-criminal-defense-lawyer',
    'great-falls-family-law-lawyer',
    'great-falls-divorce-lawyer',

    // Oakton - ALL THE MISSING ONES!
    'oakton-dui-lawyer',
    'oakton-criminal-defense-lawyer',
    'oakton-family-law-lawyer',
    'oakton-divorce-lawyer',

    // Prince William County - ALL THE MISSING ONES!
    'prince-william-county-dui-lawyer',
    'prince-william-county-criminal-defense-lawyer',
    'prince-william-county-family-law-lawyer',
    'prince-william-county-divorce-lawyer',

    // Loudoun County - ALL THE MISSING ONES!
    'loudoun-county-dui-lawyer',
    'loudoun-county-criminal-defense-lawyer',
    'loudoun-county-family-law-lawyer',
    'loudoun-county-divorce-lawyer',

    // South Riding - ALL THE MISSING ONES!
    'south-riding-dui-lawyer',
    'south-riding-criminal-defense-lawyer',
    'south-riding-family-law-lawyer',
    'south-riding-divorce-lawyer',

    // Manassas Park - ALL THE MISSING ONES!
    'manassas-park-dui-lawyer',
    'manassas-park-criminal-defense-lawyer',
    'manassas-park-family-law-lawyer',

    // Middleburg - ALL THE MISSING ONES!
    'middleburg-dui-lawyer',
    'middleburg-criminal-defense-lawyer',
    'middleburg-family-law-lawyer',

    // District of Columbia - ALL THE MISSING ONES!
    'district-of-columbia-dui-lawyer',
    'district-of-columbia-criminal-defense-lawyer',
    'district-of-columbia-family-law-lawyer',
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

  // Check if this is a valid location-practice URL
  const isValidLocationPractice = validLocationPracticeUrls.includes(locationPracticeUrl);

  // If not a valid location-practice URL, show NotFoundPage  
  if (!isValidLocationPractice) {
    return <NotFoundPage />;
  }

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