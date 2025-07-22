-- =====================================================
-- BRIGLIA HUNDLEY WEBSITE DATA EXPORT
-- Generated: July 17, 2025
-- Database Type: MongoDB (NoSQL) - Converted to SQL Format
-- =====================================================

-- Create database
CREATE DATABASE IF NOT EXISTS briglia_hundley_website;
USE briglia_hundley_website;

-- =====================================================
-- BUSINESS INFORMATION
-- =====================================================
CREATE TABLE IF NOT EXISTS business_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(255),
    logo VARCHAR(255),
    established_year INT,
    description TEXT
);

INSERT INTO business_info (name, address_line1, address_line2, phone, email, logo, established_year, description) VALUES 
('Briglia Hundley, P.C.', '8180 Greensboro Dr. Suite 1050', 'McLean, VA 22102', '(703) 783-5185', 'info@brigliahundley.com', '/briglia-hundley-logo-1.png', 1993, 'Tier 1 ranked, award-winning law firm serving the Mid-Atlantic region');

-- =====================================================
-- ATTORNEYS
-- =====================================================
CREATE TABLE IF NOT EXISTS attorneys (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    position VARCHAR(255),
    bio TEXT,
    phone VARCHAR(50),
    email VARCHAR(255),
    image VARCHAR(255),
    bar_admissions TEXT,
    education TEXT,
    honors_awards TEXT
);

INSERT INTO attorneys (name, position, bio, phone, email, image, bar_admissions, education, honors_awards) VALUES
('James W. Hundley', 'Founding Partner', 'James W. Hundley founded Briglia Hundley in 1993...', '(703) 783-5185', 'jhundley@brigliahundley.com', 'https://brigliahundley.com/wp-content/uploads/james-hundley-briglia-hundley-225px.jpg', 'Virginia, District of Columbia, U.S. Supreme Court', 'J.D., University of Virginia School of Law; B.A., Virginia Military Institute', 'Super Lawyers, Best Lawyers, AV Rated Martindale-Hubbell'),

('Steven D. Briglia', 'Managing Partner', 'Steven D. Briglia is the Managing Partner...', '(703) 783-5185', 'sbriglia@brigliahundley.com', 'https://brigliahundley.com/wp-content/uploads/steve-briglia-profile-bh-225px.jpg', 'Virginia, District of Columbia, U.S. District Courts', 'J.D., Catholic University of America; B.A., Virginia Tech', 'Super Lawyers, Best Lawyers, AV Rated Martindale-Hubbell');
-- (Additional attorneys would be inserted here...)

-- =====================================================
-- PRACTICE AREAS
-- =====================================================
CREATE TABLE IF NOT EXISTS practice_areas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    detailed_content TEXT,
    image VARCHAR(255)
);

INSERT INTO practice_areas (title, description, detailed_content, image) VALUES
('Family Law', 'Comprehensive family law services including divorce, custody, and support matters for families throughout Northern Virginia.', 'Detailed family law content...', 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg'),

('Criminal Defense', 'Experienced criminal defense representation for all manner of misdemeanor and felony charges in state and federal courts.', 'Detailed criminal defense content...', 'https://brigliahundley.com/wp-content/uploads/BH-Criminal-law-hero-24-750x380.jpg'),

('Business Litigation', 'Strategic business litigation services for companies and individuals in state and federal courts throughout the region.', 'Detailed business litigation content...', 'https://brigliahundley.com/wp-content/uploads/bh-business-litigation-hero-25-750x380.jpg');
-- (Additional practice areas would be inserted here...)

-- =====================================================
-- BLOG POSTS
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    excerpt TEXT,
    content TEXT,
    author VARCHAR(255),
    date DATE,
    category VARCHAR(100),
    featured_image VARCHAR(255),
    slug VARCHAR(255)
);

INSERT INTO blog_posts (title, excerpt, content, author, date, category, featured_image, slug) VALUES
('Understanding Virginia Divorce Laws: A Comprehensive Guide', 'Navigate the complexities of Virginia divorce laws with insights from experienced family law attorneys.', 'Full blog content...', 'Briglia Hundley Legal Team', '2024-01-15', 'Family Law', '/images/divorce-laws-virginia.jpg', 'understanding-virginia-divorce-laws'),

('Protecting Your Business: Commercial Litigation Strategies', 'Learn essential strategies to protect your business interests in commercial disputes.', 'Full blog content...', 'Briglia Hundley Legal Team', '2024-02-01', 'Business Law', '/images/commercial-litigation.jpg', 'protecting-your-business-litigation');
-- (Additional blog posts would be inserted here...)

-- =====================================================
-- SEO DATA
-- =====================================================
CREATE TABLE IF NOT EXISTS seo_pages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_title VARCHAR(255),
    meta_description TEXT,
    url_path VARCHAR(255),
    h1_title VARCHAR(255),
    content TEXT,
    keywords TEXT
);

INSERT INTO seo_pages (page_title, meta_description, url_path, h1_title, content, keywords) VALUES
('Family Law Attorney Tysons Corner VA | Divorce Lawyer', 'Experienced family law attorney in Tysons Corner, VA. Expert divorce lawyer serving Fairfax County, Arlington, Loudoun County.', '/family-law-attorney-tysons-corner-va', 'Family Law Attorney in Tysons Corner, Virginia', 'SEO optimized content...', 'family law attorney, divorce lawyer, Tysons Corner, Fairfax County'),

('Criminal Defense Lawyer Fairfax County VA | DUI Attorney', 'Top criminal defense lawyer in Fairfax County, VA. Experienced DUI attorney defending clients in Northern Virginia courts.', '/criminal-defense-lawyer-fairfax-county-va', 'Criminal Defense Lawyer in Fairfax County, Virginia', 'SEO optimized content...', 'criminal defense lawyer, DUI attorney, Fairfax County, Northern Virginia');
-- (Additional SEO pages would be inserted here...)

-- =====================================================
-- NOTES FOR WEBMASTER
-- =====================================================
-- 
-- DEPLOYMENT INSTRUCTIONS:
-- 1. This website is built with React.js frontend and FastAPI backend
-- 2. The actual data is stored in JavaScript files, not a traditional database
-- 3. For deployment, you'll need:
--    - Node.js environment for React frontend
--    - Python environment for FastAPI backend
--    - MongoDB for future dynamic content (currently using static data)
-- 
-- ALTERNATIVE STATIC DEPLOYMENT:
-- - The website can be deployed as a static React build
-- - All content is in /frontend/src/data/ files
-- - No database required for basic functionality
-- 
-- DOMAIN SETUP:
-- - Update REACT_APP_BACKEND_URL in .env files
-- - Ensure SSL certificates are configured
-- - Set up proper DNS records
-- 
-- FILES TO INCLUDE IN DEPLOYMENT:
-- - /frontend/build/ (React production build)
-- - /backend/ (Python API files)
-- - All images in /frontend/public/
-- - Environment configuration files
--

-- End of SQL Export