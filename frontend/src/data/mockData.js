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
    serviceRegions: ["Loudoun County", "Fairfax", "Northern Virginia", "Prince William County", "Arlington", "Alexandria", "McLean", "Vienna", "Falls Church", "Herndon", "Reston", "Great Falls", "Oakton", "Burke", "Springfield", "Annandale", "Centreville", "Manassas", "Woodbridge", "Dale City", "Dumfries"],
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
      title: "Criminal Defense",
      description: "Experienced criminal defense representation for all manner of misdemeanor and felony charges in state and federal courts.",
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
      url: "/criminal-defense",
      localKeywords: "criminal defense attorney Fairfax VA, criminal lawyer Northern Virginia, DWI attorney Arlington VA, criminal defense Prince William County",
      attorneys: ["James W. Hundley", "Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-criminal-law-hero-25.jpg"
    },
    {
      title: "Business Litigation",
      description: "Strategic business litigation services for companies and individuals in state and federal courts throughout the region.",
      fullDescription: "Our business litigation team has extensive experience representing businesses and individuals in complex commercial disputes. We handle cases in state and federal courts throughout Virginia, Maryland, and the District of Columbia, providing strategic litigation services designed to protect our clients' interests and achieve favorable outcomes.",
      detailedContent: {
        sections: [
          {
            title: "Contract Disputes",
            content: "We represent clients in breach of contract claims, contract interpretation disputes, and negotiations to resolve commercial contract issues. Our attorneys have experience with purchase and sale agreements, service contracts, employment agreements, and other commercial contracts."
          },
          {
            title: "Business Torts",
            content: "Our team handles cases involving tortious interference with business relationships, theft of trade secrets, unfair competition, and other business tort claims. We work to protect our clients' business interests and seek appropriate remedies for damages."
          },
          {
            title: "Partnership and Shareholder Disputes",
            content: "We assist clients with disputes between business partners, shareholders, and members of limited liability companies. Our attorneys handle cases involving breach of fiduciary duty, oppression of minority shareholders, and dissolution proceedings."
          }
        ]
      },
      services: [
        "Contract Disputes",
        "Business Torts",
        "Partnership Disputes",
        "Shareholder Litigation",
        "Employment Disputes",
        "Intellectual Property Disputes",
        "Construction Litigation",
        "Insurance Coverage Disputes"
      ],
      url: "/business-litigation",
      localKeywords: "business litigation attorney Fairfax VA, commercial litigation lawyer Northern Virginia, contract dispute Arlington VA, business lawsuit Prince William County",
      attorneys: ["Steven D. Briglia", "James W. Hundley", "Madison A. Beatty"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-business-litigation-hero-25.jpg"
    },
    {
      title: "Corporate Law",
      description: "Comprehensive corporate legal services for businesses of all sizes, from startups to established companies throughout Northern Virginia.",
      fullDescription: "Our corporate law practice provides comprehensive legal services to businesses at every stage of development. We assist with entity formation, corporate governance, mergers and acquisitions, financing transactions, and ongoing compliance matters. Our attorneys understand the unique challenges facing businesses in today's competitive environment.",
      detailedContent: {
        sections: [
          {
            title: "Entity Formation and Structure",
            content: "We help entrepreneurs and established businesses choose the right corporate structure for their needs, whether it's a corporation, limited liability company, partnership, or other entity type. We handle all aspects of entity formation, including drafting organizational documents and ensuring compliance with state and federal requirements."
          },
          {
            title: "Mergers and Acquisitions",
            content: "Our M&A team represents buyers and sellers in transactions ranging from small asset purchases to complex corporate mergers. We provide strategic advice throughout the transaction process, from initial due diligence through closing and post-closing integration."
          },
          {
            title: "Corporate Governance",
            content: "We advise boards of directors and corporate officers on governance best practices, fiduciary duties, and compliance with corporate laws and regulations. Our attorneys help ensure that businesses operate in accordance with applicable legal requirements and industry standards."
          }
        ]
      },
      services: [
        "Entity Formation",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Securities Compliance",
        "Commercial Contracts",
        "Employment Law Compliance",
        "Intellectual Property Protection",
        "Business Succession Planning"
      ],
      url: "/corporate-law",
      localKeywords: "corporate lawyer Fairfax VA, business attorney Northern Virginia, corporate law Arlington VA, business formation Prince William County",
      attorneys: ["Steven D. Briglia", "James W. Hundley"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-corporate-law-hero-25.jpg"
    },
    {
      title: "Personal Injury",
      description: "Dedicated personal injury representation for accident victims and their families throughout Northern Virginia.",
      fullDescription: "When you've been injured due to someone else's negligence, you need experienced legal representation to protect your rights and help you obtain the compensation you deserve. Our personal injury attorneys have successfully represented clients in a wide range of cases, from auto accidents to complex product liability claims.",
      detailedContent: {
        sections: [
          {
            title: "Motor Vehicle Accidents",
            content: "We represent victims of car accidents, truck accidents, motorcycle accidents, and pedestrian accidents. Our attorneys investigate the circumstances of your accident, work with accident reconstruction experts, and negotiate with insurance companies to obtain fair compensation for your injuries."
          },
          {
            title: "Premises Liability",
            content: "Property owners have a duty to maintain safe conditions for visitors. We handle slip and fall cases, inadequate security claims, and other premises liability matters where injuries occur due to dangerous conditions on someone else's property."
          },
          {
            title: "Product Liability",
            content: "When defective products cause injuries, manufacturers and distributors can be held liable for damages. We represent clients injured by defective automobiles, medical devices, pharmaceuticals, and other consumer products."
          }
        ]
      },
      services: [
        "Auto Accidents",
        "Truck Accidents",
        "Motorcycle Accidents",
        "Slip and Fall",
        "Medical Malpractice",
        "Product Liability",
        "Wrongful Death",
        "Workers' Compensation"
      ],
      url: "/personal-injury",
      localKeywords: "personal injury lawyer Fairfax VA, car accident attorney Northern Virginia, slip and fall Arlington VA, injury lawyer Prince William County",
      attorneys: ["Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-personal-injury-hero-25.jpg"
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your assets and provide for your family's future throughout Northern Virginia.",
      fullDescription: "Proper estate planning is essential for protecting your family's financial security and ensuring that your wishes are carried out after your death. Our estate planning attorneys provide personalized service to help you create a comprehensive plan that addresses your unique needs and goals.",
      detailedContent: {
        sections: [
          {
            title: "Wills and Trusts",
            content: "We draft wills and establish various types of trusts to help you distribute your assets according to your wishes while minimizing taxes and avoiding probate. Our attorneys explain the benefits and drawbacks of different estate planning tools to help you make informed decisions."
          },
          {
            title: "Business Succession Planning",
            content: "For business owners, proper succession planning is crucial for ensuring the continuity of your business and providing for your family's financial security. We help develop strategies for transferring business ownership while minimizing tax consequences."
          },
          {
            title: "Probate and Estate Administration",
            content: "When a loved one passes away, we guide families through the probate process and help ensure that the estate is administered efficiently and in accordance with the decedent's wishes and applicable law."
          }
        ]
      },
      services: [
        "Wills",
        "Trusts",
        "Powers of Attorney",
        "Advance Directives",
        "Probate",
        "Estate Administration",
        "Tax Planning",
        "Business Succession"
      ],
      url: "/estate-planning",
      localKeywords: "estate planning attorney Fairfax VA, will and trust lawyer Northern Virginia, probate attorney Arlington VA, estate lawyer Prince William County",
      attorneys: ["James W. Hundley"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-estate-planning-hero-25.jpg"
    },
    {
      title: "Real Estate Law",
      description: "Full-service real estate legal representation for residential and commercial transactions throughout Northern Virginia.",
      fullDescription: "Real estate transactions involve significant financial investments and complex legal issues. Our real estate attorneys provide comprehensive legal services for buyers, sellers, developers, and investors in both residential and commercial transactions.",
      detailedContent: {
        sections: [
          {
            title: "Residential Real Estate",
            content: "We represent buyers and sellers in residential real estate transactions, including contract review and negotiation, title examination, closing coordination, and resolution of any issues that arise during the transaction process."
          },
          {
            title: "Commercial Real Estate",
            content: "Our commercial real estate practice includes acquisition and disposition of commercial properties, leasing, development projects, and financing transactions. We work with investors, developers, landlords, and tenants on complex commercial real estate matters."
          },
          {
            title: "Real Estate Litigation",
            content: "When real estate disputes arise, we represent clients in litigation involving breach of contract, boundary disputes, title defects, landlord-tenant issues, and other real estate-related conflicts."
          }
        ]
      },
      services: [
        "Residential Purchases and Sales",
        "Commercial Transactions",
        "Real Estate Development",
        "Leasing",
        "Title Issues",
        "Boundary Disputes",
        "Zoning and Land Use",
        "Real Estate Litigation"
      ],
      url: "/real-estate-law",
      localKeywords: "real estate attorney Fairfax VA, real estate lawyer Northern Virginia, property law Arlington VA, real estate closing Prince William County",
      attorneys: ["Teresa S. Cole", "Amy S. Owen"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-real-estate-hero-25.jpg"
    },
    {
      title: "Employment Law",
      description: "Strategic employment law counsel for employers and employees throughout Northern Virginia.",
      fullDescription: "Employment law affects every workplace relationship. Our employment attorneys provide practical advice and effective representation to help employers comply with applicable laws and protect employees' rights.",
      detailedContent: {
        sections: [
          {
            title: "Employment Compliance",
            content: "We help employers develop policies and procedures that comply with federal and state employment laws, including the Fair Labor Standards Act, Title VII, the Americans with Disabilities Act, and Virginia employment statutes."
          },
          {
            title: "Employment Disputes",
            content: "When workplace disputes arise, we represent both employers and employees in discrimination claims, wrongful termination cases, wage and hour disputes, and other employment-related litigation."
          },
          {
            title: "Executive Employment",
            content: "We draft and negotiate executive employment agreements, severance packages, non-compete agreements, and other executive compensation arrangements."
          }
        ]
      },
      services: [
        "Employment Contracts",
        "Discrimination Claims",
        "Wage and Hour Issues",
        "Workplace Harassment",
        "Wrongful Termination",
        "Non-Compete Agreements",
        "Employee Handbooks",
        "HR Compliance"
      ],
      url: "/employment-law",
      localKeywords: "employment lawyer Fairfax VA, workplace attorney Northern Virginia, discrimination lawyer Arlington VA, employment law Prince William County",
      attorneys: ["Steven D. Briglia", "Brian J. Lubkeman"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-employment-law-hero-25.jpg"
    },
    {
      title: "Municipal Law",
      description: "Comprehensive legal counsel for local governments and municipalities throughout Northern Virginia.",
      fullDescription: "Municipal law requires specialized knowledge of the unique legal issues facing local governments. Our municipal law attorneys provide ongoing legal counsel to cities, towns, and other local government entities on a wide range of matters.",
      detailedContent: {
        sections: [
          {
            title: "Government Operations",
            content: "We provide legal advice on day-to-day government operations, including compliance with the Virginia Freedom of Information Act, personnel matters, procurement, and other administrative issues."
          },
          {
            title: "Land Use and Zoning",
            content: "Our attorneys assist local governments with zoning ordinances, comprehensive plans, development approvals, and land use disputes. We help ensure that local land use decisions comply with applicable state and federal requirements."
          },
          {
            title: "Public Finance",
            content: "We provide legal counsel on municipal finance matters, including bond issuances, public-private partnerships, and other financing mechanisms for public projects."
          }
        ]
      },
      services: [
        "Government Counsel",
        "Zoning and Land Use",
        "Public Finance",
        "FOIA Compliance",
        "Personnel Issues",
        "Procurement",
        "Economic Development",
        "Intergovernmental Agreements"
      ],
      url: "/municipal-law",
      localKeywords: "municipal attorney Fairfax VA, government lawyer Northern Virginia, zoning attorney Arlington VA, municipal law Prince William County",
      attorneys: ["Steven D. Briglia"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-municipal-law-hero-25.jpg"
    },
    {
      title: "Appellate Litigation",
      description: "Experienced appellate representation in state and federal courts throughout Virginia and the Mid-Atlantic region.",
      fullDescription: "Appellate practice requires specialized skills and extensive knowledge of appellate procedures and standards of review. Our appellate attorneys have successfully represented clients in appeals before state and federal appellate courts.",
      detailedContent: {
        sections: [
          {
            title: "State Appeals",
            content: "We handle appeals in the Virginia Court of Appeals and the Virginia Supreme Court, representing clients in civil and criminal appeals across all practice areas."
          },
          {
            title: "Federal Appeals",
            content: "Our attorneys have experience in federal appellate courts, including the U.S. Court of Appeals for the Fourth Circuit and other federal appellate courts throughout the country."
          },
          {
            title: "Appellate Strategy",
            content: "We work closely with trial counsel to identify potential appellate issues during the trial court proceedings and develop effective appellate strategies to achieve the best possible outcomes for our clients."
          }
        ]
      },
      services: [
        "Civil Appeals",
        "Criminal Appeals",
        "Appellate Brief Writing",
        "Oral Arguments",
        "Petition for Certiorari",
        "Appellate Strategy",
        "Post-Conviction Relief",
        "Habeas Corpus"
      ],
      url: "/appellate-litigation",
      localKeywords: "appellate attorney Fairfax VA, appeals lawyer Northern Virginia, appellate litigation Arlington VA, appeals court Prince William County",
      attorneys: ["Steven D. Briglia", "Brian J. Lubkeman"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-appellate-litigation-hero-25.jpg"
    },
    {
      title: "Community Associations",
      description: "Comprehensive legal services for homeowners associations, condominium associations, and property owners associations.",
      fullDescription: "Community associations face unique legal challenges in managing common areas, enforcing covenants, and addressing disputes between associations and homeowners. Our attorneys provide practical legal advice to help associations operate effectively while protecting the interests of all community members.",
      detailedContent: {
        sections: [
          {
            title: "Governance and Compliance",
            content: "We help associations understand their governing documents and ensure compliance with applicable state and federal laws, including the Virginia Property Owners' Association Act and Virginia Condominium Act."
          },
          {
            title: "Covenant Enforcement",
            content: "When homeowners violate community covenants, we help associations enforce their rules through appropriate legal procedures while ensuring due process and fair treatment for all parties."
          },
          {
            title: "Collections and Assessments",
            content: "We assist associations with collecting delinquent assessments and fees, including filing liens, pursuing foreclosure actions, and negotiating payment arrangements with delinquent homeowners."
          }
        ]
      },
      services: [
        "Covenant Enforcement",
        "Collections and Liens",
        "Governance Advice",
        "Document Review",
        "Dispute Resolution",
        "Board Training",
        "Litigation",
        "Regulatory Compliance"
      ],
      url: "/community-associations",
      localKeywords: "HOA attorney Fairfax VA, community association lawyer Northern Virginia, condominium law Arlington VA, homeowners association Prince William County",
      attorneys: ["Mary \"Molly\" Peacock", "Jacob C. DeRue"],
      image: "https://brigliahundley.com/wp-content/uploads/bh-community-associations-hero-25.jpg"
    }
  ],

  attorneys: [
    {
      name: "James W. Hundley",
      position: "Partner",
      experience: "Jim Hundley has over 30 years of experience litigating complex criminal and civil cases. He regularly represents individuals and corporations before state and federal courts in Virginia, Washington, D.C., and Maryland.",
      fullBio: "Jim Hundley has over 30 years of experience litigating complex criminal and civil cases. He regularly represents individuals and corporations before state and federal courts in Virginia, Washington, D.C., and Maryland. He has defended clients involved in a broad range of criminal matters including bank fraud, bid rigging, bribery, embezzlement, tax evasion, and computer fraud. On the civil side, Mr. Hundley has successfully handled cases involving a wide variety of issues including breach of contract, tortious interference with business, theft of trade secrets, personal injury, and violations of civil rights.\n\nMr. Hundley also has extensive appellate experience. In April 2000, he was privileged to appear before the Supreme Court of the United States and argue the case of Dickerson v. United States in which the Court ruled that the well-known Miranda warnings are required by the United States Constitution and cannot be repealed by legislation. Dickerson v. United States, 530 U.S. 428 (2000). He has also appeared numerous times before the United States Court of Appeals for the Fourth Circuit, the Supreme Court of Virginia, and the Court of Appeals of Virginia.\n\nMr. Hundley graduated from the Georgetown Law Center and gained admission to the Virginia State Bar in 1989. During his first year of practice, Mr. Hundley served as law clerk to the Honorable James C. Cacheris in the United States District Court for the Eastern District of Virginia. Upon completing his clerkship, Mr. Hundley joined the Office of the Commonwealth's Attorney for Fairfax County, where he served as an Assistant Commonwealth's Attorney until December 1996. In January 1997, Mr. Hundley co-founded Briglia Hundley®.\n\nMr. Hundley has received the Martindale-Hubbell Law Directory's highest rating of \"AV.\" He is recognized as a top attorney by Super Lawyers in the field of criminal defense and by Best Lawyers in the field of white-collar criminal defense.\n\nMr. Hundley is an active member of the Virginia State Bar. In July of 2022, Mr. Hundley was appointed by the Virginia Supreme Court to serve as an at-large member of the Virginia State Bar Council, the governing body of the State Bar. He was appointed to the Virginia State Bar's Committee on Lawyer Discipline in 2014 and completed the maximum six-years of service in 2020. During his tenure, he served as Chairman of the Committee for one year and Chairman of the Rules Subcommittee for two years. From 2005 to 2011, Mr. Hundley was an elected member of the Virginia State Bar's Disciplinary Sub-Committee for the Fifth District. He also has been active in the Fairfax Bar Association, serving on its judicial screening committee, Circuit Court Committee, General District Court Committee, as Co-chairman of its Legislative Committee, and as Chairman of its Election Committee.\n\nMr. Hundley regularly lectures at Continuing Legal Education courses. He has also appeared as a guest lecturer at the Georgetown Law Center, the George Washington School of Law, the Catholic University School of Law, the Scalia Law School at George Mason University, and the Washington, D.C. Inns of Court.",
      significantRepresentations: "Case results depend upon a variety of factors unique to each case. Results in past cases do not guarantee or predict a similar result in any future case undertaken by the lawyer.\n\nMr. Hundley achieved the reversal of a ten-year prison sentence through a successful federal habeas corpus petition in which the trial court agreed the petitioner had been denied his constitutional right to the effective assistance of counsel. Fenn v. United States, 175 F. Supp. 602 (E.D.Va. 2016).\n\nMr. Hundley defended a government official in a § 1983 action alleging a violation of an individual's 1st Amendment rights. The plaintiff claimed his rights were violated when he was blocked from posting on the official's Facebook page. The trial court dismissed the case after concluding that the government's actions were within its lawful capacity to regulate a limited public forum, that qualified immunity shielded the official from individual liability, and that 11th Amendment immunity shielded the official in his governmental capacity. Davison v. Plowman, 247 F. Supp. 767 (E.D.Va. 2017).\n\nIn 2023, Mr. Hundley defended a young man charged with participating in the January 6, 2021, riots at the U.S. Capitol. The defendant was acquitted on the felony charge of obstructing Congress and sentenced to probation on misdemeanor convictions entered for disorderly conduct and unlawfully protesting in the Capitol. United Staes v. Homol, Case No. 1:23-cr-0050 (D.D.C. 2023).\n\nFor over twenty years, Mr. Hundley served as general counsel and a member of the Board of Directors of a veteran-owned defense contracting company that grew to over 150 employees. Mr. Hundley successfully represented the company in bid protests before the U.S. Government Accountability Office and in employment disputes before the Equal Employment Opportunity Commission. In 2019, Mr. Hundley helped negotiate and close the multi-million-dollar purchase of the company.\n\nMr. Hundley obtained the dismissal of criminal charges and a related civil suit seeking $1.2 billion in damages brought against an individual by his former employer alleging computer theft, conspiracy to injure business, tortious interference with business, and breach of contract. The criminal charges were dismissed after the Commonwealth's Attorney concluded the case was statutorily barred under Virginia Code § 18.2-501. The civil suit was dismissed after the trial court refused to admit the plaintiff's evidence on damages.\n\nMr. Hundley defended an individual arrested in Morocco on federal charges stemming from his online support of terrorist acts committed in the name of Islamic jihad. Mr. Hundley negotiated a plea agreement and then coordinated his client's extensive cooperation with law enforcement agencies throughout the world. This cooperation led to the arrest of several supporters of terrorism. As a result of his exceptional cooperation, Mr. Hundley's client received a substantial reduction of his sentence.\n\nAfter a two-week jury trial in Fairfax County Circuit Court, Mr. Hundley attained a verdict of not guilty for an individual charged with murder and gang participation resulting in murder.\n\nMr. Hundley represented a high-ranking executive in a large, international insurance company that was being investigated by the New York County District Attorney's Office on allegations of bid-rigging and price fixing. Although numerous other individuals were successfully prosecuted, the District Attorney's Office decided not to bring any charges against Mr. Hundley's client.\n\nMr. Hundley represented an individual who was part of a widespread investigation being conducted by the U.S. Attorney's Office and the Securities and Exchange Commission into the fraudulent sale of stocks through an international \"pump and dump\" operation. While numerous individuals were criminally prosecuted for their roles in this conspiracy, Mr. Hundley resolved his client's case through a civil agreement with the SEC that required the payment of a minimal fine.\n\nMr. Hundley represented a medical practice under federal investigation for illegally importing medical devices. The U.S. Attorney's Office agreed not to bring any criminal charges against the medical practice or its doctors, choosing instead to resolve the case with a civil fine.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-jim-hundley-u800ds.jpg",
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
      ],
      publicationsAndSpeaking: [
        "Lecturer, Continuing Legal Education Courses",
        "Guest Lecturer, Georgetown Law Center",
        "Guest Lecturer, George Washington University Law School",
        "Guest Lecturer, Catholic University School of Law",
        "Guest Lecturer, Washington, D.C. Inns of Court"
      ],
      pastEmployment: [
        "Assistant Commonwealth's Attorney, Commonwealth's Attorney for Fairfax County, Virginia",
        "Law Clerk, United States District Court for the Eastern District of Virginia"
      ],
      blogPosts: [
        {
          title: "Briglia Hundley, P.C.® — As seen in Fortune & Forbes!",
          date: "8/23/2022",
          url: "https://brigliahundley.com/blog/briglia-hundley-fortune-forbes"
        },
        {
          title: "Bid Rigging",
          date: "5/5/2022",
          url: "https://brigliahundley.com/blog/bid-rigging",
          coAuthor: "Jacob DeRue"
        },
        {
          title: "The Different Business Entities – Which is Best for Your Business",
          date: "11/27/2023",
          url: "https://brigliahundley.com/blog/business-entities-guide"
        },
        {
          title: "The Slippery Roads Defense in Virginia",
          date: "2/4/2023",
          url: "https://brigliahundley.com/blog/slippery-roads-defense-virginia"
        },
        {
          title: "Tortious Interference With Business",
          date: "11/30/2022",
          url: "https://brigliahundley.com/blog/tortious-interference-business"
        }
      ]
    },
    {
      name: "Steven D. Briglia",
      position: "Partner",
      experience: "Steve Briglia has over 30 years of extensive trial experience in both civil and criminal law matters. He has tried hundreds of cases before judges and juries in both state and federal court.",
      fullBio: "Steve Briglia has over 30 years of extensive trial experience in both civil and criminal law matters. He has tried hundreds of cases before judges and juries in both state and federal court. He also regularly represents clients in administrative hearings, arbitrations, and mediations, and he serves as outside general counsel to numerous corporate clients. Mr. Briglia's clients include national and regional businesses, municipalities, elected officials, and individuals involved in business disputes and criminal investigations.\n\nMr. Briglia is a founding member of Briglia Hundley®.\n\nMr. Briglia has served on numerous boards and commissions in the community. He served as a Council Member and Mayor for the Town of Vienna. He is currently the Town Attorney for the Town of Vienna. In that capacity, he advises the Mayor and the Town Counsel, and he represents the Town of Vienna in all legal matters.\n\nMr. Briglia's extensive and varied legal background allows him to aggressively address his client's legal issues with great knowledge, depth, and perspective. He has argued cases in Circuit Courts throughout Virginia, in the United States District Court for the Eastern District of Virginia, before the Virginia Court of Appeals, and before the Virginia Supreme Court.\n\nMr. Briglia is an active member of the Fairfax Bar Association and currently serves on its Board of Directors. He is also a trustee for the Vienna Baseball Foundation and has coached youth sports for many years.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-steve-briglia-u800ds.jpg",
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
      practiceAreas: [
        "Civil Litigation",
        "Municipal Law",
        "Corporate Law/General Counsel Representation",
        "Administrative Hearings",
        "Arbitration/Mediation",
        "Criminal Investigations and Defense"
      ],
      certifications: [
        "Rated AV Preeminent by Martindale-Hubbell 1998 to present",
        "Listed in Best Lawyers 2013 to present",
        "Listed in Top Lawyers of Virginia, Northern Virginia Magazine",
        "Received the Fairfax Bar Association President's Award 2015"
      ],
      pastEmployment: [
        "Assistant Commonwealth's Attorney, Office of the Commonwealth's Attorney for Fairfax County, Virginia",
        "Law Clerk, United States District Court for the Eastern District of Virginia"
      ],
      professionalAssociations: [
        "President, Fairfax Bar Association, July 1, 2025 to June 30, 2026",
        "Director, Fairfax Bar Association Board of Directors, 2019 to present",
        "Member, Fairfax Bar Association",
        "Member, Virginia Bar Association",
        "Trustee and President, Vienna Baseball Foundation"
      ]
    },
    {
      name: "Brian J. Lubkeman",
      position: "Partner",
      experience: "Brian Lubkeman has practiced law for over 30 years, with a diverse focus encompassing the areas of commercial real estate, corporate matters, and Virginia local and state government law.",
      fullBio: "Brian Lubkeman has practiced law for over 30 years, with a diverse focus encompassing the areas of commercial real estate, corporate matters, and Virginia local and state government law. In his career, he has worked both in-house in municipal government and for small and large law firms.\n\nMr. Lubkeman advises clients on complex real estate transactions (both developed and raw-land transactions, from acquisition through disposition); real estate development matters; commercial lending transactions (for borrowers and lenders); and commercial leasing – both landlord and tenant representations – for public and private companies, across all property types, including retail, commercial, industrial and specialty leasing. He also has assisted clients with the establishment and governance of property owner associations, with an emphasis on residential and commercial condominium projects, large residential developments, sophisticated mixed-use properties, and community development associations.\n\nHe also advises on corporate governance and structure, including entity selection, implementation of policies and procedures, and corporate best practices. Further, he represents clients in business acquisitions as well as mergers of small to mid-sized businesses of all types.\n\nMr. Lubkeman also has significant experience in local government and municipal law. Since 2005, he has served as the appointed City Attorney for the City of Fairfax, Virginia. In this position, he oversees the legal representation of all areas of City government, including legal advice and counsel to the city council, city manager, and department heads, community development and planning projects, zoning matters, public works and utility concerns, procurement issues, franchise matters, and personnel and public safety department issues, among other responsibilities. He also draws upon his corporate and real estate knowledge to provide cogent, efficient and effective legal and business advice and counsel on economic development opportunities, community development and planning projects, local government property portfolio management, tax assessment appeals and other transactional and litigation matters. He also supervises the prosecution of misdemeanor and traffic offenses within the City of Fairfax.\n\nMr. Lubkeman previously served as interim City Attorney for the City of Falls Church and as City Attorney for the City of Manassas Park, and, prior to entering private practice, he was with the Fairfax County Attorney's office where, among other duties, he served as counsel to the Fairfax County Redevelopment and Housing Authority. Finally, he works with other attorneys and legal professionals at the firm to provide outside counsel services on a variety of matters, both transactional and litigation cases, to other municipalities and authorities within the Commonwealth.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-brian-lubkeman-u800ds.jpg",
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
      practiceAreas: [
        "Residential and Commercial Real Estate",
        "Corporate Governance and Structure",
        "Local Government and Municipal Law"
      ],
      certifications: [
        "Named Best Lawyers® 2017, 2020 and 2024 Municipal Law \"Lawyer of the Year\" for Washington D.C. metropolitan area",
        "Listed in Best Lawyers®: Municipal, Real Estate, and Condemnation and Eminent Domain Law 2016 – 2024",
        "Listed in Northern Virginia Magazine Top Lawyers Listing, Real Estate Law, 2017-2020",
        "Legal Elite, Virginia Business, 2010"
      ],
      professionalAssociations: [
        "Member; Vice Chair, Board of Governors, Virginia State Bar Local Government Section, 2018-Present",
        "Member, Fairfax Bar Association",
        "Member; Chair of Law School Liaison Committee, Local Government Attorneys of Virginia, 1992-Present",
        "Member; Chair, 2007-2010, Real Property Section, Fairfax Bar Association",
        "Member; President, 2011-2012; Paul Harris Fellow, Rotary Club of Fairfax",
        "Board of Directors, 2011-2015, Fairfax Symphony Orchestra"
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
      experience: "Courtney Harden has almost 20 years of litigation experience in the Commonwealth of Virginia. She has litigated diverse and varied topics throughout her career including eminent domain, breach of contract, medical malpractice, construction defect, and personal injury.",
      fullBio: "Courtney Harden has almost 20 years of litigation experience in the Commonwealth of Virginia. She has litigated diverse and varied topics throughout her career including eminent domain, breach of contract, medical malpractice, construction defect, and personal injury. Ms. Harden has most recently focused her practice on real estate disputes including partition of land, establishment of prescriptive easements, community association covenant enforcement /defense of enforcement, and zoning disputes.\n\nOver half of Ms. Harden's law practice is focused on eminent domain law. Ms. Harden primarily represents condemning authorities, but she also represents landowners in both condemnation and inverse condemnation proceedings.\n\nMs. Harden has worked on cutting edge eminent domain cases following amendment of Article I, Section 11 of the Virginia Constitution on January 1, 2013. The constitutional amendment represents a groundbreaking evolution in eminent domain law which allow landowner claims for lost profits and lost profits as part of the claim for just compensation.\n\nHer years of experience litigating land use issues has provided Ms. Harden with superior knowledge regarding the use of appraisers as experts, appraisal practice generally, and land valuation issues. Ms. Harden's extensive litigation experience outside of eminent domain gives her additional relevant knowledge to provide her clients with a full and complete skill set for the analysis, valuation, risk assessment, and trial approach for each land litigation case they confront.\n\nMs. Harden also has experience with administrative proceedings in the Commonwealth, including appearances before the Virginia Worker's Compensation Commissioner, Virginia Employment Commission, and the Virginia State Corporation Commission (\"SCC\").",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-courtney-harden-u800ds.jpg",
      phone: "703.883.0207",
      email: "charden@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "George Mason University School of Law",
          year: 2002
        },
        {
          degree: "Bachelor of Arts, Foreign Affairs",
          institution: "University of Virginia",
          year: 1996
        }
      ],
      admissions: [
        "Virginia, 2003",
        "United States District Court for the Eastern District of Virginia, 2006",
        "District of Columbia Bar, Admitted Pro Hac Vice, two different litigation matters in 2004",
        "Maryland, Admitted Pro Hac Vice, 2004 and 2006"
      ],
      professionalAssociations: [
        "Member: Virginia State Bar Association",
        "Member: Virginia Bar Association",
        "Member: Fairfax Bar Association"
      ],
      speakingEngagements: [
        "2023 Virginia Eminent Domain Conference: \"Breaking Down Va. Code Section 25.1-230 – When and How Can I Consider the Project in Valuation?\"",
        "2022 Virginia Eminent Domain Conference: \"Making an Owner Whole, Interest, Reimbursement and other Remediatory Measures.\"",
        "2021 Virginia Eminent Domain Conference: \"Ethics: Communication with Represented and Unrepresented Persons.\"",
        "2018 Eminent Domain Conference, \"Who Bears the Burden? Examining the New Alternative Uniform Pretrial Scheduling Order\"",
        "2017 Eminent Domain Conference, \"The Appraisal Process: The Consequences of Getting the Assignment Correct\"",
        "2008 National Business Institute, \"Road and Access Law: Successfully Handling Disputes\""
      ],
      pastEmployment: [
        "Founder, Courtney B. Harden, PLLC",
        "Counsel, Rees Broome, PC"
      ]
    },
    {
      name: "Amy S. Owen",
      position: "Partner",
      experience: "Amy Owen joined Briglia Hundley® after founding a successful, woman-owned law firm that specialized in commercial litigation, employment law, and estate planning throughout the Mid-Atlantic region.",
      fullBio: "Amy Owen joined Briglia Hundley® after founding a successful, woman-owned law firm that specialized in commercial litigation, employment law, and estate planning throughout the Mid-Atlantic region. After graduating cum laude from Wake Forest University in 1983, Ms. Owen attended law school at the University of Florida, College of Law, where she graduated with honors in 1986 and was a member of the Order of the Coif. She is admitted to practice in the state and federal courts in the Commonwealth of Virginia, Maryland, and the District of Columbia. Ms. Owen is an experienced commercial litigator. For many years, she handled complex cases involving financial institutions, fidelity issues, insurance coverage, employment matters, real estate, commercial disputes, and business torts. Today, her practice is focused primarily on employment counseling and investigations for executives and management.\n\nMs. Owen has a long history of volunteering her legal skills to support the community. She served as a Commissioner for the Fairfax Human Rights Commission from 2009-2015. She was also appointed by the Fairfax County Board of Supervisors as a representative on the Community Action Advisory Board. She is an active member of the Fairfax Bar Association where she has participated for decades in the Pro Bono Employment program in collaboration with Legal Service of Northern Virginia. She was a founding board member of the Washington Women's Leadership Institute and served on the board for Leadership Fairfax. She served on the board for Second Story and continues to provide legal support to this local organization whose mission is to help at-risk youth.\n\nShe is a member of the Virginia, Maryland, and District of Columbia Bar Associations, the District of Columbia Women's Bar Association, the Northern Virginia Women Attorneys Association, the Northern Virginia Chapter of the Federal Bar Association, and the American Bar Association TIPS/FSLC. Ms. Owen has received numerous awards for her excellence in the legal field, including being named a Legal Elite by Virginia Business magazine, being recognized by Super Lawyers, and receiving the Henry Carrico Pro Bono Award in 2012 for her outstanding commitment to community service.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-amy-owen-u800ds.jpg",
      phone: "703.883.0208",
      email: "aowen@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor, Order of the Coif",
          institution: "University of Florida",
          year: 1986
        },
        {
          degree: "Bachelor of Arts cum laude",
          institution: "Wake Forest University",
          year: 1983
        }
      ],
      admissions: [
        "Virginia",
        "Maryland",
        "District of Columbia (Inactive)",
        "United States District Court for the Eastern District of Virginia",
        "United States District Court for the Western District of Virginia",
        "United States Bankruptcy Court for the Eastern District of Virginia",
        "United States Bankruptcy Court for the Western District of Virginia",
        "United States District Court for the District of Columbia",
        "United States Bankruptcy Court for the District of Columbia",
        "United States District Court for the District of Maryland",
        "United States Bankruptcy Court for the District of Maryland",
        "United States Court of Appeals for the Fourth Circuit"
      ],
      practiceAreas: [
        "Executive Contracts",
        "Employment Law",
        "Commercial and Business Litigation",
        "Business Planning"
      ],
      professionalAssociations: [
        "Member, Fairfax Bar Association",
        "Member, Virginia State Bar",
        "Member, Maryland State Bar Association",
        "Member, District of Columbia Bar Association",
        "Member, District of Columbia Women's Bar Association",
        "Member, Northern Virginia Women Attorneys Association",
        "Member, American Bar Association"
      ],
      certifications: [
        "Best Lawyers, Commercial Litigation, Washington D.C.",
        "Women in The Law Top Peer-Nominated Lawyers",
        "Listed in Best Lawyers 2013 to Present",
        "Listed in Super Lawyers 2012 to Present",
        "Top Attorneys in Washington, D.C.",
        "Legal Elite, Virginia Business",
        "Henry Carrico Pro Bono Award, 2012"
      ],
      pastEmployment: [
        "Principal, Cochran & Owen, LLC",
        "Principal, Associate, Miles & Stockbridge, P.C.",
        "Principal, Richards McGettigan Reilly & West, P.C."
      ]
    },
    {
      name: "Teresa S. Cole",
      position: "Partner",
      experience: "Since 1993, Teresa Cole has been a practicing family law attorney handling complex divorce cases, custody determinations, and all other domestic law matters.",
      fullBio: "Since 1993, Teresa Cole has been a practicing family law attorney handling complex divorce cases, custody determinations, and all other domestic law matters. Based on her experience and proven track record, she has been appointed as a Neutral Case Evaluator for Fairfax County, Virginia. In this role, she provides case evaluations and non-binding arbitration services for other divorce attorneys. In addition, Ms. Cole was appointed to the Divorce and Family Law Attorney Resource Panel as an adviser on family law issues to Virginia legislators.\n\nIn addition to litigating family law matters in Virginia's courts, Ms. Cole has developed a robust practice employing the alternative dispute resolution methods of Collaborative Divorce and Mediation. Ms. Cole is a Past-Chair of the statewide Collaborative Divorce Association, the Virginia Collaborative Professionals (VaCP), and the committee responsible for passage of Virginia's Uniform Collaborative Law Act.\n\nMs. Cole is an Alexandria, Virginia native, having graduated from the Thomas Jefferson High School for Science and Technology and the University of Virginia. She received her law degree from UC Hastings College of the Law in San Francisco. Ms. Cole is married to a veteran of the Gulf War and often handles divorce cases involving government or military personnel on overseas assignments. She has mastered navigation of the applicable federal regulations and has a keen understanding of the complicated jurisdictional issues which apply in such cases.\n\nIn addition, one of Ms. Cole's children has an Individualized Education Plan (IEP), so she has first-hand experience with the programs and issues involving special needs children that can play a significant role in custody determinations.\n\nMs. Cole has been named by her peers to Super Lawyers' list of top Family Law attorneys, and she maintains the highest available 10.0 rating on Avvo.com.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-teresa-cole-800L-400x300.jpg",
      phone: "703.883.0209",
      email: "tcole@brigliahundley.com",
      blogPosts: [
        {
          title: "Uncovering Hidden Cash and Assets in Divorce: An Attorney's Perspective",
          date: "3/4/2025",
          url: "https://brigliahundley.com/blog/uncovering-hidden-cash-assets-divorce"
        }
      ]
    },
    {
      name: "Mary \"Molly\" Peacock",
      position: "Partner",
      experience: "Molly Peacock has nearly 20 years of experience serving as legal counsel for community associations and corporations in Washington, D.C. and Northern Virginia.",
      fullBio: "Molly Peacock has nearly 20 years of experience serving as legal counsel for community associations and corporations in Washington, D.C. and Northern Virginia. She focuses on providing timely and effective solutions to legal problems facing her clients.\n\nMs. Peacock is a leading expert in her field and was asked to be a member of task force to draft new legislation governing homeowners associations in Washington, D.C. Her years of experience and knowledge and commitment to superior service will help craft the first ever legislation of its kind in our Nation's Capital. This is one of many examples of Ms. Peacock's commitment to serving her community.\n\nMs. Peacock is a graduate of The College of William and Mary, receiving her J.D. from the University of Richmond School of Law.",
      significantRepresentations: "Successfully resolving an adversarial and damaging covenants violation dispute that had been existing for years prior to Molly's arrival as counsel for this community association; the Fairfax Circuit Court awarded judgment for the association for money damages, injunctive relief and all attorney's fees;\n\nThis judgment was not complied with by the defendant, and so Molly then led the association through post-judgment legal action, the outcome of which led to remediation of all of the covenants violations at issue, a foreclosure of the property, and a full reimbursement of legal fees and money damages to the association from the foreclosure sale.\n\nWorking with a client to accomplish a whole-sale change of all violations letters (approximately 500 letters sent per month generally addressing approximately seven categories of violations); this association comprises approximately 850 acres so that the letters invite compliance in a manner that puts the homeowner and the association on the same team. The tone of the letters went from punitive to collaborative which benefited increased voluntary compliance by homeowners, and decreased enforcement costs for the association.\n\nPrevailing in Loudoun Circuit Court on three of three counts against defendants who damaged Molly's client's property.\n\nDrafting and enacting new, fully restated Bylaws for several condominiums and property owners associations in Virginia and Washington, DC.\n\nAssisting associations resolve potential hostile environment claims achieving full compliance with Federal law, fairness to the membership, and swiftness in reaching resolution.\n\nAssisting associations transition from declarant to association control in a fair, economical, and effective manner.\n\nProsecuting and defending litigation of any type involving the community association, including disputes with the local government, the declarant, adverse homeowners, other parties, and debtors.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-mary-molly-peacock-u800ds.jpg",
      phone: "703.883.0210",
      email: "mpeacock@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctorate",
          institution: "University of Richmond School of Law"
        },
        {
          degree: "Bachelor of Arts",
          institution: "William and Mary"
        }
      ],
      admissions: [
        "Virginia (2002)",
        "Washington D.C. (2008)"
      ],
      practiceAreas: [
        "Community Associations",
        "Representation of corporations and other business entities",
        "Dispute resolution",
        "Litigation",
        "Collections"
      ],
      professionalAssociations: [
        "Virginia State Bar, Member",
        "Washington D.C. Bar, Member",
        "Co-Chair, District of Columbia Legislative Action Committee of WMCCAI, 2025 – 2027",
        "District of Columbia Legislative Action Committee of WMCCAI, Member 2015-present",
        "Co-Chair, the Law Practice Management Section of the Fairfax Bar Association, 2017-2021"
      ],
      certifications: [
        "2024, District of Columbia Public Advocate of the Year awarded by the Washington Metropolitan Chapter of the Community Association Institute",
        "Peer nominated and selected as a Virginia Super Lawyer in 2018 and 2019, and 2025 in the area of Real Estate",
        "Recipient in 2014 of the Community Service Award from the Greater McLean Chamber of Commerce for work done for the greater McLean community"
      ],
      speakingEngagements: [
        "Speaker at the CAI Annual Conference May 2025 in Orlando, Florida about overcoming hostile communications and preventing fair housing discrimination claims",
        "Speaker at the CAI Law Seminar January 2025 in San Antonio, Texas about the role of the community association lawyer",
        "Speaker at the CAI Annual Conference May 2024 in Las Vegas, Nevada about the hard insurance market for condominiums, and how to overcome its challenges",
        "Speaker at the WMCCAI Conference and Expo March 2024 in Washington, DC about Legislative Updates in DC Law pertaining to community associations, specifically updates around energy conservation laws",
        "Speaker at the WMCCAI Conference and Expo in February 2023 Washington, DC about Legislative Updates in DC Law pertaining to community associations",
        "Speaker at the Virginia Law Conference July 2022 in Hot Springs, Virginia about \"Toxic Neighbors, What is the Association's Role when Hostility Strikes?\"",
        "Speaker at WMCCAI Conference & Exposition June 2021 in Washington, DC about Federal Fair Housing Accommodation Act and Social Media Liability, Part 2",
        "Speaker at Continuing Legal Education with the Fairfax Bar Association, April 2021, about Combating Toxicity in the Practice of Law",
        "Speaker at the WMCCAI Conference & Exposition March 2020 in Washington, DC about the nexus between Federal law, insurance, Social Media Liability, Part 1",
        "Speaker at the Annual Law and Technology CLE, Fairfax County, Virginia (2015, 2016, 2017, 2019, 2020, 2021)",
        "Speaker at the CAI Annual Conference May 2019 in Orlando, Florida about How To Keep Your Legal Fees Down, Property Values Up",
        "Speaker at the WMCCAI Conference & Exposition February 2019 in Washington, DC about Security and Technology in community associations",
        "Speaker at the 2014 National Conference of the Community Associations Institute about Xeriscaping in Community Associations",
        "Keynote Speaker at the University of Richmond Law Technology Seminar in 2014",
        "Speaker at Condominium Essentials Class in collaboration with WMCCAI and the Alexandria and Arlington Housing Divisions, April 2013"
      ],
      pastEmployment: [
        "Rees Broome, Counsel, 2015-2025",
        "Peacock Law Firm; Founder and lead attorney, 2011-2015",
        "Chadwick Washington, Associate Attorney, 2006 – 2011",
        "Law clerk, Alexandria Circuit Court, 2002 – 2004"
      ],
      publications: [
        "Author of article about \"Protecting Our Resources,\" Quorum Magazine, October 2024",
        "Author of article about security as community associations, Quorum Magazine June 2022",
        "Author of Article \"How To Use Your Association's Lawyer Wisely,\" Quorum Magazine, January 2020",
        "Author of \"Parking Space Assignments and Reassignments in D.C., Maryland, and Virginia,\" Quorum Magazine, October 2017",
        "Author of a Chapter about Community Associations and Success in Best-Selling Book: Stand Apart, Edited by Dan Kennedy, 2013",
        "Author of \"Brambleton Community Association v. Than: Are Bankruptcy Filers Receiving Bad Advice to Vacate Their Homes?\", published in The Fee Simple, a publication of the Virginia State Bar, May 2010; Molly Peacock litigated the Than case, lost, appealed to Circuit Court for a trial de novo, prevailed on the merits and won 100% of requested attorney's fees."
      ]
    },
    {
      name: "Michael C. May",
      position: "Partner",
      experience: "Michael C. May is a litigator who has represented clients in courts throughout the Commonwealth of Virginia in civil and criminal matters. He has experience in all manner of litigation, having represented both businesses and individuals as plaintiffs and defendants.",
      fullBio: "Michael C. May is a litigator who has represented clients in courts throughout the Commonwealth of Virginia in civil and criminal matters. He has experience in all manner of litigation, having represented both businesses and individuals as plaintiffs and defendants.\n\nMr. May is equally comfortable in the practice of business litigation, employment law, domestic relations/family law, and criminal law. He is licensed to practice in all courts in the Commonwealth of Virginia and is also admitted to practice before the United States District Court for the Eastern District of Virginia. Mr. May is fluent in Spanish and has assisted the Firm in numerous litigation matters where such fluency has been required.\n\nNot only is Mr. May a courtroom litigator, but he also handles numerous transactional matters, including advising businesses on corporate and employment best practices as well as government contracts and procurement issues. He has represented companies in bid protests adverse to the government and in negotiating employment contracts, leases, intellectual property matters, and purchase and sale agreements.\n\nIn addition to his work as an attorney, Mr. May spent nine years (2007-2016) serving his home community as an elected member of the Board of County Supervisors in Prince William County, Virginia. In both 2010 and 2014, he was selected by his fellow supervisors as Vice Chairman of the county-wide board. While on the Board of County Supervisors, Mr. May helped oversee the budget for Virginia's second largest county of almost 450,000 residents.\n\nMr. May has dedicated countless hours to public service as a member of the Lake Ridge Lions Club, Knights of Columbus, Prince William Regional Chamber of Commerce, and appointed representative to his county's Social Services Board. He served on the Prince William Boys and Girls Club Board of Directors (Vice-Chairman, Program and Ex-Officio Director) and as At-Large Planning Commissioner in Prince William County, advising the Board of Supervisors on land use planning and zoning law. He also spent seven years as Chairman of the Potomac Rappahannock Transportation Commission.\n\nDuring his tenure in public service, Mr. May has been regarded as a tireless advocate for his constituents, and he brings this same passion to representing his clients, no matter how big or small their case.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-michael-may-u800ds.jpg",
      phone: "703.883.0211",
      email: "mmay@brigliahundley.com",
      education: [
        {
          degree: "JD",
          institution: "George Mason University Law School"
        },
        {
          degree: "BA (Government and Spanish)",
          institution: "College of William and Mary"
        }
      ],
      admissions: [
        "Virginia",
        "United States District Court for the Eastern District of Virginia"
      ],
      practiceAreas: [
        "Criminal Law",
        "Family Law", 
        "Civil Litigation",
        "Employment Law"
      ],
      professionalAssociations: [
        "Fairfax Bar Association",
        "Prince William Bar Association"
      ],
      certifications: [
        "Virginia Business Magazine's Legal Elite (2012 to present)",
        "Northern Virginia Magazine's Top Lawyers (2021)",
        "Washingtonian Magazine's Top Lawyers (2024)",
        "Former Member of Prince William Board of County Supervisors, Occoquan District (2006 to 2016)"
      ]
    },
    {
      name: "Kaley Duncan Ward",
      position: "Associate",
      experience: "Kaley Duncan Ward is a senior associate attorney practicing in the areas of eminent domain, civil litigation, and estate planning. Ward primarily represents condemning authorities throughout the Northern Virginia area and is well-versed in Virginia eminent domain law and property valuation issues.",
      fullBio: "Kaley Duncan Ward is a senior associate attorney practicing in the areas of eminent domain, civil litigation, and estate planning. Ward primarily represents condemning authorities throughout the Northern Virginia area and is well-versed in Virginia eminent domain law and property valuation issues.\n\nSince starting practice in 2018, Ms. Ward has assisted numerous clients through the estate planning process. She has also represented clients in multiple areas of civil litigation including contract disputes, personal injury, and domestic relations.\n\nMs. Ward received her undergraduate degree from Virginia Tech where she double majored in Psychology and Public Relations. She went on to earn her law degree from the University of Richmond School of Law, where she served as Managing Editor of the Richmond Journal of Law and Technology, Vice President of Richmond Women's Law, and member of the Trial Advocacy Board. After law school, Ms. Ward served as law clerk to the Honorable Grace Burke Carroll of the Fairfax County Circuit Court.\n\nMs. Ward is an active member of the Fairfax Bar Association (FBA) and currently serves as President of the Board of Directors of the FBA Young Lawyers Section.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-kaley-duncan-ward-u800ds.jpg",
      phone: "703.883.0212",
      email: "kward@brigliahundley.com",
      education: [
        {
          degree: "Cum Laude",
          institution: "University of Richmond School of Law",
          year: 2018
        },
        {
          degree: "Cum Laude",
          institution: "Virginia Tech",
          year: 2015
        }
      ],
      admissions: [
        "Virginia, 2018"
      ],
      practiceAreas: [
        "Eminent Domain",
        "Civil Litigation",
        "Estate Planning"
      ],
      professionalAssociations: [
        "Virginia Bar Association",
        "Fairfax Bar Association – Young Lawyers President",
        "Fairfax Bar Association – Young Lawyers Section Board Member",
        "Virginia Trial Lawyers Association",
        "Northern Virginia Women Attorneys Association"
      ],
      pastEmployment: [
        "Associate Attorney, Surovell Isaacs & Levy PLC",
        "Law Clerk, Fairfax County Circuit Court"
      ]
    },
    {
      name: "Madison A. Beatty",
      position: "Associate",
      experience: "Madison Beatty is an associate attorney supporting the firm's criminal defense and civil litigation practices. She is also a Deputy Town Attorney for the Town of Vienna, Virginia, a role which includes prosecuting criminal and traffic charges on behalf of the Town.",
      fullBio: "Madison Beatty is an associate attorney supporting the firm's criminal defense and civil litigation practices. She is also a Deputy Town Attorney for the Town of Vienna, Virginia, a role which includes prosecuting criminal and traffic charges on behalf of the Town. Prior to becoming an attorney, Ms. Beatty was a paralegal for four years, providing legal support on matters that involved contract disputes, civil litigation, and trusts and estates.\n\nMs. Beatty received her undergraduate degree in Legal Studies, summa cum laude, from the University of Central Florida and her law degree from William & Mary Law School. While in law school, she was a member of the Law Journal of Race, Gender, and Social Justice, she served as Vice President of the Virginia Bar Law School Council, and she was a Board Member of the Public Service Fund. Ms. Beatty was also a teaching assistant for William & Mary's Elder & Disability Law Clinic where she worked on a variety of cases, including guardianship and adoption matters.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-madison-beatty-u800ds.jpg",
      phone: "703.883.0213",
      email: "mbeatty@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "William & Mary School of Law",
          year: 2022
        },
        {
          degree: "Bachelor of Science",
          institution: "University of Central Florida",
          year: 2018
        }
      ],
      admissions: [
        "Virginia, 2022",
        "Eastern District of Virginia, 2023"
      ],
      practiceAreas: [
        "Criminal",
        "Corporate and Business Litigation",
        "Civil Litigation",
        "Personal Injury"
      ],
      professionalAssociations: [
        "Virginia Bar Association",
        "Fairfax Bar Association – Young Lawyers Section",
        "Northern Virginia Women Attorneys Association – Board Member"
      ],
      blogPosts: [
        {
          title: "Should You See a Doctor After a Car Accident?",
          date: "3/3/2025",
          url: "https://brigliahundley.com/blog/see-doctor-after-car-accident"
        },
        {
          title: "A Guide to Fighting a DWI in Virginia",
          date: "12/29/2024",
          url: "https://brigliahundley.com/blog/fighting-dwi-virginia-guide"
        }
      ]
    },
    {
      name: "Raymond Starks-Taylor",
      position: "Associate",
      experience: "Raymond Starks-Taylor is an associate attorney supporting the firm's business litigation, corporate law, and municipal and governmental practice groups. He is also a Deputy Town Attorney for the Town of Herndon, Virginia, a role which includes prosecuting criminal and traffic charges on behalf of the Town.",
      fullBio: "Raymond Starks-Taylor is an associate attorney supporting the firm's business litigation, corporate law, and municipal and governmental practice groups. He is also a Deputy Town Attorney for the Town of Herndon, Virginia, a role which includes prosecuting criminal and traffic charges on behalf of the Town.\n\nMr. Starks-Taylor has practiced law since 2019 and has extensive legal experience. Prior to joining Briglia Hundley®, he was an Assistant Commonwealth's Attorney in Fairfax County where he prosecuted numerous criminal cases and gained invaluable courtroom experience, including trying several jury trials. Before joining the Commonwealth's Attorney's Office, Mr. Starks-Taylor was an attorney adviser for the U.S. Small Business Administration where he managed COVID-19 Economic Injury Disaster Loans and other programs designed to help small businesses overcome disasters. Mr. Starks-Taylor began his legal career as an associate attorney at a law firm in Iowa where he advised small business owners, litigated civil matters, and defended clients facing criminal charges.\n\nMr. Starks-Taylor received his undergraduate degree from Drake University in 2016. He then graduated from Drake University Law School in 2019. While at Drake University Law School, he served as a student attorney in the Drake Legal Clinic where he represented indigent clients. He was also the research editor for the Drake Journal of Agricultural Law.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-raymond-starks-taylor-u800ds.jpg",
      phone: "703.883.0214",
      email: "rstarkstaylor@brigliahundley.com",
      education: [
        {
          degree: "Law Degree",
          institution: "Drake University Law School",
          year: 2019
        },
        {
          degree: "Undergraduate Degree",
          institution: "Drake University",
          year: 2016
        }
      ],
      admissions: [
        "Iowa 2019",
        "Virginia 2022"
      ],
      practiceAreas: [
        "Civil Litigation",
        "Corporate and Business Litigation"
      ],
      pastEmployment: [
        "Associate Attorney, Moore, McKibben, Goodman & Lorenz LLP",
        "Attorney Advisor, United States Small Business Administration",
        "Assistant Commonwealth's Attorney, Office of the Fairfax Commonwealth's Attorney"
      ],
      professionalAssociations: [
        "Fairfax Bar Association – Young Lawyers Section"
      ]
    },
    {
      name: "Lauren L. Gill",
      position: "Associate",
      experience: "Lauren L. Gill is an associate attorney supporting the firm's family law practice.",
      fullBio: "Lauren L. Gill is an associate attorney supporting the firm's family law practice.\n\nSince her admission to the Virginia State Bar in October 2022, Ms. Gill's legal practice has focused exclusively on family law matters. She has experience handling divorce cases, custody determinations, child support issues, prenuptial agreements, and other domestic law matters.\n\nMs. Gill received her undergraduate degree in Political Economy from Hillsdale College in Michigan. She was a delegate on Hillsdale College's Student Federation and a member of Pi Beta Phi women's fraternity. Ms. Gill spent her weekends volunteering at the local domestic violence shelter and assisting with her sorority's philanthropic events.\n\nShe began her legal education at Concordia University Law School in Idaho, where she was a member of the Concordia Law Review and the Treasurer for the Idaho Women's Legal Society. Due to the strength of her academic performance at Concordia, Ms. Gill was able to transfer to George Mason University's Antonin Scalia Law School where she received the school's Highest Achievement Award for Trial Advocacy. She graduated in 2022.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-lauren-renslow-u800ds.jpg",
      phone: "703.883.0215",
      email: "lgill@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "George Mason Antonin Scalia Law School",
          year: 2022
        },
        {
          degree: "Bachelor of Arts",
          institution: "Hillsdale College",
          year: 2017
        }
      ],
      admissions: [
        "Virginia, 2022"
      ],
      practiceAreas: [
        "Family Law"
      ],
      professionalAssociations: [
        "Fairfax Bar Association",
        "Fairfax Bar Association – Young Lawyers Section",
        "Virginia Trial Lawyers Association",
        "Virginia Bar Association"
      ],
      blogPosts: [
        {
          title: "Social Media and Its Impact on Family Law Litigation",
          date: "2/13/2025",
          url: "https://brigliahundley.com/blog/social-media-impact-family-law-litigation"
        },
        {
          title: "The How-to Guide to Living Separate and Apart Under the Same Roof",
          date: "11/13/2024",
          url: "https://brigliahundley.com/blog/living-separate-apart-same-roof-guide"
        },
        {
          title: "What Type of Divorce is the Right Fit for You?",
          date: "8/14/2024",
          url: "https://brigliahundley.com/blog/what-type-divorce-right-fit"
        }
      ]
    },
    {
      name: "Hannah Merrill",
      position: "Associate",
      experience: "Hannah Merrill is an associate attorney supporting the firm's family law and eminent domain practices. She joined the firm after serving as a law clerk for the Honorable Penney S. Azcarate at Fairfax County Circuit Court and the Honorable Sookyoung Shin at the Massachusetts Appeals Court.",
      fullBio: "Hannah Merrill is an associate attorney supporting the firm's family law and eminent domain practices. She joined the firm after serving as a law clerk for the Honorable Penney S. Azcarate at Fairfax County Circuit Court and the Honorable Sookyoung Shin at the Massachusetts Appeals Court.\n\nMs. Merrill received her undergraduate degree from Boston College and her law degree from William & Mary Law School. While in law school, she was a Notes Editor for the Journal of Race, Gender, and Social Justice, where her note on employment discrimination was published, and served as Development Justice for the William & Mary Moot Court team. In her role with the Moot Court team, she won the Herbert Wechsler National Criminal Moot Court Competition, was a semi-finalist in the New York City Bar's National Moot Court Competition and was inducted into the Order of the Barristers. Ms. Merrill was also a teaching assistant for William & Mary's Advanced Brief Writing and Employment Law courses.",
      image: "https://brigliahundley.com/wp-content/uploads/bh-hannah-merrill-u800ds.jpg",
      phone: "703.883.0216",
      email: "hmerrill@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "William & Mary School of Law",
          year: 2022
        },
        {
          degree: "Bachelor of Arts",
          institution: "Boston College",
          year: 2019
        }
      ],
      admissions: [
        "Virginia, 2023",
        "Massachusetts, 2022"
      ],
      practiceAreas: [
        "Family Law",
        "Eminent Domain"
      ],
      professionalAssociations: [
        "Fairfax Bar Association",
        "Virginia Bar Association",
        "Massachusetts Bar Association"
      ]
    },
    {
      name: "Jacob C. DeRue",
      position: "Associate",
      experience: "Jacob DeRue is an associate attorney supporting the firm's community association department, handling all manner of such needs, including general litigation, advice regarding governance and dispute resolution, rules enforcement, and collections. He also works in the business litigation and corporate law practice groups.",
      fullBio: "Jacob DeRue is an associate attorney supporting the firm's community association department, handling all manner of such needs, including general litigation, advice regarding governance and dispute resolution, rules enforcement, and collections. He also works in the business litigation and corporate law practice groups.\n\nMr. DeRue received his undergraduate degree in Political Science, Psychology, Criminal Justice, and Sociology, summa cum laude, from Thiel College and his law degree from George Mason University Antonin Scalia Law School. During his undergraduate studies, Mr. DeRue interned for the Honorable Charles J. Siragusa of the Western District of New York. While in law school, Mr. DeRue was a member of the Journal of Law, Economics, and Policy. He also served as the Pro Bono Pledge Coordinator for the George Mason Pro Bono Society, promoting pro bono work for law students. Further, he was a member of the Judges Committee in the Alternative Dispute Resolution Society and the Vice President of Media Relations for the Scalia Law Trial Advocacy Association.",
      image: "https://brigliahundley.com/wp-content/uploads/briglia-hundley-jacob-derue-u800ds.jpg",
      phone: "703.883.0217",
      email: "jderue@brigliahundley.com",
      education: [
        {
          degree: "Juris Doctor",
          institution: "George Mason University Antonin Scalia Law School",
          year: 2024
        },
        {
          degree: "Bachelor of Arts",
          institution: "Thiel College",
          year: 2020
        }
      ],
      admissions: [
        "United States District Court, Eastern District of Virginia, 2025",
        "United States District Court, Western District of Virginia, 2025",
        "Virginia, 2024"
      ],
      practiceAreas: [
        "Corporate Law",
        "Commercial and Business Litigation",
        "Civil Litigation",
        "Employment Law"
      ],
      professionalAssociations: [
        "Virginia Bar Association",
        "Fairfax Bar Association",
        "American Bar Association",
        "Virginia Trial Lawyers Association"
      ],
      blogPosts: [
        {
          title: "The Different Business Entities – Which is Best for Your Business",
          date: "11/27/2023",
          url: "https://brigliahundley.com/blog/business-entities-guide",
          coAuthor: "Jim Hundley"
        },
        {
          title: "The Slippery Roads Defense in Virginia",
          date: "2/4/2023",
          url: "https://brigliahundley.com/blog/slippery-roads-defense-virginia"
        },
        {
          title: "Tortious Interference With Business",
          date: "11/30/2022",
          url: "https://brigliahundley.com/blog/tortious-interference-business"
        }
      ]
    }
  ],

  testimonials: [
    {
      text: "Briglia Hundley provided exceptional legal representation during our complex business dispute. Their strategic approach and attention to detail resulted in a favorable outcome that exceeded our expectations.",
      author: "Robert Johnson",
      case: "Business Litigation"
    },
    {
      text: "I was facing serious criminal charges and felt overwhelmed by the legal process. The attorneys at Briglia Hundley fought tirelessly for my rights and achieved an outcome I never thought possible.",
      author: "Sarah Williams",
      case: "Criminal Defense"
    },
    {
      text: "During our family's difficult divorce proceedings, Briglia Hundley provided compassionate guidance while aggressively protecting our interests. Their expertise in family law was evident throughout the process.",
      author: "Michael Davis",
      case: "Family Law"
    },
    {
      text: "The personal injury team at Briglia Hundley secured a substantial settlement for our family after a devastating car accident. Their dedication and professionalism made all the difference.",
      author: "Jennifer Martinez",
      case: "Personal Injury"
    },
    {
      text: "Briglia Hundley's corporate law expertise helped us navigate a complex merger successfully. Their business acumen and legal knowledge were invaluable to our company's growth.",
      author: "David Thompson",
      case: "Corporate Law"
    }
  ],

  blogs: [
    {
      id: 1,
      title: "Arrested at a Protest? Know Your Rights",
      category: "Criminal Defense",
      excerpt: "Understanding your constitutional rights during protests and demonstrations, and what to do if you're arrested while exercising your First Amendment freedoms.",
      author: "James W. Hundley",
      date: "June 15, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/protest-rights-legal-guide.jpg",
      slug: "arrested-at-protest-know-your-rights",
      content: "The right to peaceful protest is a cornerstone of American democracy, protected by the First Amendment to the U.S. Constitution. However, many people are unaware of their specific rights when participating in demonstrations or what to do if they are arrested during a protest. This comprehensive guide examines the legal protections available to protesters, the circumstances under which arrests can occur, and the steps you should take if you find yourself in custody. We'll explore the difference between lawful assembly and unlawful conduct, discuss the concept of time, place, and manner restrictions, and provide practical advice for protecting yourself legally while exercising your constitutional rights. Understanding these principles is crucial for anyone who wishes to participate in peaceful demonstrations while avoiding unnecessary legal complications."
    },
    {
      id: 2,
      title: "Crawford v. Washington: Impact on Criminal Defense",
      category: "Criminal Defense",
      excerpt: "Examining how the landmark Crawford decision transformed the admissibility of testimonial evidence in criminal proceedings and its ongoing implications for defense strategy.",
      author: "James W. Hundley",
      date: "May 20, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/crawford-washington-legal-analysis.jpg",
      slug: "crawford-washington-criminal-defense-impact",
      content: "The Supreme Court's decision in Crawford v. Washington fundamentally altered the landscape of criminal evidence law by redefining how testimonial statements are evaluated under the Confrontation Clause. This landmark 2004 ruling abandoned the previous reliability-based approach in favor of a more restrictive standard that requires confrontation for testimonial statements, regardless of their perceived reliability. The decision has had far-reaching implications for criminal defense practice, affecting everything from the admissibility of lab reports and 911 calls to statements made during police interrogations. Defense attorneys must now navigate a complex framework for challenging testimonial evidence while prosecutors have had to adapt their trial strategies accordingly. This analysis explores the practical applications of Crawford in various criminal contexts and provides guidance for practitioners on leveraging this constitutional protection effectively."
    },
    {
      id: 3,
      title: "Business Attorney: Pros and Cons of In-House vs. External Counsel",
      category: "Business Law",
      excerpt: "A comprehensive analysis of the advantages and disadvantages of hiring in-house legal counsel versus retaining external law firms for business legal needs.",
      author: "Steven D. Briglia",
      date: "April 28, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/business-attorney-comparison.jpg",
      slug: "business-attorney-pros-cons-in-house-external",
      content: "Every growing business eventually faces the decision of how to structure its legal support: hire an in-house attorney, rely on external counsel, or implement a hybrid approach. This decision impacts not only the company's legal costs but also its operational efficiency, risk management, and strategic planning capabilities. In-house counsel offers the advantage of intimate knowledge of the business, immediate availability, and potentially lower per-hour costs for routine matters. However, external counsel brings specialized expertise, objectivity, and the ability to handle complex matters that may be beyond the scope of a single attorney. This comprehensive analysis examines the financial implications, strategic considerations, and practical factors that should influence this critical business decision, providing frameworks for evaluating which approach best serves your company's unique needs and growth trajectory."
    },
    {
      id: 4,
      title: "Hidden Assets in Divorce: Detection and Recovery Strategies",
      category: "Family Law",
      excerpt: "Professional strategies for uncovering concealed assets during divorce proceedings and the legal tools available to ensure fair property division.",
      author: "Teresa S. Cole",
      date: "March 4, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/hidden-assets-divorce-investigation.jpg",
      slug: "uncovering-hidden-cash-assets-divorce",
      content: "One of the most challenging aspects of divorce proceedings involves ensuring complete financial disclosure from both parties. Unfortunately, attempts to hide assets during divorce are more common than many realize, ranging from simple cash concealments to sophisticated offshore arrangements. This article provides a comprehensive overview of detection strategies, legal remedies, and preventive measures for addressing hidden assets in divorce cases. We examine common hiding methods including cryptocurrency transfers, business manipulations, and third-party arrangements, while discussing the professional resources available for asset discovery, including forensic accountants, private investigators, and specialized legal tools. Virginia's equitable distribution laws provide specific remedies for dealing with concealed assets, and understanding these protections is crucial for achieving fair property division. The article also addresses the consequences of hiding assets and the importance of working with experienced family law counsel to protect your financial interests."
    },
    {
      id: 5,
      title: "Should You See a Doctor After a Car Accident?",
      category: "Personal Injury",
      excerpt: "Understanding the importance of immediate medical attention after car accidents, even when injuries aren't immediately apparent.",
      author: "Madison A. Beatty",
      date: "March 3, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/car-accident-medical-care.jpg",
      slug: "see-doctor-after-car-accident",
      content: "After a car accident, many people focus primarily on vehicle damage and insurance claims while overlooking a critical factor: their health. Even seemingly minor accidents can result in injuries that don't manifest symptoms immediately, such as soft tissue damage, concussions, or internal injuries. Delayed medical treatment can not only jeopardize your health but also complicate any future insurance claims or legal proceedings. This comprehensive guide examines why prompt medical attention is crucial after any vehicle accident, regardless of how you feel immediately afterward. We discuss common delayed-onset injuries, the importance of creating a medical record, and how insurance companies evaluate medical treatment when processing claims. The article also provides practical guidance on choosing appropriate medical care, understanding the relationship between medical treatment and legal claims, and protecting both your health and legal rights following an accident."
    },
    {
      id: 6,
      title: "Social Media and Its Impact on Family Law Litigation",
      category: "Family Law",
      excerpt: "How social media posts can significantly affect divorce, custody, and other family law proceedings, with practical guidance for protection.",
      author: "Lauren L. Gill",
      date: "February 13, 2025",
      image: "https://brigliahundley.com/wp-content/uploads/social-media-family-law-impact.jpg",
      slug: "social-media-impact-family-law-litigation",
      content: "In today's digital age, social media has become a double-edged sword in family law proceedings. While these platforms allow us to stay connected and share life's moments, they can also become powerful evidence in divorce, custody, and support cases. Posts that seem innocent can be interpreted differently in a legal context, potentially undermining your case or credibility. This comprehensive analysis explores how various social media platforms are used in family law litigation, from Facebook and Instagram to LinkedIn and dating apps. We examine real-world examples of how posts have influenced court decisions, discuss the discoverability of social media content, and provide practical strategies for protecting your interests during family law proceedings. The article also addresses privacy settings, the permanence of digital footprints, and the importance of digital discretion when family law matters are pending. Understanding these risks is essential for anyone involved in family law litigation in the modern era."
    }
  ],

  faq: [
    {
      question: "How do I know if I need a lawyer?",
      answer: "If you're facing legal challenges that could affect your rights, finances, family, or freedom, it's wise to consult with an attorney. Our experienced lawyers can help assess your situation during a free consultation and advise you on the best course of action."
    },
    {
      question: "What should I expect during my first consultation?",
      answer: "During your initial consultation, we'll discuss your legal matter in detail, review any relevant documents, explain your options, and provide an assessment of your case. This is also an opportunity for you to ask questions about our experience, approach, and fees."
    },
    {
      question: "How are legal fees structured?",
      answer: "Our fee structure varies depending on the type of case and complexity. We offer different arrangements including hourly rates, flat fees for certain services, and contingency fees for personal injury cases. We'll discuss all costs upfront during your consultation."
    },
    {
      question: "How long will my case take?",
      answer: "The timeline for legal matters varies significantly based on the complexity of the case, court schedules, and other factors. We'll provide you with a realistic timeframe estimate based on our experience with similar cases and keep you updated throughout the process."
    },
    {
      question: "Do I need to come to your office for meetings?",
      answer: "While we prefer in-person meetings when possible, we understand that circumstances may require alternative arrangements. We offer virtual consultations and can accommodate your scheduling needs to ensure effective communication throughout your case."
    },
    {
      question: "What areas of law does Briglia Hundley® practice?",
      answer: "We provide comprehensive legal services including criminal defense, family law, business litigation, corporate law, personal injury, estate planning, real estate law, employment law, municipal law, and community association representation."
    }
  ],

  announcements: [
    {
      title: "Tier 1 Ranking by Best Lawyers® Best Law Firms",
      content: "Briglia Hundley has been recognized as a Tier 1 ranked law firm by Best Lawyers® Best Law Firms in multiple practice areas including Business Litigation, Family Law, and Criminal Defense.",
      link: "https://www.bestlawyers.com"
    },
    {
      title: "New Location - Enhanced Client Services",
      content: "Our expanded office at 1921 Gallows Road in Tysons Corner provides improved client meeting facilities and enhanced privacy for sensitive legal matters.",
      link: null
    },
    {
      title: "Virginia Super Lawyers Recognition",
      content: "Multiple attorneys at Briglia Hundley have been selected to the Virginia Super Lawyers list for 2024, recognizing outstanding legal achievement and professional excellence.",
      link: "https://www.superlawyers.com"
    },
    {
      title: "COVID-19 Client Safety Protocols",
      content: "We have implemented comprehensive safety measures while maintaining full legal services. Virtual consultations available for all practice areas.",
      link: null
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
    content: "At Briglia Hundley®, we deliver superior client service and innovative legal strategies throughout Northern Virginia. Since 1993, our award-winning team has been dedicated to achieving the best possible outcomes for clients in Fairfax County, Arlington County, Prince William County, and the greater Washington DC metropolitan area.\n\nThe attorneys at Briglia Hundley® are skilled litigators and transactional attorneys. Among our ranks are former prosecutors, former federal and state court law clerks, and attorneys who have practiced at some of the largest law firms in the region. Our attorneys employ their extensive experience to provide innovative legal service across several practice areas, including business and commercial law, criminal defense, personal injury, family law, estate planning and administration, municipal law, land use, and real estate law."
  },
  contact: {
    title: "Get Your Free Legal Guide",
    subtitle: "Learn How It All Works",
    description: "Download our comprehensive legal guide to understand your rights and options."
  }
};