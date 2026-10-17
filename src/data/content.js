// ALL site content lives here. Edit this file to update the website.
// Source: Eshal's CV. Empty strings ('') mean "not provided yet" and hide the related button/link.

export const profile = {
  name: 'Eshal Azhar',
  email: 'eshalazhar713@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eshal-azhar-b2b201342/',
  github: 'https://github.com/eshalazhar',
  softbloomStore: 'https://bloomstorebybora.gumroad.com/',
  pinterest: 'https://pin.it/5N01YFJBc',
  pinterestHandle: 'softbloomstorebybora',
  // CV download: put a PDF in the /public folder and set the file name, e.g. 'Eshal_Azhar_CV.pdf'.
  // Leave '' to hide the button. (Check the PDF first: hidden text such as phone/address can still be copied.)
  cvFile: '',
  headline: 'Building intelligent things that help people.',
  intro:
    'BS Artificial Intelligence student at NUTECH with hands-on experience in machine learning research, full-stack web applications and data pipelines. I am also building an independent digital-product brand and helping run student community activities.',
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'creative', label: 'Creative Side' },
  { id: 'contact', label: 'Contact' },
]

export const interests = [
  { name: 'AI', text: 'Research on cerebral palsy subtype classification, plus projects from disease prediction to exam proctoring.' },
  { name: 'Entrepreneurship', text: 'Softbloom: digital products for students and creatives, currently in development.' },
  { name: 'Problem-solving', text: 'From dataset profiling tools to a result system written entirely in x86 Assembly.' },
  { name: 'Leadership', text: 'Women Representative in the SDG Club at NUTECH, coordinating teams for campus events.' },
  { name: 'Writing', text: 'Novels, poetry and songwriting.' },
  { name: 'Music', text: 'Singing, lyric and beat composition.' },
]

export const exploring = [
  'Model training and real-dataset validation for the cerebral palsy project',
  'Backend, Docker and deployment workflows',
  'Korean (learning)',
  'Softbloom digital products',
]

export const education = [
  { years: '2024 – 2028', title: 'BS Artificial Intelligence', place: 'National University of Technology (NUTECH), Islamabad', note: 'Current CGPA 3.46' },
  { years: '2022 – 2024', title: 'HSSC, Pre-Medical', place: 'APSACS Humayun Road, Rawalpindi', note: '76.18% secured' },
  { years: '2020 – 2022', title: 'SSC, Science group', place: 'APSACS Humayun Road, Rawalpindi', note: '92.5% secured' },
]

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'web', label: 'Web' },
  { id: 'systems', label: 'Security & systems' },
]

