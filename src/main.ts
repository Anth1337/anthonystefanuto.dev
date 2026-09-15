import './style.css';
import { skillLogos } from './skill-logos';

// ── Types ──

interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  highlights?: string[];
  links: { label: string; url: string }[];
}

interface BlogPost {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
}

// interface Track { title: string; artist: string; duration: string; color: string; }
// interface BookRec { title: string; author: string; cover: string; palette: 'teal'|'warm'|'cool'; why: string; }
// interface ReadItem { title: string; author: string; }
// interface Team { name: string; league: string; note: string; color: string; initial: string; }
// interface CollageImg { src: string; cls: string; }
//
// type Interest =
//   | { num: string; name: string; kicker: string; tagline: string; type: 'collage'; images: CollageImg[] }
//   | { num: string; name: string; kicker: string; tagline: string; type: 'spotify'; tracks: Track[] }
//   | { num: string; name: string; kicker: string; tagline: string; type: 'books'; recommendations: BookRec[]; readList: ReadItem[] }
//   | { num: string; name: string; kicker: string; tagline: string; type: 'teams'; teams: Team[] };

// ── Data ──

const projects: Project[] = [
  {
    "name": "SunPay — Group Payments",
    "description": "Group payment app that splits a single purchase across members and charges their saved cards through Stripe. Built with Next.js and TypeScript, with a SQLite double-entry ledger, signed handoffs, and Auth0 step-up MFA. Won Best Authentication Integration at HackThe6ix 2026.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Auth0",
      "SQLite",
      "Hackathon"
    ],
    "id": "sunpay",
    "summary": "Split a group purchase and charge everyone’s share through one payment flow.",
    "links": [],
    "highlights": [
      "Splits a group purchase across members and charges their saved cards through the Stripe API.",
      "Tracks balances with a SQLite double-entry ledger and verifies handoffs with signatures and Auth0 step-up MFA.",
      "Won Best Authentication Integration at HackThe6ix 2026."
    ]
  },
  {
    "name": "E-Commerce Conversion Prediction Model",
    "description": "Machine learning pipeline that predicts purchase likelihood from user session behavior. Built with gradient boosting and feature engineering on clickstream data to help online retailers prioritize high-intent shoppers.",
    "tags": [
      "Machine Learning",
      "Python",
      "Data Science"
    ],
    "id": "ecommerce-conversion",
    "summary": "Predict which shopping sessions are most likely to become purchases.",
    "links": [],
    "highlights": [
      "Analyzed 12.3K e-commerce sessions with exploratory analysis, feature engineering, and leakage-safe preprocessing.",
      "Trained and evaluated logistic regression, decision tree, random forest, and XGBoost models.",
      "Used F1, ROC-AUC, and PR-AUC to evaluate a dataset with a 15.5% positive class."
    ]
  },
  {
    "name": "Temporal Action Detection on THUMOS14",
    "description": "Deep learning model that localizes and classifies human actions within untrimmed video on the THUMOS14 benchmark. Combines temporal convolutional networks with proposal-based detection to identify when actions start and end.",
    "tags": [
      "Computer Vision",
      "Deep Learning",
      "PyTorch"
    ],
    "id": "temporal-action-detection",
    "summary": "Identify what actions happen in a video—and exactly when they happen.",
    "links": [],
    "highlights": [
      "Compared I3D and VideoMAE v2 with CNN and ActionFormer detection heads across four configurations.",
      "Worked with 413 untrimmed videos spanning 20 action classes.",
      "Trained on an NVIDIA A10G GPU through Modal and authored an IEEE paper on the performance gap between CNN and video transformer models."
    ]
  },
  {
    "name": "Macrova — AI-Powered Nutrition App",
    "description": "Mobile-friendly nutrition tracker that uses AI to log meals from photos and natural language, then generates personalized macro and meal recommendations based on user goals.",
    "tags": [
      "AI",
      "Full Stack",
      "Mobile"
    ],
    "id": "macrova",
    "summary": "Log meals with AI and build personalized nutrition plans around your goals.",
    "links": [],
    "highlights": [
      "Generates personalized 1–7 day meal plans using deterministic backtracking search.",
      "Uses an LLM feedback loop to generate USDA-validated recipes when a plan is infeasible, keeping the constraint solver free of LLM calls.",
      "Pairs a Flutter mobile client with a Dockerized FastAPI backend, 60+ pytest cases, and CI/CD."
    ]
  },
  {
    "name": "RiskGuard — AI Trading Risk Layer",
    "description": "Real-time risk management layer for retail trading platforms. Uses an LLM agent to analyze trade intent, surface portfolio exposure warnings, and block high-risk orders before execution. Built in 36 hours at QHacks 2026.",
    "tags": [
      "AI",
      "FinTech",
      "Hackathon"
    ],
    "id": "riskguard",
    "summary": "Surface portfolio risks and flag high-risk orders before a trade goes through.",
    "links": []
  },
  {
    "name": "MLB Breakout Player Detector",
    "description": "Predictive model that flags potential breakout MLB players for the upcoming season using historical statcast data, age curves, and underlying performance metrics.",
    "tags": [
      "Machine Learning",
      "Sports Analytics",
      "Python"
    ],
    "id": "mlb-breakout",
    "summary": "Find potential breakout MLB players using historical performance data.",
    "links": []
  },
  {
    "name": "Campus Robotics Dashboard",
    "description": "Web dashboard for monitoring and coordinating a fleet of campus robots, with live telemetry, task assignment, and status visualization. Built for the campus robotics team.",
    "tags": [
      "Web App",
      "Robotics",
      "Full Stack"
    ],
    "id": "campus-robotics",
    "summary": "Monitor campus robots, assign tasks, and explore live fleet telemetry.",
    "links": []
  },
  {
    "name": "Video Game Market Tracker",
    "description": "Aggregator that tracks pricing, sales, and player counts across major game storefronts. Surfaces trends and alerts users when titles hit target prices.",
    "tags": [
      "Web App",
      "Data Pipeline"
    ],
    "id": "game-market-tracker",
    "summary": "Track game prices, player counts, and sales across major storefronts.",
    "links": []
  },
  {
    "name": "Interactive Pet Game",
    "description": "Browser-based virtual pet game where players feed, train, and care for an animated companion. Features state persistence, animations, and a small economy loop.",
    "tags": [
      "Game Dev",
      "JavaScript"
    ],
    "id": "interactive-pet",
    "summary": "Feed, train, and care for a virtual companion in your browser.",
    "links": []
  },
  {
    "name": "Yarkovsky Drift Prediction Model & Web App",
    "description": "ML model that predicts asteroid orbital drift caused by the Yarkovsky thermal effect, paired with an interactive web app for exploring predictions on near-Earth objects.",
    "tags": [
      "Machine Learning",
      "Astronomy",
      "Web App"
    ],
    "id": "yarkovsky-drift",
    "summary": "Explore machine-learning predictions of thermal drift in asteroid orbits.",
    "links": []
  },
  {
    "name": "Cadence — Habit and Health Tracker",
    "description": "Habit-tracking app focused on daily consistency, with streak tracking, health metric integration, and a clean visual history of progress over time.",
    "tags": [
      "Mobile",
      "Full Stack",
      "Health Tech"
    ],
    "id": "cadence",
    "summary": "Track habits, health metrics, and daily progress in one place.",
    "links": []
  },
  {
    "name": "Multipurpose Discord Bot",
    "description": "Modular Discord bot bundling moderation, music playback, custom commands, and server utilities into one configurable package. Designed to be easy to deploy and extend per-server.",
    "tags": [
      "Discord.js",
      "Node.js",
      "Bot"
    ],
    "id": "discord-bot",
    "summary": "Bring moderation, music, and configurable utilities to a Discord server.",
    "links": []
  }
];

