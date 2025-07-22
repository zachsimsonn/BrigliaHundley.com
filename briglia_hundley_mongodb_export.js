// =====================================================
// BRIGLIA HUNDLEY WEBSITE - MONGODB DATA EXPORT
// Generated: July 17, 2025
// Database: briglia_hundley_website
// =====================================================

// Use the database
use briglia_hundley_website;

// =====================================================
// BUSINESS INFORMATION COLLECTION
// =====================================================
db.business_info.insertOne({
  _id: ObjectId(),
  name: "Briglia Hundley, P.C.",
  address: {
    line1: "8180 Greensboro Dr. Suite 1050",
    line2: "McLean, VA 22102"
  },
  phone: "(703) 783-5185",
  email: "info@brigliahundley.com",
  logo: "/briglia-hundley-logo-1.png",
  establishedYear: 1993,
  description: "Tier 1 ranked, award-winning law firm serving the Mid-Atlantic region",
  socialMedia: {
    facebook: "https://facebook.com/brigliahundley",
    twitter: "https://twitter.com/brigliahundley",
    linkedin: "https://linkedin.com/company/briglia-hundley"
  },
  hours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "Closed",
    sunday: "Closed"
  }
});

// =====================================================
// ATTORNEYS COLLECTION
// =====================================================
db.attorneys.insertMany([
  {
    _id: ObjectId(),
    name: "James W. Hundley",
    position: "Founding Partner",
    practiceAreas: ["Criminal Defense", "Personal Injury", "Commercial Litigation", "Appellate Litigation"],
    bio: "James W. Hundley founded Briglia Hundley in 1993 and has since built a reputation as one of Northern Virginia's premier trial attorneys...",
    contact: {
      phone: "(703) 783-5185",
      email: "jhundley@brigliahundley.com"
    },
    image: "https://brigliahundley.com/wp-content/uploads/james-hundley-briglia-hundley-225px.jpg",
    credentials: {
      barAdmissions: ["Virginia", "District of Columbia", "U.S. Supreme Court"],
      education: ["J.D., University of Virginia School of Law", "B.A., Virginia Military Institute"],
      honorsAwards: ["Super Lawyers", "Best Lawyers", "AV Rated Martindale-Hubbell"]
    }
  },
  {
    _id: ObjectId(),
    name: "Steven D. Briglia",
    position: "Managing Partner",
    practiceAreas: ["Civil Litigation", "Municipal Law", "Corporate Law"],
    bio: "Steven D. Briglia is the Managing Partner at Briglia Hundley...",
    contact: {
      phone: "(703) 783-5185",
      email: "sbriglia@brigliahundley.com"
    },
    image: "https://brigliahundley.com/wp-content/uploads/steve-briglia-profile-bh-225px.jpg",
    credentials: {
      barAdmissions: ["Virginia", "District of Columbia", "U.S. District Courts"],
      education: ["J.D., Catholic University of America", "B.A., Virginia Tech"],
      honorsAwards: ["Super Lawyers", "Best Lawyers", "AV Rated Martindale-Hubbell"]
    }
  }
  // Additional attorneys would be added here...
]);

// =====================================================
// PRACTICE AREAS COLLECTION
// =====================================================
db.practice_areas.insertMany([
  {
    _id: ObjectId(),
    title: "Family Law",
    slug: "family-law",
    description: "Comprehensive family law services including divorce, custody, and support matters for families throughout Northern Virginia.",
    image: "https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg",
    detailedContent: {
      sections: [
        {
          title: "Divorce Proceedings",
          content: "We handle all aspects of divorce proceedings..."
        },
        {
          title: "Child Custody",
          content: "Protecting the best interests of children..."
        }
      ]
    },
    seo: {
      metaTitle: "Family Law Attorney Tysons Corner VA | Divorce Lawyer",
      metaDescription: "Experienced family law attorney in Tysons Corner, VA. Expert divorce lawyer serving Fairfax County, Arlington, Loudoun County.",
      keywords: ["family law attorney", "divorce lawyer", "Tysons Corner", "Fairfax County"]
    }
  }
  // Additional practice areas would be added here...
]);

// =====================================================
// BLOG POSTS COLLECTION
// =====================================================
db.blog_posts.insertMany([
  {
    _id: ObjectId(),
    title: "Understanding Virginia Divorce Laws: A Comprehensive Guide",
    slug: "understanding-virginia-divorce-laws",
    excerpt: "Navigate the complexities of Virginia divorce laws with insights from experienced family law attorneys.",
    content: "Full blog content here...",
    author: "Briglia Hundley Legal Team",
    publishDate: new Date("2024-01-15"),
    category: "Family Law",
    featuredImage: "/images/divorce-laws-virginia.jpg",
    tags: ["divorce", "Virginia law", "family law"],
    seo: {
      metaTitle: "Virginia Divorce Laws Guide | Briglia Hundley",
      metaDescription: "Complete guide to Virginia divorce laws from experienced family law attorneys in Northern Virginia."
    }
  }
  // Additional blog posts would be added here...
]);

// =====================================================
// SEO PAGES COLLECTION
// =====================================================
db.seo_pages.insertMany([
  {
    _id: ObjectId(),
    pageTitle: "Family Law Attorney Tysons Corner VA | Divorce Lawyer",
    metaDescription: "Experienced family law attorney in Tysons Corner, VA. Expert divorce lawyer serving Fairfax County, Arlington, Loudoun County.",
    urlPath: "/family-law-attorney-tysons-corner-va",
    h1Title: "Family Law Attorney in Tysons Corner, Virginia",
    content: "SEO optimized content...",
    keywords: ["family law attorney", "divorce lawyer", "Tysons Corner", "Fairfax County"],
    location: "Tysons Corner, VA",
    practiceArea: "Family Law"
  }
  // Additional SEO pages would be added here...
]);