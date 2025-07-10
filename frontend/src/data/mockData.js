export const siteData = {
  business: {
    name: "Briglia Hundley®",
    tagline: "Nothing is more important than what we do for families and businesses",
    established: "1993",
    location: "Tysons Corner, Fairfax County, Virginia",
    address: "1921 Gallows Road, Suite 900, Tysons Corner, Virginia 22182",
    phone: "(703) 555-0123", // Mock phone number
    email: "info@brigliahundley.com", // Mock email
    description: "Briglia Hundley® is a Tier 1 ranked, award-winning law firm delivering superior client service and innovative legal strategies throughout Northern Virginia.",
    serviceArea: "Northern Virginia, Fairfax County, Prince William County, Arlington County, Alexandria, McLean, Vienna, Falls Church, Herndon, Reston, Great Falls, Oakton, Burke, Springfield, Annandale, Centreville, Manassas, Woodbridge, Dale City, Dumfries",
    serviceRegions: ["Tysons Corner", "Fairfax", "Northern Virginia", "Prince William County", "Arlington", "Alexandria", "McLean", "Vienna", "Falls Church", "Herndon", "Reston", "Great Falls", "Oakton", "Burke", "Springfield", "Annandale", "Centreville", "Manassas", "Woodbridge", "Dale City", "Dumfries"],
    jurisdictions: ["Virginia State Courts", "Federal Courts in Eastern District of Virginia", "Federal Courts in Western District of Virginia", "U.S. District Court for the District of Columbia", "Fairfax County Circuit Court", "Prince William County Circuit Court", "Arlington County Circuit Court"],
    logo: `/bhlogo.png?v=${Date.now()}` // Cache busting to ensure new logo displays
  },
  
  practiceAreas: [
    {
      title: "Family Law",
      description: "Comprehensive family law services including divorce, custody, and support matters for families throughout Northern Virginia.",
      fullDescription: "At Briglia Hundley, P.C.®, we understand that family law matters can be emotionally charged and complex. Our experienced attorneys are dedicated to providing compassionate and effective legal representation in a variety of family law issues, including divorce, child custody, child support, and property division. We strive to protect your rights and help you navigate through these challenging times with confidence.",
      detailedContent: {
        sections: [
          {
            title: "Divorce",
            content: "Our divorce attorneys handle all aspects of divorce proceedings, from uncontested divorces to complex contested matters involving significant assets, business interests, and custody disputes. We provide strategic counsel on property division, spousal support, and child custody arrangements."
          },
          {
            title: "Child Custody and Support",
            content: "We represent parents in custody disputes, working to establish arrangements that serve the best interests of the children while protecting our clients' parental rights. Our attorneys handle child support calculations, modifications, and enforcement matters."
          },
          {
            title: "Property Division",
            content: "Virginia is an equitable distribution state, which means marital property is divided fairly but not necessarily equally. We help clients identify, value, and divide marital assets including real estate, business interests, retirement accounts, and other valuable property."
          }
        ]
      },
      services: [
        "Divorce",
        "Child Custody", 
        "Child Support",
        "Property Division",
        "Adoption",
        "Spousal Support",
        "Prenuptial Agreements",
        "Postnuptial Agreements"
      ],
      url: "/family-law",
      localKeywords: "family law attorney Fairfax VA, divorce lawyer Northern Virginia, child custody Arlington VA, family court Prince William County",
      attorneys: ["James W. Hundley", "Steven D. Briglia", "Courtney B. Harden", "Amy S. Owen", "Teresa S. Cole"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-25.jpg"
    },
    {
      title: "Criminal Law",
      description: "For every criminal offense, there is a defense. You want a lawyer who will fight for you. With a comprehensive criminal law practice, our attorneys are equipped to defend you in state and federal courts from all manner of misdemeanor and felony charges, ranging from traffic infractions to serious felonies.",
      fullDescription: "Our criminal defense attorneys have extensive experience protecting clients' rights in both state and federal courts. We understand that criminal charges can have life-altering consequences, and we fight aggressively to protect your freedom, reputation, and future.",
      detailedContent: {
        sections: [
          {
            title: "White Collar Crimes",
            content: "We have experience protecting the rights of individuals facing white collar criminal charges in Virginia's state courts and in federal courts throughout the United States. White collar cases can involve allegations of large conspiracies comprised of numerous individuals and corporations. Substantial financial losses caused by embezzlement, bid rigging, tax evasion, or other types of alleged fraud may be an issue. Our lawyers have the knowledge and ability to analyze the unique factors of your case in order to prepare an effective defense.",
            subServices: ["Fraud", "Embezzlement", "Computer Crimes", "Money Laundering"]
          },
          {
            title: "Drug Charges",
            content: "A conviction for illegally possessing or distributing drugs carries serious consequences. If you have been charged with a drug offense, you need an experienced defense lawyer to help protect your rights. From simple possession to federal conspiracy charges, we will do everything within our powers to build the most effective defense and achieve the best possible disposition for you.",
            subServices: ["Drug Possession", "Distribution", "Conspiracy", "Manufacturing"]
          },
          {
            title: "DUI & DWI",
            content: "If you have been charged with driving under the influence or driving while intoxicated, you need a lawyer with a firm grasp of all the legal issues that might affect your rights. These complex cases can involve constitutional issues, technical rules of evidence, the science of toxicology, and the use of expert witnesses. Our attorneys constantly monitor, research, and litigate DUI and DWI cases so that we are prepared to address this constantly changing area of law with innovative and successful criminal defense solutions."
          },
          {
            title: "Traffic Offenses",
            content: "If you have been charged with DWI, hit-and-run, driving on a suspended license, or reckless driving, then you are facing the possibility of a jail sentence, a substantial fine, and the loss of your driver's license. We appear on an almost daily basis in Virginia's state and federal traffic courts and are prepared to defend you.",
            subServices: ["Speeding", "Reckless Driving", "Driving with a Suspended License", "Hit-and-Run"]
          }
        ]
      },
      services: [
        "White Collar Crime Defense",
        "Drug Charges",
        "DUI & DWI Defense",
        "Juvenile Offenses",
        "Traffic Offenses",
        "Assault and Battery",
        "Theft and Larceny",
        "Federal Criminal Defense"
      ],
      url: "/criminal-law",
      localKeywords: "criminal defense attorney Fairfax VA, criminal lawyer Northern Virginia, DWI attorney Arlington VA, criminal defense Prince William County",
      attorneys: ["James W. Hundley", "Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-criminal-law-hero-25.jpg"
    },
    {
      title: "Business Litigation",
      description: "Briglia Hundley® represents a wide range of businesses and individuals in the state and federal courts in Virginia, Maryland, and the District of Columbia.",
      fullDescription: "Our business litigation team has extensive experience representing businesses and individuals in complex commercial disputes. We handle cases in state and federal courts throughout Virginia, Maryland, and the District of Columbia, providing strategic litigation services designed to protect our clients' interests and achieve favorable outcomes.",
      detailedContent: {
        sections: [
          {
            title: "Our Clients",
            content: "Our clients include Fortune 500 companies, multi-national corporations, technology companies, government contractors as well as medium sized and main street businesses."
          },
          {
            title: "Our Approach",
            content: "We seek to build long-term relationships with our business clients as they grow their companies. Our nimble approach to case management was learned through years of risk management on behalf of our clients. We know how to deliver both efficiency and value to every client we serve."
          }
        ]
      },
      services: [
        "Employment Law",
        "Real Estate Litigation",
        "Breach of Contract",
        "Uniform Commercial Code Issues",
        "Insurance Coverage Challenges",
        "Fiduciary Litigation",
        "Fraud Investigations",
        "Workouts",
        "Failed Transactions"
      ],
      url: "/business-litigation",
      localKeywords: "business litigation attorney Fairfax VA, commercial lawyer Northern Virginia, business dispute Arlington VA, corporate litigation Tysons Corner",
      attorneys: ["Steven D. Briglia", "James W. Hundley"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-business-litigation-hero-25.jpg"
    },
    {
      title: "Accountants Liability and Securities Litigation",
      description: "We have represented clients in criminal and regulatory matters involving accounting fraud, bank fraud, false public statements, false claims, and insider trading.",
      fullDescription: "Our experience as former regulators and prosecutors allows us to effectively defend our clients in regulatory and criminal investigations and proceedings.",
      detailedContent: {
        sections: [
          {
            title: "SEC and PCAOB Defense Practice",
            content: "Securities Investigations, Enforcement, and Litigation\n\nDOJ and SEC Enforcement\n\nWe have represented clients in criminal and regulatory matters involving accounting fraud, bank fraud, false public statements, false claims, and insider trading. In SEC matters, we seek to eliminate or minimize charges through persuasive responses to a Wells notice of securities law violations. Our experience as former regulators and prosecutors allows us to effectively defend our clients in regulatory and criminal investigations and proceedings.",
            subServices: [
              "DOJ and SEC enforcement matters",
              "Grand juries and investigations by federal and state prosecutors", 
              "SEC and FINRA regulatory matters",
              "Audit committees, directors, and senior management in conducting independent investigations involving derivative claims, whistleblower allegations, fraud, and potential securities law violations"
            ]
          },
          {
            title: "Accountants Liability",
            content: "Briglia Hundley® represents accounting professionals in civil, criminal, government regulatory enforcement, and state disciplinary actions.\n\nSEC, PCAOB, and State Disciplinary Boards\n\nHeightened enforcement standards of the SEC and Public Company Accounting Oversight Board (PCAOB), new auditing standards of the PCAOB, and new FASB accounting standards have resulted in increased scrutiny of the work performed by auditors. Our attorneys represent accounting firms and individual accounting professionals, including Certified Public Accountants (CPAs), in investigations and disciplinary proceedings brought by federal regulators, such as the PCAOB and SEC.",
            subServices: [
              "SEC enforcement",
              "PCAOB enforcement", 
              "State disciplinary proceedings (i.e., state boards of accountancy such as the VBOA)",
              "Parallel proceedings (i.e., SEC and PCAOB investigations, PCAOB and foreign audit regulator investigations, government investigation and private securities litigation, etc.)",
              "Audits of public companies and broker-dealers",
              "Multi-location audits",
              "International investigations involving overseas firms and foreign affiliates of the Big Four and other global accounting network firms"
            ]
          },
          {
            title: "Malpractice",
            content: "Accounting firms and CPAs are facing increasing professional liability litigation brought by former clients and third parties including creditors, investors, receivers, and bankruptcy trustees. We understand the relevant laws, professional standards, accounting concepts, and auditing issues at issue in accounting malpractice actions.",
            subServices: [
              "Revenue recognition",
              "Inventory",
              "Lease accounting", 
              "Going concern considerations",
              "Quality control",
              "Breach of professional obligations such as conflicts of interest, independence, and confidentiality"
            ]
          },
          {
            title: "Private Securities Litigation",
            content: "Our attorneys have represented companies and individuals in private securities class action cases, Securities and Exchange Commission (SEC) investigations, and criminal matters involving allegations of securities fraud. We aggressively pursue a quick resolution of disputes at the earliest stages of litigation by requesting dismissal on the pleadings, objecting to the class certification, or seeking full or partial summary judgment.",
            subServices: [
              "Private securities class action matters: Representation of companies, directors, and senior officers in complex Rule 10b-5 actions with allegations of fraud involving complex accounting and disclosure issues"
            ]
          }
        ]
      },
      services: [
        "SEC and PCAOB Defense",
        "Securities Investigations and Enforcement",
        "DOJ and SEC Enforcement",
        "Accountants Liability Defense",
        "Professional Malpractice Defense", 
        "Private Securities Litigation",
        "Regulatory Investigations",
        "White Collar Criminal Defense"
      ],
      url: "/accountants-liability-securities-litigation",
      localKeywords: "SEC defense attorney, PCAOB enforcement lawyer, accountants liability attorney, securities litigation lawyer",
      attorneys: ["James W. Hundley", "Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-securities-hero-25.jpg"
    },
    {
      title: "Corporate Law", 
      description: "We provide customized and tailored advice to our clients, of all sizes and in all stages of growth, regarding corporate governance matters, entity formation and structural issues.",
      fullDescription: "Our corporate law practice serves businesses of all sizes and stages of development. We provide comprehensive legal counsel on corporate governance, entity formation, mergers and acquisitions, contract negotiations, and ongoing corporate compliance matters.",
      detailedContent: {
        sections: [
          {
            title: "Entity Formation and Structure",
            content: "We assist clients in selecting the appropriate business entity structure, including corporations, limited liability companies, partnerships, and other business forms. Our attorneys provide guidance on the advantages and disadvantages of each structure based on the client's specific business goals and circumstances."
          },
          {
            title: "Corporate Governance",
            content: "We advise clients on corporate governance matters, including board of directors' responsibilities, shareholder rights, corporate compliance, and fiduciary duties. Our attorneys help ensure that clients maintain proper corporate governance practices to minimize legal risks."
          },
          {
            title: "Mergers and Acquisitions",
            content: "Our attorneys have extensive experience in mergers and acquisitions transactions, representing both buyers and sellers in complex business transactions. We provide strategic counsel throughout the entire process, from initial negotiations to closing."
          }
        ]
      },
      services: [
        "Entity Formation and Structure",
        "Corporate Governance",
        "Mergers and Acquisitions",
        "Contract Drafting and Negotiation",
        "Corporate Compliance",
        "General Counsel Services",
        "Business Transactions",
        "Securities Law Compliance"
      ],
      url: "/corporate-law",
      localKeywords: "corporate attorney Fairfax VA, business lawyer Northern Virginia, company formation Arlington VA, corporate counsel Tysons Corner",
      attorneys: ["Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-corporate-law-hero-25.jpg"
    },
    {
      title: "Personal Injury",
      description: "A personal injury can change your life in an instant. You want an attorney who can help you on the path to recovery. At the Fairfax County law offices of Briglia Hundley, P.C.®, we protect the rights of individuals who have been seriously injured due to the negligence of others.",
      fullDescription: "When you're seriously injured due to someone else's negligence, you need experienced legal representation to protect your rights and help you recover the compensation you deserve. Our personal injury attorneys have a proven track record of success in handling complex injury cases.",
      detailedContent: {
        sections: [
          {
            title: "Motor Vehicle Accidents",
            content: "We represent victims of car accidents, truck accidents, motorcycle accidents, and other motor vehicle collisions. Our attorneys work with accident reconstruction experts, medical professionals, and other specialists to build strong cases for our clients."
          },
          {
            title: "Premises Liability",
            content: "Property owners have a legal duty to maintain their premises in a reasonably safe condition. When they fail to do so and someone is injured as a result, they may be held liable for damages. We handle slip and fall cases, inadequate security cases, and other premises liability matters."
          },
          {
            title: "Medical Malpractice",
            content: "Medical malpractice occurs when a healthcare provider fails to provide the appropriate standard of care, resulting in injury or harm to the patient. Our attorneys have experience handling complex medical malpractice cases involving surgical errors, misdiagnosis, and other forms of medical negligence."
          }
        ]
      },
      services: [
        "Car Accidents",
        "Truck Accidents",
        "Motorcycle Accidents",
        "Slip and Fall Accidents",
        "Medical Malpractice",
        "Wrongful Death",
        "Product Liability",
        "Premises Liability"
      ],
      url: "/personal-injury",
      localKeywords: "personal injury lawyer Fairfax VA, car accident attorney Northern Virginia, injury lawyer Arlington VA, accident attorney Prince William County",
      attorneys: ["James W. Hundley"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-personal-injury-hero-25.jpg"
    },
    {
      title: "Estate Planning",
      description: "Estate planning helps you control what happens to your assets once you're gone. It can also establish a plan to better protect and provide for your dependents throughout their lives.",
      fullDescription: "At Briglia Hundley, P.C.®, we help clients throughout Virginia, Maryland, and Washington, D.C., establish comprehensive estate plans that provide greater peace of mind and keep loved ones secure.",
      detailedContent: {
        sections: [
          {
            title: "Wills and Trusts",
            content: "We help clients create comprehensive wills and establish various types of trusts to protect assets and provide for beneficiaries. Our attorneys explain the benefits of different trust structures and help clients choose the options that best meet their needs."
          },
          {
            title: "Estate Administration",
            content: "When a loved one passes away, the estate administration process can be complex and emotionally challenging. Our attorneys guide executors and administrators through the probate process, helping to ensure that the deceased's wishes are carried out properly."
          },
          {
            title: "Tax Planning",
            content: "Estate planning involves careful consideration of tax implications. Our attorneys work with clients and their financial advisors to develop strategies that minimize estate and gift taxes while achieving the client's estate planning goals."
          }
        ]
      },
      services: [
        "Wills and Trusts",
        "Estate Administration",
        "Probate Proceedings",
        "Tax Planning",
        "Asset Protection",
        "Powers of Attorney",
        "Advance Medical Directives",
        "Business Succession Planning"
      ],
      url: "/estate-planning",
      localKeywords: "estate planning attorney Fairfax VA, will and trust lawyer Northern Virginia, probate attorney Arlington VA, estate lawyer Prince William County",
      attorneys: ["Teresa S. Cole", "Amy S. Owen"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-estate-planning-hero-25.jpg"
    },
    {
      title: "Real Estate Law",
      description: "Our real estate practice focuses on real estate transactions involving homeowners, builders, developers, real estate brokers, mortgage originators and lenders, title insurers, and other members of the real estate community.",
      fullDescription: "Our real estate attorneys provide comprehensive legal services for all types of real estate transactions and disputes. Whether you're buying your first home, developing commercial property, or involved in a real estate dispute, we have the experience and knowledge to guide you through the complex legal issues.",
      detailedContent: {
        sections: [
          {
            title: "Residential Real Estate",
            content: "We assist homebuyers and sellers with all aspects of residential real estate transactions, including contract review, title examination, closing coordination, and dispute resolution. Our goal is to ensure that our clients' interests are protected throughout the transaction process."
          },
          {
            title: "Commercial Real Estate",
            content: "Our commercial real estate practice includes representation of buyers, sellers, landlords, tenants, developers, and lenders in complex commercial transactions. We handle acquisitions, dispositions, leasing, development, and financing matters."
          },
          {
            title: "Real Estate Litigation",
            content: "When real estate disputes arise, our attorneys provide skilled representation in litigation matters. We handle boundary disputes, title issues, contract disputes, landlord-tenant conflicts, and other real estate-related litigation."
          }
        ]
      },
      services: [
        "Residential Real Estate Transactions",
        "Commercial Real Estate",
        "Real Estate Development",
        "Title Insurance Issues",
        "Real Estate Litigation",
        "Landlord-Tenant Disputes",
        "Zoning and Land Use",
        "Construction Law"
      ],
      url: "/real-estate-law",
      localKeywords: "real estate attorney Fairfax VA, property lawyer Northern Virginia, real estate closing Arlington VA, development lawyer Tysons Corner",
      attorneys: ["Steven D. Briglia", "Brian J. Lubkeman"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-real-estate-hero-25.jpg"
    },
    {
      title: "Employment Law",
      description: "Our employment practice involves both advising employers on employment issues that arise in the workplace and litigating a variety of legal issues arising from the employer-employee relationship.",
      fullDescription: "We have significant experience handling discrimination and retaliation claims filed in federal and state courts in Virginia, Maryland, and the District of Columbia, as well as before the Equal Employment Opportunity Commission and local state and county agencies. We also regularly handle employment contract disputes, including claims for wrongful discharge and violation of non-compete and confidentiality agreements.",
      services: [
        "Discrimination Claims",
        "Retaliation Claims",
        "Wrongful Termination",
        "Non-Compete Agreements",
        "Confidentiality Agreements",
        "Employment Contract Disputes",
        "Workplace Harassment",
        "Wage and Hour Issues"
      ],
      url: "/employment-law",
      localKeywords: "employment lawyer Fairfax VA, discrimination attorney Northern Virginia, wrongful termination Arlington VA, workplace attorney Tysons Corner",
      attorneys: ["Steven D. Briglia"]
    },
    {
      title: "Municipal Law",
      description: "Businesses and individuals face a variety of municipal law problems. We represent local municipalities, businesses, and individuals involved in municipal law disputes throughout Virginia.",
      fullDescription: "From zoning issues to disputes over eminent domain, we protect our clients' rights and help them reach a fair solution. Whether your request for licenses and permits has been denied or you have a land dispute with your town, it is important to determine your options and protect your rights. Our municipal law practice serves both municipalities and private parties in navigating complex local government issues.",
      services: [
        "Zoning and Land Use",
        "Eminent Domain",
        "Municipal Litigation",
        "Permits and Licensing",
        "Municipal Governance",
        "Public-Private Partnerships",
        "Administrative Law",
        "Local Government Representation"
      ],
      url: "/municipal-law",
      localKeywords: "municipal law attorney Fairfax VA, zoning lawyer Northern Virginia, eminent domain Arlington VA, local government attorney Tysons Corner",
      attorneys: ["Steven D. Briglia"]
    },
    {
      title: "Appellate Litigation",
      description: "The conclusion of a trial is not always the end of a case. Both civil litigants and criminal defendants often continue pursuing their rights on appeal.",
      fullDescription: "Our attorneys have experience handling both civil and criminal cases at all levels of the state and federal courts in the mid-Atlantic, including the Fourth Circuit, D.C. Circuit, and Supreme Court of the United States. We understand the unique challenges of appellate practice and work diligently to present compelling arguments that can overturn unfavorable trial court decisions.",
      services: [
        "Civil Appeals",
        "Criminal Appeals",
        "Federal Court Appeals",
        "State Court Appeals",
        "Supreme Court Practice",
        "Appellate Brief Writing",
        "Oral Argument",
        "Post-Conviction Relief"
      ],
      url: "/appellate-litigation",
      localKeywords: "appellate attorney Fairfax VA, appeals lawyer Northern Virginia, Supreme Court attorney Arlington VA, appellate litigation Tysons Corner",
      attorneys: ["James W. Hundley", "Steven D. Briglia"]
    }
  ],

  attorneys: [
    {
      name: "James W. Hundley",
      position: "Partner",
      experience: "Jim Hundley has over 30 years of experience litigating complex criminal and civil cases. He regularly represents individuals and corporations before state and federal courts in Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Jim Hundley has over 30 years of experience litigating complex criminal and civil cases. He regularly represents individuals and corporations before state and federal courts in Virginia, Washington, D.C., and Maryland. He has defended clients involved in a broad range of criminal matters including bank fraud, bid rigging, bribery, embezzlement, tax evasion, and computer fraud. On the civil side, Mr. Hundley has successfully handled cases involving a wide variety of issues including breach of contract, tortious interference with business, theft of trade secrets, personal injury, and violations of civil rights.",
      image: "https://images.pexels.com/photos/14634935/pexels-photo-14634935.jpeg",
      phone: "703.883.0204",
      email: "jhundley@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "Georgetown University Law Center",
          year: 1989
        },
        {
          degree: "Bachelor of Arts",
          institution: "Virginia Polytechnic Institute and State University",
          year: 1985
        }
      ],
      admissions: [
        "Virginia",
        "United States District Court for the Eastern District of Virginia",
        "United States District Court for the Western District of Virginia",
        "United States District Court for the District of Columbia",
        "United States Court of Appeals for the Fourth Circuit",
        "United States Court of Appeals for the District of Columbia Circuit",
        "United States Supreme Court"
      ],
      professionalAssociations: [
        "Past Chairman and Member, Committee on Lawyer Discipline, Virginia State Bar",
        "Past Chairman and Member, Disciplinary Sub-Committee, Virginia State Bar",
        "Past Member, Judicial Screening Committee, Fairfax Bar Association",
        "Past Chairman and Member, Legislative Committee, Fairfax Bar Association",
        "Past Chairman and Member, Election Committee, Fairfax Bar Association",
        "Past Member, Circuit Court Committee, Fairfax Bar Association",
        "Member, American Bar Association",
        "Member, Federal Bar Association"
      ],
      certifications: [
        "Rated AV Preeminent by Martindale-Hubbell 2004 to present",
        "Listed in Super Lawyers 2006 to present",
        "Listed in Best Lawyers 2010 to present",
        "Recognized as a Top Attorney of Washington DC in the Washington Post Magazine",
        "Recognized as a Top Attorney of Virginia in the Richmond Magazine",
        "Recognized as one of the Best Lawyers of Northern Virginia in the Northern Virginia Magazine"
      ],
      practiceAreas: [
        "Criminal Defense",
        "Commercial and Business Litigation",
        "Personal Injury"
      ]
    },
    {
      name: "Steven D. Briglia",
      position: "Partner",
      experience: "Steve Briglia has over 30 years of extensive trial experience in both civil and criminal law matters. He has tried hundreds of cases before judges and juries in both state and federal court throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Steve Briglia has over 30 years of extensive trial experience in both civil and criminal law matters. He has tried hundreds of cases before judges and juries in both state and federal court. He also regularly represents clients in administrative hearings, arbitrations, and mediations, and he serves as outside general counsel to numerous corporate clients. Mr. Briglia's clients include national and regional businesses, municipalities, elected officials, and individuals involved in business disputes and criminal investigations. Mr. Briglia is a founding member of Briglia Hundley®.",
      image: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg",
      phone: "703.883.0205",
      email: "sbriglia@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "George Mason University School of Law",
          year: 1988
        },
        {
          degree: "Bachelor of Arts",
          institution: "University of Virginia",
          year: 1985
        }
      ],
      admissions: [
        "Virginia",
        "United States District Court for the Eastern District of Virginia",
        "United States Bankruptcy Court for the Eastern District of Virginia",
        "United States Court of Appeals for the Fourth Circuit",
        "United States Supreme Court"
      ],
      professionalAssociations: [
        "President, Fairfax Bar Association, July 1, 2025 to June 30, 2026",
        "Director, Fairfax Bar Association Board of Directors, 2019 to present",
        "Member, Fairfax Bar Association",
        "Member, Virginia Bar Association",
        "Trustee and President, Vienna Baseball Foundation"
      ],
      certifications: [
        "Rated AV Preeminent by Martindale-Hubbell 1998 to present",
        "Listed in Best Lawyers 2013 to present",
        "Listed in Top Lawyers of Virginia, Northern Virginia Magazine",
        "Received the Fairfax Bar Association President's Award 2015"
      ],
      practiceAreas: [
        "Civil Litigation",
        "Municipal Law",
        "Corporate Law/General Counsel Representation",
        "Administrative Hearings",
        "Arbitration/Mediation",
        "Criminal Investigations and Defense"
      ]
    },
    {
      name: "Brian J. Lubkeman",
      position: "Partner",
      experience: "Brian Lubkeman has practiced law for over 30 years, with a diverse focus encompassing commercial real estate, corporate matters, and Virginia local government law. He has served as appointed City Attorney for the City of Fairfax, Virginia since 2005.",
      fullExperience: "Brian Lubkeman has practiced law for over 30 years, with a diverse focus encompassing the areas of commercial real estate, corporate matters, and Virginia local and state government law. He has worked both in-house in municipal government and for small and large law firms. Since 2005, he has served as the appointed City Attorney for the City of Fairfax, Virginia.",
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb",
      phone: "703.883.0206",
      email: "blubkeman@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "University of Virginia School of Law",
          year: 1992
        },
        {
          degree: "Bachelor of Arts",
          institution: "University of Virginia",
          year: 1988
        }
      ],
      admissions: [
        "Virginia",
        "United States District Court for the Eastern District of Virginia",
        "United States Bankruptcy Court for the Eastern District of Virginia"
      ],
      professionalAssociations: [
        "Member; Vice Chair, Board of Governors, Virginia State Bar Local Government Section, 2018-Present",
        "Member, Fairfax Bar Association",
        "Member; Chair of Law School Liaison Committee, Local Government Attorneys of Virginia, 1992-Present",
        "Member; Chair, 2007-2010, Real Property Section, Fairfax Bar Association",
        "Member; President, 2011-2012; Paul Harris Fellow, Rotary Club of Fairfax",
        "Board of Directors, 2011-2015, Fairfax Symphony Orchestra"
      ],
      certifications: [
        "Named Best Lawyers® 2017, 2020 and 2024 Municipal Law 'Lawyer of the Year' for Washington D.C. metropolitan area",
        "Listed in Best Lawyers®: Municipal, Real Estate, and Condemnation and Eminent Domain Law 2016 – 2024",
        "Listed in Northern Virginia Magazine Top Lawyers Listing, Real Estate Law, 2017-2020",
        "Legal Elite, Virginia Business, 2010"
      ],
      practiceAreas: [
        "Commercial Real Estate",
        "Corporate Matters",
        "Municipal and Local Government Law",
        "Real Estate Development",
        "Commercial Lending",
        "Business Acquisitions and Mergers"
      ],
      languages: [
        "Spanish",
        "Dutch", 
        "French"
      ]
    },
    {
      name: "Courtney B. Harden",
      position: "Partner",
      experience: "Courtney Harden has almost 20 years of litigation experience in Virginia. She represents individuals and businesses in complex civil litigation matters before state and federal courts in Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Courtney Harden has almost 20 years of litigation experience in Virginia. She represents individuals and businesses in complex civil litigation matters before state and federal courts. Her practice focuses on commercial litigation, employment disputes, personal injury cases, and general civil litigation. Ms. Harden is committed to providing strategic legal counsel and aggressive representation to achieve the best possible outcomes for her clients.",
      image: "https://images.unsplash.com/photo-1736939666660-d4c776e0532c",
      phone: "703.883.0207",
      email: "charden@brigliahundley.com"
    },
    {
      name: "Amy S. Owen",
      position: "Partner",
      experience: "Amy Owen specializes in commercial litigation, employment law, and estate planning. She has extensive experience representing businesses and individuals in complex legal matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Amy Owen specializes in commercial litigation, employment law, and estate planning. She has extensive experience representing businesses and individuals in complex legal matters. Her practice encompasses business disputes, employment litigation, estate planning and administration, and general civil litigation. Ms. Owen brings a strategic approach to each case, working closely with clients to develop effective legal solutions tailored to their specific needs and objectives.",
      image: "https://images.pexels.com/photos/14634929/pexels-photo-14634929.jpeg",
      phone: "703.883.0208",
      email: "aowen@brigliahundley.com"
    },
    {
      name: "Teresa S. Cole",
      position: "Partner",
      experience: "Teresa Cole has been practicing family law since 1993. She represents clients in divorce, custody, support, and other family law matters before Virginia courts, providing compassionate yet aggressive representation.",
      fullExperience: "Teresa Cole has been practicing family law since 1993. She represents clients in divorce, custody, support, and other family law matters before Virginia courts. Her extensive experience includes complex divorce proceedings, child custody disputes, spousal and child support matters, property division, and domestic relations cases. Ms. Cole is known for her compassionate approach while providing aggressive representation to protect her clients' interests and their families' futures.",
      image: "https://images.pexels.com/photos/32907707/pexels-photo-32907707.jpeg",
      phone: "703.883.0209",
      email: "tcole@brigliahundley.com"
    },
    {
      name: "Mary \"Molly\" Peacock",
      position: "Partner",
      experience: "Molly Peacock has nearly 20 years of experience serving as legal counsel for community associations and corporations. She represents homeowners associations and businesses in Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Molly Peacock has nearly 20 years of experience serving as legal counsel for community associations and corporations. She represents homeowners associations, condominium associations, and businesses in a wide variety of legal matters. Her practice focuses on community association law, corporate governance, contract disputes, and general business litigation. Ms. Peacock is dedicated to providing practical legal solutions that help organizations operate effectively while minimizing legal risks.",
      image: "https://images.pexels.com/photos/32907704/pexels-photo-32907704.jpeg",
      phone: "703.883.0210",
      email: "mpeacock@brigliahundley.com"
    },
    {
      name: "Michael C. May",
      position: "Partner",
      experience: "Michael May is an experienced litigator with experience in civil and criminal matters. He represents clients in complex litigation cases before state and federal courts in Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Michael May is an experienced litigator with extensive experience in both civil and criminal matters. He represents clients in complex litigation cases before state and federal courts. His practice encompasses criminal defense, civil litigation, business disputes, and personal injury matters. Mr. May brings a strategic and aggressive approach to litigation, working tirelessly to protect his clients' rights and achieve favorable outcomes in challenging legal situations.",
      image: "https://images.pexels.com/photos/32907709/pexels-photo-32907709.jpeg",
      phone: "703.883.0211",
      email: "mmay@brigliahundley.com"
    },
    {
      name: "William T. DeVinney",
      position: "Of Counsel",
      experience: "William DeVinney has a broad litigation practice including antitrust, intellectual property, and complex commercial litigation. He represents clients in sophisticated legal matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "William DeVinney has a broad litigation practice including antitrust, intellectual property, and complex commercial litigation. He represents clients in sophisticated legal matters involving federal and state regulatory issues, business disputes, and intellectual property matters. Mr. DeVinney's extensive experience includes representing corporations, individuals, and government entities in high-stakes litigation and regulatory proceedings. His strategic approach and attention to detail have resulted in successful outcomes for clients across a wide range of industries.",
      image: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg",
      phone: "703.883.0212",
      email: "wdevinney@brigliahundley.com"
    },
    {
      name: "Kaley Duncan Ward",
      position: "Senior Associate",
      experience: "Kaley Ward practices in eminent domain, civil litigation, and estate planning. She represents clients in property rights matters and complex legal disputes throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Kaley Ward practices in eminent domain, civil litigation, and estate planning. She represents clients in property rights matters, condemnation proceedings, and complex legal disputes. Her practice includes helping property owners navigate eminent domain proceedings, civil litigation matters, and comprehensive estate planning. Ms. Ward is committed to protecting her clients' rights and providing skilled representation in challenging legal matters.",
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb",
      phone: "703.883.0213",
      email: "kward@brigliahundley.com"
    },
    {
      name: "Madison A. Beatty",
      position: "Associate",
      experience: "Madison Beatty supports criminal defense and civil litigation practices. She assists clients with legal research, case preparation, and representation in various legal matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Madison Beatty supports criminal defense and civil litigation practices. She assists clients with legal research, case preparation, and representation in various legal matters. Her work includes supporting complex criminal defense cases, civil litigation matters, and providing comprehensive legal research and analysis. Ms. Beatty brings dedication and attention to detail to each case, working closely with senior attorneys to ensure the best possible outcomes for clients.",
      image: "/api/placeholder/300/400",
      phone: "703.883.0214",
      email: "mbeatty@brigliahundley.com"
    },
    {
      name: "Raymond Starks-Taylor",
      position: "Associate",
      experience: "Raymond Starks-Taylor supports business litigation and municipal law practices. He assists clients with commercial disputes and government legal matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Raymond Starks-Taylor supports business litigation and municipal law practices. He assists clients with commercial disputes, municipal legal matters, and government relations. His work includes supporting complex business litigation cases, municipal law matters, and providing legal research and analysis for corporate clients. Mr. Starks-Taylor is dedicated to helping businesses and government entities navigate complex legal challenges effectively.",
      image: "/api/placeholder/300/400",
      phone: "703.883.0215",
      email: "rstarkstaylor@brigliahundley.com"
    },
    {
      name: "Lauren L. Gill",
      position: "Associate",
      experience: "Lauren Gill supports the family law practice. She assists clients with divorce, custody, and family law matters, providing compassionate representation throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Lauren Gill supports the family law practice. She assists clients with divorce, custody, support, and other family law matters. Her work includes supporting complex family law cases, domestic relations matters, and providing legal research and case preparation for family law proceedings. Ms. Gill brings a compassionate approach to family law, understanding the sensitive nature of these matters while providing skilled legal support.",
      image: "/api/placeholder/300/400",
      phone: "703.883.0216",
      email: "lgill@brigliahundley.com"
    },
    {
      name: "Hannah C. Merrill",
      position: "Associate",
      experience: "Hannah Merrill supports family law and eminent domain practices. She assists clients with domestic relations and property rights matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Hannah Merrill supports family law and eminent domain practices. She assists clients with domestic relations matters, property rights cases, and condemnation proceedings. Her work includes supporting complex family law cases, eminent domain matters, and providing comprehensive legal research and analysis. Ms. Merrill is committed to helping clients navigate challenging legal situations with skill and dedication.",
      image: "/api/placeholder/300/400",
      phone: "703.883.0217",
      email: "hmerrill@brigliahundley.com"
    },
    {
      name: "Jacob C. DeRue",
      position: "Associate",
      experience: "Jacob DeRue supports the community association department. He assists homeowners associations and community organizations with legal matters throughout Virginia, Washington, D.C., and Maryland.",
      fullExperience: "Jacob DeRue supports the community association department. He assists homeowners associations, condominium associations, and community organizations with legal matters including governance issues, contract disputes, and regulatory compliance. His work includes supporting community association legal matters, corporate governance issues, and providing legal research and analysis for association clients. Mr. DeRue is dedicated to helping community organizations operate effectively within legal frameworks.",
      image: "/api/placeholder/300/400",
      phone: "703.883.0218",
      email: "jderue@brigliahundley.com"
    }
  ],

  testimonials: [
    {
      text: "The team at Briglia Hundley® approached my complex business litigation case like a game of chess, thinking several moves ahead and anticipating every possible outcome. Their strategic approach and attention to detail were exceptional.",
      author: "Sarah M.",
      case: "Commercial Litigation Client"
    },
    {
      text: "When I needed help with my family law matter, the attorneys at Briglia Hundley® provided compassionate yet aggressive representation. They truly understood what was at stake for my family.",
      author: "Michael R.",
      case: "Family Law Client"
    },
    {
      text: "The corporate law team at Briglia Hundley® guided our company through a complex acquisition. Their expertise and dedication were instrumental in our success.",
      author: "Jennifer L.",
      case: "Corporate Law Client"
    }
  ],

  faq: [
    {
      question: "What makes Briglia Hundley® different from other law firms?",
      answer: "We are a Tier 1 ranked firm with over 30 years of experience, providing innovative legal strategies and superior client service across multiple practice areas."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your legal needs and determine how we can best assist you."
    },
    {
      question: "What areas of Virginia do you serve?",
      answer: "We serve the entire Mid-Atlantic region from our Tysons Corner location, with a focus on Fairfax County and surrounding areas."
    },
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by calling our office, filling out our online contact form, or using our online scheduling system."
    }
  ],

  news: [
    "Steven Briglia elected President of the Fairfax Bar Association.",
    "Briglia Hundley® congratulates its attorneys recognized by Super Lawyers in 2025.",
    "Briglia Hundley® has been ranked by Best Lawyers® in their Best Law Firms United States for 2025.",
    "Briglia Hundley, P.C.® is proud to have 7 lawyers recognized by Best Lawyers® in 2025 in America."
  ],

  blogs: [
    {
      id: 1,
      title: "Virginia Supreme Court Addresses Admissibility of Plea Negotiation Statements",
      excerpt: "This post analyzes a recent ruling by the Virginia Supreme Court on the extent to which statements made during plea agreement negotiations are admissible at trial.",
      author: "James W. Hundley",
      date: "January 16, 2025",
      category: "Criminal Defense",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
      slug: "virginia-supreme-court-plea-negotiation-statements",
      content: "The Virginia Supreme Court recently issued a significant ruling regarding the admissibility of statements made during plea negotiations. This decision has important implications for criminal defense practice and trial strategy. In this analysis, we examine the court's reasoning and what it means for future cases. The court held that certain statements made during plea negotiations may be admissible under specific circumstances, departing from the traditional broad protection afforded to such communications. This ruling requires defense attorneys to be more strategic in their approach to plea negotiations and advise clients accordingly. The decision also impacts how prosecutors may use information obtained during plea discussions. Understanding this ruling is crucial for anyone involved in criminal proceedings in Virginia."
    },
    {
      id: 2,
      title: "A Look At PCAOB's Record-Breaking Enforcement In 2024",
      excerpt: "This article examines the Public Company Accounting Oversight Board's unprecedented enforcement actions in 2024 and their implications for public companies.",
      author: "Steven D. Briglia",
      date: "January 8, 2025",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      slug: "pcaob-record-breaking-enforcement-2024",
      content: "The Public Company Accounting Oversight Board (PCAOB) set new records in 2024 for enforcement actions, signaling a more aggressive regulatory environment for public companies and their auditors. This comprehensive analysis examines the key enforcement trends, significant cases, and what these developments mean for corporate compliance strategies. The PCAOB's heightened enforcement activity reflects increased scrutiny of audit quality and corporate financial reporting. Public companies and their audit firms must adapt to this evolving regulatory landscape by strengthening internal controls and compliance programs. This article provides practical guidance for navigating the new enforcement environment and minimizing regulatory risk."
    },
    {
      id: 3,
      title: "Steps to Take After a DWI Arrest in Virginia",
      excerpt: "This post outlines crucial steps individuals should consider following a DWI arrest to protect their rights and navigate the legal process effectively.",
      author: "Michael C. May",
      date: "December 15, 2024",
      category: "Criminal Defense",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9",
      slug: "steps-after-dwi-arrest-virginia",
      content: "Being arrested for DWI in Virginia can be overwhelming and confusing. This guide outlines the essential steps you should take immediately after a DWI arrest to protect your rights and improve your chances of a favorable outcome. First, remain calm and cooperative with law enforcement while being mindful of your constitutional rights. Document everything you can remember about the arrest, including the time, location, and circumstances. Contact an experienced DWI attorney as soon as possible - early intervention can make a significant difference in your case. Be aware of important deadlines, including the 10-day window to request a DMV hearing to challenge the administrative suspension of your driver's license. Understanding Virginia's DWI laws and penalties is crucial for making informed decisions about your defense strategy."
    },
    {
      id: 4,
      title: "The Role of Social Media in Litigation",
      excerpt: "This entry discusses how social media is increasingly being used as evidence in legal cases and the importance of understanding its implications during litigation.",
      author: "Courtney B. Harden",
      date: "December 1, 2024",
      category: "Civil Litigation",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      slug: "role-social-media-litigation",
      content: "Social media has fundamentally changed the litigation landscape, creating new opportunities and challenges for legal practitioners. This comprehensive analysis explores how social media content is increasingly being used as evidence in civil and criminal cases. From Facebook posts to Instagram photos, digital communications can significantly impact legal proceedings. Understanding the rules governing social media evidence, including authentication requirements and privacy considerations, is essential for modern legal practice. We examine key cases where social media played a decisive role and provide practical guidance for attorneys and clients on managing social media presence during litigation. The article also covers discovery issues, preservation obligations, and ethical considerations surrounding social media evidence."
    },
    {
      id: 5,
      title: "Understanding Virginia Business Formation Options",
      excerpt: "A comprehensive guide to choosing the right business entity structure in Virginia, covering LLCs, corporations, partnerships, and more.",
      author: "Brian J. Lubkeman",
      date: "November 20, 2024",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      slug: "virginia-business-formation-options",
      content: "Choosing the right business entity structure is one of the most important decisions entrepreneurs make when starting a business in Virginia. This guide examines the various options available, including limited liability companies (LLCs), corporations, partnerships, and sole proprietorships. Each structure offers different advantages in terms of liability protection, tax treatment, and operational flexibility. We analyze the pros and cons of each option and provide guidance on selecting the structure that best fits your business goals and circumstances. The article also covers Virginia-specific requirements for business formation, including registration procedures, ongoing compliance obligations, and tax considerations. Understanding these options early in the planning process can save significant time and money while providing the legal protection your business needs."
    },
    {
      id: 6,
      title: "Estate Planning During Life Transitions",
      excerpt: "How major life events like marriage, divorce, birth of children, or retirement should trigger updates to your estate plan.",
      author: "Amy S. Owen",
      date: "November 10, 2024",
      category: "Estate Planning",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      slug: "estate-planning-life-transitions",
      content: "Life is full of transitions, and each major change should prompt a review and potential update of your estate plan. This article examines how events such as marriage, divorce, the birth of children, career changes, and retirement affect your estate planning needs. We discuss the importance of updating beneficiary designations, revising will provisions, and adjusting trust arrangements to reflect your current circumstances and goals. The article also addresses common mistakes people make when life changes occur, such as failing to update their estate plan after a divorce or neglecting to plan for new family members. Virginia estate planning laws provide specific guidance for many of these situations, and understanding these requirements is crucial for ensuring your wishes are properly documented and legally enforceable."
    }
  ]
};

export const editableContent = {
  hero: {
    title: "Briglia Hundley is an award-winning law firm located in Tysons Corner, Fairfax County, Virginia.",
    subtitle: "Our seasoned attorneys are committed to providing superior service on every matter entrusted to our care.",
    buttonText: "Schedule a Free Consultation",
    buttonPhone: "Call Now"
  },
  about: {
    title: "About Briglia Hundley®",
    content: "At Briglia Hundley®, we deliver superior client service and innovative legal strategies throughout Northern Virginia. Since 1993, our award-winning team has been dedicated to achieving the best possible outcomes for clients in Fairfax County, Arlington County, Prince William County, and the greater Washington DC metropolitan area."
  },
  contact: {
    title: "Get Your Free Legal Guide",
    subtitle: "Learn How It All Works",
    description: "Download our comprehensive legal guide to understand your rights and options."
  }
};