const blogPosts: BlogPost[] = [
  { tag: 'Tech', date: 'Mar 10, 2026', readTime: '6 min read', title: 'How I Think About Building Side Projects', excerpt: "Side projects taught me more than any course ever did. Here's the framework I use to pick ideas, stay motivated, and actually ship something.", image: 'Blog+1' },
];

// const interests: Interest[] = [
//   { num: '01', name: 'Cooking', kicker: 'in the kitchen', tagline: 'Chefin it up with my roommates.', type: 'collage',
//     images: [
//       { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', cls: 'c-big' },
//       { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', cls: 'c-tall' },
//       { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', cls: 'c-wide' },
//       { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600', cls: 'c-sq-sm' },
//     ] },
//   { num: '02', name: 'Reading', kicker: 'between the pages', tagline: 'Lost in a good book, then writing notes in the margins.', type: 'books',
//     recommendations: [
//       { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', cover: 'Almanack', palette: 'teal', why: 'Sharp first-principles thinking on wealth, happiness, and how to live. The book I quote most.' },
//       { title: 'Shoe Dog', author: 'Phil Knight', cover: 'Shoe Dog', palette: 'warm', why: 'Honest, messy origin story of Nike. Builders and anyone stuck on "what if" should read this.' },
//       { title: "Man's Search for Meaning", author: 'Viktor Frankl', cover: "Man's Search", palette: 'cool', why: 'Short, heavy, clarifying. Reframes how I think about hard days, ownership, and purpose.' },
//     ],
//     readList: [
//       { title: 'Atomic Habits', author: 'James Clear' }, { title: 'Deep Work', author: 'Cal Newport' },
//       { title: 'The Psychology of Money', author: 'Morgan Housel' }, { title: 'Range', author: 'David Epstein' },
//       { title: 'Zero to One', author: 'Peter Thiel' }, { title: 'Meditations', author: 'Marcus Aurelius' },
//       { title: 'The Lean Startup', author: 'Eric Ries' }, { title: 'Sapiens', author: 'Yuval Harari' },
//       { title: 'The Pragmatic Programmer', author: 'Hunt & Thomas' }, { title: 'Born a Crime', author: 'Trevor Noah' },
//     ] },
//   { num: '03', name: 'Fitness', kicker: 'iron & pavement', tagline: 'Early runs and late lifts — clearing my head one rep at a time.', type: 'collage',
//     images: [
//       { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', cls: 'c-big' },
//       { src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600', cls: 'c-tall' },
//       { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1486218119243-13883505764c?w=600', cls: 'c-wide' },
//       { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600', cls: 'c-sq-sm' },
//     ] },
//   { num: '04', name: 'Teams', kicker: 'game day', tagline: 'Living and dying by every whistle, every weekend.', type: 'teams',
//     teams: [
//       { name: 'Toronto Blue Jays', league: 'MLB', note: 'From the SkyDome roar to every late-inning comeback.', color: '#134A8E', initial: 'J' },
//       { name: 'Toronto Maple Leafs', league: 'NHL', note: 'Generational heartbreak, eternal hope.', color: '#00205B', initial: '⧫' },
//       { name: 'Green Bay Packers', league: 'NFL', note: 'Small town, big title count. Lambeau forever.', color: '#203731', initial: 'G' },
//     ] },
//   { num: '05', name: 'Life', kicker: 'the in-between', tagline: 'Small airports, window seats, and unfamiliar streets.', type: 'collage',
//     images: [
//       { src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800', cls: 'c-big' },
//       { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600', cls: 'c-tall' },
//       { src: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600', cls: 'c-wide' },
//       { src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600', cls: 'c-sq-lg' },
//       { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600', cls: 'c-sq-sm' },
//     ] },
//   { num: '06', name: 'Music', kicker: 'on repeat', tagline: "The current top 5 — the songs I can't stop replaying.", type: 'spotify',
//     tracks: [
//       { title: 'Redbone', artist: 'Childish Gambino', duration: '5:27', color: '#c44a36' },
//       { title: 'Motion Sickness', artist: 'Phoebe Bridgers', duration: '4:03', color: '#6b9fc4' },
//       { title: 'Nights', artist: 'Frank Ocean', duration: '5:07', color: '#3a6b5a' },
//       { title: 'Dreams', artist: 'Fleetwood Mac', duration: '4:17', color: '#8a6b3a' },
//       { title: 'The Less I Know The Better', artist: 'Tame Impala', duration: '3:38', color: '#b03a5c' },
//     ] },
// ];

