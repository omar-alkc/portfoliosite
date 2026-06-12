// ---------------------------------------------------------------------------
// All site content lives in this file. Edit text here — no JSX knowledge
// needed. Components read from these objects and render automatically.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Omar Alqaysi",
  title: "Data Scientist & BI Analyst",
  location: "Baghdad, Iraq",
  email: "omaralqiysi94@gmail.com",
  phone: "+964 786 596 4019",
  tagline: "Turning raw data into decisions.",
  heroIntro:
    "Data & Business Intelligence leader with 4+ years of experience turning complex data into strategic insight — across fintech compliance, public transit, and machine learning.",
  about: [
    "I lead the AML Analytics & Screening Unit at Zain Cash, Iraq's largest mobile wallet, where I build the dashboards, automated reports, and monitoring systems that keep millions of transactions compliant.",
    "Outside fintech, I co-founded Transit Lab Baghdad — a civic-data initiative using GIS and data science to map and improve public transportation in Baghdad, working toward Iraq's first public-transit navigation app.",
    "My path is unconventional: I started as a civil engineer, earned a master's in Geomatics Engineering at Istanbul Technical University, and turned a fascination with spatial data into a career in data science. That mix of engineering discipline and analytical curiosity shapes how I work.",
  ],
  links: {
    github: "https://github.com/omar-alkc",
    linkedin: "https://linkedin.com/in/omar-alqaisi-2020/",
  },
  // Plain <a> hrefs don't get the Next.js basePath prefix automatically,
  // so it's included here. Keep in sync with basePath in next.config.ts.
  cvFile: "/portfoliosite/Omar-Alqaysi-CV.docx",
  // basePath prefix included — unoptimized next/image doesn't add it.
  portrait: "/portfoliosite/images/portrait.png",
  portraitBw: "/portfoliosite/images/portrait-about.png",
  stats: [
    { value: "4+", label: "Years in data & BI" },
    { value: "10+", label: "Projects shipped" },
    { value: "2", label: "Engineering degrees" },
    { value: "11", label: "Certifications" },
  ],
};

export type SkillGroup = { title: string; note: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis & BI",
    note: "Daily drivers",
    items: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Tableau", "Apache Superset", "Excel"],
  },
  {
    title: "Machine Learning & DL",
    note: "Modeling",
    items: ["Scikit-Learn", "TensorFlow", "Keras", "LSTM", "Time-series Forecasting", "Statistical Analysis"],
  },
  {
    title: "Geospatial & GIS",
    note: "Maps & space",
    items: ["ArcGIS Pro", "QGIS", "GeoPandas", "GTFS", "Remote Sensing"],
  },
  {
    title: "Visualization",
    note: "Telling the story",
    items: ["Plotly", "Dash", "Seaborn", "Matplotlib", "Streamlit"],
  },
  {
    title: "Cloud & Engineering",
    note: "Shipping it",
    items: ["AWS (EC2, S3)", "Docker", "Ubuntu", "Git", "PostgreSQL", "MySQL", "n8n"],
  },
  {
    title: "Domain Expertise",
    note: "Where I apply it",
    items: ["AML & Compliance", "Eastnets Screening", "Data Governance", "ETL & Warehousing", "Data Scraping", "Team Leadership"],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "AML Analytics Dashboard",
    category: "Fintech / Compliance",
    description:
      "Interactive dashboard connecting databases and Google Sheets to surface AML performance and investigation trends for Zain Cash — built on NGx-Admin with a Node.js + TypeScript backend and Redis caching.",
    tech: ["TypeScript", "Node.js", "Angular", "Redis", "SQL"],
  },
  {
    name: "Transit Lab Bot",
    category: "Civic Data / GIS",
    description:
      "Telegram bot guiding volunteers through collecting public-transport data across Baghdad, feeding a PostgreSQL database and S3 bucket on AWS — the data backbone for Iraq's first transit navigation app.",
    tech: ["Python", "Telegram API", "PostgreSQL", "AWS EC2", "S3"],
  },
  {
    name: "Air Quality Forecasting — Istanbul",
    category: "Master's Thesis",
    description:
      "LSTM-based deep learning models predicting PM2.5 and PM10 pollutant levels in Istanbul, integrating machine learning with environmental and geospatial science.",
    tech: ["TensorFlow", "LSTM", "Time-series", "Python"],
  },
  {
    name: "Skin Cancer Classification",
    category: "Deep Learning",
    description:
      "Convolutional neural network classifying nine distinct cancer cell types, deployed as a user-friendly Streamlit app to make the model accessible beyond the notebook.",
    tech: ["TensorFlow", "CNN", "Keras", "Streamlit"],
  },
  {
    name: "Football Goals Prediction",
    category: "Machine Learning",
    description:
      "Predictive model forecasting goal-scoring likelihood in football matches using Random Forest, XGBoost, and Logistic Regression — top-rated by project juries at Hamoye AI.",
    tech: ["XGBoost", "Random Forest", "Scikit-Learn"],
  },
  {
    name: "TikTok Trends Analyzer",
    category: "Web App",
    description:
      "Streamlit web app that fetches trending TikTok videos and hashtags and surfaces insights about what's gaining traction.",
    tech: ["Python", "Streamlit", "Data Scraping"],
  },
];

