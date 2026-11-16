export const links = {
  email: "samirknbr@gmail.com",
  github: "https://github.com/samirkanbar",
  linkedin: "https://www.linkedin.com/in/samir-kanbar-874605302",
  resume: "/Kanbar_Samir_Resume.pdf",
  komp: "https://www.kompsports.co",
};

/** Timeline runs from the start of Komp to today. Months are "YYYY-MM". */
export const timeline = { start: "2023-08", end: "2026-12" };

export type Lane = {
  name: string;
  role: string;
  dates: string;
  segments: { from: string; to: string }[];
  notes: string[];
};

export const lanes: Lane[] = [
  {
    name: "Komp",
    role: "Founder",
    dates: "Aug 2023 – Present",
    segments: [{ from: "2023-08", to: "2026-11" }],
    notes: [
      "Cross-platform social app that helps FSU students find and organize pickup games.",
      "React Native and Expo Router client, serverless Python backend on AWS.",
      "Relational schema for users, follows, and gamification stats.",
    ],
  },
  {
    name: "Hot Take",
    role: "Team lead",
    dates: "Nov 2023 – Jan 2024",
    segments: [{ from: "2023-11", to: "2024-01" }],
    notes: [
      "Led a multidisciplinary team from UI/UX design to MVP launch of a campus social app.",
      "Full-stack architecture on React Native, AWS Lambda, API Gateway, and RDS.",
    ],
  },
  {
    name: "Aro AI",
    role: "Junior Developer",
    dates: "Summers 2024 & 2025",
    segments: [
      { from: "2024-05", to: "2024-08" },
      { from: "2025-05", to: "2025-08" },
    ],
    notes: [
      "Earned a return offer after building the marketing site and co-developing an incentive-based rewards system.",
      "Led an internal analytics dashboard that the team adopted in its workflows.",
      "Built and deployed a serverless backend with Python, Lambda, and API Gateway, with CI/CD through GitHub Actions.",
    ],
  },
  {
    name: "FSU Innovation Hub",
    role: "Project Facilitator",
    dates: "Aug 2024 – Present",
    segments: [{ from: "2024-08", to: "2026-11" }],
    notes: [
      "Led engineering, design, and business students through two full development cycles.",
      "Shipped an accessible parking app and a student engagement platform.",
    ],
  },
  {
    name: "Innovators at FSU",
    role: "President",
    dates: "Jan 2025 – Present",
    segments: [{ from: "2025-01", to: "2026-11" }],
    notes: ["President of Innovators at FSU since January 2025."],
  },
  {
    name: "Picklebit",
    role: "Contract Software Engineer",
    dates: "Jan – Aug 2026",
    segments: [{ from: "2026-01", to: "2026-08" }],
    notes: [
      "Sole engineer on a pickleball app with voice scoring, Apple Watch support, and an AI concierge.",
      "SwiftUI watch app with live scoring and HealthKit metrics synced over WatchConnectivity.",
      "Designed the PostgreSQL schema and Express.js API.",
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  summary: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Picklebit",
    tag: "Sole engineer, 2026",
    summary:
      "A pickleball app you can score by voice or from your wrist. I built the React Native app, a SwiftUI Apple Watch app with rules-based side-out logic and HealthKit metrics, the Express API, and a Langflow chat concierge.",
    stack: ["React Native", "SwiftUI", "HealthKit", "Express", "PostgreSQL", "Langflow"],
  },
  {
    name: "Inventory Logger",
    tag: "Client build, 2026",
    summary:
      "Two-sided ordering for a multi-location business. Staff submit shift orders from their phones and the owner sees them in real time. Timestamps are set by the server and each order locks in its prices, so history can't be rewritten.",
    stack: ["TypeScript", "PostgreSQL", "JWT auth"],
    href: "https://github.com/samirkanbar/inventory-logger",
    hrefLabel: "View code",
  },
  {
    name: "Hot Take",
    tag: "Team lead, 2023",
    summary:
      "A campus social app for student conversations. I led the team from UI/UX design to MVP launch and engineered the full stack.",
    stack: ["React Native", "AWS Lambda", "API Gateway", "RDS"],
    href: "https://github.com/samirkanbar/hottake-frontend",
    hrefLabel: "View code",
  },
];

export type Skill = { name: string; usedIn?: string[] };

export const skills: { group: string; items: Skill[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", usedIn: ["Picklebit app", "Inventory Logger"] },
      { name: "Python", usedIn: ["Aro AI serverless backend", "Komp backend"] },
      { name: "Swift", usedIn: ["Picklebit Apple Watch app"] },
      { name: "Java", usedIn: ["School admissions system"] },
      { name: "C++" },
      { name: "SQL" },
      { name: "HTML" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "React Native", usedIn: ["Komp", "Picklebit", "Hot Take"] },
      { name: "Expo", usedIn: ["Komp", "Picklebit"] },
      { name: "SwiftUI", usedIn: ["Picklebit Apple Watch app"] },
      { name: "Express.js", usedIn: ["Picklebit API"] },
      { name: "Node.js" },
      { name: "Serverless Framework", usedIn: ["Aro AI", "Komp"] },
      { name: "Langflow", usedIn: ["Picklebit AI concierge"] },
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      { name: "PostgreSQL", usedIn: ["Picklebit", "Inventory Logger"] },
      { name: "AWS Lambda", usedIn: ["Aro AI", "Komp", "Hot Take"] },
      { name: "API Gateway", usedIn: ["Aro AI", "Komp", "Hot Take"] },
      { name: "RDS", usedIn: ["Komp", "Hot Take"] },
      { name: "GitHub Actions", usedIn: ["Aro AI", "Komp"] },
      { name: "HealthKit", usedIn: ["Picklebit Apple Watch app"] },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "Cognito" },
      { name: "Amplify" },
      { name: "EC2" },
      { name: "CloudFormation" },
      { name: "CloudWatch" },
    ],
  },
];

export const leadership: { title: string; org: string; dates?: string }[] = [
  { title: "Presidential Scholar", org: "Presidential Scholars Program, Florida State University" },
  { title: "President", org: "Innovators at FSU", dates: "Jan 2025 – Present" },
  { title: "External Vice President", org: "Society of Asian Scientists and Engineers", dates: "Aug 2025 – Present" },
  { title: "Outreach Coordinator", org: "Arab Student Union", dates: "Aug 2025 – Present" },
  { title: "Xerox Award", org: "Innovation and Information Technology", dates: "May 2023" },
];