// repo / demo: add real URLs when you have them. Empty = no button is shown.
export const projects = [
  {
    id: 'cp',
    title: 'Early Detection of Cerebral Palsy Using AI',
    status: 'Ongoing research',
    cats: ['ai'],
    problem: 'Classifying cerebral palsy subtypes from pediatric brain MRI and movement data, as decision support for clinicians.',
    approach: 'An AI-assisted prototype trained on real patient data with explainable predictions, a Streamlit inference interface and a data-integrity-first workflow.',
    bullets: [
      'Data auditing, leakage prevention and preprocessing before any modelling',
      'Model comparison with 5-fold cross-validation',
      'Automated tests: 36 of 36 passing',
      'Next: further model training, real-dataset validation, backend and Docker setup, deployment',
    ],
    tech: ['Python', 'Machine learning', 'Deep learning', 'Streamlit', 'Docker (in progress)'],
    role: 'Developer and researcher',
    diagramTitle: 'Pipeline',
    diagram: ['MRI + MINI-RGBD movement data', 'Data audit and leakage checks', 'Preprocessing', 'Model comparison, 5-fold CV', 'Explainable prediction in Streamlit'],
    repo: '',
    demo: '',
  },
  {
    id: 'petcare',
    title: 'PetCare AI',
    status: 'Full-stack',
    cats: ['ai', 'web'],
    problem: 'Managing pet records and predicting possible diseases from symptoms in a single application.',
    approach: 'A React.js front end talking to a Flask REST API, with authentication, database integration and a machine-learning prediction feature.',
    bullets: ['Authentication and REST APIs', 'Database integration', 'Disease prediction from symptoms'],
    tech: ['React.js', 'Flask', 'REST APIs', 'Machine learning'],
    role: 'Developer',
    diagramTitle: 'Stack',
    diagram: ['React.js interface', 'Flask REST API with authentication', 'Database', 'ML disease prediction'],
    repo: '',
    demo: '',
  },
  {
    id: 'eagleeyes',
    title: 'EagleEyes',
    status: 'Smart examination system',
    cats: ['ai'],
    problem: 'Supporting controlled and monitored online assessments.',
    approach: 'A smart examination system that combines proctoring, activity tracking and content checks.',
    bullets: ['AI-based proctoring', 'Browser activity tracking', 'Plagiarism detection'],
    tech: ['AI proctoring', 'Activity tracking', 'Plagiarism detection'],
    role: 'Developer',
    diagramTitle: 'Features',
    diagram: ['AI-based proctoring', 'Browser activity tracking', 'Plagiarism detection'],
    repo: '',
    demo: '',
  },
  {
    id: 'petri',
    title: 'Petri: Dataset Examination Bench',
    status: 'Data tool',
    cats: ['ai', 'web'],
    problem: 'Profiling a dataset and understanding it quickly, without writing analysis code each time.',
    approach: 'A Python/Flask app that profiles uploaded or built-in datasets and explains the results in plain English.',
    bullets: ['Supports CSV, Excel, JSON and built-in datasets', 'Statistical analysis, missing-value and duplicate detection', 'Visualizations with plain-English interpretations'],
    tech: ['Python', 'Flask', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    role: 'Developer',
    diagramTitle: 'Flow',
    diagram: ['CSV, Excel, JSON or built-in dataset', 'Profiling and statistics', 'Missing and duplicate detection', 'Charts and plain-English summary'],
    repo: '',
    demo: '',
  },
  {
    id: 'securevault',
    title: 'SecureVault',
    status: 'Desktop application',
    cats: ['systems'],
    problem: 'Protecting files and messages with strong encryption behind a simple interface.',
    approach: 'A desktop app using AES-256 with password-based authentication and a graphical interface.',
    bullets: ['Encryption and decryption workflows', 'Password-based authentication', 'Graphical user interface'],
    tech: ['AES-256', 'Password authentication', 'GUI'],
    role: 'Developer',
    diagramTitle: 'Flow',
    diagram: ['Password sign-in', 'AES-256 encrypt or decrypt', 'File or message'],
    repo: '',
    demo: '',
  },
]

export const moreBuilds = [
  { name: 'PLAGXI', text: 'Text-matching tool that detects duplicated content using string comparison.' },
  { name: 'Student Result Management System', text: 'Console system written entirely in MASM32 x86 Assembly: add, display, search, find the topper, auto-calculated grades and pass/fail.' },
  { name: 'Waste Management System', text: 'GUI system for admin-level waste collection with login, resource handling and real-time tracking.' },
  { name: 'Soulmate Matching Game', text: 'Console compatibility game built with conditionals and user input.' },
]

export const skillGroups = [
  { id: 'lang', label: 'Languages', items: ['C++', 'Java (OOP)', 'Python', 'R', 'Julia', 'Go', 'Prolog', 'Lisp', 'Assembly'] },
  { id: 'ai', label: 'AI & ML', items: ['NumPy', 'Pandas', 'Scikit-learn', 'JAX', 'PyTorch', 'Data preprocessing', 'Feature engineering', 'Feature scaling', 'Supervised learning', 'SVM', 'PCA', 'Cross-validation', 'Model evaluation'] },
  { id: 'web', label: 'Web & software', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Flask', 'REST APIs', 'Responsive design', 'Object-oriented programming', 'Java Swing', 'GUI development'] },
  { id: 'db', label: 'Databases', items: ['MySQL', 'MongoDB', 'SQL Server', 'Microsoft Access', 'Database design', 'CRUD operations'] },
  { id: 'sec', label: 'Security & dev tools', items: ['AES-256 encryption', 'Ubuntu', 'Docker', 'Automated testing'] },
  { id: 'tools', label: 'Tools & platforms', items: ['Microsoft Office (Word, Excel, PowerPoint)', 'Overleaf (LaTeX)', 'Chatfuel', 'Ubuntu', 'Cisco'] },
  { id: 'design', label: 'Design', items: ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'Visual design', 'UI design', 'UX design'] },
]

export const softSkills = ['Leadership and team coordination', 'Project management', 'Time management', 'Problem solving', 'Collaboration', 'Creativity and innovation', 'Critical thinking', 'Adaptability', 'Effective communication', 'Decision making']

export const languages = ['Urdu (native)', 'English (fluent)', 'Korean (learning)']

export const experience = [
  {
    when: '2026 – 2027',
    role: 'Women Representative',
    org: 'SDG Club, NUTECH (Cabinet)',
    kind: 'Leadership',
    points: [
      'Plan and organize student activities that raise awareness of the UN Sustainable Development Goals.',
      'Coordinate a team on event preparation, task allocation and activity execution, including stall management.',
      'Took part in No Plastic Day and plantation activities; contributing to the planning of Pink Ribbon Day.',
    ],
  },
  {
    when: 'July 2026 – present',
    role: 'Project-Based Contract Contributor',
    org: 'S9 Marketing (SMC-PVT) LTD',
    kind: 'Work',
    points: ['Contribute to website creation and development on assigned projects.', 'Assist with CRM-related work and the use of AI tools in project workflows.'],
  },
  {
    when: 'July 16 – August 31, 2026',
    role: 'Intern',
    org: 'National Centre of Physics, Centre of Excellence, AiTec',
    kind: 'Research',
    points: ['Worked on the Intelligent Clinical Support System project.', 'Gained project-based exposure to building AI applications in a clinical support context.'],
  },
  {
    when: 'April 24 – July 2, 2026',
    role: 'Aspire Leaders Program, Cohort 2',
    org: 'Aspire Institute by Harvard',
    kind: 'Program',
    points: [],
  },
  {
    when: '2026 – present',
    role: 'Freelance web developer',
    org: 'Fiverr',
    kind: 'Independent',
    points: ['Created and published a gig offering full-stack website development: front end, back end and database integration.'],
  },
  {
    when: 'In development',
    role: 'Founder and digital product creator',
    org: 'Softbloom',
    kind: 'Venture',
    points: ['Designing digital products for students and creatives under an independent brand.', 'Promoting services through Pinterest and social media.'],
    links: [
      { label: 'Softbloom store', url: 'https://bloomstorebybora.gumroad.com/' },
      { label: 'Pinterest (@softbloomstorebybora)', url: 'https://pin.it/5N01YFJBc' },
    ],
  },
]

export const certifications = [
  { name: 'Introduction to AI for marketing professionals', org: 'Coursera', date: 'July 4, 2026' },
  { name: 'Create a Lead Generation Messenger Chatbot using Chatfuel', org: 'Coursera', date: 'July 21, 2025' },
  { name: 'How to create presentations using Canva', org: 'Coursera', date: 'July 5, 2025' },
  { name: 'Business Analysis & Process Management', org: 'Coursera', date: 'July 5, 2025' },
  { name: 'Getting Started with Microsoft Excel', org: 'Coursera', date: 'July 5, 2025' },
  { name: 'Build a Free Website with WordPress', org: 'Coursera', date: 'July 3, 2025' },
]

export const googleSpecialization = {
  name: 'Google Prompting Essentials',
  org: 'Google (via Coursera)',
  date: 'July 22, 2026',
  courses: ['Start Writing Prompts like a Pro', 'Design Prompts for Everyday Work Tasks', 'Speed Up Data Analysis and Presentation Building', 'Use AI as a Creative or Expert Partner'],
}

export const creative = {
  intro: 'Away from the keyboard I write, sing and sketch. These habits shape how I think about stories, structure and people.',
  items: [
    { name: 'Writing', text: 'Novels and poetry. Long-form stories teach me to keep a structure in my head while the details change.' },
    { name: 'Songwriting', text: 'Lyrics and beat composition: fitting meaning into rhythm and a small number of words.' },
    { name: 'Singing', text: 'The part of music that is entirely live and entirely mine.' },
    { name: 'Sketching', text: 'Creative illustration, and the visual instinct I bring to interfaces.' },
    { name: 'Design', text: 'Poster creation and graphic design in Canva, plus video editing and content creation.' },
  ],
  community: 'Active member of the Rising Stars Community. I also volunteer and enjoy reading, research and learning new languages.',
  // Add real work here and it appears on the site: { title: 'Poem title', url: 'https://...', kind: 'Poem' }
  samples: [],
}
