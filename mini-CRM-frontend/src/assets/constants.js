
export const leads = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah@brightside.co',
    phone: '+1 (555) 123-4567',
    company: 'BrightSide Media',
    status: 'NEW',
    source: 'Website Contact Form',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    message: "We are looking for a comprehensive rebranding package. We need a new logo, brand guidelines, and a refresh of our website. Our budget is around $15,000.",
    notes: [
      { id: 'n1', content: 'Attempted first call, no answer.', createdAt: new Date(Date.now() - 1800000).toISOString(), author: 'Admin' }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen@techfront.io',
    phone: '+1 (555) 987-6543',
    company: 'TechFront Solutions',
    status: 'QUALIFIED',
    source: 'Referral',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    message: "Interested in your custom software development services for a new fintech mobile app. We have a wireframe ready and would like to discuss technical feasibility.",
    notes: []
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma@greenleaf.com',
    phone: '+1 (555) 246-8135',
    company: 'GreenLeaf Organic',
    status: 'CONTACTED',
    source: 'Google Search',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    message: "I saw your work on the Artisan Baker project. We're looking for similar minimalist web design for our organic grocery chain.",
    notes: []
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david@wilson-arch.com',
    phone: '+1 (555) 369-1212',
    company: 'Wilson Architecture',
    status: 'PROPOSAL',
    source: 'LinkedIn',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    message: "Reviewing the proposal you sent last Tuesday. We have some questions about the maintenance clause.",
    notes: []
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa@blueocean.net',
    phone: '+1 (555) 444-5555',
    company: 'Blue Ocean Logistics',
    status: 'CLOSED',
    source: 'Website Contact Form',
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    message: "Initial inquiry about logistics optimization software.",
    notes: []
  },
  {
    id: '6',
    name: 'James Peterson',
    email: 'james@innovatech.com',
    phone: '+1 (555) 555-1234',
    company: 'InnovaTech Solutions',
    status: 'LOST',
    source: 'Email Campaign',
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    message: "Decided to go with a competitor for their design services.",
    notes: []
  },
  {
    id: '7',
    name: 'Rachel Martinez',
    email: 'rachel@innovatedigital.com',
    phone: '+1 (555) 678-9012',
    company: 'Innovate Digital',
    status: 'NEW',
    source: 'Referral',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    message: "Looking for UI/UX design services for our mobile banking application.",
    notes: []
  },
  {
    id: '8',
    name: 'Christopher Lee',
    email: 'chris@globaltrade.io',
    phone: '+1 (555) 321-6789',
    company: 'Global Trade Inc',
    status: 'CONTACTED',
    source: 'Website Contact Form',
    createdAt: new Date(Date.now() - 129600000).toISOString(),
    message: "Need help with e-commerce platform optimization and conversion rate improvements.",
    notes: []
  },
  {
    id: '9',
    name: 'Amanda Foster',
    email: 'amanda@designstudio.net',
    phone: '+1 (555) 789-0123',
    company: 'Design Studio Pro',
    status: 'QUALIFIED',
    source: 'LinkedIn',
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    message: "Interested in partnering on white-label design projects for your agency clients.",
    notes: []
  },
  {
    id: '10',
    name: 'Kevin Patel',
    email: 'kevin@smartsolutions.co',
    phone: '+1 (555) 456-7890',
    company: 'Smart Solutions Ltd',
    status: 'PROPOSAL',
    source: 'Google Search',
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    message: "Reviewing your proposal for the CMS development project. Timeline looks good.",
    notes: []
  },
  {
    id: '11',
    name: 'Nicole Davis',
    email: 'nicole@creativebrand.com',
    phone: '+1 (555) 234-5678',
    company: 'Creative Brand Agency',
    status: 'CLOSED',
    source: 'Email Campaign',
    createdAt: new Date(Date.now() - 777600000).toISOString(),
    message: "Successfully completed branding project with excellent results.",
    notes: []
  }

];

export const StatusColors = {
  ['NEW']: 'bg-blue-100 text-blue-700 border-blue-200',
  ['CONTACTED']: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  ['QUALIFIED']: 'bg-purple-100 text-purple-700 border-purple-200',
  ['PROPOSAL']: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  ['CLOSED']: 'bg-green-100 text-green-700 border-green-200',
  ['LOST']: 'bg-red-100 text-red-700 border-red-200',
};