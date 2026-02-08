import type { ProfileData } from '@/types';

export const profileData: ProfileData = {
  personal: {
    name: 'Adrian Chatto',
    title: 'Delivery Lead | Digital Transformation Specialist',
    bio: [
      'Delivery Lead with 20+ years\' experience delivering complex, customer-facing transformation across Microsoft collaboration, voice, and cloud platforms. Proven track record of leading executive-level engagements, driving adoption and value realisation, and aligning business outcomes with technology strategy.',
      'Trusted advisor to enterprise customers, with deep experience in change management, programme governance, and cross-functional delivery.',
    ],
    headshot: '/images/headshot.jpg',
    email: 'adrian.chatto@chattoweb.com',
    phone: '07856784402',
    location: 'Berkhamsted, Hertfordshire',
    links: {
      linkedin: 'https://linkedin.com/in/adrianchatto',
      github: 'https://github.com/adrianchatto',
      twitter: 'https://twitter.com/adrianchatto',
    },
  },

  highlights: [
    { label: 'Years Experience', value: 20, suffix: '+' },
    { label: 'Countries Delivered', value: 15, suffix: '+' },
    { label: 'Users Migrated', value: '10,000', suffix: '+' },
    { label: 'Faster Turnaround', value: 27, suffix: '%' },
  ],

  skills: [
    'Digital Transformation',
    'Programme Governance',
    'Customer Success & Adoption',
    'Stakeholder Management',
    'Contact Centre Solutions',
    'Change Management',
    'Cross-Functional Delivery',
    'PMO & Resource Management',
    'Commercial Delivery',
    'RFP Responses',
    'Employee Management',
    'Process Optimization',
  ],

  toolbox: [
    'Amazon Connect',
    'Salesforce',
    'Microsoft PowerBI',
    'Projector PSA',
    'Harvest',
    'Jira & Confluence',
    'Azure DevOps',
    'Microsoft 365 (Teams, SharePoint, Power Platform)',
    'Dynamics 365',
    'AWS (EC2, S3, Lambda, Connect)',
    'Mitel',
    'NICE',
    'Oak Innovation',
    'Anywhere 365',
    'Verba',
    'Resource Guru',
    'Zendesk',
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'CloudInteract',
      title: 'Director of Delivery',
      dates: 'January 2025 - Present',
      location: 'Home based',
      description:
        'Own end-to-end delivery and customer success for cloud contact centre solutions, primarily Amazon Connect, alongside AWS services and integrated platforms including Salesforce and Zendesk.',
      achievements: [
        'Lead and mature the delivery governance and PMO function, establishing consistent planning, reporting, and risk management practices',
        'Act as senior escalation point and trusted advisor for C-suite, CIO/CTO, Heads of Contact Centre, and Programme Sponsors',
        'Drive customer success and adoption outcomes, ensuring solutions deliver measurable business value',
        'Introduced structured delivery tooling and practices (Jira-based planning), improving on-time, on-budget delivery performance by ~20%',
        'Lead commercial delivery accountability, balancing utilisation, delivery cost control, and margin protection',
        'Partner closely with Sales, Engineering, and Customer Success teams to align commercial commitments with delivery capability',
        'Designed and implemented revised delivery model and governance framework to stabilise and scale delivery function',
        'Reset customer expectations and recovery plans where required, rebuilding confidence through clear roadmaps',
        'Support customers’ broader cloud transformation and change management journeys (Microsoft Copilot & Copilot Studio)',
        'Provide strategic oversight across multiple concurrent programmes in both UK and US markets',
        'Strengthened partner relationships across AWS, Salesforce, and other key technology providers',
      ],
      tags: [
        'Amazon Connect',
        'AWS',
        'Salesforce',
        'PMO',
        'Customer Success',
        'Delivery Governance',
      ],
    },
    {
      id: 'exp-2',
      company: 'Symity',
      title: 'Director of Business Operations',
      dates: 'March 2022 - December 2024',
      location: 'Home Based',
      description:
        'Designed, implemented & maintained the entire "Book to bill" process from Salesforce CRM to Professional Services Automation tool (PSA).',
      achievements: [
        'Managed and mentored Project Management Office (PMO) and Procurement team',
        'Liaised with superiors to make decisions for operational activities and set strategic goals',
        'Planning and monitoring the day-to-day running of the business to ensure smooth progress',
        'Supervising staff from different departments while providing constructive feedback',
        'Drove utilisation and revenue recognition processes & reported directly to Senior Leadership',
        'Overseeing all operational aspects of a company’s strategy and helping to set strategic goals',
        'Ensuring the flow of operations information to the chief executive and the board',
        'Overseeing the daily work activities of operations teams',
        'Approving or preparing operations budgets and production schedules',
        'Meeting with operations team leaders to discuss issues related to production, supply chain, or distribution',
      ],
      tags: ['Salesforce', 'PSA', 'PMO', 'Operations', 'Business Strategy'],
    },
    {
      id: 'exp-3',
      company: 'LoopUp',
      title: 'Director of Delivery / Senior Project Manager',
      dates: 'October 2020 - March 2022',
      location: 'Home based',
      description:
        'Defined Salesforce opportunities structure and implemented process improvements for efficient project management and customer communications.',
      achievements: [
        'Defined Salesforce opportunities structure to better serve the delivery team from project inception to ongoing Managed Service',
        'Designed and implemented number porting case management process, integrated into Salesforce at opportunity level',
        'Implemented a new resource management process, including Salesforce reporting and pipeline review sessions',
        'Project Managed LoopUp’s largest customer (global consulting firm), migrating 10,000 DDI to Direct Routing across 15+ countries',
        'Designed and implemented senior management reporting, including invoice forecasting and resource utilisation with PowerBI',
        'Delivered migration for a large petrochemical refining company with 35 locations in eleven countries',
        'Spearheaded the integration of Dynamics 365 with Salesforce over a 6-month global rollout, reducing turnaround time by 27%',
      ],
      tags: [
        'Microsoft Direct Routing',
        'Salesforce',
        'Dynamics 365',
        'PowerBI',
        'Resource Management',
      ],
    },
    {
      id: 'exp-4',
      company: 'Modality Systems',
      title: 'Programme Manager',
      dates: 'June 2020 – October 2020',
      location: 'Home based',
      description:
        'Managed a team of six project managers, as well as delivering customer facing projects.',
      achievements: [
        'Managed a team of six project managers and delivered customer facing projects',
        'Worked with head of Professional Services to manage PMO, including recruitment, HR and resource allocation',
        'Responsible for the US delivery team (1 Consultant, 1 User Adoption training resource and 1 Project Manager)',
        'Advised cross-functional teams on project delivery strategies for 14+ concurrent client implementations per quarter',
      ],
      tags: [
        'Programme Management',
        'PMO',
        'Team Leadership',
        'US Market',
      ],
    },
    {
      id: 'exp-5',
      company: 'Modality Systems',
      title: 'Senior Project Manager',
      dates: 'January 2016 – October 2020',
      location: 'Home based',
      description:
        'Project managed internal PSA implementation and delivered multiple customer-facing projects.',
      achievements: [
        'Project managed internal project to implement Professional Services Automation tool (Projector PSA)',
        'Delivered multiple customer-facing projects, helping define and shape processes within the organisation',
        'Managed a team of four Project Managers and one User Adoption resource',
        'Directed integration of Azure cloud services across 8 enterprise client projects over 24 months',
        'Streamlined infrastructure deployments achieving 20% reduction in deployment times',
        'Partnered cross-functional teams and external vendors over 12 enterprise projects spanning 2 years',
      ],
      tags: [
        'Azure',
        'Projector PSA',
        'Team Management',
        'Cloud Services',
        'PowerBI',
      ],
    },
    {
      id: 'exp-6',
      company: 'Modality Systems',
      title: 'Project Manager',
      dates: 'January 2015 – January 2016',
      location: 'Home based',
      description:
        'Managing 7 to 10 customer facing projects at any one time.',
      achievements: [
        'Managed projects from large 1,000 user contact centre solutions to small 10 user Proof Of Concepts',
        'Delivered for housing associations, public sector and big 4 consulting firms',
        'Defined Modality\'s Skype Operations Framework offering',
      ],
      tags: ['Project Management', 'Contact Centre', 'Skype for Business', 'POC'],
    },
    {
      id: 'exp-7',
      company: 'NEC',
      title: 'Technical Project Manager',
      dates: 'January 2014 – January 2015',
      location: 'Home based',
      description:
        'Directed end-to-end technical delivery for VDI implementation projects.',
      achievements: [
        'Successful migration of 1,500 users from Windows XP to 8.1, £20,000 under budget',
        'Creation of Technical proposal for 400 user base migration from Microsoft RDP to full VDI solution',
        'Directed end-to-end technical delivery for a 9-month VDI implementation project',
      ],
      tags: [
        'Technical Project Management',
        'VDI',
        'Windows Migration',
        'Budget Management',
      ],
    },
    {
      id: 'exp-8',
      company: 'RSTN',
      title: 'Business Analyst / Project Manager',
      dates: 'May 2013 – May 2014',
      location: 'Nairobi, Johannesburg, Istanbul',
      description:
        'Consulting for a large insurance firm across EMEA, implementing Global Document Management System.',
      achievements: [
        'Implemented client\'s new Global Document Management System across a user base of more than six hundred',
        'On-site delivery in Nairobi, Johannesburg, and Istanbul',
      ],
      tags: [
        'Business Analysis',
        'Document Management',
        'International Delivery',
        'EMEA',
      ],
    },
    {
      id: 'exp-9',
      company: 'KP Confidencia',
      title: 'Chief Information Officer',
      dates: 'March 2009 - May 2013',
      location: 'Middle East',
      description:
        'Managed the migration of the Group\'s IT infrastructure to a virtual environment.',
      achievements: [
        'Managed migration to virtual environment achieving 30% reduction in running costs and increased uptime to 99.999%',
        'Led successful implementation of ERP & CRM systems across multiple locations throughout Middle East and Australia',
        'Led project to introduce Microsoft Lync to the organisation, increasing collaboration and reducing communication costs',
        'Led Business Intelligence project to derive in-depth information from CRM and ERP implementations',
      ],
      tags: [
        'Virtualisation',
        'ERP',
        'CRM',
        'Microsoft Lync',
        'Business Intelligence',
      ],
    },
    {
      id: 'exp-10',
      company: 'Libertas Capital Partners',
      title: 'Global Head of Information Technology',
      dates: 'July 2007 – Feb 2009',
      location: 'London',
      description:
        'Played a major role in the design and development of Libertas Capital\'s technology division.',
      achievements: [
        'Played a major role in the design and development of the technology division and business processes',
        'Led the project team in the implementation of a site-to-site mesh VPN network',
        'Centralized resources and IT strategy thus reducing costs',
        'Directed end-to-end digital transformation over 18 months using Azure and AWS cloud platforms',
      ],
      tags: [
        'IT Strategy',
        'Infrastructure',
        'VPN',
        'Digital Transformation',
      ],
    },
    {
      id: 'exp-11',
      company: 'Virtual Music Stores',
      title: 'Senior Systems Engineer',
      dates: 'June 2006 – July 2007',
      location: 'New York, London, Toronto',
      description:
        'Responsible for over 40 enterprise class servers and 500,000 music albums stored across various sites.',
      achievements: [
        'Responsible for over 40 enterprise class servers and 500,000 music albums stored across various sites',
        'Managed sites including New York, London and Toronto',
      ],
      tags: [
        'Systems Engineering',
        'Server Management',
        'Infrastructure',
      ],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Enterprise M365 Transformation',
      brief:
        'Global rollout of Microsoft 365 ecosystem across 12 countries, transforming collaboration and productivity.',
      problem:
        'Organization operating on disparate systems across regions with low collaboration efficiency, high IT costs, and compliance risks from shadow IT adoption.',
      approach: [
        'Phased migration strategy with 4-week sprints per country, prioritizing high-impact regions',
        'Customized adoption programs tailored to regional needs, languages, and working cultures',
        'Established 24/7 global support model with regional language coverage during transition',
        'Built change champion network of 50+ advocates across business units',
        'Implemented governance framework ensuring compliance and standardization',
      ],
      outcome:
        '40% increase in collaboration metrics, £2M annual savings from legacy system retirement, 98% user satisfaction score',
      impact: {
        users: 10000,
        countries: 12,
        timeline: '18 months',
        savings: '£2M annually',
      },
      tags: ['M365', 'Change Management', 'International', 'Agile'],
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'AWS Contact Centre Migration',
      brief:
        'Migrated legacy on-premise contact centre platform to AWS Connect, modernizing customer service capabilities.',
      problem:
        'Aging on-premise platform with limited scalability, high maintenance costs, and inability to support modern digital channels.',
      approach: [
        'Comprehensive current-state analysis and gap assessment',
        'Designed AWS Connect architecture with Lambda integrations for business logic',
        'Built phased migration plan with parallel running period for risk mitigation',
        'Developed agent training program with hands-on labs and simulations',
        'Implemented real-time dashboards and reporting using Amazon QuickSight',
      ],
      outcome:
        'Reduced infrastructure costs 35%, improved agent productivity 28%, enabled same-day deployment of new features',
      impact: {
        users: 500000,
        timeline: '12 months',
      },
      tags: ['AWS Connect', 'Contact Centre', 'Cloud Migration', 'Lambda'],
      links: [
        {
          label: 'Case Study',
          url: '#',
        },
      ],
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'Salesforce Service Cloud Implementation',
      brief:
        'Unified global support operations across 5 regions with Salesforce Service Cloud.',
      problem:
        'Fragmented customer service systems across regions causing inconsistent customer experience, no single view of customer, and limited reporting capabilities.',
      approach: [
        'Conducted global requirements workshops with regional stakeholders',
        'Designed unified data model with regional customizations for compliance',
        'Implemented integration layer connecting legacy systems and Service Cloud',
        'Delivered comprehensive training program for 300+ service agents',
        'Established center of excellence for ongoing optimization',
      ],
      outcome:
        'Single view of customer across all touchpoints, 50% reduction in case resolution time, 360° customer insights',
      impact: {
        users: 300,
        countries: 5,
        timeline: '14 months',
      },
      tags: ['Salesforce', 'Service Cloud', 'CRM', 'Integration'],
      featured: false,
    },
    {
      id: 'proj-4',
      title: 'Agile Transformation Program',
      brief:
        'Organizational transformation to agile delivery methodology across IT and operations teams.',
      problem:
        'Waterfall delivery model causing slow time-to-market, limited flexibility, and poor alignment with business needs.',
      approach: [
        'Secured executive sponsorship and established transformation roadmap',
        'Trained 50+ team members in Scrum and Kanban methodologies',
        'Implemented Jira and Confluence for workflow and knowledge management',
        'Established agile ceremonies and governance framework',
        'Coached teams through initial sprints and continuous improvement cycles',
      ],
      outcome:
        '40% faster time-to-market, 60% improvement in delivery predictability, 85% team satisfaction with new ways of working',
      tags: ['Agile', 'Scrum', 'Change Management', 'Jira'],
    },
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'Global Tech Corporation',
      quote:
        "Adrian's leadership was instrumental in our M365 transformation success. His ability to navigate complex stakeholder landscapes while maintaining team focus and delivery momentum is exceptional.",
    },
    {
      id: 'test-2',
      name: 'Michael Chen',
      role: 'VP of Customer Experience',
      company: 'Enterprise Solutions Ltd',
      quote:
        'The AWS Connect migration that Adrian led transformed our customer service capabilities. His technical depth combined with operational understanding delivered results beyond our expectations.',
    },
    {
      id: 'test-3',
      name: 'Emma Williams',
      role: 'Head of Operations',
      company: 'Digital Innovations Inc',
      quote:
        'Adrian has an exceptional ability to drive operational excellence while managing change. His focus on people and process optimization delivered sustained improvements to our contact centre performance.',
    },
  ],

  seo: {
    title:
      'Adrian Chatto | Senior Delivery Lead & Digital Transformation Specialist',
    description:
      '20+ years delivering enterprise-scale digital transformation projects across M365, AWS, and contact centre operations. Proven track record in stakeholder management, agile delivery, and operational excellence.',
    keywords: [
      'delivery lead',
      'digital transformation',
      'M365',
      'AWS',
      'contact centre',
      'project management',
      'agile delivery',
      'stakeholder management',
      'cloud migration',
      'operations',
    ],
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image',
  },

  charts: {
    projectsByYear: [
      { label: '2020', value: 8, year: 2020 },
      { label: '2021', value: 12, year: 2021 },
      { label: '2022', value: 15, year: 2022 },
      { label: '2023', value: 14, year: 2023 },
      { label: '2024', value: 16, year: 2024 },
    ],
    skillsRadar: [
      { label: 'Delivery Leadership', value: 95 },
      { label: 'Stakeholder Mgmt', value: 98 },
      { label: 'Technical Knowledge', value: 85 },
      { label: 'Change Management', value: 90 },
      { label: 'Team Leadership', value: 92 },
      { label: 'Strategic Planning', value: 88 },
    ],
    careerProgression: [
      { label: '2005', value: 5, year: 2005, category: 'Team Size' },
      { label: '2010', value: 15, year: 2010, category: 'Team Size' },
      { label: '2015', value: 25, year: 2015, category: 'Team Size' },
      { label: '2020', value: 35, year: 2020, category: 'Team Size' },
      { label: '2024', value: 50, year: 2024, category: 'Team Size' },
    ],
  },
};

export default profileData;