export const otherProjects: string[] = [
  "E-Scooter rides analysis — usage patterns & customer behavior",
  "Recipe site traffic prediction — DataCamp professional capstone",
  "Workload KPI dashboard — Plotly Dash, daily ops monitoring",
  "GTFS feed builder — bus routes, timetables & schedules for Baghdad",
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Zain Cash",
    location: "Baghdad, Iraq",
    role: "AML Analytics & Screening Unit Supervisor",
    period: "Sep 2024 — Present",
    current: true,
    summary:
      "Leading AML analytics for Iraq's largest mobile wallet — dashboards, automated reporting, and transaction monitoring across millions of transactions.",
    highlights: [
      "Built interactive Power BI dashboards monitoring transaction trends, customer behavior, and AML risk indicators",
      "Automated data extraction and periodic customer screening with SQL + Python, cutting manual workload",
      "Developed the Hosted Checkout transaction-monitoring system for compliance oversight",
      "Shipped two internal ops dashboards — one in Plotly Dash, one in Angular + Node.js",
    ],
  },
  {
    company: "Transit Lab Baghdad",
    location: "Baghdad, Iraq",
    role: "Data Scientist & Co-founder",
    period: "Jan 2024 — Present",
    current: true,
    summary:
      "Civic-data initiative improving Baghdad's public transportation with GIS and data science — building toward Iraq's first transit navigation app.",
    highlights: [
      "Built the volunteer data-collection pipeline: Telegram bot → PostgreSQL → AWS S3",
      "Deployed Apache Superset on Ubuntu servers for self-service team analytics",
      "Researched and deployed GTFS tooling for bus routes, timetables, and schedules",
      "Designed the company website and contributed to brand and documentation",
    ],
  },
  {
    company: "RMTeam International",
    location: "Istanbul, Turkey",
    role: "Data Science Intern",
    period: "Feb 2023 — Aug 2023",
    summary:
      "Statistical analysis and anomaly detection for a complex 400+ column dataset, delivering insight to technical and non-technical stakeholders.",
    highlights: [
      "Led development of an Isolation Forest model to flag anomalous records",
      "Established a 'data quality score' KPI measuring record proximity to anomaly status",
      "Delivered exploratory analysis, cleaning, and validation pipelines in Python + Pandas",
    ],
  },
  {
    company: "Hamoye AI",
    location: "Remote",
    role: "Data Science Intern",
    period: "Aug 2022 — Feb 2023",
    summary:
      "End-to-end machine learning projects — modeling, deployment, and presentation — earning top jury ratings on two key initiatives.",
    highlights: [
      "Built goal-prediction models with Random Forest, XGBoost, and Logistic Regression",
      "Trained a deep learning model classifying nine cancer cell types; deployed it as a Streamlit app",
      "Mastered Prophet for time-series forecasting",
    ],
  },
  {
    company: "Alqabas Company",
    location: "Karbala, Iraq",
    role: "Site Manager · Surveyor · Administrator",
    period: "2017 — 2021",
    summary:
      "The civil-engineering chapter: promoted from administrator to surveyor to site manager, running 15 buildings and a team of 25 workers.",
    highlights: [
      "Managed construction sites, procurement, and quality compliance",
      "Conducted site surveys aligning builds with drawing coordinates and elevations",
    ],
  },
];

export type Education = { degree: string; school: string; place: string; year: string };

export const education: Education[] = [
  {
    degree: "M.Sc. Geomatics Engineering",
    school: "Istanbul Technical University",
    place: "Istanbul, Turkey",
    year: "2024",
  },
  {
    degree: "B.Sc. Civil Engineering",
    school: "Isra University",
    place: "Amman, Jordan",
    year: "2017",
  },
];

export const certifications: string[] = [
  "Data Scientist Professional in Python — DataCamp",
  "Data Analyst with Python — DataCamp",
  "Excel Expert — Microsoft Office Specialist",
  "Analyzing & Visualizing Data with Excel — Microsoft",
  "Intermediate SQL — DataCamp",
  "Tableau (Intro & Analyzing Data) — DataCamp",
  "Hypothesis Testing in Python — DataCamp",
  "Intermediate Data Visualization with Seaborn — DataCamp",
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
  { name: "Turkish", level: "Limited working proficiency" },
];
