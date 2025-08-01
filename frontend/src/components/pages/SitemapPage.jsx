import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { ExternalLink, MapPin, Users, Scale, FileText, Home } from 'lucide-react';

const SitemapPage = () => {
  // Main pages
  const mainPages = [
    { title: 'Home', url: '/', description: 'Welcome to Briglia Hundley Law Firm' },
    { title: 'About', url: '/about', description: 'Learn about our award-winning law firm' },
    { title: 'Attorneys', url: '/attorneys', description: 'Meet our experienced legal team' },
    { title: 'Practice Areas', url: '/practice-areas', description: 'Our comprehensive legal services' },
    { title: 'Testimonials', url: '/testimonials', description: 'Client reviews and testimonials' },
    { title: 'Blog', url: '/blog', description: 'Legal insights and news' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with our legal team' }
  ];

  // Location-specific practice area pages (hidden SEO pages)
  const locationPracticePages = [
    // Tysons Corner
    { title: 'Tysons Corner Criminal Defense Lawyer', url: '/tysons-corner-criminal-defense-lawyer' },
    { title: 'Tysons Corner Criminal Defense Attorney', url: '/tysons-corner-criminal-defense-attorney' },
    { title: 'Best Tysons Corner Criminal Defense Attorneys', url: '/best-tysons-corner-criminal-defense-attorneys' },
    { title: 'Tysons Corner Family Law Lawyer', url: '/tysons-corner-family-law-lawyer' },
    { title: 'Tysons Corner Family Law Attorney', url: '/tysons-corner-family-law-attorney' },
    { title: 'Best Tysons Corner Family Law Attorneys', url: '/best-tysons-corner-family-law-attorneys' },
    { title: 'Tysons Corner Personal Injury Lawyer', url: '/tysons-corner-personal-injury-lawyer' },
    { title: 'Tysons Corner Personal Injury Attorney', url: '/tysons-corner-personal-injury-attorney' },
    { title: 'Best Tysons Corner Personal Injury Attorneys', url: '/best-tysons-corner-personal-injury-attorneys' },
    { title: 'Tysons Corner DUI Defense Lawyer', url: '/tysons-corner-dui-defense-lawyer' },
    { title: 'Tysons Corner DUI Defense Attorney', url: '/tysons-corner-dui-defense-attorney' },
    { title: 'Best Tysons Corner DUI Defense Attorneys', url: '/best-tysons-corner-dui-defense-attorneys' },
    { title: 'Tysons Corner DUI Lawyer', url: '/tysons-corner-dui-lawyer' },
    { title: 'Tysons Corner Divorce Lawyer', url: '/tysons-corner-divorce-lawyer' },
    { title: 'Tysons Corner Child Custody Lawyer', url: '/tysons-corner-child-custody-lawyer' },
    { title: 'Tysons Corner Traffic Defense Lawyer', url: '/tysons-corner-traffic-defense-lawyer' },
    { title: 'Tysons Corner Traffic Defense Attorney', url: '/tysons-corner-traffic-defense-attorney' },
    { title: 'Tysons Corner Traffic Lawyer', url: '/tysons-corner-traffic-lawyer' },
    { title: 'Tysons Corner Reckless Driving Lawyer', url: '/tysons-corner-reckless-driving-lawyer' },
    { title: 'Tysons Corner Domestic Violence Lawyer', url: '/tysons-corner-domestic-violence-lawyer' },
    { title: 'Tysons Corner Assault Lawyer', url: '/tysons-corner-assault-lawyer' },
    { title: 'Tysons Corner Protective Order Lawyer', url: '/tysons-corner-protective-order-lawyer' },
    { title: 'Tysons Corner Drug Crime Lawyer', url: '/tysons-corner-drug-crime-lawyer' },

    // Fairfax County
    { title: 'Fairfax County Criminal Defense Lawyer', url: '/fairfax-county-criminal-defense-lawyer' },
    { title: 'Fairfax County Criminal Defense Attorney', url: '/fairfax-county-criminal-defense-attorney' },
    { title: 'Best Fairfax County Criminal Defense Attorneys', url: '/best-fairfax-county-criminal-defense-attorneys' },
    { title: 'Fairfax County Family Law Lawyer', url: '/fairfax-county-family-law-lawyer' },
    { title: 'Fairfax County Family Law Attorney', url: '/fairfax-county-family-law-attorney' },
    { title: 'Best Fairfax County Family Law Attorneys', url: '/best-fairfax-county-family-law-attorneys' },
    { title: 'Fairfax County Personal Injury Lawyer', url: '/fairfax-county-personal-injury-lawyer' },
    { title: 'Fairfax County Personal Injury Attorney', url: '/fairfax-county-personal-injury-attorney' },
    { title: 'Best Fairfax County Personal Injury Attorneys', url: '/best-fairfax-county-personal-injury-attorneys' },
    { title: 'Fairfax County DUI Defense Lawyer', url: '/fairfax-county-dui-defense-lawyer' },
    { title: 'Fairfax County DUI Defense Attorney', url: '/fairfax-county-dui-defense-attorney' },
    { title: 'Best Fairfax County DUI Defense Attorneys', url: '/best-fairfax-county-dui-defense-attorneys' },
    { title: 'Fairfax County DUI Lawyer', url: '/fairfax-county-dui-lawyer' },
    { title: 'Fairfax County Divorce Lawyer', url: '/fairfax-county-divorce-lawyer' },
    { title: 'Fairfax County Child Custody Lawyer', url: '/fairfax-county-child-custody-lawyer' },
    { title: 'Fairfax County Traffic Lawyer', url: '/fairfax-county-traffic-lawyer' },
    { title: 'Fairfax County Reckless Driving Lawyer', url: '/fairfax-county-reckless-driving-lawyer' },
    { title: 'Fairfax County Domestic Violence Lawyer', url: '/fairfax-county-domestic-violence-lawyer' },
    { title: 'Fairfax County Assault Lawyer', url: '/fairfax-county-assault-lawyer' },
    { title: 'Fairfax County Protective Order Lawyer', url: '/fairfax-county-protective-order-lawyer' },
    { title: 'Fairfax County Drug Crime Lawyer', url: '/fairfax-county-drug-crime-lawyer' },

    // Arlington
    { title: 'Arlington Criminal Defense Lawyer', url: '/arlington-criminal-defense-lawyer' },
    { title: 'Arlington Criminal Defense Attorney', url: '/arlington-criminal-defense-attorney' },
    { title: 'Best Arlington Criminal Defense Attorneys', url: '/best-arlington-criminal-defense-attorneys' },
    { title: 'Arlington Family Law Lawyer', url: '/arlington-family-law-lawyer' },
    { title: 'Arlington Family Law Attorney', url: '/arlington-family-law-attorney' },
    { title: 'Best Arlington Family Law Attorneys', url: '/best-arlington-family-law-attorneys' },
    { title: 'Arlington DUI Defense Lawyer', url: '/arlington-dui-defense-lawyer' },
    { title: 'Arlington DUI Defense Attorney', url: '/arlington-dui-defense-attorney' },
    { title: 'Arlington DUI Lawyer', url: '/arlington-dui-lawyer' },
    { title: 'Arlington Divorce Lawyer', url: '/arlington-divorce-lawyer' },
    { title: 'Arlington Child Custody Lawyer', url: '/arlington-child-custody-lawyer' },
    { title: 'Arlington Traffic Lawyer', url: '/arlington-traffic-lawyer' },
    { title: 'Arlington Reckless Driving Lawyer', url: '/arlington-reckless-driving-lawyer' },
    { title: 'Arlington Domestic Violence Lawyer', url: '/arlington-domestic-violence-lawyer' },
    { title: 'Arlington Assault Lawyer', url: '/arlington-assault-lawyer' },
    { title: 'Arlington Protective Order Lawyer', url: '/arlington-protective-order-lawyer' },
    { title: 'Arlington Drug Crime Lawyer', url: '/arlington-drug-crime-lawyer' },

    // McLean
    { title: 'McLean Criminal Defense Lawyer', url: '/mclean-criminal-defense-lawyer' },
    { title: 'McLean Criminal Defense Attorney', url: '/mclean-criminal-defense-attorney' },
    { title: 'McLean Family Law Lawyer', url: '/mclean-family-law-lawyer' },
    { title: 'McLean Family Law Attorney', url: '/mclean-family-law-attorney' },

    // Virginia Statewide
    { title: 'Virginia Criminal Defense Lawyer', url: '/virginia-criminal-defense-lawyer' },
    { title: 'Virginia Criminal Defense Attorney', url: '/virginia-criminal-defense-attorney' },
    { title: 'Virginia Criminal Defense Law Firm', url: '/virginia-criminal-defense-law-firm' },
    { title: 'Virginia Family Law Lawyer', url: '/virginia-family-law-lawyer' },
    { title: 'Virginia Family Law Attorney', url: '/virginia-family-law-attorney' },
    { title: 'Virginia Family Law Firm', url: '/virginia-family-law-firm' },
    { title: 'Virginia DUI Defense Lawyer', url: '/virginia-dui-defense-lawyer' },
    { title: 'Virginia DUI Defense Attorney', url: '/virginia-dui-defense-attorney' },
    { title: 'Virginia DUI Lawyer', url: '/virginia-dui-lawyer' },
    { title: 'Virginia Divorce Lawyer', url: '/virginia-divorce-lawyer' },

    // Additional Secondary Locations
    { title: 'Vienna Criminal Defense Lawyer', url: '/vienna-criminal-defense-lawyer' },
    { title: 'Vienna Family Law Lawyer', url: '/vienna-family-law-lawyer' },
    { title: 'Vienna DUI Lawyer', url: '/vienna-dui-lawyer' },
    { title: 'Falls Church Criminal Defense Lawyer', url: '/falls-church-criminal-defense-lawyer' },
    { title: 'Falls Church Family Law Lawyer', url: '/falls-church-family-law-lawyer' },
    { title: 'Falls Church DUI Lawyer', url: '/falls-church-dui-lawyer' },
    { title: 'Herndon Criminal Defense Lawyer', url: '/herndon-criminal-defense-lawyer' },
    { title: 'Herndon Family Law Lawyer', url: '/herndon-family-law-lawyer' },
    { title: 'Herndon DUI Lawyer', url: '/herndon-dui-lawyer' },
    { title: 'Reston Criminal Defense Lawyer', url: '/reston-criminal-defense-lawyer' },
    { title: 'Reston Family Law Lawyer', url: '/reston-family-law-lawyer' },
    { title: 'Reston DUI Lawyer', url: '/reston-dui-lawyer' },

    // Alexandria Area Legal Services
    { title: 'Alexandria Criminal Defense Lawyer', url: '/alexandria-criminal-defense-lawyer' },
    { title: 'Alexandria Family Law Lawyer', url: '/alexandria-family-law-lawyer' },
    { title: 'Alexandria Divorce Lawyer', url: '/alexandria-divorce-lawyer' },
    { title: 'Alexandria DUI Lawyer', url: '/alexandria-dui-lawyer' },
    { title: 'Alexandria Personal Injury Lawyer', url: '/alexandria-personal-injury-lawyer' },

    // Springfield Area Legal Services
    { title: 'Springfield Criminal Defense Lawyer', url: '/springfield-criminal-defense-lawyer' },
    { title: 'Springfield Family Law Lawyer', url: '/springfield-family-law-lawyer' },
    { title: 'Springfield Divorce Lawyer', url: '/springfield-divorce-lawyer' },
    { title: 'Springfield DUI Lawyer', url: '/springfield-dui-lawyer' },

    // Annandale Area Legal Services
    { title: 'Annandale Criminal Defense Lawyer', url: '/annandale-criminal-defense-lawyer' },
    { title: 'Annandale Family Law Lawyer', url: '/annandale-family-law-lawyer' },
    { title: 'Annandale Divorce Lawyer', url: '/annandale-divorce-lawyer' },
    { title: 'Annandale DUI Lawyer', url: '/annandale-dui-lawyer' },

    // Centreville Area Legal Services
    { title: 'Centreville Criminal Defense Lawyer', url: '/centreville-criminal-defense-lawyer' },
    { title: 'Centreville Family Law Lawyer', url: '/centreville-family-law-lawyer' },
    { title: 'Centreville Divorce Lawyer', url: '/centreville-divorce-lawyer' },
    { title: 'Centreville DUI Lawyer', url: '/centreville-dui-lawyer' },

    // Chantilly Area Legal Services
    { title: 'Chantilly Criminal Defense Lawyer', url: '/chantilly-criminal-defense-lawyer' },
    { title: 'Chantilly Family Law Lawyer', url: '/chantilly-family-law-lawyer' },
    { title: 'Chantilly Divorce Lawyer', url: '/chantilly-divorce-lawyer' },

    // MASSIVE SEO EXPANSION - 100 MORE LOCATION + PRACTICE COMBINATIONS
    // DUI Services across key locations
    { title: 'Alexandria DUI Attorney', url: '/alexandria-dui-attorney' },
    { title: 'Arlington DUI Attorney', url: '/arlington-dui-attorney' },
    { title: 'Ashburn DUI Lawyer', url: '/ashburn-dui-lawyer' },
    { title: 'Burke DUI Lawyer', url: '/burke-dui-lawyer' },
    { title: 'Chantilly DUI Lawyer', url: '/chantilly-dui-lawyer' },
    { title: 'Clifton DUI Lawyer', url: '/clifton-dui-lawyer' },
    { title: 'Sterling DUI Lawyer', url: '/sterling-dui-lawyer' },
    { title: 'Woodbridge DUI Lawyer', url: '/woodbridge-dui-lawyer' },
    { title: 'Winchester DUI Lawyer', url: '/winchester-dui-lawyer' },
    { title: 'Manassas DUI Lawyer', url: '/manassas-dui-lawyer' },

    // Reckless Driving Services
    { title: 'Alexandria Reckless Driving Lawyer', url: '/alexandria-reckless-driving-lawyer' },
    { title: 'Arlington Reckless Driving Lawyer', url: '/arlington-reckless-driving-lawyer' },
    { title: 'Ashburn Reckless Driving Lawyer', url: '/ashburn-reckless-driving-lawyer' },
    { title: 'Burke Reckless Driving Lawyer', url: '/burke-reckless-driving-lawyer' },
    { title: 'Chantilly Reckless Driving Lawyer', url: '/chantilly-reckless-driving-lawyer' },
    { title: 'Sterling Reckless Driving Lawyer', url: '/sterling-reckless-driving-lawyer' },
    { title: 'Woodbridge Reckless Driving Lawyer', url: '/woodbridge-reckless-driving-lawyer' },
    { title: 'Manassas Reckless Driving Lawyer', url: '/manassas-reckless-driving-lawyer' },

    // Drug Crimes Services
    { title: 'Alexandria Drug Crime Lawyer', url: '/alexandria-drug-crime-lawyer' },
    { title: 'Arlington Drug Crime Lawyer', url: '/arlington-drug-crime-lawyer' },
    { title: 'Ashburn Drug Crime Lawyer', url: '/ashburn-drug-crime-lawyer' },
    { title: 'Burke Drug Crime Lawyer', url: '/burke-drug-crime-lawyer' },
    { title: 'Sterling Drug Crime Lawyer', url: '/sterling-drug-crime-lawyer' },
    { title: 'Woodbridge Drug Crime Lawyer', url: '/woodbridge-drug-crime-lawyer' },

    // Domestic Violence Services
    { title: 'Alexandria Domestic Violence Lawyer', url: '/alexandria-domestic-violence-lawyer' },
    { title: 'Arlington Domestic Violence Lawyer', url: '/arlington-domestic-violence-lawyer' },
    { title: 'Ashburn Domestic Violence Lawyer', url: '/ashburn-domestic-violence-lawyer' },
    { title: 'Burke Domestic Violence Lawyer', url: '/burke-domestic-violence-lawyer' },
    { title: 'Sterling Domestic Violence Lawyer', url: '/sterling-domestic-violence-lawyer' },
    { title: 'Woodbridge Domestic Violence Lawyer', url: '/woodbridge-domestic-violence-lawyer' },

    // Motor Vehicle Accidents
    { title: 'Alexandria Car Accident Lawyer', url: '/alexandria-car-accident-lawyer' },
    { title: 'Arlington Car Accident Lawyer', url: '/arlington-car-accident-lawyer' },
    { title: 'Ashburn Car Accident Lawyer', url: '/ashburn-car-accident-lawyer' },
    { title: 'Burke Car Accident Lawyer', url: '/burke-car-accident-lawyer' },
    { title: 'Sterling Car Accident Lawyer', url: '/sterling-car-accident-lawyer' },
    { title: 'Woodbridge Car Accident Lawyer', url: '/woodbridge-car-accident-lawyer' },
    { title: 'Manassas Car Accident Lawyer', url: '/manassas-car-accident-lawyer' },

    // Wrongful Death Services
    { title: 'Alexandria Wrongful Death Lawyer', url: '/alexandria-wrongful-death-lawyer' },
    { title: 'Arlington Wrongful Death Lawyer', url: '/arlington-wrongful-death-lawyer' },
    { title: 'Ashburn Wrongful Death Lawyer', url: '/ashburn-wrongful-death-lawyer' },
    { title: 'Burke Wrongful Death Lawyer', url: '/burke-wrongful-death-lawyer' },
    { title: 'Sterling Wrongful Death Lawyer', url: '/sterling-wrongful-death-lawyer' },

    // Employment Law Services
    { title: 'Alexandria Employment Lawyer', url: '/alexandria-employment-lawyer' },
    { title: 'Arlington Employment Lawyer', url: '/arlington-employment-lawyer' },
    { title: 'Ashburn Employment Lawyer', url: '/ashburn-employment-lawyer' },
    { title: 'Burke Employment Lawyer', url: '/burke-employment-lawyer' },
    { title: 'Sterling Employment Lawyer', url: '/sterling-employment-lawyer' },

    // Real Estate Law Services
    { title: 'Alexandria Real Estate Lawyer', url: '/alexandria-real-estate-lawyer' },
    { title: 'Arlington Real Estate Lawyer', url: '/arlington-real-estate-lawyer' },
    { title: 'Ashburn Real Estate Lawyer', url: '/ashburn-real-estate-lawyer' },
    { title: 'Burke Real Estate Lawyer', url: '/burke-real-estate-lawyer' },
    { title: 'Sterling Real Estate Lawyer', url: '/sterling-real-estate-lawyer' },

    // Child Custody Services
    { title: 'Alexandria Child Custody Lawyer', url: '/alexandria-child-custody-lawyer' },
    { title: 'Arlington Child Custody Lawyer', url: '/arlington-child-custody-lawyer' },
    { title: 'Ashburn Child Custody Lawyer', url: '/ashburn-child-custody-lawyer' },
    { title: 'Burke Child Custody Lawyer', url: '/burke-child-custody-lawyer' },
    { title: 'Sterling Child Custody Lawyer', url: '/sterling-child-custody-lawyer' },

    // Divorce Services Extended
    { title: 'Ashburn Divorce Lawyer', url: '/ashburn-divorce-lawyer' },
    { title: 'Burke Divorce Lawyer', url: '/burke-divorce-lawyer' },
    { title: 'Sterling Divorce Lawyer', url: '/sterling-divorce-lawyer' },
    { title: 'Woodbridge Divorce Lawyer', url: '/woodbridge-divorce-lawyer' },
    { title: 'Winchester Divorce Lawyer', url: '/winchester-divorce-lawyer' },
    { title: 'Manassas Divorce Lawyer', url: '/manassas-divorce-lawyer' },

    // Traffic Violations
    { title: 'Alexandria Traffic Lawyer', url: '/alexandria-traffic-lawyer' },
    { title: 'Arlington Traffic Lawyer', url: '/arlington-traffic-lawyer' },
    { title: 'Ashburn Traffic Lawyer', url: '/ashburn-traffic-lawyer' },
    { title: 'Burke Traffic Lawyer', url: '/burke-traffic-lawyer' },
    { title: 'Sterling Traffic Lawyer', url: '/sterling-traffic-lawyer' },

    // Protective Orders
    { title: 'Alexandria Protective Order Lawyer', url: '/alexandria-protective-order-lawyer' },
    { title: 'Arlington Protective Order Lawyer', url: '/arlington-protective-order-lawyer' },
    { title: 'Ashburn Protective Order Lawyer', url: '/ashburn-protective-order-lawyer' },
    { title: 'Burke Protective Order Lawyer', url: '/burke-protective-order-lawyer' },

    // Premises Liability
    { title: 'Alexandria Premises Liability Lawyer', url: '/alexandria-premises-liability-lawyer' },
    { title: 'Arlington Premises Liability Lawyer', url: '/arlington-premises-liability-lawyer' },
    { title: 'Ashburn Premises Liability Lawyer', url: '/ashburn-premises-liability-lawyer' },

    // Contract Law Services
    { title: 'Alexandria Contract Lawyer', url: '/alexandria-contract-lawyer' },
    { title: 'Arlington Contract Lawyer', url: '/arlington-contract-lawyer' },
    { title: 'Ashburn Contract Lawyer', url: '/ashburn-contract-lawyer' },

    // Personal Injury Extended
    { title: 'Arlington Personal Injury Lawyer', url: '/arlington-personal-injury-lawyer' },
    { title: 'Ashburn Personal Injury Lawyer', url: '/ashburn-personal-injury-lawyer' },
    { title: 'Burke Personal Injury Lawyer', url: '/burke-personal-injury-lawyer' },
    { title: 'Sterling Personal Injury Lawyer', url: '/sterling-personal-injury-lawyer' },

    // Criminal Defense Extended
    { title: 'Ashburn Criminal Defense Lawyer', url: '/ashburn-criminal-defense-lawyer' },
    { title: 'Burke Criminal Defense Lawyer', url: '/burke-criminal-defense-lawyer' },
    { title: 'Sterling Criminal Defense Lawyer', url: '/sterling-criminal-defense-lawyer' },
    { title: 'Woodbridge Criminal Defense Lawyer', url: '/woodbridge-criminal-defense-lawyer' },

    // Family Law Extended
    { title: 'Ashburn Family Law Lawyer', url: '/ashburn-family-law-lawyer' },
    { title: 'Burke Family Law Lawyer', url: '/burke-family-law-lawyer' },
    { title: 'Sterling Family Law Lawyer', url: '/sterling-family-law-lawyer' },
    { title: 'Woodbridge Family Law Lawyer', url: '/woodbridge-family-law-lawyer' },

    // PHASE 2: MORE COMPREHENSIVE LOCATION COVERAGE
    // Leesburg Area Services
    { title: 'Leesburg DUI Lawyer', url: '/leesburg-dui-lawyer' },
    { title: 'Leesburg Criminal Defense Lawyer', url: '/leesburg-criminal-defense-lawyer' },
    { title: 'Leesburg Family Law Lawyer', url: '/leesburg-family-law-lawyer' },
    { title: 'Leesburg Divorce Lawyer', url: '/leesburg-divorce-lawyer' },
    { title: 'Leesburg Personal Injury Lawyer', url: '/leesburg-personal-injury-lawyer' },

    // Great Falls Area Services
    { title: 'Great Falls DUI Lawyer', url: '/great-falls-dui-lawyer' },
    { title: 'Great Falls Criminal Defense Lawyer', url: '/great-falls-criminal-defense-lawyer' },
    { title: 'Great Falls Family Law Lawyer', url: '/great-falls-family-law-lawyer' },
    { title: 'Great Falls Divorce Lawyer', url: '/great-falls-divorce-lawyer' },

    // Oakton Area Services
    { title: 'Oakton DUI Lawyer', url: '/oakton-dui-lawyer' },
    { title: 'Oakton Criminal Defense Lawyer', url: '/oakton-criminal-defense-lawyer' },
    { title: 'Oakton Family Law Lawyer', url: '/oakton-family-law-lawyer' },
    { title: 'Oakton Divorce Lawyer', url: '/oakton-divorce-lawyer' },

    // Clifton Area Services
    { title: 'Clifton Criminal Defense Lawyer', url: '/clifton-criminal-defense-lawyer' },
    { title: 'Clifton Family Law Lawyer', url: '/clifton-family-law-lawyer' },
    { title: 'Clifton Divorce Lawyer', url: '/clifton-divorce-lawyer' },

    // Prince William County Services
    { title: 'Prince William County DUI Lawyer', url: '/prince-william-county-dui-lawyer' },
    { title: 'Prince William County Criminal Defense Lawyer', url: '/prince-william-county-criminal-defense-lawyer' },
    { title: 'Prince William County Family Law Lawyer', url: '/prince-william-county-family-law-lawyer' },
    { title: 'Prince William County Divorce Lawyer', url: '/prince-william-county-divorce-lawyer' },

    // Loudoun County Services
    { title: 'Loudoun County DUI Lawyer', url: '/loudoun-county-dui-lawyer' },
    { title: 'Loudoun County Criminal Defense Lawyer', url: '/loudoun-county-criminal-defense-lawyer' },
    { title: 'Loudoun County Family Law Lawyer', url: '/loudoun-county-family-law-lawyer' },
    { title: 'Loudoun County Divorce Lawyer', url: '/loudoun-county-divorce-lawyer' },

    // South Riding Area Services
    { title: 'South Riding DUI Lawyer', url: '/south-riding-dui-lawyer' },
    { title: 'South Riding Criminal Defense Lawyer', url: '/south-riding-criminal-defense-lawyer' },
    { title: 'South Riding Family Law Lawyer', url: '/south-riding-family-law-lawyer' },
    { title: 'South Riding Divorce Lawyer', url: '/south-riding-divorce-lawyer' },

    // Manassas Area Services
    { title: 'Manassas Park DUI Lawyer', url: '/manassas-park-dui-lawyer' },
    { title: 'Manassas Park Criminal Defense Lawyer', url: '/manassas-park-criminal-defense-lawyer' },
    { title: 'Manassas Park Family Law Lawyer', url: '/manassas-park-family-law-lawyer' },

    // Middleburg Area Services
    { title: 'Middleburg DUI Lawyer', url: '/middleburg-dui-lawyer' },
    { title: 'Middleburg Criminal Defense Lawyer', url: '/middleburg-criminal-defense-lawyer' },
    { title: 'Middleburg Family Law Lawyer', url: '/middleburg-family-law-lawyer' },

    // DC Metro Area Services
    { title: 'District of Columbia DUI Lawyer', url: '/district-of-columbia-dui-lawyer' },
    { title: 'District of Columbia Criminal Defense Lawyer', url: '/district-of-columbia-criminal-defense-lawyer' },
    { title: 'District of Columbia Family Law Lawyer', url: '/district-of-columbia-family-law-lawyer' },

    // MORE PRACTICE AREA EXPANSIONS
    // Estate Planning across locations
    { title: 'Alexandria Estate Planning Lawyer', url: '/alexandria-estate-planning-lawyer' },
    { title: 'Arlington Estate Planning Lawyer', url: '/arlington-estate-planning-lawyer' },
    { title: 'Ashburn Estate Planning Lawyer', url: '/ashburn-estate-planning-lawyer' },
    { title: 'Burke Estate Planning Lawyer', url: '/burke-estate-planning-lawyer' },
    { title: 'Sterling Estate Planning Lawyer', url: '/sterling-estate-planning-lawyer' },

    // Business Law across locations
    { title: 'Alexandria Business Lawyer', url: '/alexandria-business-lawyer' },
    { title: 'Arlington Business Lawyer', url: '/arlington-business-lawyer' },
    { title: 'Ashburn Business Lawyer', url: '/ashburn-business-lawyer' },
    { title: 'Burke Business Lawyer', url: '/burke-business-lawyer' },
    { title: 'Sterling Business Lawyer', url: '/sterling-business-lawyer' },

    // Bankruptcy Law across locations
    { title: 'Alexandria Bankruptcy Lawyer', url: '/alexandria-bankruptcy-lawyer' },
    { title: 'Arlington Bankruptcy Lawyer', url: '/arlington-bankruptcy-lawyer' },
    { title: 'Ashburn Bankruptcy Lawyer', url: '/ashburn-bankruptcy-lawyer' },
    { title: 'Burke Bankruptcy Lawyer', url: '/burke-bankruptcy-lawyer' },

    // Immigration Law across locations
    { title: 'Alexandria Immigration Lawyer', url: '/alexandria-immigration-lawyer' },
    { title: 'Arlington Immigration Lawyer', url: '/arlington-immigration-lawyer' },
    { title: 'Ashburn Immigration Lawyer', url: '/ashburn-immigration-lawyer' },

    // Tax Law across locations
    { title: 'Alexandria Tax Lawyer', url: '/alexandria-tax-lawyer' },
    { title: 'Arlington Tax Lawyer', url: '/arlington-tax-lawyer' },
    { title: 'Ashburn Tax Lawyer', url: '/ashburn-tax-lawyer' },

    // Municipal Law across locations
    { title: 'Alexandria Municipal Lawyer', url: '/alexandria-municipal-lawyer' },
    { title: 'Arlington Municipal Lawyer', url: '/arlington-municipal-lawyer' },
    { title: 'Fairfax County Municipal Lawyer', url: '/fairfax-county-municipal-lawyer' },

    // Appellate Law across locations
    { title: 'Alexandria Appellate Lawyer', url: '/alexandria-appellate-lawyer' },
    { title: 'Arlington Appellate Lawyer', url: '/arlington-appellate-lawyer' },
    { title: 'Fairfax County Appellate Lawyer', url: '/fairfax-county-appellate-lawyer' },

    // Specialized Services
    { title: 'Alexandria Probate Lawyer', url: '/alexandria-probate-lawyer' },
    { title: 'Arlington Probate Lawyer', url: '/arlington-probate-lawyer' },
    { title: 'Alexandria Wills Lawyer', url: '/alexandria-wills-lawyer' },
    { title: 'Arlington Wills Lawyer', url: '/arlington-wills-lawyer' },
    { title: 'Alexandria Trust Lawyer', url: '/alexandria-trust-lawyer' },
    { title: 'Arlington Trust Lawyer', url: '/arlington-trust-lawyer' },

    // Commercial Litigation
    { title: 'Alexandria Commercial Litigation Lawyer', url: '/alexandria-commercial-litigation-lawyer' },
    { title: 'Arlington Commercial Litigation Lawyer', url: '/arlington-commercial-litigation-lawyer' },
    { title: 'Fairfax County Commercial Litigation Lawyer', url: '/fairfax-county-commercial-litigation-lawyer' },

    // Workers Compensation
    { title: 'Alexandria Workers Compensation Lawyer', url: '/alexandria-workers-compensation-lawyer' },
    { title: 'Arlington Workers Compensation Lawyer', url: '/arlington-workers-compensation-lawyer' },

    // Medical Malpractice  
    { title: 'Alexandria Medical Malpractice Lawyer', url: '/alexandria-medical-malpractice-lawyer' },
    { title: 'Arlington Medical Malpractice Lawyer', url: '/arlington-medical-malpractice-lawyer' },

    // Social Security Disability
    { title: 'Alexandria Social Security Disability Lawyer', url: '/alexandria-social-security-disability-lawyer' },
    { title: 'Arlington Social Security Disability Lawyer', url: '/arlington-social-security-disability-lawyer' }
  ];

  // Service area pages
  const serviceAreaPages = [
    { title: 'Fairfax County Attorneys', url: '/fairfax-county-attorneys' },
    { title: 'Arlington County Lawyers', url: '/arlington-county-lawyers' },
    { title: 'Prince William County Attorneys', url: '/prince-william-county-attorneys' },
    { title: 'Loudoun County Attorneys', url: '/loudoun-county-attorneys' },
    { title: 'Tysons Corner Law Firm', url: '/tysons-corner-law-firm' },
    { title: 'McLean Attorneys', url: '/mclean-attorneys' },
    { title: 'Vienna Lawyers', url: '/vienna-lawyers' },
    { title: 'Falls Church Attorneys', url: '/falls-church-attorneys' },
    { title: 'Herndon Lawyers', url: '/herndon-lawyers' },
    { title: 'Reston Attorneys', url: '/reston-attorneys' }
  ];

  // Legal service pages
  const legalServicePages = [
    { title: 'Divorce Attorney Virginia', url: '/divorce-attorney-virginia' },
    { title: 'Criminal Defense Lawyer Virginia', url: '/criminal-defense-lawyer-virginia' },
    { title: 'Business Litigation Attorney', url: '/business-litigation-attorney' },
    { title: 'Personal Injury Lawyer Virginia', url: '/personal-injury-lawyer-virginia' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Sitemap"
        description="Complete sitemap for Briglia Hundley law firm website. Find all our pages including attorney profiles, practice areas, and local legal services."
        keywords="sitemap, Briglia Hundley, law firm pages, attorneys, practice areas, Virginia legal services"
        canonical="https://brigliahundley.com/sitemap"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            Complete directory of all pages on the Briglia Hundley website
          </p>
          <p className="text-gray-500 mt-2">
            Find information about our legal services across Virginia, including specialized pages for each location and practice area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Main Pages</h2>
            </div>
            <div className="space-y-2">
              {mainPages.map((page, index) => (
                <div key={index}>
                  <Link 
                    to={page.url}
                    className="block text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {page.title}
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area Pages */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-green-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Service Areas</h2>
            </div>
            <div className="space-y-1">
              {serviceAreaPages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block text-green-600 hover:text-green-800 hover:underline text-sm"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Service Pages */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-purple-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Legal Services</h2>
            </div>
            <div className="space-y-1">
              {legalServicePages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block text-purple-600 hover:text-purple-800 hover:underline text-sm"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Location-Specific Practice Area Pages - The Hidden SEO Empire */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-gray-400" size={28} />
              <h2 className="text-2xl font-semibold">Location-Specific Legal Services</h2>
            </div>
            <p className="text-blue-100 mb-4">
              Specialized legal representation for each community we serve. Our attorneys understand local courts, 
              procedures, and legal landscape to provide the most effective representation for your case.
            </p>
            <div className="bg-blue-800/50 rounded-lg p-4">
              <p className="text-sm text-blue-200">
                <strong>Coverage Areas:</strong> Tysons Corner, Fairfax County, Arlington, McLean, Vienna, Falls Church, 
                Herndon, Reston, and throughout Northern Virginia
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locationPracticePages.map((page, index) => (
              <Link 
                key={index}
                to={page.url}
                className="block bg-white border border-gray-200 rounded-lg p-2 hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
              >
                <div className="flex items-start gap-2">
                  <Scale className="text-blue-600 group-hover:text-blue-700 mt-0.5 flex-shrink-0" size={12} />
                  <span className="text-gray-700 group-hover:text-blue-600 text-xs font-medium leading-relaxed">
                    {page.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-gray-600" size={24} />
            <h2 className="text-xl font-semibold text-gray-900">About Our Sitemap</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage</h3>
              <p>
                Our comprehensive sitemap includes all pages across our website, from main navigation 
                pages to specialized location and practice area combinations. We maintain detailed 
                pages for each community we serve to provide the most relevant legal information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Updates</h3>
              <p>
                This sitemap is updated regularly to reflect new content, practice areas, and service 
                locations. All links are verified to ensure they lead to current, accurate information 
                about our legal services in Virginia.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Need help finding specific information? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> and 
              our team will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;