// ── Helpers ──

function el(tag: string, attrs?: Record<string, string>, ...children: (string | Node)[]): HTMLElement {
  const element = document.createElement(tag);
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'className') element.className = value;
      else if (key === 'innerHTML') element.innerHTML = value;
      else element.setAttribute(key, value);
    }
  }
  for (const child of children) {
    if (typeof child === 'string') element.appendChild(document.createTextNode(child));
    else element.appendChild(child);
  }
  return element;
}

function placeholder(w: number, h: number, text: string): string {
  return `https://placehold.co/${w}x${h}/1a1a1a/e0e0e0?text=${encodeURIComponent(text)}`;
}

function halftoneImg(src: string, alt: string, className = ''): HTMLElement {
  const wrap = el('div', { className: `halftone ${className}`.trim() });
  wrap.appendChild(el('img', { src, alt }));
  return wrap;
}

function socialLinks(containerClass: string): HTMLElement {
  const div = el('div', { className: containerClass });
  const socials = [
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fa-brands fa-x-twitter', label: 'Twitter / X' },
    { icon: 'fa-brands fa-github', label: 'GitHub' },
    { icon: 'fa-solid fa-envelope', label: 'Email' },
  ];
  for (const s of socials) {
    const a = el('a', { href: '#', 'aria-label': s.label });
    a.innerHTML = `<i class="${s.icon}"></i>`;
    div.appendChild(a);
  }
  return div;
}

// ── Section Builders ──

function buildNav(): HTMLElement {
  const nav = document.createElement('nav');
  const container = el('div', { className: 'container' });
  const logo = el('a', { href: '#hero', className: 'logo' }, 'Anthony Stefanuto');
  container.appendChild(logo);
  const links = el('div', { className: 'nav-links' });
  const navItems: [string, string][] = [
    ['#about', 'about'],
    // ['#personal', 'interests'], // Temporarily hidden.
    ['#projects', 'projects'], ['#experience', 'experience'],
    ['#education', 'education'], ['#skills', 'skills'], ['#blog', 'my mind'],
  ];
  for (const [href, text] of navItems) links.appendChild(el('a', { href }, text));
  container.appendChild(links);
  const hamburger = el('button', { className: 'hamburger', 'aria-label': 'Toggle menu' });
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  container.appendChild(hamburger);
  nav.appendChild(container);
  return nav;
}

