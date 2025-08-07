const fs = require('fs');

// Read the current mockData.js file
const mockDataPath = '/app/frontend/src/data/mockData.js';
let content = fs.readFileSync(mockDataPath, 'utf8');

console.log("Updating remaining practice areas to new structure...");

// Update Corporate Law
content = content.replace(
  /detailedContent: {\s*sections: \[\s*{\s*title: "Expert Corporate Law Services for Businesses of All Sizes",[\s\S]*?title: "Why Choose Briglia Hundley® for Corporate Law\?",[\s\S]*?content: `<div class="bg-gray-50[\s\S]*?<\/div>`[\s\S]*?},[\s\S]*?title: "Contact Briglia Hundley®[\s\S]*?}\s*\]\s*}/,
  `detailedContent: {
        mainServices: [
          "Entity Formation",
          "Corporate Governance", 
          "Commercial Contracts",
          "Employment Law Guidance",
          "M&A Support",
          "Regulatory Compliance",
          "Business Transactions",
          "Risk Management"
        ],
        sections: [
          {
            title: "Expert Corporate Law Services for Businesses of All Sizes",
            content: "Whether you are launching a startup, expanding an established enterprise, or navigating complex corporate transactions, Briglia Hundley® provides comprehensive corporate legal services tailored to meet your business objectives. Our experienced corporate attorneys represent clients ranging from emerging companies to Fortune 500 corporations, delivering strategic counsel that supports sustainable growth and regulatory compliance.\\n\\nFrom entity formation and corporate governance to mergers and acquisitions, our corporate law practice encompasses the full spectrum of legal issues that affect modern businesses operating in Virginia, Maryland, and the District of Columbia."
          },
          {
            title: "Corporate Formation and Entity Selection",
            content: "Choosing the right business structure is a critical decision that affects taxation, liability, governance, and operational flexibility. Our attorneys guide clients through the formation process for various business entities, including:\\n\\nCorporations (C-Corp and S-Corp): Advising on incorporation, stock issuance, shareholder agreements, and corporate governance structures.\\n\\nLimited Liability Companies (LLCs): Forming LLCs with customized operating agreements that protect member interests while providing operational flexibility.\\n\\nPartnerships: Structuring general partnerships, limited partnerships (LPs), and limited liability partnerships (LLPs) with comprehensive partnership agreements.\\n\\nNon-Profit Organizations: Assisting with formation of tax-exempt organizations, including 501(c)(3) entities, and ongoing compliance with federal and state regulations."
          },
          {
            title: "Corporate Governance and Compliance",
            content: "Effective corporate governance protects stakeholder interests while ensuring regulatory compliance and operational efficiency. Our corporate governance services include:\\n\\nBoard of Directors Advisory: Counseling boards on fiduciary duties, decision-making processes, and risk management strategies.\\n\\nShareholder and Member Relations: Drafting shareholder agreements, operating agreements, and buy-sell agreements that address ownership transitions and dispute resolution.\\n\\nCompliance Programs: Developing and implementing compliance programs for regulatory requirements, including securities law compliance, employment law adherence, and industry-specific regulations.\\n\\nCorporate Record-Keeping: Maintaining corporate books, records, and meeting minutes to ensure proper documentation and legal protection."
          },
          {
            title: "Commercial Contracts and Transactions",
            content: "Well-drafted contracts are the foundation of successful business relationships. Our transactional attorneys handle:\\n\\nContract Drafting and Review: Creating and analyzing agreements including vendor contracts, customer agreements, licensing deals, and service contracts.\\n\\nMergers and Acquisitions: Representing buyers and sellers in asset purchases, stock transactions, and merger arrangements.\\n\\nFinancing Transactions: Assisting with debt and equity financing, including loans, lines of credit, and investment agreements.\\n\\nIntellectual Property Transactions: Handling licensing agreements, technology transfers, and IP-related business deals."
          },
          {
            title: "Contact Briglia Hundley® for Corporate Law Counsel",
            content: "Whether you need assistance with business formation, governance matters, commercial transactions, or ongoing corporate compliance, Briglia Hundley® has the experience and knowledge to help your business succeed. Contact us today to discuss your corporate legal needs."
          }
        ],
        whyChoose: {
          title: "Why Choose Briglia Hundley® for Corporate Law?",
          content: [
            "Expertise Across All Business Stages: From startup entity selection to sophisticated corporate governance for multinational corporations, our attorneys provide experienced, practical advice customized to your business size and industry.",
            "Diverse Clientele: We serve a broad client base, including Fortune 500 companies, technology firms, government contractors, and local and mid-sized businesses, enabling us to bring best practices and industry insights to every engagement.",
            "Strategic, Business-Focused Legal Counsel: Our attorneys understand the nuances of the business world, allowing us to deliver legal solutions aligned with your strategic goals and commercial realities.",
            "Regional and National Reach: While we focus on the Mid-Atlantic region, our team is well-equipped to advise clients with operations nationwide, leveraging extensive experience in multiple jurisdictions."
          ]
        }
      }`
);

// Write the updated content back to the file
fs.writeFileSync(mockDataPath, content, 'utf8');

console.log("Successfully updated all remaining practice areas!");
console.log("Corporate Law has been updated with new structure.");