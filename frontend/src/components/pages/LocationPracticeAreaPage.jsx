import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import { siteData } from '../../data/mockData';
import { MapPin, Phone, Calendar, Star, Award, Users, Scale, Clock, CheckCircle, Shield, Briefcase } from 'lucide-react';

const LocationPracticeAreaPage = () => {
  const { location, practiceArea } = useParams();
  const [pageData, setPageData] = useState(null);

  // Comprehensive location data covering all service areas
  const locationData = {
    'tysons-corner': {
      name: 'Tysons Corner',
      displayName: 'Tysons Corner, VA',
      description: 'Located in the heart of Northern Virginia\'s business district',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Minutes from Fairfax County Circuit Court',
        'Deep knowledge of local prosecutors and judges',
        'Established relationships with court staff',
        'Understanding of local legal procedures',
        'Immediate access to court records and filings'
      ],
      demographics: 'Tysons Corner is home to Fortune 500 companies and busy professionals who need experienced legal representation.',
      proximityText: 'conveniently located in Tysons Corner\'s business district',
      keyStats: 'Over 30 years serving Tysons Corner clients with a 95% success rate'
    },
    'fairfax-county': {
      name: 'Fairfax County',
      displayName: 'Fairfax County, VA',
      description: 'Serving all of Fairfax County with comprehensive legal services',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Extensive experience in Fairfax County courts',
        'Knowledge of local legal community',
        'Understanding of county-specific procedures',
        'Relationships with local legal professionals',
        'Proven track record in Fairfax County cases'
      ],
      demographics: 'Fairfax County is Virginia\'s most populous county with diverse legal needs requiring skilled representation.',
      proximityText: 'strategically located to serve all of Fairfax County',
      keyStats: 'Thousands of successful cases in Fairfax County since 1993'
    },
    'arlington': {
      name: 'Arlington',
      displayName: 'Arlington County, VA',
      description: 'Comprehensive legal services for Arlington County residents',
      courtInfo: {
        primary: 'Arlington County Circuit Court',
        address: '1425 N Courthouse Road, Arlington, VA 22201',
        judges: ['Judge Louise DiMatteo', 'Judge William T. Newman Jr.', 'Judge Nolan Dawkins'],
        jurisdiction: 'Arlington County',
        district: 'Arlington General District Court'
      },
      localAdvantages: [
        'Regular appearances in Arlington County courts',
        'Knowledge of Arlington legal procedures',
        'Understanding of local prosecutor practices',
        'Established relationships in Arlington legal community',
        'Quick response time for Arlington clients'
      ],
      demographics: 'Arlington County is a diverse, urban community with complex legal needs requiring experienced representation.',
      proximityText: 'easily accessible to all Arlington County residents',
      keyStats: 'Successfully representing Arlington clients for over three decades'
    },
    'mclean': {
      name: 'McLean',
      displayName: 'McLean, VA',
      description: 'Elite legal services for McLean\'s affluent community',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Understanding of McLean\'s unique legal needs',
        'Experience with high-profile cases',
        'Discretion and confidentiality for prominent clients',
        'Sophisticated legal strategies',
        'White-glove client service'
      ],
      demographics: 'McLean is home to high-net-worth individuals and executives who require sophisticated legal representation.',
      proximityText: 'ideally positioned to serve McLean\'s affluent community',
      keyStats: 'Trusted by McLean\'s most prominent families and business leaders'
    },
    'vienna': {
      name: 'Vienna',
      displayName: 'Vienna, VA',
      description: 'Professional legal services for Vienna residents and businesses',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Close proximity to Vienna community',
        'Understanding of Vienna legal landscape',
        'Experience with local business and family matters',
        'Quick response time for Vienna clients',
        'Knowledge of local court procedures'
      ],
      demographics: 'Vienna is a thriving suburban community with families and professionals who value quality legal representation.',
      proximityText: 'conveniently located to serve Vienna residents',
      keyStats: 'Proudly serving Vienna clients with dedicated legal representation'
    },
    'falls-church': {
      name: 'Falls Church',
      displayName: 'Falls Church, VA',
      description: 'Trusted legal services for Falls Church community',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Established presence in Falls Church area',
        'Understanding of local legal needs',
        'Experience with community-specific matters',
        'Accessible location for Falls Church clients',
        'Personalized service for local families'
      ],
      demographics: 'Falls Church is a close-knit community where residents value personalized, professional legal services.',
      proximityText: 'easily accessible to Falls Church residents',
      keyStats: 'Committed to serving Falls Church with excellence and integrity'
    },
    'herndon': {
      name: 'Herndon',
      displayName: 'Herndon, VA',
      description: 'Comprehensive legal representation for Herndon residents',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Understanding of Herndon community needs',
        'Experience with local legal matters',
        'Quick access to Herndon clients',
        'Knowledge of local business environment',
        'Commitment to Herndon community'
      ],
      demographics: 'Herndon is a diverse community with growing families and businesses requiring skilled legal representation.',
      proximityText: 'strategically positioned to serve Herndon residents',
      keyStats: 'Dedicated to providing Herndon with top-quality legal services'
    },
    'reston': {
      name: 'Reston',
      displayName: 'Reston, VA',
      description: 'Professional legal services for the Reston community',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County',
        district: 'Fairfax General District Court'
      },
      localAdvantages: [
        'Convenient access for Reston residents',
        'Understanding of Reston\'s unique community',
        'Experience with local legal challenges',
        'Responsive service for Reston clients',
        'Knowledge of area-specific legal issues'
      ],
      demographics: 'Reston is a planned community with educated professionals and families who expect quality legal representation.',
      proximityText: 'well-positioned to serve the Reston community',
      keyStats: 'Committed to excellence in serving Reston residents and businesses'
    },
    'virginia': {
      name: 'Virginia',
      displayName: 'Virginia',
      description: 'Statewide legal representation across Virginia',
      courtInfo: {
        primary: 'Virginia State Courts',
        address: 'Multiple jurisdictions throughout Virginia',
        judges: ['Various state court judges'],
        jurisdiction: 'Statewide Virginia',
        district: 'Multiple Virginia District Courts'
      },
      localAdvantages: [
        'Licensed to practice throughout Virginia',
        'Knowledge of Virginia state laws and procedures',
        'Experience in multiple Virginia jurisdictions',
        'Statewide network of legal professionals',
        'Comprehensive understanding of Virginia legal system'
      ],
      demographics: 'Virginia\'s diverse population requires experienced legal representation across multiple practice areas.',
      proximityText: 'licensed and experienced throughout Virginia',
      keyStats: 'Three decades of successful practice across Virginia'
    }
  };

  // Comprehensive practice area data with detailed content
  const practiceAreaData = {
    'criminal-defense': {
      name: 'Criminal Defense',
      displayName: 'Criminal Defense Attorney',
      description: 'Experienced criminal defense representation for all manner of charges',
      longDescription: 'When facing criminal charges, your freedom, reputation, and future are at stake. Our criminal defense attorneys have over 30 years of experience defending clients against all types of criminal charges in Virginia courts.',
      services: [
        'DUI/DWI Defense',
        'White Collar Crime Defense', 
        'Drug Charges',
        'Assault and Battery',
        'Theft and Larceny',
        'Traffic Offenses',
        'Juvenile Offenses',
        'Federal Criminal Defense',
        'Domestic Violence',
        'Weapons Charges',
        'Sex Crimes',
        'Homicide Defense',
        'Fraud Defense',
        'Restraining Orders',
        'Protective Orders'
      ],
      urgency: 'Criminal charges require immediate attention. Every moment counts in building your defense.',
      consequences: 'Criminal convictions can result in jail time, heavy fines, permanent criminal records, loss of employment, housing difficulties, and limited future opportunities.',
      approach: 'Our criminal defense attorneys thoroughly investigate every case, challenge evidence, interview witnesses, and fight aggressively to protect your rights and freedom.',
      experience: 'With over 30 years of criminal defense experience, we\'ve handled thousands of cases ranging from traffic violations to serious felonies, achieving dismissals, acquittals, and reduced charges.',
      results: 'Our track record includes dismissed charges, reduced sentences, not guilty verdicts, and plea agreements that minimize consequences across all types of criminal cases.',
      detailedServices: {
        'DUI/DWI Defense': 'Challenging breathalyzer results, field sobriety tests, and unlawful stops',
        'Drug Charges': 'Defending against possession, distribution, and trafficking charges',
        'Assault and Battery': 'Protecting clients against violent crime allegations',
        'White Collar Crimes': 'Defending professionals against fraud, embezzlement, and corporate crimes',
        'Traffic Offenses': 'Handling reckless driving, speeding, and license suspension cases'
      }
    },
    'family-law': {
      name: 'Family Law',
      displayName: 'Family Law Attorney',
      description: 'Compassionate family law representation for divorce, custody, and support matters',
      longDescription: 'Family law matters are among the most emotionally challenging legal issues. Our experienced family law attorneys provide compassionate yet strategic representation to protect your interests and your children\'s welfare.',
      services: [
        'Divorce',
        'Child Custody',
        'Child Support',
        'Property Division',
        'Spousal Support',
        'Adoption',
        'Prenuptial Agreements',
        'Postnuptial Agreements',
        'Domestic Violence Protection',
        'Paternity',
        'Guardianship',
        'Modification of Orders',
        'Enforcement of Orders',
        'Mediation',
        'Collaborative Divorce'
      ],
      urgency: 'Family law matters affect your most important relationships and financial future. Acting quickly protects your interests and your children\'s welfare.',
      consequences: 'Poorly handled family law cases can result in unfavorable custody arrangements, inadequate support, unfair property division, and long-term financial hardship.',
      approach: 'We provide compassionate yet strategic representation, working to achieve fair outcomes while protecting your children\'s best interests and your financial security.',
      experience: 'Our family law attorneys have guided hundreds of families through difficult transitions with skill, sensitivity, and successful outcomes.',
      results: 'We consistently achieve favorable custody arrangements, fair property settlements, appropriate support orders, and protection for our clients\' interests.',
      detailedServices: {
        'Divorce': 'Comprehensive divorce representation including contested and uncontested divorces',
        'Child Custody': 'Fighting for fair custody arrangements that serve children\'s best interests',
        'Child Support': 'Ensuring appropriate support calculations and enforcement',
        'Property Division': 'Protecting your assets and ensuring fair distribution',
        'Spousal Support': 'Advocating for fair alimony arrangements'
      }
    },
    'personal-injury': {
      name: 'Personal Injury',
      displayName: 'Personal Injury Attorney',
      description: 'Aggressive personal injury representation for accident victims',
      longDescription: 'When you\'ve been injured due to someone else\'s negligence, you need experienced legal representation to ensure you receive full compensation for your injuries, lost wages, and pain and suffering.',
      services: [
        'Car Accidents',
        'Truck Accidents',
        'Motorcycle Accidents',
        'Slip and Fall',
        'Medical Malpractice',
        'Product Liability',
        'Wrongful Death',
        'Workers\' Compensation',
        'Premises Liability',
        'Construction Accidents',
        'Dog Bites',
        'Birth Injuries',
        'Nursing Home Abuse',
        'Brain Injuries',
        'Spinal Cord Injuries'
      ],
      urgency: 'Personal injury cases have strict deadlines. Evidence disappears and witnesses\' memories fade - immediate action is critical to preserving your claim.',
      consequences: 'Without proper legal representation, you may receive inadequate compensation that doesn\'t cover your medical bills, lost wages, future care needs, and pain and suffering.',
      approach: 'We thoroughly investigate accidents, work with medical experts, reconstruct incidents, and negotiate aggressively with insurance companies to maximize your compensation.',
      experience: 'Our personal injury team has recovered millions of dollars for accident victims and their families throughout Virginia, with a proven track record of successful settlements and verdicts.',
      results: 'We consistently achieve settlements and verdicts that fully compensate our clients for their injuries, losses, and future needs.',
      detailedServices: {
        'Car Accidents': 'Handling all aspects of motor vehicle accident claims',
        'Medical Malpractice': 'Holding healthcare providers accountable for negligent care',
        'Slip and Fall': 'Proving liability in premises liability cases',
        'Wrongful Death': 'Seeking justice and compensation for families who have lost loved ones',
        'Product Liability': 'Holding manufacturers responsible for defective products'
      }
    },
    'dui-defense': {
      name: 'DUI Defense',
      displayName: 'DUI Defense Attorney',
      description: 'Expert DUI and impaired driving defense representation',
      longDescription: 'DUI charges carry serious consequences including license suspension, jail time, hefty fines, and long-term impacts on your employment and insurance. Our DUI defense attorneys know how to challenge every aspect of DUI cases.',
      services: [
        'DUI/DWI Defense',
        'Breathalyzer Challenges',
        'Field Sobriety Test Defense',
        'Blood Test Challenges',
        'License Restoration',
        'Administrative Hearings',
        'Ignition Interlock',
        'First Offense DUI',
        'Multiple DUI Offenses',
        'Felony DUI',
        'Underage DUI',
        'Commercial Driver DUI',
        'Drug DUI',
        'Prescription Drug DUI',
        'Refusal Cases'
      ],
      urgency: 'DUI charges can result in immediate license suspension. You have only 7 days to request an administrative hearing to protect your driving privileges.',
      consequences: 'DUI convictions result in license suspension, increased insurance rates, job loss, security clearance issues, and potential jail time for repeat offenses.',
      approach: 'We challenge every aspect of DUI stops and arrests, from the initial stop to the accuracy of testing equipment, fighting to protect your driving privileges and freedom.',
      experience: 'Our attorneys appear in Virginia DUI courts daily and have extensive knowledge of DUI science, testing procedures, and defense strategies that work.',
      results: 'We regularly achieve reduced charges, dismissed cases, preserved driving privileges, and alternative sentencing options for our DUI clients.',
      detailedServices: {
        'Breathalyzer Defense': 'Challenging the accuracy and administration of breath tests',
        'Field Sobriety Defense': 'Exposing flaws in standardized field sobriety testing',
        'License Restoration': 'Fighting to restore your driving privileges quickly',
        'Administrative Hearings': 'Protecting your license through DMV proceedings',
        'Multiple Offenses': 'Minimizing penalties for repeat DUI offenders'
      }
    },
    'traffic-defense': {
      name: 'Traffic Defense',
      displayName: 'Traffic Defense Attorney',
      description: 'Comprehensive traffic violation and driving offense defense',
      longDescription: 'Traffic violations may seem minor, but they can have serious consequences including license suspension, increased insurance rates, and employment issues, especially for commercial drivers.',
      services: [
        'Reckless Driving',
        'Speeding Tickets',
        'Driving on Suspended License',
        'Hit and Run',
        'Aggressive Driving',
        'Following Too Closely',
        'Improper Lane Change',
        'Running Red Lights',
        'Stop Sign Violations',
        'Commercial Driver Violations',
        'CDL Defense',
        'License Restoration',
        'DMV Hearings',
        'Point Reduction',
        'Driver Improvement'
      ],
      urgency: 'Some traffic offenses carry immediate license suspension and jail time. Quick action can prevent conviction and protect your driving record.',
      consequences: 'Traffic convictions can result in license suspension, increased insurance rates, points on your record, job loss for commercial drivers, and even jail time for serious offenses.',
      approach: 'We examine every detail of your traffic stop, challenge the officer\'s observations, and negotiate with prosecutors to minimize consequences.',
      experience: 'Our attorneys handle hundreds of traffic cases monthly and understand the strategies that work in Virginia traffic courts.',
      results: 'We frequently achieve reduced charges, dismissed cases, driving school options, and protected driving privileges for our traffic clients.',
      detailedServices: {
        'Reckless Driving': 'Defending against Virginia\'s serious reckless driving charges',
        'CDL Defense': 'Protecting commercial drivers\' livelihoods',
        'License Restoration': 'Helping clients regain their driving privileges',
        'Point Reduction': 'Minimizing impact on driving records',
        'DMV Hearings': 'Representing clients in administrative proceedings'
      }
    },
    'divorce': {
      name: 'Divorce',
      displayName: 'Divorce Attorney',
      description: 'Experienced divorce representation for complex and contested cases',
      longDescription: 'Going through a divorce is one of life\'s most challenging experiences. Our divorce attorneys understand the emotional and financial complexities involved and work to protect your interests throughout the process.',
      services: [
        'Contested Divorce',
        'Uncontested Divorce',
        'Property Division',
        'Spousal Support',
        'Child Custody',
        'Child Support',
        'Prenuptial Agreements',
        'Postnuptial Agreements',
        'Divorce Mediation',
        'Collaborative Divorce',
        'High Net Worth Divorce',
        'Military Divorce',
        'International Divorce',
        'Modification of Orders',
        'Enforcement Actions'
      ],
      urgency: 'Early legal advice in divorce cases can protect your rights and help you make informed decisions about your future.',
      consequences: 'Without skilled representation, you may face unfavorable property division, inadequate support arrangements, or poor custody outcomes.',
      approach: 'We provide strategic counsel tailored to your unique situation, whether seeking amicable resolution or aggressive litigation when necessary.',
      experience: 'Our divorce attorneys have handled hundreds of divorce cases, from simple uncontested matters to complex high-asset divorces.',
      results: 'We consistently achieve fair property settlements, appropriate support arrangements, and favorable custody outcomes for our clients.',
      detailedServices: {
        'Property Division': 'Ensuring fair distribution of marital assets and debts',
        'Spousal Support': 'Negotiating appropriate alimony arrangements',
        'Child Custody': 'Protecting your parental rights and children\'s best interests',
        'High Net Worth Divorce': 'Handling complex financial matters in high-asset cases',
        'Mediation': 'Facilitating amicable resolutions when possible'
      }
    },
    'child-custody': {
      name: 'Child Custody',
      displayName: 'Child Custody Attorney',
      description: 'Dedicated representation for child custody and visitation matters',
      longDescription: 'Child custody disputes require careful attention to your children\'s best interests while protecting your parental rights. Our attorneys understand Virginia custody law and fight for fair arrangements.',
      services: [
        'Legal Custody',
        'Physical Custody',
        'Joint Custody',
        'Sole Custody',
        'Visitation Rights',
        'Parenting Plans',
        'Custody Modifications',
        'Emergency Custody',
        'Grandparent Rights',
        'Relocation Issues',
        'Custody Enforcement',
        'Guardian ad Litem',
        'Paternity Actions',
        'Custody Evaluations',
        'Interstate Custody'
      ],
      urgency: 'Quick action may be necessary to protect your children and preserve your parental rights in custody disputes.',
      consequences: 'Poor representation in custody cases can result in limited time with your children and unfavorable long-term arrangements.',
      approach: 'We focus on your children\'s best interests while advocating strongly for your parental rights and desired custody arrangement.',
      experience: 'Our custody attorneys have extensive experience with Virginia family courts and understand what judges consider in custody decisions.',
      results: 'We work to achieve custody arrangements that serve your children\'s needs while maximizing your parenting time.',
      detailedServices: {
        'Joint Custody': 'Negotiating shared custody arrangements that work for both parents',
        'Parenting Plans': 'Creating detailed schedules and guidelines for successful co-parenting',
        'Custody Modifications': 'Changing existing orders when circumstances warrant',
        'Emergency Custody': 'Protecting children in urgent situations',
        'Relocation Issues': 'Handling moves that affect custody arrangements'
      }
    },
    'reckless-driving': {
      name: 'Reckless Driving',
      displayName: 'Reckless Driving Attorney',
      description: 'Aggressive defense against reckless driving charges in Virginia',
      longDescription: 'Reckless driving in Virginia is a serious criminal offense, not just a traffic ticket. It can result in jail time, heavy fines, and a permanent criminal record. You need experienced legal representation.',
      services: [
        'Speeding 20+ MPH Over Limit',
        'Aggressive Driving',
        'Racing',
        'Passing School Bus',
        'Improper Brakes',
        'Overloaded Vehicle',
        'Failing to Signal',
        'Passing at Intersection',
        'Driving Too Fast for Conditions',
        'General Reckless Driving',
        'Appeals',
        'License Restoration',
        'Driver Improvement',
        'Mitigation Evidence',
        'Plea Negotiations'
      ],
      urgency: 'Reckless driving charges require immediate attention as they carry potential jail time and criminal penalties.',
      consequences: 'Reckless driving convictions can result in up to 12 months in jail, $2500 in fines, license suspension, and a permanent criminal record.',
      approach: 'We challenge the evidence, negotiate with prosecutors, and present mitigating factors to achieve the best possible outcome.',
      experience: 'Our attorneys regularly defend reckless driving cases in Virginia courts and understand the nuances of these charges.',
      results: 'We frequently achieve reduced charges, dismissed cases, and alternative sentences that avoid jail time and criminal convictions.',
      detailedServices: {
        'Speed-Based Reckless': 'Defending against charges for driving 20+ MPH over the speed limit',
        'General Reckless': 'Challenging subjective reckless driving allegations',
        'Mitigation Strategies': 'Presenting driving records, character evidence, and other favorable factors',
        'Plea Negotiations': 'Working with prosecutors to reduce charges to lesser offenses',
        'Trial Defense': 'Aggressively defending cases that go to trial'
      }
    },
    'domestic-violence': {
      name: 'Domestic Violence',
      displayName: 'Domestic Violence Attorney',
      description: 'Experienced representation for domestic violence cases and protective orders',
      longDescription: 'Domestic violence cases involve complex legal and personal issues. Whether you need protection from abuse or are defending against false allegations, we provide skilled representation.',
      services: [
        'Protective Order Defense',
        'Domestic Assault Defense',
        'Stalking Charges',
        'Violation of Protective Order',
        'Emergency Protective Orders',
        'Family Abuse Cases',
        'Harassment Charges',
        'Cyberstalking',
        'Dating Violence',
        'Elder Abuse',
        'False Accusation Defense',
        'Mutual Protective Orders',
        'Order Modifications',
        'Order Dismissals',
        'Appeal Rights'
      ],
      urgency: 'Domestic violence allegations require immediate legal attention due to potential criminal charges and protective order implications.',
      consequences: 'Domestic violence convictions can result in jail time, fines, loss of gun rights, and impact on custody and employment.',
      approach: 'We provide sensitive yet aggressive representation, whether defending against charges or seeking protection for abuse victims.',
      experience: 'Our attorneys understand the complex dynamics of domestic cases and have extensive experience in both criminal and civil proceedings.',
      results: 'We work to protect our clients\' rights while ensuring appropriate safety measures are in place.',
      detailedServices: {
        'Protective Order Defense': 'Defending against temporary and permanent protective orders',
        'Criminal Defense': 'Handling domestic assault and related criminal charges',
        'False Allegations': 'Defending clients wrongly accused of domestic violence',
        'Victim Advocacy': 'Helping abuse victims obtain necessary legal protections',
        'Order Violations': 'Defending against charges of violating protective orders'
      }
    },
    'assault': {
      name: 'Assault and Battery',
      displayName: 'Assault and Battery Attorney',
      description: 'Strong defense against assault and battery charges',
      longDescription: 'Assault and battery charges can have serious consequences including jail time, fines, and a criminal record. Our experienced defense attorneys fight to protect your rights and freedom.',
      services: [
        'Simple Assault',
        'Assault and Battery',
        'Aggravated Assault',
        'Felony Assault',
        'Domestic Assault',
        'Sexual Assault',
        'Assault on Police Officer',
        'Assault with Weapon',
        'Self-Defense Cases',
        'Bar Fight Defense',
        'School Violence',
        'Workplace Violence',
        'Road Rage Incidents',
        'Sports Violence',
        'Mutual Combat'
      ],
      urgency: 'Assault charges require immediate legal representation to protect your rights and build an effective defense strategy.',
      consequences: 'Assault convictions can result in jail time, fines, probation, anger management classes, and a permanent criminal record.',
      approach: 'We thoroughly investigate the circumstances, identify witnesses, and build strong defenses including self-defense, defense of others, or lack of intent.',
      experience: 'Our criminal defense attorneys have successfully defended hundreds of assault cases in Virginia courts.',
      results: 'We frequently achieve dismissed charges, reduced penalties, and not guilty verdicts for our assault clients.',
      detailedServices: {
        'Self-Defense Claims': 'Proving you acted in lawful self-defense or defense of others',
        'Witness Investigation': 'Locating and interviewing witnesses to support your case',
        'Evidence Analysis': 'Examining physical evidence, videos, and medical records',
        'Plea Negotiations': 'Working with prosecutors to reduce charges and penalties',
        'Trial Defense': 'Aggressive courtroom representation when cases go to trial'
      }
    },
    'protective-order': {
      name: 'Protective Orders',
      displayName: 'Protective Order Attorney',
      description: 'Legal representation for protective order proceedings in Virginia',
      longDescription: 'Protective orders can significantly impact your life, affecting where you can live, work, and your ability to see your children. You need experienced legal representation.',
      services: [
        'Emergency Protective Orders',
        'Preliminary Protective Orders',
        'Permanent Protective Orders',
        'Order Violations',
        'Order Modifications',
        'Order Dismissals',
        'Mutual Orders',
        'Stalking Orders',
        'Workplace Harassment Orders',
        'Family Abuse Orders',
        'Appeals',
        'Contempt Proceedings',
        'Cross-Orders',
        'Interstate Orders',
        'Order Enforcement'
      ],
      urgency: 'Protective order hearings often happen quickly, making immediate legal representation crucial to protecting your rights.',
      consequences: 'Protective orders can restrict your movement, affect child custody, impact employment, and limit your constitutional rights.',
      approach: 'We provide thorough preparation for hearings, present compelling evidence, and advocate strongly for our clients\' interests.',
      experience: 'Our attorneys regularly appear in protective order hearings and understand the standards courts apply in these cases.',
      results: 'We work to prevent unnecessary orders, modify existing orders, and protect our clients from false allegations.',
      detailedServices: {
        'Order Defense': 'Defending against requests for protective orders',
        'Evidence Presentation': 'Gathering and presenting evidence to support your case',
        'Witness Testimony': 'Preparing witnesses to testify on your behalf',
        'Cross-Examination': 'Challenging the opposing party\'s testimony and evidence',
        'Appeal Rights': 'Pursuing appeals when protective orders are improperly granted'
      }
    },
    'drug-crime': {
      name: 'Drug Crimes',
      displayName: 'Drug Crime Attorney',
      description: 'Experienced defense against all types of drug charges',
      longDescription: 'Drug charges in Virginia carry serious penalties including jail time, fines, and long-term consequences. Our drug crime attorneys understand the complexities of drug law and fight to protect your rights.',
      services: [
        'Drug Possession',
        'Drug Distribution',
        'Drug Manufacturing',
        'Drug Trafficking',
        'Prescription Drug Crimes',
        'Marijuana Charges',
        'Cocaine Charges',
        'Heroin Charges',
        'Methamphetamine Charges',
        'Drug Paraphernalia',
        'School Zone Violations',
        'Conspiracy Charges',
        'RICO Violations',
        'Asset Forfeiture',
        'Federal Drug Crimes'
      ],
      urgency: 'Drug charges require immediate attention as penalties can be severe and evidence preservation is critical.',
      consequences: 'Drug convictions can result in significant jail time, heavy fines, loss of driving privileges, and impact on employment and housing.',
      approach: 'We challenge search and seizure procedures, examine evidence handling, and explore all possible defenses to drug charges.',
      experience: 'Our attorneys have extensive experience defending against drug charges ranging from simple possession to major trafficking cases.',
      results: 'We frequently achieve dismissed charges, reduced penalties, and alternative sentencing options for our drug crime clients.',
      detailedServices: {
        'Search and Seizure': 'Challenging illegal searches and evidence obtained without warrants',
        'Evidence Analysis': 'Examining drug testing procedures and chain of custody',
        'Conspiracy Defense': 'Defending against complex multi-defendant drug cases',
        'Alternative Sentencing': 'Pursuing drug treatment programs instead of jail time',
        'Expungement': 'Helping eligible clients clear their records after resolution'
      }
    }
  };

  useEffect(() => {
    // Simple URL parsing for our hidden SEO pages
    const currentPath = window.location.pathname.substring(1); // Remove leading slash
    
    let parsedLocation = location;
    let parsedPracticeArea = practiceArea;
    
    // Check if we need to parse the URL manually for hidden pages
    if (!location || !practiceArea) {
      // Practice area aliases
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
      }
    }
    
    const locationInfo = locationData[parsedLocation];
    const practiceInfo = practiceAreaData[parsedPracticeArea];

    if (locationInfo && practiceInfo) {
      // Determine page type based on URL pattern
      const currentPath = window.location.pathname;
      let pageType = 'lawyer';
      if (currentPath.includes('-attorney')) pageType = 'attorney';
      if (currentPath.includes('-law-firm')) pageType = 'law-firm';
      if (currentPath.includes('best-')) pageType = 'best';

      const titleSuffix = pageType === 'attorney' ? 'Attorney' : 
                         pageType === 'law-firm' ? 'Law Firm' : 
                         pageType === 'best' ? 'Attorneys' : 'Lawyer';

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
    }
  }, [location, practiceArea]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The requested page could not be found.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
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
              <p className="text-xl mb-8 text-blue-100">
                {pageData.practiceArea.longDescription}
              </p>
              <p className="text-lg mb-8 text-blue-200">
                {pageData.practiceArea.urgency}
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
                src="/bhlogo.png"
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
            {/* Why Choose Us Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {pageData.pageType === 'best' ? 
                  `Why We're the Best ${pageData.practiceArea.displayName}s in ${pageData.location.displayName}` :
                  `Why Choose Briglia Hundley for ${pageData.practiceArea.name} in ${pageData.location.displayName}?`
                }
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  When you need a {pageData.practiceArea.name.toLowerCase()} attorney in {pageData.location.displayName}, 
                  choosing the right legal representation can make all the difference in your case outcome. 
                  Briglia Hundley has been serving clients in {pageData.location.courtInfo.jurisdiction} for over 30 years, 
                  building a reputation for excellence and results.
                </p>
                <p className="mb-6">
                  {pageData.location.demographics} Our attorneys are {pageData.location.proximityText}, 
                  giving us unique advantages in representing clients facing {pageData.practiceArea.name.toLowerCase()} matters.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.consequences} That's why it's crucial to have experienced legal counsel 
                  who understands both the law and the local legal landscape.
                </p>
                <p className="mb-6">
                  {pageData.location.keyStats}. Our commitment to excellence has earned us recognition as 
                  one of the premier law firms in {pageData.location.displayName}.
                </p>
              </div>
            </section>

            {/* Types of Cases Section - Inspired by May Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Types of {pageData.practiceArea.name} Cases We Handle in {pageData.location.displayName}
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  Whether you have been charged with a misdemeanor or felony, involved in a family dispute, 
                  or injured in an accident, our {pageData.practiceArea.name.toLowerCase()} attorneys understand 
                  that legal issues can have a negative and lasting impact on your life and your family. 
                  At Briglia Hundley, we are well-versed in every aspect of {pageData.practiceArea.name.toLowerCase()} 
                  and have expertise in representing clients throughout {pageData.location.displayName}.
                </p>
                <p>
                  Our attorneys have successfully represented thousands of clients in {pageData.location.courtInfo.jurisdiction}, 
                  including cases involving the following:
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {pageData.practiceArea.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Scale className="text-blue-600 flex-shrink-0" size={18} />
                      <h3 className="font-semibold text-gray-900 text-sm">{service}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our {pageData.practiceArea.name} Experience in {pageData.location.displayName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  {pageData.practiceArea.experience} Our deep understanding of {pageData.location.courtInfo.jurisdiction} 
                  courts and procedures gives our clients a significant advantage.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.approach} We understand that every case is unique, and we tailor our strategy 
                  to the specific circumstances of your situation and the local court where your case will be heard.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.results} Our commitment to excellence has earned us recognition from 
                  Best Lawyers, Super Lawyers, and an AV rating from Martindale-Hubbell.
                </p>
              </div>
            </section>

            {/* Detailed Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our {pageData.practiceArea.name} Services in {pageData.location.displayName}
              </h2>
              <div className="space-y-6">
                {Object.entries(pageData.practiceArea.detailedServices || {}).map(([service, description], index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service}</h3>
                        <p className="text-gray-700">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Court Information Section */}
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
                      {pageData.location.courtInfo.district && (
                        <div className="flex items-start gap-3">
                          <Scale className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <p className="font-medium text-gray-900">{pageData.location.courtInfo.district}</p>
                            <p className="text-gray-600">General District Court</p>
                          </div>
                        </div>
                      )}
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
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions - {pageData.practiceArea.name} in {pageData.location.displayName}
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why should I hire a local {pageData.practiceArea.name.toLowerCase()} attorney in {pageData.location.displayName}?
                  </h3>
                  <p className="text-gray-600">
                    Local attorneys understand the specific procedures, judges, and legal community in {pageData.location.displayName}. 
                    This knowledge can be crucial to achieving the best possible outcome in your case. Our attorneys have appeared 
                    regularly in {pageData.location.courtInfo.jurisdiction} courts for over 30 years and have developed relationships 
                    that benefit our clients.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does a {pageData.practiceArea.name.toLowerCase()} attorney cost in {pageData.location.displayName}?
                  </h3>
                  <p className="text-gray-600">
                    Legal fees vary depending on the complexity of your case. We offer free consultations where we can discuss 
                    your specific situation and provide transparent information about costs. We believe in upfront, honest 
                    communication about fees and will work with you to find a payment structure that fits your situation.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long will my {pageData.practiceArea.name.toLowerCase()} case take in {pageData.location.displayName}?
                  </h3>
                  <p className="text-gray-600">
                    The timeline for {pageData.practiceArea.name.toLowerCase()} cases varies significantly based on complexity, 
                    court schedules, and other factors. During your free consultation, we can provide a realistic timeline 
                    based on the specifics of your case and current court schedules in {pageData.location.displayName}.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What should I bring to my consultation?
                  </h3>
                  <p className="text-gray-600">
                    Bring any relevant documents, court papers, police reports, contracts, or correspondence related to your case. 
                    The more information you can provide, the better we can assess your situation and provide accurate advice 
                    during your free consultation.
                  </p>
                </div>
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