function buildHero(): HTMLElement {
  const section = el('section', { id: 'hero' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('h1', { className: 'hero-name' }, 'Anthony Stefanuto'));
  container.appendChild(socialLinks('hero-socials'));
  section.appendChild(container);
  return section;
}

function buildAbout(): HTMLElement {
  const section = el('section', { id: 'about', className: 'section' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('p', { className: 'section-label' }, 'about'));
  const content = el('div', { className: 'about-content' });
  const text = el('div', { className: 'about-text' });
  text.appendChild(el('p', {}, "Hi, I'm Anthony — a Computer Science student at Western University with a passion for building things that live on the internet. I love turning complex problems into clean, intuitive solutions through code. When I'm not in front of a screen, you'll find me in the kitchen experimenting with new recipes, at the gym, or lost in a good book."));
  content.appendChild(text);
  container.appendChild(content);
  container.appendChild(el('hr', { className: 'section-divider', style: 'margin-top: 64px;' }));
  section.appendChild(container);
  return section;
}

// // ── Interests grid + modal ──
//
// function buildInterestsModal(item: Interest): HTMLElement {
//   const overlay = el('div', { className: 'int-modal' });
//   const inner = el('div', { className: 'int-modal-inner' });
//
//   const back = el('button', { className: 'int-close' });
//   back.innerHTML = '<i class="fa-solid fa-arrow-left"></i> back';
//   back.addEventListener('click', () => close());
//   inner.appendChild(back);
//
//   inner.appendChild(el('div', { className: 'int-kicker' }, item.kicker));
//   inner.appendChild(el('h2', { className: 'int-title' }, item.name));
//   inner.appendChild(el('p', { className: 'int-tagline' }, item.tagline));
//
//   if (item.type === 'spotify') {
//     const wrap = el('div', { className: 'spotify-wrap' });
//     const head = el('div', { className: 'spotify-head' });
//     head.innerHTML = '<i class="fa-brands fa-spotify" style="font-size:1.4rem"></i><span>On Repeat</span>';
//     wrap.appendChild(head);
//     wrap.appendChild(el('div', { className: 'spotify-title' }, 'My Top 5'));
//     item.tracks.forEach((t, i) => {
//       const row = el('div', { className: 'track-row' });
//       row.appendChild(el('div', { className: 'track-num' }, String(i + 1)));
//       const cov = el('div', { className: 'track-cover', style: `background:${t.color}` });
//       cov.innerHTML = '<i class="fa-solid fa-music"></i>';
//       row.appendChild(cov);
//       const info = el('div');
//       info.appendChild(el('div', { className: 'track-title' }, t.title));
//       info.appendChild(el('div', { className: 'track-artist' }, t.artist));
//       row.appendChild(info);
//       row.appendChild(el('div', { className: 'track-duration' }, t.duration));
//       wrap.appendChild(row);
//     });
//     inner.appendChild(wrap);
//   } else if (item.type === 'books') {
//     const recSect = el('div', { style: 'margin-bottom:3rem' });
//     recSect.appendChild(el('div', { className: 'books-sect-label' }, "3 I'd recommend"));
//     const recGrid = el('div', { className: 'rec-grid' });
//     item.recommendations.forEach(r => {
//       const card = el('div', { className: 'rec-card' });
//       card.appendChild(el('div', { className: `rec-cover ${r.palette}` }, r.cover));
//       card.appendChild(el('div', { className: 'rec-title' }, r.title));
//       card.appendChild(el('div', { className: 'rec-author' }, r.author));
//       card.appendChild(el('div', { className: 'rec-why' }, r.why));
//       recGrid.appendChild(card);
//     });
//     recSect.appendChild(recGrid);
//     inner.appendChild(recSect);
//     const readSect = el('div');
//     readSect.appendChild(el('div', { className: 'books-sect-label' }, "What I've read recently"));
//     const list = el('div', { className: 'read-list' });
//     item.readList.forEach(b => {
//       const row = el('div', { className: 'read-item' });
//       row.appendChild(el('span', { className: 'read-item-title' }, b.title));
//       row.appendChild(el('span', { className: 'read-item-author' }, b.author));
//       list.appendChild(row);
//     });
//     readSect.appendChild(list);
//     inner.appendChild(readSect);
//   } else if (item.type === 'teams') {
//     const grid = el('div', { className: 'teams-grid' });
//     item.teams.forEach(t => {
//       const card = el('div', { className: 'team-card' });
//       card.appendChild(el('div', { className: 'team-crest', style: `background:${t.color}` }, t.initial));
//       card.appendChild(el('div', { className: 'team-name' }, t.name));
//       card.appendChild(el('div', { className: 'team-league' }, t.league));
//       card.appendChild(el('div', { className: 'team-note' }, t.note));
//       grid.appendChild(card);
//     });
//     inner.appendChild(grid);
//   } else {
//     const col = el('div', { className: 'collage' });
//     item.images.forEach(img => {
//       const cell = el('div', { className: `cell ${img.cls}` });
//       cell.appendChild(el('img', { src: img.src, alt: '' }));
//       col.appendChild(cell);
//     });
//     inner.appendChild(col);
//   }
//
//   overlay.appendChild(inner);
//
//   const close = () => {
//     overlay.remove();
//     document.body.style.overflow = '';
//     window.removeEventListener('keydown', onKey);
//   };
//   const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
//   overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
//   window.addEventListener('keydown', onKey);
//   document.body.style.overflow = 'hidden';
//
//   return overlay;
// }
//
// function buildPersonal(): HTMLElement {
//   const section = el('section', { id: 'personal', className: 'section' });
//   const container = el('div', { className: 'container' });
//   container.appendChild(el('p', { className: 'section-label' }, 'interests'));
//
//   const grid = el('div', { className: 'int-grid' });
//   interests.forEach(item => {
//     const box = el('div', { className: 'int-box' });
//     box.appendChild(el('div', { className: 'int-num' }, item.num));
//     box.appendChild(el('div', { className: 'int-name' }, item.name));
//     const cta = el('div', { className: 'int-cta' });
//     cta.appendChild(el('span', { className: 'int-cta-label' }, 'Explore'));
//     cta.appendChild(el('span', { className: 'int-arrow' }, '↗'));
//     box.appendChild(cta);
//     box.addEventListener('click', () => {
//       document.body.appendChild(buildInterestsModal(item));
//     });
//     grid.appendChild(box);
//   });
//   container.appendChild(grid);
//   container.appendChild(el('hr', { className: 'section-divider', style: 'margin-top: 64px;' }));
//   section.appendChild(container);
//   return section;
// }

function buildExperience(): HTMLElement {
  const section = el('section', { id: 'experience', className: 'section' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('p', { className: 'section-label' }, 'experience'));
  container.appendChild(halftoneImg(placeholder(700, 394, 'Workspace'), 'Work environment', 'experience-hero'));
  const timeline = el('div', { className: 'experience-timeline' });

  const experiences = [
    {
      company: 'KPMG',
      date: 'May 2026 — Present',
      role: 'Software Engineer',
      logo: '/logos/kpmg_canada_logo.jpeg',
      description: 'Across two terms at KPMG, engineered 10+ JavaScript intranet pages backed by the SharePoint REST API, processing 500+ firmwide submissions and cutting turnaround by 45%. Automated SharePoint cleanup with PowerShell across 400+ site collections, recovering 50+ TB of storage with dry runs and batching. Developed an English/French translation agent in Copilot Studio with MCP integration, cutting mistranslations of KPMG-specific terms by 99%.',
    },
    {
      company: 'KILOGRAPH',
      date: 'May 2026 — Present',
      role: 'Co-Founder',
      logo: '/logos/kilograph_logo.jpeg',
      description: 'Grew to 3 paying B2B clients in four months on a three-person founding team, owning product, sales, technical consultations, and hands-on client deployments. Co-created Decision Schema, infrastructure that makes companies AI-legible by turning offers, pricing, and proof into signals agentic search can trust and recommend.',
    },
    {
      company: 'PDA Evaluations',
      date: 'Jan 2026 — May 2026',
      role: 'Software Engineer',
      logo: '/logos/pda_evaluations_logo.jpeg',
      description: 'Built a stat-tracking platform with React and TypeScript on Cloudflare and a Node.js REST API on AWS EC2, serving 30+ users and reducing manual data entry by 75%. Migrated 20K+ historical records from Google Sheets to a normalized PostgreSQL database using Sequelize migrations with zero data loss. Added scheduled health checks to sustain 99%+ uptime and automated CI/CD deployments gated on tests and staging.',
    },
    {
      company: 'KPMG',
      date: 'May 2025 — Aug 2025',
      role: 'Solutions Engineer Intern',
      logo: '/logos/kpmg_canada_logo.jpeg',
      description: 'Co-led the firmwide rollout of Microsoft Copilot to 10,000+ employees, ensuring smooth enablement across the organization. Collaborated in an Agile team with daily touch bases, improving cross-team efficiency by 15%. Worked with firm partners to implement site governance and provide compliance guidance. Designed and developed 20+ SharePoint and web pages, improving knowledge sharing for thousands of employees. Created Power BI visualizations to quantify support request trends, directly informing documentation strategy that cut repeat inquiries by 30%.',
    },
    {
      company: 'Western Developer Society',
      date: 'Oct 2024 — May 2025',
      role: 'Software Developer',
      logo: '/logos/western_dev_society_logo.jpeg',
      description: 'Managed and reviewed 50+ push, pull, and merge requests, ensuring code quality and seamless integration. Applied Agile methodologies through iterative development and sprint planning. Collaborated with project managers during regular meetings to refine the app and address technical challenges. Enhanced mobile UI using React Native and Tailwind CSS, resulting in nearly 20% faster navigation and improved readability across the app.',
    },
  ];

  for (const experience of experiences) {
    const entry = el('div', { className: 'timeline-entry' });
    if (experience.logo) {
      entry.appendChild(el('img', { className: 'timeline-logo', src: experience.logo, alt: `${experience.company} logo` }));
    }
    const header = el('div', { className: 'exp-header' });
    header.appendChild(el('span', { className: 'exp-company' }, experience.company));
    header.appendChild(el('span', { className: 'exp-date' }, experience.date));
    entry.appendChild(header);
    entry.appendChild(el('p', { className: 'exp-role' }, experience.role));
    entry.appendChild(el('p', { className: 'exp-desc' }, experience.description));
    timeline.appendChild(entry);
  }

  container.appendChild(timeline);
  container.appendChild(el('hr', { className: 'section-divider', style: 'margin-top: 64px;' }));
  section.appendChild(container);
  return section;
}

function buildEducation(): HTMLElement {
  const section = el('section', { id: 'education', className: 'section' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('p', { className: 'section-label' }, 'education'));
  const entry = el('div', { className: 'education-entry' });
  entry.appendChild(el('img', { className: 'education-logo', src: '/logos/westernuniversity_logo.jpeg', alt: 'Western University logo' }));
  const details = el('div', { className: 'education-details' });
  details.appendChild(el('h3', {}, 'Western University'));
  details.appendChild(el('p', { className: 'education-degree' }, 'BS, Computer Science'));
  details.appendChild(el('p', { className: 'education-grad' }, 'Expected Graduation, May 2028'));
  details.appendChild(el('p', { className: 'education-courses' }, 'Relevant Courses: Data Structures & Algorithms, Information Systems & Design, Software Engineering, Statistics, Databases, Machine Learning, Deep Learning & Computer Vision, Operating Systems'));
  entry.appendChild(details);
  container.appendChild(entry);
  container.appendChild(el('hr', { className: 'section-divider', style: 'margin-top: 64px;' }));
  section.appendChild(container);
  return section;
}

function buildSkills(): HTMLElement {
  const section = el('section', { id: 'skills', className: 'section', 'aria-labelledby': 'skills-heading' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('h2', { id: 'skills-heading', className: 'section-label' }, 'technical skills'));
  const groups: [string, string[]][] = [
    ['Languages & Web', ['Python', 'Java', 'C', 'C++', 'TypeScript', 'JavaScript', 'Dart', 'SQL', 'R', 'Bash', 'PowerShell', 'HTML', 'CSS']],
    ['Frameworks & Libraries', ['React', 'Next.js', 'Flutter', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Tailwind CSS', 'Sequelize', 'Pydantic', 'D3.js']],
    ['Data & Machine Learning', ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Matplotlib', 'Seaborn', 'Hugging Face', 'LangChain', 'LangGraph', 'Power BI', 'Spark']],
    ['Databases', ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Snowflake']],
    ['Cloud & DevOps', ['AWS / EC2', 'Cloudflare', 'Docker', 'CI/CD', 'GitHub Actions', 'REST APIs', 'Modal']],
    ['Developer Tools', ['Git', 'GitHub', 'Vite', 'VS Code', 'Jupyter', 'Jira', 'Figma', 'Claude Code', 'Cursor']],
  ];
  const grid = el('div', { className: 'skills-grid' });
  for (const [category, skills] of groups) {
    const group = el('div', { className: 'skill-group' });
    group.appendChild(el('h3', {}, category));
    const list = el('ul', { className: 'skill-list' });
    for (const skill of skills) {
      const item = el('li');
      item.appendChild(el('img', { src: skillLogos[skill], alt: '', width: '24', height: '24', loading: 'lazy', className: 'skill-logo' }));
      item.appendChild(el('span', {}, skill));
      list.appendChild(item);
    }
    group.appendChild(list);
    grid.appendChild(group);
  }
  container.appendChild(grid);
  container.appendChild(el('hr', { className: 'section-divider', style: 'margin-top: 64px;' }));
  section.appendChild(container);
  return section;
}

function projectPreview(project: Project): HTMLElement {
  const preview = el('div', { className: 'project-preview' });
  const fallback = () => preview.replaceChildren(
    el('span', { className: 'project-preview-name' }, project.name),
    el('span', { className: 'project-preview-note' }, 'Preview coming soon'),
  );
  if (project.image) {
    const image = el('img', { src: project.image.src, alt: project.image.alt, loading: 'lazy', decoding: 'async' });
    image.addEventListener('error', fallback, { once: true });
    preview.appendChild(image);
  } else fallback();
  return preview;
}

function projectLinks(project: Project): HTMLElement {
  const links = el('div', { className: 'project-links' });
  for (const link of project.links) {
    if (!link.label.trim() || !/^https?:\/\//i.test(link.url)) continue;
    links.appendChild(el('a', { href: link.url, target: '_blank', rel: 'noopener noreferrer',
      'aria-label': `${project.name}: ${link.label} (opens in a new tab)`,
    }, link.label, el('span', { 'aria-hidden': 'true' }, ' ↗')));
  }
  return links;
}

function openProject(project: Project, trigger: HTMLElement): void {
  const dialog = document.createElement('dialog');
  dialog.className = 'project-dialog';
  dialog.setAttribute('aria-labelledby', `${project.id}-detail-title`);
  const close = el('button', { type: 'button', className: 'project-close', autofocus: '' }, 'Close ×');
  close.addEventListener('click', () => dialog.close());
  dialog.appendChild(close);
  dialog.appendChild(el('p', { className: 'project-detail-label' }, 'Project overview'));
  dialog.appendChild(el('h2', { id: `${project.id}-detail-title` }, project.name));
  dialog.appendChild(projectPreview(project));
  dialog.appendChild(el('p', { className: 'project-detail-description' }, project.description));

  // Additional details supplied in the resumes; other projects use their existing overview.
  const details = project.highlights;
  if (details) {
    dialog.appendChild(el('h3', {}, 'Highlights'));
    const list = el('ul', { className: 'project-highlights' });
    details.forEach(detail => list.appendChild(el('li', {}, detail)));
    dialog.appendChild(list);
  }
  dialog.appendChild(el('h3', {}, 'Technologies & focus'));
  const tags = el('div', { className: 'tech-tags' });
  project.tags.forEach(tag => tags.appendChild(el('span', {}, tag)));
  dialog.appendChild(tags);
  const links = projectLinks(project);
  if (links.childElementCount) dialog.appendChild(links);
  const previousOverflow = document.body.style.overflow;
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    dialog.remove();
    trigger.focus({ preventScroll: true });
  }, { once: true });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  document.body.appendChild(dialog);
  document.body.style.overflow = 'hidden';
  dialog.showModal();
}

function buildProjects(): HTMLElement {
  const section = el('section', { id: 'projects', className: 'section' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('p', { className: 'section-label' }, 'projects'));
  container.appendChild(el('p', { className: 'work-intro' }, 'check out some of my work.'));
  const grid = el('div', { className: 'project-grid' });
  for (const proj of projects) {
    const card = el('article', { className: 'project-card', 'aria-labelledby': `${proj.id}-title` });
    const preview = el('button', { type: 'button', className: 'project-preview-button', 'aria-label': `View ${proj.name} details`, 'aria-haspopup': 'dialog' });
    preview.appendChild(projectPreview(proj));
    preview.addEventListener('click', () => openProject(proj, preview));
    card.appendChild(preview);
    const body = el('div', { className: 'project-card-body' });
    body.appendChild(el('h3', { id: `${proj.id}-title` }, proj.name));
    body.appendChild(el('p', { className: 'project-desc' }, proj.summary));
    const tags = el('div', { className: 'tech-tags' });
    for (const tag of proj.tags.slice(0, 3)) tags.appendChild(el('span', {}, tag));
    if (proj.tags.length > 3) tags.appendChild(el('span', { 'aria-label': `${proj.tags.length - 3} more technologies; view details for the full list` }, `+${proj.tags.length - 3}`));
    body.appendChild(tags);
    const actions = el('div', { className: 'project-actions' });
    const links = projectLinks(proj);
    if (links.childElementCount) actions.appendChild(links);
    const more = el('button', { type: 'button', className: 'project-open', 'aria-label': `View ${proj.name} details`, 'aria-haspopup': 'dialog' }, 'View details →');
    more.addEventListener('click', () => openProject(proj, more));
    actions.appendChild(more);
    body.appendChild(actions);
    card.appendChild(body);
    grid.appendChild(card);
  }
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

function buildBlog(): HTMLElement {
  const section = el('section', { id: 'blog', className: 'section' });
  const container = el('div', { className: 'container' });
  container.appendChild(el('p', { className: 'section-label' }, 'my mind'));
  const grid = el('div', { className: 'blog-grid' });
  for (const post of blogPosts) {
    const card = el('article', { className: 'blog-card' });
    const meta = el('div', { className: 'blog-meta' });
    meta.appendChild(el('span', { className: 'blog-tag' }, post.tag));
    meta.appendChild(el('span', { className: 'date' }, post.date));
    meta.appendChild(el('span', { className: 'read-time' }, post.readTime));
    card.appendChild(meta);
    card.appendChild(el('h3', {}, post.title));
    card.appendChild(el('p', { className: 'blog-excerpt' }, post.excerpt));
    const imgWrap = el('div', { className: 'blog-image' });
    imgWrap.appendChild(halftoneImg(placeholder(400, 250, post.image), 'Blog post cover'));
    card.appendChild(imgWrap);
    card.appendChild(el('a', { href: '#', className: 'read-more', innerHTML: 'read more &rarr;' }));
    grid.appendChild(card);
  }
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

function buildBlogPost(): HTMLElement {
  const post = blogPosts[0];
  const article = el('div', { className: 'blog-post', id: 'blog-post' });
  const back = el('button', { className: 'blog-post-back', id: 'blog-post-back' });
  back.innerHTML = '<i class="fa-solid fa-arrow-left"></i> back';
  article.appendChild(back);
  article.appendChild(el('span', { className: 'blog-post-tag' }, post.tag));
  article.appendChild(el('h1', {}, post.title));
  article.appendChild(el('p', { className: 'blog-post-meta' }, `${post.date} \u00B7 ${post.readTime}`));
  const body = el('div', { className: 'blog-post-body' });
  body.innerHTML = `
    <p>Every developer I know has a graveyard of unfinished side projects. Half-built apps, abandoned repos, ideas that felt electric at 2 AM but fizzled out by the weekend. I've been there too \u2014 more times than I'd like to admit. But over the past year, I've started finishing things, and the shift came down to changing how I think about projects before I write a single line of code.</p>
    <h2>Start With a Problem You Actually Have</h2>
    <p>The biggest trap is building something because the tech sounds fun. "I want to learn WebSockets" is not a project \u2014 it's a tutorial. The projects I've actually shipped all started with a genuine annoyance. I couldn't find a good way to track my reading list across devices, so I built one. I wanted a faster way to preview markdown, so I made a CLI tool. When the motivation is real, you push through the boring parts because you actually want the thing to exist.</p>
    <h2>Scope It Down, Then Scope It Down Again</h2>
    <p>My first instinct is always to design the full system \u2014 auth, admin panel, API versioning, the works. That's a recipe for abandonment. Now I ask: what's the absolute minimum version that solves the core problem? Usually it's embarrassingly simple. A single page. One API endpoint. No auth. Ship that, use it for a week, and only then decide what's worth adding. Most of the features I thought were essential turned out to be unnecessary.</p>
    <h2>Timebox, Don't Roadmap</h2>
    <p>I give myself a weekend or a week \u2014 a fixed window. If it's not shippable by then, I either cut scope or accept it's too big for a side project. This sounds harsh, but it's liberating. You stop gold-plating and start making decisions. "Good enough" becomes a feature, not a compromise. Some of my most-used tools are ones I built in a single afternoon.</p>
    <h2>Ship Ugly, Iterate Later</h2>
    <p>Nobody cares what your side project looks like on day one. Put it on GitHub, deploy it somewhere free, tell one friend about it. The act of shipping changes your relationship with the project. It goes from "a thing I'm working on" to "a thing that exists." That shift is motivating in a way that no todo list can replicate. You can always make it prettier later \u2014 and you probably will, because now you actually use it.</p>
    <h2>The Point Isn't the Product</h2>
    <p>Most side projects won't become startups. They won't go viral. And that's fine. The point is the practice \u2014 learning to scope, to ship, to make tradeoffs under constraints. Every project I've finished has made me a better engineer at my day job. The skills transfer directly: estimating work, cutting scope, knowing when "done" is done. That's the real return on investment.</p>
  `;
  article.appendChild(body);
  return article;
}

function buildFooter(): HTMLElement {
  const footer = document.createElement('footer');
  const container = el('div', { className: 'container' });
  container.appendChild(socialLinks('footer-socials'));
  container.appendChild(el('p', {}, '\u00A9 2026 Anthony Stefanuto'));
  footer.appendChild(container);
  return footer;
}

// ── Mount ──

function mount(): void {
  const app = document.getElementById('app')!;
  const noiseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  noiseSvg.setAttribute('style', 'position:absolute;width:0;height:0');
  noiseSvg.innerHTML = `
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  `;
  document.body.appendChild(noiseSvg);
  const noiseOverlay = document.createElement('div');
  noiseOverlay.className = 'noise-overlay';
  document.body.appendChild(noiseOverlay);

  app.appendChild(buildNav());
  const main = document.createElement('main');
  main.id = 'main-content';
  main.appendChild(buildHero());
  main.appendChild(buildAbout());
  // main.appendChild(buildPersonal()); // Interests temporarily hidden.
  main.appendChild(buildProjects());
  main.appendChild(buildExperience());
  main.appendChild(buildEducation());
  main.appendChild(buildSkills());
  main.appendChild(buildBlog());
  app.appendChild(main);
  app.appendChild(buildFooter());
  app.appendChild(buildBlogPost());
  initInteractions();
}

function initInteractions(): void {
  const hamburger = document.querySelector('.hamburger')!;
  const navLinks = document.querySelector('.nav-links')!;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  const nav = document.querySelector('nav')!;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navAnchors = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
  const navObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      }
    }, { threshold: 0.3 }
  );
  sections.forEach((s) => navObserver.observe(s));
  const mainContent = document.getElementById('main-content')!;
  const blogPostView = document.getElementById('blog-post')!;
  const blogPostBack = document.getElementById('blog-post-back')!;
  const footerEl = document.querySelector('footer')!;
  const navEl = document.querySelector('nav')!;
  const firstBlogCard = document.querySelector('.blog-card') as HTMLElement;
  if (firstBlogCard) {
    firstBlogCard.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.style.display = 'none';
      footerEl.style.display = 'none';
      navEl.style.display = 'none';
      blogPostView.classList.add('active');
      window.scrollTo(0, 0);
    });
  }
  blogPostBack.addEventListener('click', () => {
    blogPostView.classList.remove('active');
    mainContent.style.display = '';
    footerEl.style.display = '';
    navEl.style.display = '';
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  });
}

mount();
