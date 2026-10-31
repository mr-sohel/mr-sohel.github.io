/**
 * Single source of truth for every fact on the site. Components and the
 * structured data in Layout.astro both read from here, so a number only ever
 * changes in one place.
 *
 * Source: Fresher_CV_for_Software_Engineer/mainResume after DevSkill course.pdf
 * Exceptions, each checked against the live source on 2026-10-31:
 * - CodeChef rating and LeetCode percentile use the live profile values.
 * - Projects are described from the code in each repo, never from the resume.
 */

export const person = {
  name: 'Md. Sohel Rana',
  headline: '.NET backend developer',
  email: 'mrsohelcse@gmail.com',
  location: 'Dhaka, Bangladesh',
  team: 'BUBT Mudbloods',
  university: 'Bangladesh University of Business and Technology',
  universityShort: 'BUBT',
  graduation: 'December 2026',
  resume: '/Md_Sohel_Rana_Resume.pdf',
  resumeFilename: 'Md_Sohel_Rana_Resume.pdf',
};

export const links = {
  github: 'https://github.com/mr-sohel',
  linkedin: 'https://www.linkedin.com/in/mrsohel/',
  codeforces: 'https://codeforces.com/profile/mr_sohel',
  codechef: 'https://www.codechef.com/users/mr_sohel',
  leetcode: 'https://leetcode.com/u/mr_sohel/',
  codolio: 'https://codolio.com/profile/mr_sohel',
  icpc: 'https://icpc.global/ICPCID/33QGYTL4FV6Q',
  cpCommunity: 'https://www.facebook.com/CPBUBT',
};

export const totals = {
  problems: '1500+',
  contests: '140+',
  students: '50+',
};

export const ratings = [
  { platform: 'Codeforces', rating: 1422, standing: 'Specialist, top 15%', href: links.codeforces },
  { platform: 'CodeChef', rating: 1652, standing: '3 Star, top 7%', href: links.codechef },
  { platform: 'LeetCode', rating: 1653, standing: 'Top 18%', href: links.leetcode },
];

export type Level = 'international' | 'regional' | 'inter' | 'intra';

export const levelLabels: Record<Level, string> = {
  international: 'International',
  regional: 'ICPC regional',
  inter: 'Inter-university',
  intra: 'Intra-university',
};

interface Result {
  event: string;
  result: string;
  field: string;
  /** One balloon per result. A problem-setting credit earns none. */
  level?: Level;
  balloons: number;
  proof?: { label: string; href: string };
}

export const results: Result[] = [
  {
    event: 'Meta Hacker Cup 2025',
    result: 'Advanced to Round 2',
    field: '13,779 participants',
    level: 'international',
    balloons: 1,
    proof: {
      label: 'Certificate',
      href: 'https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/24835990539367561',
    },
  },
  {
    event: 'ICPC Asia Dhaka Regional 2025',
    result: 'Honorable Mention',
    field: 'Onsite finals',
    level: 'regional',
    balloons: 1,
    proof: { label: 'Standings', href: 'https://bapsoj.org/contests/icpc-dhaka-onsite-2025/standings' },
  },
  {
    event: 'ICPC Asia Dhaka Regional 2024',
    result: '157th place',
    field: 'Onsite finals',
    level: 'regional',
    balloons: 1,
    proof: {
      label: 'Standings',
      href: 'https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings',
    },
  },
  {
    event: 'UAP Inter University Collaborative Contest 1.0 (Junior)',
    result: '2nd Runner-up',
    field: '80+ teams',
    level: 'inter',
    balloons: 1,
    proof: { label: 'Standings', href: 'https://toph.co/c/uap-inter-university-collaborative-1-0-junior/standings' },
  },
  {
    event: 'BUBT Intra University Programming Contest',
    result: '2-Time Champion',
    field: '100+ teams',
    level: 'intra',
    balloons: 2,
  },
  {
    event: 'BIUPC Summer 2026',
    result: 'Problem setter',
    field: 'BUBT intra-university',
    balloons: 0,
    proof: { label: 'Contest', href: 'https://toph.co/c/bubt-intra-university-biupc-summer-2026-junior' },
  },
];

export const skills = [
  { label: 'Languages', items: ['C#', 'C++', 'Python', 'SQL', 'TypeScript'] },
  { label: 'Backend', items: ['ASP.NET Core MVC', 'Web API', 'EF Core', 'SQL Server', 'REST APIs', 'Redis'] },
  {
    label: 'Engineering',
    items: ['OOP', 'SOLID', 'Clean Architecture', 'CQRS', 'Design Patterns', 'Git/GitHub', 'Unit Testing'],
  },
  {
    label: 'Frontend & DevOps',
    items: ['Angular', 'Razor', 'Tailwind CSS', 'Docker', 'AWS', 'GitHub Actions', 'Linux'],
  },
];

export interface Project {
  name: string;
  summary: string;
  /** What I personally built. Leave out until it is true. */
  role?: string;
  stack: string[];
  highlights?: { title: string; body: string }[];
  repo?: string;
  demo?: string;
  /** Placeholder card. Remove this flag once the project has real details. */
  placeholder?: boolean;
}

/**
 * To publish a project, replace the placeholder: set the name, summary and
 * stack, add highlights, a repo and a demo link, and delete `placeholder`.
 * Describe what the code does. Placeholders are left out of the structured data.
 */
export const projects: Project[] = [
  {
    name: 'Project one',
    summary: 'In progress. Details will cover the problem, my role, the stack and what I would improve.',
    stack: [],
    placeholder: true,
  },
  {
    name: 'Project two',
    summary: 'In progress. Details will cover the problem, my role, the stack and what I would improve.',
    stack: [],
    placeholder: true,
  },
];

export const instructor = {
  role: 'Competitive Programming Instructor',
  org: 'BUBT CP Community',
  orgHref: links.cpCommunity,
  dates: 'August 2024 – April 2026',
  start: '2024-08',
  end: '2026-04',
  points: [
    'Mentored 50+ students in C/C++, data structures, algorithms and competitive programming through weekly training sessions.',
    'Designed and organized programming contests on online judge platforms, including problem preparation and judging.',
  ],
};

export const education = {
  degree: 'BSc in Computer Science & Engineering',
  cgpa: '3.52 / 4.00',
  coursework: 'Data Structures, Algorithms, OOP, DBMS, Machine Learning',
};
