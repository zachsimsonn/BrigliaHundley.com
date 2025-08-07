// Script to fix all practice areas to match Criminal Law structure
const fs = require('fs');

// Read the current mockData.js file
const mockDataPath = '/app/frontend/src/data/mockData.js';
const content = fs.readFileSync(mockDataPath, 'utf8');

// Replace Employment Law "Why Choose" section
let updatedContent = content.replace(
  /({[\s\S]*?title: "Why Choose Briglia Hundley® for Your Employment Law Needs\?",[\s\S]*?content: `<div class="bg-gray-50[\s\S]*?<\/div>`[\s\S]*?},)/,
  `{
            title: "Contact Briglia Hundley® for Skilled Employment Law Counsel",
            content: "If you need trusted, results-oriented employment law representation in Virginia, Maryland, or Washington, D.C., contact Briglia Hundley® today to schedule a confidential consultation. Our legal team is prepared to protect your rights, resolve disputes, and provide sound guidance to help you navigate complex employment issues confidently."
          }
        ],
        whyChoose: {
          title: "Why Choose Briglia Hundley® for Your Employment Law Needs?",
          content: [
            "Experienced and Responsive Employment Lawyers in Virginia, Maryland, and Washington, D.C.",
            "Proven Track Record resolving complex discrimination, retaliation, contract, and tort claims",
            "Expertise in Federal, State, and Local Employment Law Compliance and Litigation",
            "Dedicated Client Service tailored to the unique needs of employers and employees",
            "Strategic Counsel aimed at preventing disputes and mitigating risk",
            "Balanced Representation for employers, management, and employees alike"
          ]
        }`
);

console.log("Employment Law structure updated");