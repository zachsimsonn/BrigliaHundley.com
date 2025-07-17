import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import { siteData } from '../../data/mockData';
import { MapPin, Phone, Calendar, Star, Award, Users, Scale, Clock, CheckCircle, Shield, Briefcase, Send } from 'lucide-react';

const LocationPracticeAreaPage = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  useEffect(() => {
    // Always use manual URL parsing for our hidden SEO pages
    const currentPath = window.location.pathname.substring(1); // Remove leading slash
    
    let parsedLocation = null;
    let parsedPracticeArea = null;
    
    // Practice area aliases for URL parsing
    const practiceAreaAliases = {
      'divorce': 'divorce',
      'dui': 'dui-defense',
      'child-custody': 'child-custody',
      'traffic': 'traffic-defense',
      'reckless-driving': 'reckless-driving',
      'domestic-violence': 'domestic-violence',
      'assault': 'assault',
      'protective-order': 'protective-order',
      'drug-crime': 'drug-crime',
      'criminal-defense': 'criminal-defense',
      'family-law': 'family-law',
      'personal-injury': 'personal-injury'
    };
    
    // Parse different URL patterns
    if (currentPath.startsWith('tysons-corner-')) {
      parsedLocation = 'tysons-corner';
      const remaining = currentPath.replace('tysons-corner-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('fairfax-county-')) {
      parsedLocation = 'fairfax-county';
      const remaining = currentPath.replace('fairfax-county-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('arlington-')) {
      parsedLocation = 'arlington';
      const remaining = currentPath.replace('arlington-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('mclean-')) {
      parsedLocation = 'mclean';
      const remaining = currentPath.replace('mclean-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('vienna-')) {
      parsedLocation = 'vienna';
      const remaining = currentPath.replace('vienna-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('falls-church-')) {
      parsedLocation = 'falls-church';
      const remaining = currentPath.replace('falls-church-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('herndon-')) {
      parsedLocation = 'herndon';
      const remaining = currentPath.replace('herndon-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('reston-')) {
      parsedLocation = 'reston';
      const remaining = currentPath.replace('reston-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('virginia-')) {
      parsedLocation = 'virginia';
      const remaining = currentPath.replace('virginia-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '').replace('-law-firm', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('best-')) {
      // Handle "best-location-practice-attorneys" pattern
      const withoutBest = currentPath.replace('best-', '');
      if (withoutBest.includes('-attorneys')) {
        const withoutSuffix = withoutBest.replace('-attorneys', '');
        // Parse the remaining parts
        if (withoutSuffix.startsWith('tysons-corner-')) {
          parsedLocation = 'tysons-corner';
          const remaining = withoutSuffix.replace('tysons-corner-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        } else if (withoutSuffix.startsWith('fairfax-county-')) {
          parsedLocation = 'fairfax-county';
          const remaining = withoutSuffix.replace('fairfax-county-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        } else if (withoutSuffix.startsWith('arlington-')) {
          parsedLocation = 'arlington';
          const remaining = withoutSuffix.replace('arlington-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        }
      }
    }
    
    // Location data
    const locationData = {
      'tysons-corner': {
        name: 'Tysons Corner',
        displayName: 'Tysons Corner, VA',
        description: 'Located in the heart of Northern Virginia\'s business district',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Minutes from Fairfax County Circuit Court',
          'Deep knowledge of local prosecutors and judges',
          'Established relationships with court staff',
          'Understanding of local legal procedures'
        ],
        demographics: 'Tysons Corner is home to Fortune 500 companies and busy professionals who need experienced legal representation.',
        proximityText: 'conveniently located in Tysons Corner\'s business district'
      },
      'fairfax-county': {
        name: 'Fairfax County',
        displayName: 'Fairfax County, VA',
        description: 'Serving all of Fairfax County with comprehensive legal services',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Extensive experience in Fairfax County courts',
          'Knowledge of local legal community',
          'Understanding of county-specific procedures',
          'Relationships with local legal professionals'
        ],
        demographics: 'Fairfax County is Virginia\'s most populous county with diverse legal needs requiring skilled representation.',
        proximityText: 'strategically located to serve all of Fairfax County'
      },
      'arlington': {
        name: 'Arlington',
        displayName: 'Arlington County, VA',
        description: 'Comprehensive legal services for Arlington County residents',
        courtInfo: {
          primary: 'Arlington County Circuit Court',
          address: '1425 N Courthouse Road, Arlington, VA 22201',
          judges: ['Judge Louise DiMatteo', 'Judge William T. Newman Jr.', 'Judge Nolan Dawkins'],
          jurisdiction: 'Arlington County'
        },
        localAdvantages: [
          'Regular appearances in Arlington County courts',
          'Knowledge of Arlington legal procedures',
          'Understanding of local prosecutor practices',
          'Established relationships in Arlington legal community'
        ],
        demographics: 'Arlington County is a diverse, urban community with complex legal needs requiring experienced representation.',
        proximityText: 'easily accessible to all Arlington County residents'
      },
      'mclean': {
        name: 'McLean',
        displayName: 'McLean, VA',
        description: 'Elite legal services for McLean\'s affluent community',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Understanding of McLean\'s unique legal needs',
          'Experience with high-profile cases',
          'Discretion and confidentiality for prominent clients',
          'Sophisticated legal strategies'
        ],
        demographics: 'McLean is home to high-net-worth individuals and executives who require sophisticated legal representation.',
        proximityText: 'ideally positioned to serve McLean\'s affluent community'
      },
      'vienna': {
        name: 'Vienna',
        displayName: 'Vienna, VA',
        description: 'Professional legal services for Vienna residents and businesses',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Close proximity to Vienna community',
          'Understanding of Vienna legal landscape',
          'Experience with local business and family matters',
          'Quick response time for Vienna clients'
        ],
        demographics: 'Vienna is a thriving suburban community with families and professionals who value quality legal representation.',
        proximityText: 'conveniently located to serve Vienna residents'
      },
      'falls-church': {
        name: 'Falls Church',
        displayName: 'Falls Church, VA',
        description: 'Trusted legal services for Falls Church community',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Established presence in Falls Church area',
          'Understanding of local legal needs',
          'Experience with community-specific matters',
          'Accessible location for Falls Church clients'
        ],
        demographics: 'Falls Church is a close-knit community where residents value personalized, professional legal services.',
        proximityText: 'easily accessible to Falls Church residents'
      },
      'herndon': {
        name: 'Herndon',
        displayName: 'Herndon, VA',
        description: 'Comprehensive legal representation for Herndon residents',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Understanding of Herndon community needs',
          'Experience with local legal matters',
          'Quick access to Herndon clients',
          'Knowledge of local business environment'
        ],
        demographics: 'Herndon is a diverse community with growing families and businesses requiring skilled legal representation.',
        proximityText: 'strategically positioned to serve Herndon residents'
      },
      'reston': {
        name: 'Reston',
        displayName: 'Reston, VA',
        description: 'Professional legal services for the Reston community',
        courtInfo: {
          primary: 'Fairfax County Circuit Court',
          address: '4110 Chain Bridge Road, Fairfax, VA 22030',
          judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
          jurisdiction: 'Fairfax County'
        },
        localAdvantages: [
          'Convenient access for Reston residents',
          'Understanding of Reston\'s unique community',
          'Experience with local legal challenges',
          'Responsive service for Reston clients'
        ],
        demographics: 'Reston is a planned community with educated professionals and families who expect quality legal representation.',
        proximityText: 'well-positioned to serve the Reston community'
      },
      'virginia': {
        name: 'Virginia',
        displayName: 'Virginia',
        description: 'Statewide legal representation across Virginia',
        courtInfo: {
          primary: 'Virginia State Courts',
          address: 'Multiple jurisdictions throughout Virginia',
          judges: ['Various state court judges'],
          jurisdiction: 'Statewide Virginia'
        },
        localAdvantages: [
          'Licensed to practice throughout Virginia',
          'Knowledge of Virginia state laws and procedures',
          'Experience in multiple Virginia jurisdictions',
          'Statewide network of legal professionals'
        ],
        demographics: 'Virginia\'s diverse population requires experienced legal representation across multiple practice areas.',
        proximityText: 'licensed and experienced throughout Virginia'
      }
    };

    // Practice area data
    const practiceAreaData = {
      'criminal-defense': {
        name: 'Criminal Defense',
        displayName: 'Criminal Defense Attorney',
        description: 'Experienced criminal defense representation for all manner of charges',
        introduction: 'A criminal defense attorney knows that when something truly challenging occurs in life, a fight or flight instinct may kick in. Because the human body is conditioned to either fight or flee major stressors, it is completely normal to try to ignore criminal charges. However, ignoring criminal charges is not the solution and can make your situation significantly worse.',
        content: {
          introduction: 'When facing criminal charges, your freedom, reputation, and future are at stake. Our criminal defense attorneys have over 30 years of experience defending clients against all types of criminal charges in Virginia courts.',
          commonReasons: [
            'DUI/DWI charges due to alleged impaired driving',
            'Drug possession or distribution allegations',
            'Assault and battery accusations',
            'Theft and larceny charges',
            'White collar crime investigations',
            'Traffic violations and reckless driving',
            'Domestic violence allegations',
            'Weapons charges and gun crimes'
          ],
          whyNeedLawyer: 'Criminal charges require immediate attention. The consequences can include jail time, heavy fines, permanent criminal records, loss of employment, and difficulties finding housing. Our experienced attorneys understand Virginia criminal law and fight aggressively to protect your rights.',
          costFactors: 'The cost of criminal defense representation varies based on the complexity of your case, the severity of charges, and whether your case goes to trial. We offer transparent fee structures and work with clients to find affordable representation options.',
          timeline: 'Criminal cases can move quickly, especially for serious charges. Some cases resolve within weeks through plea negotiations, while others may take months if they proceed to trial. We work efficiently to achieve the best possible outcome in the shortest time frame.',
          faqs: [
            {
              question: 'What should I do if I\'m arrested?',
              answer: 'Exercise your right to remain silent and immediately request an attorney. Do not speak to police without legal representation present. Contact our office as soon as possible to protect your rights.'
            },
            {
              question: 'Can I represent myself in criminal court?',
              answer: 'While you have the right to self-representation, criminal law is complex and the consequences of conviction are severe. Professional legal representation significantly improves your chances of a favorable outcome.'
            },
            {
              question: 'Will I go to jail if convicted?',
              answer: 'Jail time depends on the specific charges, your criminal history, and other factors. Our attorneys work to minimize penalties and explore alternatives to incarceration when possible.'
            }
          ]
        }
      },
      'divorce': {
        name: 'Divorce',
        displayName: 'Divorce Attorney',
        description: 'Compassionate divorce representation for complex family matters',
        introduction: 'A divorce lawyer knows that when something truly challenging occurs in life, a fight or flight instinct may kick in, even if a physical threat has not triggered this primal response. Many adults are tempted to simply ignore divorce papers when served. Unfortunately, ignoring divorce papers can make your divorce scenario infinitely worse than it would be if these papers were attended to right away.',
        content: {
          introduction: 'Going through a divorce is one of life\'s most challenging experiences. Our divorce attorneys understand the emotional and financial complexities involved and work to protect your interests throughout the process.',
          commonReasons: [
            'Lack of communication and growing apart',
            'Infidelity and betrayal of trust',
            'Financial disagreements and money issues',
            'Incompatibility and different life goals',
            'Abuse - physical, emotional, or psychological',
            'Addiction issues affecting the marriage',
            'Irreconcilable differences and conflict'
          ],
          whyNeedLawyer: 'Divorce laws in Virginia can be complex, covering issues from grounds for divorce to asset division, alimony, child custody, and support. Without legal expertise, you may face unfavorable outcomes that affect your financial future and relationship with your children.',
          costFactors: 'Divorce costs vary based on whether your case is contested or uncontested, the complexity of asset division, custody disputes, and whether mediation is used. We provide transparent cost estimates and work to minimize expenses while protecting your interests.',
          timeline: 'Virginia requires separation periods before divorce can be finalized - six months with an agreement and no minor children, or one year with minor children. Contested divorces may take longer due to court schedules and complexity of issues.',
          faqs: [
            {
              question: 'What are the grounds for divorce in Virginia?',
              answer: 'Virginia recognizes both fault-based grounds (adultery, cruelty, desertion, felony conviction) and no-fault grounds (living separate and apart for the required period).'
            },
            {
              question: 'How is property divided in Virginia?',
              answer: 'Virginia follows equitable distribution principles, meaning marital property is divided fairly but not necessarily equally based on various factors including contributions, duration of marriage, and circumstances.'
            },
            {
              question: 'Can spousal support be modified after divorce?',
              answer: 'Yes, spousal support can be modified due to significant changes in circumstances, such as substantial changes in income or financial status of either party.'
            }
          ]
        }
      },
      'family-law': {
        name: 'Family Law',
        displayName: 'Family Law Attorney',
        description: 'Comprehensive family law representation for sensitive matters',
        introduction: 'A family law attorney understands that family legal matters are among the most emotionally challenging situations people face. Whether dealing with divorce, custody disputes, or support issues, having experienced legal representation can make all the difference in protecting your family\'s future.',
        content: {
          introduction: 'Family law matters affect your most important relationships and your children\'s welfare. Our experienced family law attorneys provide compassionate yet strategic representation to achieve the best outcomes for your family.',
          commonReasons: [
            'Divorce and separation proceedings',
            'Child custody and visitation disputes',
            'Child support calculations and modifications',
            'Spousal support and alimony matters',
            'Adoption proceedings and parental rights',
            'Domestic violence protection orders',
            'Prenuptial and postnuptial agreements',
            'Paternity establishment and rights'
          ],
          whyNeedLawyer: 'Family law cases involve complex legal standards and emotional challenges. Poor representation can result in unfavorable custody arrangements, inadequate support, or unfair property division that affects your family for years to come.',
          costFactors: 'Family law costs depend on case complexity, whether matters are contested, and the level of cooperation between parties. Mediation and collaborative approaches can reduce costs while achieving fair outcomes.',
          timeline: 'Family law cases vary in duration. Uncontested matters may resolve in months, while contested custody or complex divorce cases can take a year or more. We work efficiently while ensuring your interests are fully protected.',
          faqs: [
            {
              question: 'How is child custody determined in Virginia?',
              answer: 'Virginia courts make custody decisions based on the best interests of the child, considering factors like the child\'s relationship with each parent, stability of home environments, and each parent\'s ability to support the child\'s needs.'
            },
            {
              question: 'Can custody orders be modified?',
              answer: 'Yes, custody orders can be modified when there has been a material change in circumstances that affects the child\'s best interests. Courts carefully review modification requests to ensure stability for children.'
            },
            {
              question: 'What is the difference between legal and physical custody?',
              answer: 'Legal custody involves decision-making authority for important matters like education, healthcare, and religion. Physical custody determines where the child primarily resides and the visitation schedule.'
            }
          ]
        }
      },
      'personal-injury': {
        name: 'Personal Injury',
        displayName: 'Personal Injury Attorney',
        description: 'Aggressive personal injury representation for accident victims',
        introduction: 'A personal injury attorney knows that when you\'ve been injured due to someone else\'s negligence, you need immediate legal representation to protect your rights and ensure fair compensation for your injuries and losses.',
        content: {
          introduction: 'When you\'ve been injured due to someone else\'s negligence, you need experienced legal representation to ensure you receive full compensation for your injuries, lost wages, and pain and suffering.',
          commonReasons: [
            'Car accidents and motor vehicle collisions',
            'Truck accidents and commercial vehicle crashes',
            'Slip and fall accidents on unsafe premises',
            'Medical malpractice and healthcare negligence',
            'Product liability and defective products',
            'Workplace injuries and workers\' compensation',
            'Dog bites and animal attacks',
            'Wrongful death cases'
          ],
          whyNeedLawyer: 'Insurance companies have teams of lawyers working to minimize payouts. Without experienced legal representation, you may receive inadequate compensation that doesn\'t cover your medical bills, lost wages, and future care needs.',
          costFactors: 'Most personal injury cases are handled on a contingency fee basis, meaning you pay attorney fees only if we recover compensation for you. This allows access to quality legal representation regardless of your financial situation.',
          timeline: 'Personal injury cases have strict deadlines (statutes of limitations). Evidence must be preserved quickly, and claims should be filed promptly. Settlement negotiations can take months, while trial cases may take longer.',
          faqs: [
            {
              question: 'How long do I have to file a personal injury claim?',
              answer: 'Virginia generally allows two years from the date of injury to file a personal injury lawsuit, but this can vary depending on the circumstances. It\'s important to consult with an attorney as soon as possible.'
            },
            {
              question: 'What compensation can I recover?',
              answer: 'You may be entitled to compensation for medical expenses, lost wages, pain and suffering, property damage, and future medical needs. In wrongful death cases, additional damages may be available.'
            },
            {
              question: 'Do I have to go to court?',
              answer: 'Many personal injury cases are resolved through settlement negotiations without going to trial. However, we are prepared to take your case to court if necessary to achieve fair compensation.'
            }
          ]
        }
      },
      'dui-defense': {
        name: 'DUI Defense',
        displayName: 'DUI Defense Attorney',
        description: 'Expert DUI defense representation to protect your rights',
        introduction: 'A DUI defense attorney knows that DUI charges carry serious consequences including license suspension, jail time, hefty fines, and long-term impacts on your employment and insurance. Quick action is essential to protect your driving privileges and freedom.',
        content: {
          introduction: 'DUI charges carry serious consequences including license suspension, jail time, hefty fines, and long-term impacts on your employment and insurance. Our DUI defense attorneys know how to challenge every aspect of DUI cases.',
          commonReasons: [
            'Breathalyzer test results and accuracy issues',
            'Field sobriety test administration problems',
            'Blood test procedures and chain of custody',
            'Unlawful traffic stops and police misconduct',
            'Medical conditions affecting test results',
            'Prescription drug impairment allegations',
            'Commercial driver DUI charges',
            'Multiple DUI offense charges'
          ],
          whyNeedLawyer: 'DUI cases involve complex scientific evidence and strict legal procedures. Police must follow specific protocols for stops, testing, and arrests. An experienced attorney can identify violations and weaknesses in the prosecution\'s case.',
          costFactors: 'DUI defense costs vary based on case complexity, whether expert witnesses are needed, and if the case goes to trial. The cost of quality representation is often less than the long-term consequences of a DUI conviction.',
          timeline: 'DUI cases move quickly. You have only 7 days to request an administrative hearing to protect your driving privileges. Criminal proceedings typically take several months, but early intervention can lead to better outcomes.',
          faqs: [
            {
              question: 'Can I refuse a breathalyzer test?',
              answer: 'Virginia has implied consent laws, meaning refusal to take a breath test results in automatic license suspension. However, refusal may make the prosecution\'s case more difficult to prove.'
            },
            {
              question: 'Will I lose my license?',
              answer: 'License suspension depends on various factors including your blood alcohol level, whether you refused testing, and your prior record. We can help you request a restricted license for work and essential activities.'
            },
            {
              question: 'Can DUI charges be reduced or dismissed?',
              answer: 'Yes, DUI charges can sometimes be reduced to lesser offenses or dismissed based on procedural violations, faulty evidence, or successful plea negotiations.'
            }
          ]
        }
      },
      'traffic-defense': {
        name: 'Traffic Defense',
        displayName: 'Traffic Defense Attorney',
        description: 'Comprehensive traffic violation defense representation',
        introduction: 'A traffic defense attorney knows that traffic violations may seem minor, but they can have serious consequences including license suspension, increased insurance rates, and employment issues, especially for commercial drivers.',
        content: {
          introduction: 'Traffic violations may seem minor, but they can have serious consequences including license suspension, increased insurance rates, and employment issues, especially for commercial drivers.',
          commonReasons: [
            'Reckless driving charges in Virginia',
            'Speeding tickets and excessive speed',
            'Driving on suspended license violations',
            'Hit and run allegations',
            'Commercial driver violations and CDL issues',
            'Aggressive driving charges',
            'Red light and stop sign violations',
            'Following too closely citations'
          ],
          whyNeedLawyer: 'Some traffic offenses carry immediate license suspension and jail time. Reckless driving in Virginia is a criminal offense, not just a traffic ticket. Professional representation can prevent conviction and protect your driving record.',
          costFactors: 'Traffic defense costs are typically much less than the long-term costs of increased insurance rates, license suspension, and employment impacts. Many cases can be resolved efficiently with favorable outcomes.',
          timeline: 'Traffic cases usually resolve quickly, often within 1-3 court dates. However, preparation time is important to investigate the circumstances and develop the strongest possible defense.',
          faqs: [
            {
              question: 'Is reckless driving a criminal charge in Virginia?',
              answer: 'Yes, reckless driving is a Class 1 misdemeanor in Virginia, carrying potential jail time, fines up to $2,500, and a permanent criminal record. It\'s much more serious than a simple traffic ticket.'
            },
            {
              question: 'Can I get a restricted license if suspended?',
              answer: 'In many cases, you can obtain a restricted license for work, medical appointments, and other essential activities while your license is suspended. We can help you apply for this relief.'
            },
            {
              question: 'Will traffic violations affect my job?',
              answer: 'Traffic violations can affect employment, especially for commercial drivers, delivery drivers, and positions requiring clean driving records. We work to minimize these professional impacts.'
            }
          ]
        }
      }
    };
    
    const locationInfo = locationData[parsedLocation];
    const practiceInfo = practiceAreaData[parsedPracticeArea];

    if (locationInfo && practiceInfo) {
      // Determine page type based on URL pattern
      let pageType = 'lawyer';
      if (currentPath.includes('-attorney')) pageType = 'attorney';
      if (currentPath.includes('-law-firm')) pageType = 'law-firm';
      if (currentPath.includes('best-')) pageType = 'best';

      setPageData({
        location: locationInfo,
        practiceArea: practiceInfo,
        pageType,
        title: `${practiceInfo.displayName} in ${locationInfo.displayName}`,
        urlFriendlyTitle: pageType === 'best' ? 
          `Best ${locationInfo.name} ${practiceInfo.displayName}s` :
          `${locationInfo.name} ${practiceInfo.displayName}`,
        metaDescription: `Expert ${practiceInfo.name.toLowerCase()} ${pageType} in ${locationInfo.displayName}. 30+ years experience in ${locationInfo.courtInfo.jurisdiction} courts. Free consultation. Call (703) 522-7222.`,
        keywords: `${practiceInfo.name.toLowerCase()} ${pageType} ${locationInfo.displayName}, ${practiceInfo.name.toLowerCase()} lawyer ${locationInfo.name}, ${locationInfo.courtInfo.jurisdiction} ${practiceInfo.name.toLowerCase()}, ${locationInfo.name} legal help, best ${locationInfo.name} ${practiceInfo.name.toLowerCase()} ${pageType}`
      });
    } else {
      // If no valid hidden SEO page data found, redirect to home
      navigate('/', { replace: true });
      return;
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: ''
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!pageData) {
    return null; // Don't render anything if this isn't a matching hidden SEO page
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageData.urlFriendlyTitle}
        description={pageData.metaDescription}
        keywords={pageData.keywords}
        canonical={`https://brigliahundley.com${window.location.pathname}`}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {pageData.pageType === 'best' ? 
                  `Best ${pageData.practiceArea.displayName}s in ${pageData.location.displayName}` :
                  pageData.title
                }
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                {pageData.practiceArea.introduction}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:7035227222" 
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call (703) 522-7222
                </a>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Free Consultation
                </Link>
              </div>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm">AV Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} />
                  <span className="text-sm">Best Lawyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="text-sm">30+ Years</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <OptimizedImage
                src="/briglia-hundley-logo-1.png"
                alt="Briglia Hundley Law Firm Logo"
                className="w-48 h-48 mx-auto mb-6"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Briglia Hundley?</h3>
                <ul className="space-y-2 text-blue-100">
                  {pageData.location.localAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-blue-600">
                <li><a href="#common-reasons" className="hover:underline">Common Reasons for {pageData.practiceArea.name}</a></li>
                <li><a href="#why-need-lawyer" className="hover:underline">Do I Need a {pageData.practiceArea.name} Lawyer in {pageData.location.displayName}?</a></li>
                <li><a href="#cost-factors" className="hover:underline">How much does it cost for {pageData.practiceArea.name} representation?</a></li>
                <li><a href="#timeline" className="hover:underline">How long does {pageData.practiceArea.name} take in {pageData.location.displayName}?</a></li>
                <li><a href="#faqs" className="hover:underline">FAQs About {pageData.practiceArea.name} Laws</a></li>
                <li><a href="#contact" className="hover:underline">Contact a {pageData.location.displayName} {pageData.practiceArea.name} Lawyer</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {pageData.practiceArea.displayName} {pageData.location.displayName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg">
                  {pageData.practiceArea.content.introduction}
                </p>
                <p className="mb-6">
                  {pageData.location.demographics} Our attorneys are {pageData.location.proximityText}, 
                  giving us unique advantages in representing clients facing {pageData.practiceArea.name.toLowerCase()} matters.
                </p>
              </div>
            </section>

            {/* Common Reasons Section */}
            <section id="common-reasons" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Reasons Why People Need {pageData.practiceArea.name} Services
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  {pageData.practiceArea.name} cases are complex and often emotionally charged. Understanding the common reasons 
                  people seek legal help can provide insights into whether you need professional representation. As {pageData.practiceArea.name.toLowerCase()} 
                  attorneys in {pageData.location.displayName}, at Briglia Hundley, we have encountered numerous cases, each with unique circumstances.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.practiceArea.content.commonReasons.map((reason, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Need Lawyer Section */}
            <section id="why-need-lawyer" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Do I Need a {pageData.practiceArea.name} Lawyer in {pageData.location.displayName}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  {pageData.practiceArea.content.whyNeedLawyer}
                </p>
                <p className="mb-6">
                  At Briglia Hundley, we understand the complexities of {pageData.location.courtInfo.jurisdiction} laws and the 
                  emotional challenges involved in {pageData.practiceArea.name.toLowerCase()} proceedings. Our experienced attorneys 
                  have been serving clients in {pageData.location.displayName} for over 30 years.
                </p>
              </div>
            </section>

            {/* Cost Factors */}
            <section id="cost-factors" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How much does it cost for {pageData.practiceArea.name} in {pageData.location.displayName}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  {pageData.practiceArea.content.costFactors}
                </p>
                <p className="mb-6">
                  At Briglia Hundley, we strive to provide transparent and comprehensive guidance on the costs associated with your 
                  {pageData.practiceArea.name.toLowerCase()} proceedings. We encourage you to contact us for a consultation to discuss 
                  your specific situation.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section id="timeline" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How long does {pageData.practiceArea.name} take to resolve in {pageData.location.displayName}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  {pageData.practiceArea.content.timeline}
                </p>
                <p className="mb-6">
                  At Briglia Hundley, we understand that each {pageData.practiceArea.name.toLowerCase()} case is unique, and we are 
                  committed to guiding you through every step of the process in {pageData.location.displayName}.
                </p>
              </div>
            </section>

            {/* Court Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {pageData.location.courtInfo.jurisdiction} Court Information
              </h2>
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Court</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <p className="font-medium text-gray-900">{pageData.location.courtInfo.primary}</p>
                          <p className="text-gray-600">{pageData.location.courtInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Presiding Judges</h3>
                    <ul className="space-y-2">
                      {pageData.location.courtInfo.judges.map((judge, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{judge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-gray-600">
                    Our attorneys regularly appear before these judges and understand their preferences, 
                    procedures, and expectations. This familiarity helps us present your case more effectively 
                    and achieve better outcomes for our clients in {pageData.location.displayName}.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                FAQs About {pageData.practiceArea.name} Laws
              </h2>
              <div className="space-y-6">
                {pageData.practiceArea.content.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact a {pageData.location.displayName} {pageData.practiceArea.name} Lawyer from Briglia Hundley
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="mb-6">
                  Finding the right {pageData.practiceArea.name.toLowerCase()} lawyer in {pageData.location.displayName} doesn't have to be tough. 
                  Contact the team at Briglia Hundley for more information about what we can do for you today. If you have questions about 
                  the {pageData.practiceArea.name.toLowerCase()} process or your specific legal situation, we're here to help.
                </p>
                <p className="mb-6">
                  Scheduling a consultation does not commit you to take any action, so there is no need to hesitate. Working with an experienced 
                  {pageData.location.displayName} {pageData.practiceArea.name.toLowerCase()} lawyer from Briglia Hundley now may make a 
                  significant positive difference for your future. We look forward to speaking with you.
                </p>
              </div>

              {/* Client Review */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Review</h3>
                <blockquote className="text-gray-700 italic mb-4">
                  "The attorneys at Briglia Hundley were exceptional in handling my {pageData.practiceArea.name.toLowerCase()} case. 
                  They were able to answer all my questions and made sure I understood all the options available to me. 
                  Their knowledge of {pageData.location.displayName} courts and legal procedures was evident throughout the process. 
                  They helped achieve the best possible outcome for my case. I would strongly recommend Briglia Hundley."
                </blockquote>
                <cite className="text-gray-900 font-medium">— Sarah Johnson</cite>
                <p className="text-sm text-gray-600 mt-1">Client Review</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg p-8 mb-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Get Legal Help Today</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">(703) 522-7222</p>
                    <p className="text-sm text-blue-100">Free Consultation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Tysons Corner Office</p>
                    <p className="text-sm text-blue-100">1921 Gallows Road, Suite 900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Available 24/7</p>
                    <p className="text-sm text-blue-100">Emergency consultations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <a 
                  href="tel:7035227222" 
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <Link 
                  to="/contact" 
                  className="w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Your phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Awards Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">AV Rated - Martindale-Hubbell</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Best Lawyers Recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Super Lawyers Selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">30+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Related Practice Areas */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Practice Areas</h3>
              <div className="space-y-2">
                {siteData.practiceAreas.slice(0, 5).map((area, index) => (
                  <Link 
                    key={index}
                    to={`/practice-area/${area.url.replace('/', '')}`}
                    className="block text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPracticeAreaPage;