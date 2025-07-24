import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Shield, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import SEO from '../SEO';

const AccountantsLiabilityPage = ({ data, onNavigate }) => {
  const practiceArea = {
    title: "Accountants Liability and Securities Litigation",
    description: "Comprehensive defense for accounting professionals in SEC enforcement, PCAOB investigations, malpractice claims, and securities litigation.",
    fullDescription: "Briglia Hundley® represents accounting professionals and securities industry participants in complex regulatory enforcement matters, professional liability claims, and securities litigation. Our attorneys have extensive experience defending clients in SEC and PCAOB proceedings, state disciplinary actions, and private securities litigation.",
    attorneys: ["Madison A. Beatty"],
    services: [
      "SEC Enforcement Defense",
      "PCAOB Investigations", 
      "Securities Investigations",
      "DOJ Enforcement Matters",
      "Grand Jury Proceedings",
      "FINRA Regulatory Matters",
      "State Disciplinary Boards",
      "Accounting Malpractice Defense",
      "Private Securities Litigation",
      "Wells Notice Responses",
      "Audit Committee Investigations",
      "Whistleblower Defense",
      "Professional Liability Claims",
      "Quality Control Reviews",
      "Revenue Recognition Issues",
      "Going Concern Matters"
    ]
  };

  const handleBackClick = () => {
    if (onNavigate) {
      onNavigate('/practice-areas');
    }
  };

  return (
    <>
      <SEO 
        title={`${practiceArea.title} | Briglia Hundley`}
        description={practiceArea.description}
        canonical={`https://brigliahundley.com/practice-area/accountants-liability-securities-litigation`}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {practiceArea.title}
                </h1>
                <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                  {practiceArea.fullDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href={`tel:${data.business?.phone}`}
                    className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (703) 783-5185
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">SEC & PCAOB Defense</div>
                      <div className="text-gray-100 text-sm">Former regulators and prosecutors on our team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Complex Litigation</div>
                      <div className="text-gray-100 text-sm">Federal and state court experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Regulatory Expertise</div>
                      <div className="text-gray-100 text-sm">GAAP, PCAOB standards, and audit process knowledge</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                
                {/* SEC and PCAOB Defense Practice */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">SEC and PCAOB Defense Practice</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Securities Investigations, Enforcement, and Litigation</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">DOJ and SEC Enforcement</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We have represented clients in criminal and regulatory matters involving accounting fraud, bank fraud, false public statements, false claims, and insider trading. In SEC matters, we seek to eliminate or minimize charges through persuasive responses to a Wells notice of securities law violations. Our experience as former regulators and prosecutors allows us to effectively defend our clients in regulatory and criminal investigations and proceedings.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">We represent clients in the following areas:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>DOJ and SEC enforcement matters</li>
                    <li>Grand juries and investigations by federal and state prosecutors</li>
                    <li>SEC and FINRA regulatory matters</li>
                    <li>Audit committees, directors, and senior management in conducting independent investigations involving derivative claims, whistleblower allegations, fraud, and potential securities law violations</li>
                  </ul>
                </div>

                {/* Accountants Liability */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Accountants Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Briglia Hundley® represents accounting professionals in civil, criminal, government regulatory enforcement, and state disciplinary actions.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">SEC, PCAOB, and State Disciplinary Boards</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Heightened enforcement standards of the SEC and Public Company Accounting Oversight Board (PCAOB), new auditing standards of the PCAOB, and new FASB accounting standards have resulted in increased scrutiny of the work performed by auditors. Our attorneys represent accounting firms and individual accounting professionals, including Certified Public Accountants (CPAs), in investigations and disciplinary proceedings brought by federal regulators, such as the PCAOB and SEC.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our attorneys have represented accounting firms and accountants in all stages of PCAOB and SEC investigations and disciplinary proceedings, including recently trying a case before the PCAOB hearing officer. In addition, our attorneys have represented CPAs before state boards of accountancy, such as the Virginia Board of Accountancy ("VBOA"), including representing CPAs in Informal Fact-Finding Conferences.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We understand the audit process, Generally Accepted Accounting Principles (GAAP), and PCAOB auditing standards. That understanding helps us effectively defend auditors' and CPAs' conduct. Our firm includes former prosecutors and a former Assistant Director of the PCAOB's Division of Enforcement and Investigations.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">We have the following experience:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>SEC enforcement</li>
                    <li>PCAOB enforcement</li>
                    <li>State disciplinary proceedings (i.e., state boards of accountancy such as the VBOA)</li>
                    <li>Parallel proceedings (i.e., SEC and PCAOB investigations, PCAOB and foreign audit regulator investigations, government investigation and private securities litigation, etc.)</li>
                    <li>Audits of public companies and broker-dealers</li>
                    <li>Multi-location audits</li>
                    <li>International investigations involving overseas firms and foreign affiliates of the Big Four and other global accounting network firms (i.e., Argentina, Brazil, India, Indonesia, Japan, Korea, Spain, etc.)</li>
                  </ul>
                </div>

                {/* Malpractice */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Malpractice</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Accounting firms and CPAs are facing increasing professional liability litigation brought by former clients and third parties including creditors, investors, receivers, and bankruptcy trustees. We understand the relevant laws, professional standards, accounting concepts, and auditing issues at issue in accounting malpractice actions. Briglia Hundley® works with accounting firms, CPAs, and their insurers to provide a comprehensive and coordinated defense in complex accounting and auditing matters.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">We defend the quality of our client's work in such areas as:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Revenue recognition</li>
                    <li>Inventory</li>
                    <li>Lease accounting</li>
                    <li>Going concern considerations</li>
                    <li>Quality control</li>
                    <li>Breach of professional obligations such as conflicts of interest, independence, and confidentiality</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We have tried numerous cases as prosecutors, criminal defense attorneys, and civil litigators in federal and state courts throughout the United States. While we work aggressively to defeat claims before trial, our vast experience as trial lawyers gives us the skills and knowledge needed to successfully try cases in federal or state court, administrative proceedings, or arbitrations.
                  </p>
                </div>

                {/* Private Securities Litigation */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Private Securities Litigation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our attorneys have represented companies and individuals in private securities class action cases, Securities and Exchange Commission (SEC) investigations, and criminal matters involving allegations of securities fraud. We aggressively pursue a quick resolution of disputes at the earliest stages of litigation by requesting dismissal on the pleadings, objecting to the class certification, or seeking full or partial summary judgment. When it is in our client's best interest, we will seek to end litigation through settlement on favorable terms. When necessary and appropriate, our attorneys have the knowledge and skill to successfully take a case through a full trial on the merits.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">Our experience includes:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Private securities class action matters: Representation of companies, directors, and senior officers in complex Rule 10b-5 actions with allegations of fraud involving complex accounting and disclosure issues.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Attorney */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Attorney</h3>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800">Madison A. Beatty</h4>
                    <p className="text-gray-600 text-sm mt-1">Partner</p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <ul className="space-y-3">
                    {practiceArea.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Scale className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-gray-900 text-white rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Need Legal Representation?</h3>
                  <p className="text-gray-100 mb-6">
                    Contact our experienced attorneys for a consultation about your accounting liability or securities litigation matter.
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="block bg-white text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300"
                    >
                      Schedule Consultation
                    </Link>
                    <a
                      href={`tel:${data.business?.phone}`}
                      className="block border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Call (703) 783-5185
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="mt-12 text-center">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Practice Areas
            </button>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. 
              The information presented here should not be construed as forming an attorney-client relationship. 
              Every case is unique, and past results do not guarantee future outcomes. 
              Please consult with a qualified attorney to discuss your specific legal situation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountantsLiabilityPage;