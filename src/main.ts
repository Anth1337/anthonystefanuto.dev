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
    "id": "sunpay",
    "name": "SunPay: Group Payments",
    "summary": "Split one purchase across a group without asking one person to cover the bill.",
    "description": "Built at Hack the 6ix 2026, SunPay is designed to split a single purchase across a group so one person does not have to cover the whole bill. Members pay their shares through Stripe, with a payment flow designed to cover declined shares and support repayment within 30 days.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Auth0",
      "SQLite",
      "Express.js",
      "Tailwind CSS"
    ],
    "highlights": [
      "Records charges, balances, and repayments in a double-entry SQLite ledger.",
      "Uses Auth0 step-up MFA, signed merchant handoffs, and idempotent payment requests.",
      "Won MLH: Best Use of Auth0 at Hack the 6ix 2026."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/ht6-2026"
      },
      {
        "label": "Devpost",
        "url": "https://devpost.com/software/sunpay-cp7xyi"
      }
    ]
  },
  {
    "id": "ecommerce-conversion",
    "name": "E-Commerce Conversion Prediction Model",
    "summary": "Estimate whether an online shopping session will end in a purchase.",
    "description": "This study uses 12,330 shopping sessions to compare logistic regression, decision trees, random forests, and XGBoost. Only 15.5% of sessions led to a purchase, so the analysis looks beyond accuracy to examine how well each model finds buyers.",
    "tags": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ],
    "highlights": [
      "Explored browsing behaviour, encoded categorical features, and added session-duration and holiday features.",
      "Tuned models with cross-validation and used class weighting to address the imbalance between buyers and non-buyers.",
      "The report records a random forest F1 score of 0.651 and an XGBoost ROC-AUC of 0.930. The models used different train/test splits, so these are not a matched-split comparison."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/wkdghdus/Predicting-Purchasing-Intention"
      },
      {
        "label": "Report (PDF)",
        "url": "/reports/ecommerce-conversion-report.pdf"
      }
    ]
  },
  {
    "id": "temporal-action-detection",
    "name": "Temporal Action Detection on THUMOS14",
    "summary": "Find the start, end, and type of an action in an untrimmed sports video.",
    "description": "A research project comparing I3D and VideoMAE v2 features with CNN and ActionFormer detection heads on THUMOS14. The pipeline adapts the ActionFormer codebase, keeps extracted features frozen, and trains the detection heads on Modal GPUs.",
    "tags": [
      "PyTorch",
      "Python",
      "Modal",
      "Hugging Face",
      "NumPy",
      "Computer Vision"
    ],
    "highlights": [
      "Evaluated four configurations across 20 action classes using temporal intersection-over-union thresholds from 0.3 to 0.7.",
      "The I3D + ActionFormer configuration achieved 66.76% average mAP; the VideoMAE v2 + ActionFormer configuration reached 4.57%.",
      "Documented differences in feature stride, pyramid depth, and tuning that limit what can be attributed to the backbone or head alone."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/Thumos14ActionTransformer"
      },
      {
        "label": "Report (PDF)",
        "url": "/reports/thumos14-action-detection-report.pdf"
      }
    ]
  },
  {
    "id": "macrova",
    "name": "Macrova: Meal Planning Mobile App",
    "summary": "A mobile app that plans meals around nutrition targets, food preferences, and your schedule.",
    "description": "Macrova is a mobile meal-planning app built with Flutter and a Python backend. It builds one to seven days of meals around macro and micronutrient targets, excluded ingredients, preparation time, and pinned meals, using a deterministic backtracking search.",
    "tags": [
      "Flutter",
      "FastAPI",
      "Python",
      "Dart",
      "Pydantic",
      "pytest"
    ],
    "highlights": [
      "Scores candidate recipes and adjusts portions while keeping nutrition constraints in the planner.",
      "When enabled, an LLM suggests recipes for gaps in a plan; ingredients and nutrition are checked against USDA data before those recipes enter the search.",
      "Exposes planning through a FastAPI backend and CLI, with tests for constraints, recipe validation, and API behaviour."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/ccarlis1/Macrova"
      }
    ]
  },
  {
    "id": "riskguard",
    "name": "RiskGuard: Trading Behaviour Monitor",
    "summary": "Flag revenge trading and overtrading before a trader repeats a costly pattern.",
    "description": "Built at QHacks 2026, RiskGuard combines a browser extension, a Flask API, and a Next.js dashboard. It checks trading history for behavioural patterns and shows a warning in the trading page. The demo runs on Investopedia Simulator, rather than enforcing orders through a broker.",
    "tags": [
      "Next.js",
      "Python",
      "Flask",
      "TypeScript",
      "WXT",
      "Snowflake",
      "Supabase",
      "Gemini API",
      "Pandas"
    ],
    "highlights": [
      "Uses trade frequency, loss streaks, and position sizing to flag overtrading, revenge trading, and possible loss aversion.",
      "A React extension overlay lets the trader review the warning, reconsider the trade, or continue.",
      "Logs trades and interventions in Snowflake and uses Gemini to explain flagged behaviour."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/DanielKaminsky05/Riskgaurd"
      },
      {
        "label": "Devpost",
        "url": "https://devpost.com/software/tradeguard-moqf4z"
      }
    ]
  },
  {
    "id": "mlb-breakout",
    "name": "MLB Breakout Player Detector",
    "summary": "Rank minor-league hitters by their estimated chance of future MLB success.",
    "description": "A Python notebook that collects MLB and minor-league batting data from the MLB Stats API, builds prospect features, and compares three classifiers. It defines a breakout as at least 500 MLB plate appearances with a combined OPS of 0.740 or higher in the following six seasons.",
    "tags": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "SHAP",
      "Matplotlib",
      "Seaborn"
    ],
    "highlights": [
      "Engineers age-relative-to-level, strikeout rate, walk rate, isolated power, and other batting features.",
      "Uses season-based train, validation, and test sets to compare logistic regression, random forest, and histogram gradient boosting.",
      "Exports ranked predictions with SHAP explanations and evaluates ranking quality, calibration, and precision among the top 30 prospects."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/MLB-Breakout-Player-Predictor"
      }
    ]
  },
  {
    "id": "campus-robotics",
    "name": "Campus Robotics Dashboard",
    "summary": "A mobile prototype for browsing campus robots and viewing the campus map.",
    "description": "Campus Robotics Dashboard is a Western Developer Society project built with React Native and Expo. The current app includes a map centred on Western's campus, a robot-list screen, and tab navigation. An Express server and MySQL connection provide the starting point for robot-location data.",
    "tags": [
      "React Native",
      "Expo",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Tailwind CSS"
    ],
    "highlights": [
      "Uses react-native-maps for the campus view and NativeWind for styling.",
      "Separates the mobile client from the Node.js backend.",
      "The robot list currently uses sample entries; live location responses and individual robot controls are not implemented in this version."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/WesternDeveloperSociety/TangApp"
      }
    ]
  },
  {
    "name": "CS:GO Market Tracker",
    "description": "CS:GO Market Tracker brings item market prices into Discord. The bot provides live price notifications and instant lookups, so users can check the price of an in-game item without leaving their server.",
    "tags": [
      "Discord Bot",
      "Market Data"
    ],
    "id": "game-market-tracker",
    "summary": "Get live CS:GO item-price notifications and instant price lookups through a Discord bot.",
    "links": []
  },
  {
    "id": "interactive-pet",
    "name": "Interactive Pet Game",
    "summary": "Care for a virtual pet and earn rewards through arcade mini-games.",
    "description": "Pet-Life is a Java desktop game built with Swing. Players manage a pet's hunger, happiness, sleep, and health, with different pet states affecting the available actions. Progress is saved locally so players can return to the same pet.",
    "tags": [
      "Java",
      "Java Swing",
      "Maven",
      "JUnit",
      "Gson"
    ],
    "highlights": [
      "Includes three arcade games: dice, digging, and twenty-one.",
      "Stores progress in three JSON save slots using Gson.",
      "Includes parental play-time controls, audio settings, and JUnit tests for pet behaviour, inventory, and game logic."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/Pet-Life"
      }
    ]
  },
  {
    "id": "yarkovsky-drift",
    "name": "Yarkovsky Drift Prediction Model & Web App",
    "summary": "Estimate asteroid orbital drift and explore asteroid paths in a 3D viewer.",
    "description": "Built at Bram Hacks 2025, YarkNet connects a random forest model to a FastAPI service and a JavaScript orbit viewer. It estimates the small change in an asteroid's orbit caused by the Yarkovsky effect using its size and orbital properties, with asteroid records retrieved from NASA JPL's Small-Body Database.",
    "tags": [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "JavaScript",
      "Spacekit.js",
      "NumPy",
      "Pydantic"
    ],
    "highlights": [
      "Serves individual predictions and batches of up to ten asteroids through validated API inputs.",
      "Applies saved calibration parameters to the model's predicted drift magnitude.",
      "Displays asteroid paths with Spacekit.js. When spin direction is unknown, the API samples a direction from a prior rather than measuring it."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/BramHacks-2025"
      }
    ]
  },
  {
    "id": "cadence",
    "name": "Cadence: Habit & Health Tracker Mobile App",
    "summary": "Track sleep, stress, heart rate, and daily habits in a mobile app with a built-in calendar.",
    "description": "Cadence is a mobile habit and health tracker that brings sleep, stress, and heart-rate trends together with daily routines. It recommends changes based on those patterns and includes a built-in habit tracker and calendar. The app uses React Native and Expo, with a shared C++ core and local SQLite storage.",
    "tags": [
      "React Native",
      "C++",
      "Expo",
      "TypeScript",
      "SQLite"
    ],
    "highlights": [
      "Combines habit tracking, goals, tasks, mood logs, and calendar views.",
      "Includes permission-based integrations with Apple HealthKit and Android Health Connect for activity, sleep, and heart-rate data.",
      "Helps users review patterns in their health and habits and suggests changes to their routines."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/Cadence"
      }
    ]
  },
  {
    "id": "discord-bot",
    "name": "Multipurpose Discord Bot",
    "summary": "Create polls, manage study-session opt-ins, and play truth or dare in Discord.",
    "description": "TheHokage is a Java bot built with JDA. Commands and button interactions are handled by separate listeners, with embedded messages for polls and community activities. Gradle packages the bot and its dependencies.",
    "tags": [
      "Java",
      "JDA",
      "Gradle"
    ],
    "highlights": [
      "Creates polls with up to 20 options and emoji reactions.",
      "Lets members opt into or out of a study-notification role with a button.",
      "Handles truth and dare prompts through interactive message buttons."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/Anth1337/TheHokage"
      }
    ]
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
//   { num: '03', name: 'Fitness', kicker: 'iron & pavement', tagline: 'Early runs and late lifts, clearing my head one rep at a time.', type: 'collage',
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
//   { num: '06', name: 'Music', kicker: 'on repeat', tagline: "The current top 5: the songs I can't stop replaying.", type: 'spotify',
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
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-stefanuto/' },
    { icon: 'fa-brands fa-x-twitter', label: 'Twitter / X', href: 'https://x.com/Anthbuilds' },
    { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/Anth1337' },
    { icon: 'fa-solid fa-envelope', label: 'Email', href: 'mailto:anthstefanuto@gmail.com' },
  ];
  for (const s of socials) {
    const external = s.href.startsWith('https://');
    const a = el('a', { href: s.href, 'aria-label': external ? `${s.label} (opens in a new tab)` : 'Email anthstefanuto@gmail.com',
      title: s.label,
      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    });
    a.appendChild(el('i', { className: s.icon, 'aria-hidden': 'true' }));
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
  const section = el('section', { id: 'about', className: 'section', 'aria-labelledby': 'about-heading' });
  const container = el('div', { className: 'container' });
  const content = el('div', { className: 'about-content' });
  content.appendChild(el('h2', { id: 'about-heading', className: 'section-label' }, 'About'));
  const text = el('div', { className: 'about-text' });
  const points = el('ul', { className: 'about-points', role: 'list' });
  for (const point of [
    'Computer Science student at Western University',
    'Aspiring forward-deployed software engineer',
    'Competitive',
    'I like solving complex problems',
    'I value simplicity',
  ]) points.appendChild(el('li', {}, point));
  text.appendChild(points);
  text.appendChild(el('p', {}, 'I build to help. I like working directly with people to understand their workflows, ask the right questions, and turn ambiguous problems into efficient solutions. I understand the code as an engineer and the product as a stakeholder to deliver what matters.'));
  text.appendChild(el('p', {}, 'I want to be in an environment that encourages my curiosity and challenges my thinking. Blessed with the ability to learn every day.'));
  text.appendChild(el('p', {}, 'Outside of work, I enjoy baseball, rock climbing, and trying new things.'));
  const quote = el('div', { className: 'about-quote' });
  quote.appendChild(el('p', { className: 'section-label about-quote-intro' }, 'For whoever needs to hear this:'));
  quote.appendChild(el('blockquote', { className: 'about-quote-text' }, '“Being afraid to leave isn’t a reason to stay”'));
  text.appendChild(quote);
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
  const timeline = el('div', { className: 'experience-timeline' });

  const experiences = [
    {
      company: 'KPMG',
      date: 'May 2026 to Present',
      role: 'Software & AI Analyst',
      logo: '/logos/kpmg_canada_logo.jpeg',
      description: "I build internal tools that help KPMG teams manage information and get through day-to-day work more efficiently. My work spans web development, workflow automation, and AI agents in Copilot Studio, using MCP connections to bring internal tools and data into AI workflows.",
    },
    {
      company: 'KILOGRAPH',
      date: 'May 2026 to Present',
      role: 'Co-Founder, Deployments',
      logo: '/logos/kilograph_logo.jpeg',
      description: "I deploy our Generative Engine Optimization (GEO) schemas to help small and midsize businesses get found through agentic search. I work directly with clients to structure their business information so AI search tools can understand what they offer.",
    },
    {
      company: 'PDA Evaluations',
      date: 'Jan 2026 to May 2026',
      role: 'Software Engineer',
      logo: '/logos/pda_evaluations_logo.jpeg',
      description: "I built a database-backed scouting platform from the ground up, giving scouts one consistent app to track and record player statistics. I brought scattered spreadsheet data into a shared database and built the application around how scouts collect and review information.",
    },
    {
      company: 'KPMG',
      date: 'May 2025 to Aug 2025',
      role: 'Solutions Analyst Intern',
      logo: '/logos/kpmg_canada_logo.jpeg',
      description: "I helped teams adopt Microsoft Copilot and improve how they shared information through SharePoint. I also used Power BI to analyze support data, track operational metrics, and identify trends that informed improvements to internal tools and documentation.",
    },
    {
      company: 'Western Developer Society',
      date: 'Oct 2024 to May 2025',
      role: 'Software Developer',
      logo: '/logos/western_dev_society_logo.jpeg',
      // Original description:
      // description: 'Managed and reviewed 50+ push, pull, and merge requests, ensuring code quality and seamless integration. Applied Agile methodologies through iterative development and sprint planning. Collaborated with project managers during regular meetings to refine the app and address technical challenges. Enhanced mobile UI using React Native and Tailwind CSS, resulting in nearly 20% faster navigation and improved readability across the app.',
      description: "I worked with a student team on a mobile app for a campus robotics project. Alongside building the interface and reviewing code, I worked on the app’s communication with the robots to make sure they interacted effectively. I also worked with project managers to turn planned features into usable screens.",
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
    if (experience.description) entry.appendChild(el('p', { className: 'exp-desc' }, experience.description));
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
    ['Frameworks & Libraries', ['React', 'React Native', 'Expo', 'Next.js', 'Flutter', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Tailwind CSS', 'Java Swing', 'WXT', 'Sequelize', 'Pydantic', 'D3.js']],
    ['Data & Machine Learning', ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SHAP', 'TensorFlow', 'PyTorch', 'OpenCV', 'Matplotlib', 'Seaborn', 'Hugging Face', 'LangChain', 'LangGraph', 'Gemini API', 'Power BI', 'Spark']],
    ['Databases', ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Snowflake']],
    ['Cloud & DevOps', ['AWS / EC2', 'Cloudflare', 'Docker', 'CI/CD', 'GitHub Actions', 'REST APIs', 'Modal']],
    ['Developer Tools', ['Git', 'GitHub', 'Vite', 'Maven', 'Gradle', 'pytest', 'JUnit', 'VS Code', 'Jupyter', 'Jira', 'Figma', 'Claude Code', 'Cursor']],
    ['Authentication & Payments', ['Auth0', 'Stripe']],
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
    const isReport = /^\/reports\/[a-z0-9-]+\.pdf$/i.test(link.url);
    if (!link.label.trim() || (!/^https?:\/\//i.test(link.url) && !isReport)) continue;
    const anchor = el('a', { href: link.url, target: '_blank', rel: 'noopener noreferrer',
      'aria-label': `${project.name}: ${link.label} (opens in a new tab)`,
      title: `${link.label} (opens in a new tab)`,
    });
    if (isReport) {
      anchor.classList.add('project-icon-link', 'project-report-link');
      anchor.setAttribute('type', 'application/pdf');
      anchor.appendChild(el('i', { className: 'fa-regular fa-file-pdf', 'aria-hidden': 'true' }));
    } else if (link.label === 'GitHub') {
      anchor.classList.add('project-icon-link');
      anchor.appendChild(el('i', { className: 'fa-brands fa-github', 'aria-hidden': 'true' }));
    } else if (link.label === 'Devpost') {
      anchor.classList.add('project-icon-link');
      anchor.appendChild(el('span', { className: 'devpost-icon', 'aria-hidden': 'true' }));
    } else {
      anchor.append(link.label, el('span', { 'aria-hidden': 'true' }, ' ↗'));
    }
    links.appendChild(anchor);
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

  // Project-specific details checked against repository source and supplied reports.
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
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
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
  const grid = el('div', { className: 'project-grid' });
  for (const proj of projects) {
    const card = el('article', { className: 'project-card', 'aria-labelledby': `${proj.id}-title` });
    card.appendChild(projectPreview(proj));
    const body = el('div', { className: 'project-card-body' });
    const title = el('button', { type: 'button', className: 'project-title-button',
      'aria-label': `View ${proj.name} details`, 'aria-haspopup': 'dialog',
    }, proj.name);
    title.addEventListener('click', () => openProject(proj, title));
    body.appendChild(el('h3', { id: `${proj.id}-title` }, title));
    // A native title button provides keyboard access without nesting external links in a button.
    card.addEventListener('click', event => {
      if ((event.target as Element).closest('a, button')) return;
      if (window.getSelection()?.toString()) return;
      openProject(proj, title);
    });
    body.appendChild(el('p', { className: 'project-desc' }, proj.summary));
    const tags = el('div', { className: 'tech-tags' });
    for (const tag of proj.tags.slice(0, 3)) tags.appendChild(el('span', {}, tag));
    if (proj.tags.length > 3) tags.appendChild(el('span', { 'aria-label': `${proj.tags.length - 3} more technologies; view details for the full list` }, `+${proj.tags.length - 3}`));
    body.appendChild(tags);
    const links = projectLinks(proj);
    if (links.childElementCount) body.appendChild(links);
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
    <p>Every developer I know has a graveyard of unfinished side projects. Half-built apps, abandoned repos, ideas that felt electric at 2 AM but fizzled out by the weekend. I've been there too, more times than I'd like to admit. But over the past year, I've started finishing things, and the shift came down to changing how I think about projects before I write a single line of code.</p>
    <h2>Start With a Problem You Actually Have</h2>
    <p>The biggest trap is building something because the tech sounds fun. "I want to learn WebSockets" is not a project. It's a tutorial. The projects I've actually shipped all started with a genuine annoyance. I couldn't find a good way to track my reading list across devices, so I built one. I wanted a faster way to preview markdown, so I made a CLI tool. When the motivation is real, you push through the boring parts because you actually want the thing to exist.</p>
    <h2>Scope It Down, Then Scope It Down Again</h2>
    <p>My first instinct is always to design the full system: auth, admin panel, API versioning, the works. That's a recipe for abandonment. Now I ask: what's the absolute minimum version that solves the core problem? Usually it's embarrassingly simple. A single page. One API endpoint. No auth. Ship that, use it for a week, and only then decide what's worth adding. Most of the features I thought were essential turned out to be unnecessary.</p>
    <h2>Timebox, Don't Roadmap</h2>
    <p>I give myself a weekend or a week, a fixed window. If it's not shippable by then, I either cut scope or accept it's too big for a side project. This sounds harsh, but it's liberating. You stop gold-plating and start making decisions. "Good enough" becomes a feature, not a compromise. Some of my most-used tools are ones I built in a single afternoon.</p>
    <h2>Ship Ugly, Iterate Later</h2>
    <p>Nobody cares what your side project looks like on day one. Put it on GitHub, deploy it somewhere free, tell one friend about it. The act of shipping changes your relationship with the project. It goes from "a thing I'm working on" to "a thing that exists." That shift is motivating in a way that no todo list can replicate. You can always make it prettier later, and you probably will, because now you actually use it.</p>
    <h2>The Point Isn't the Product</h2>
    <p>Most side projects won't become startups. They won't go viral. And that's fine. The point is the practice: learning to scope, to ship, to make tradeoffs under constraints. Every project I've finished has made me a better engineer at my day job. The skills transfer directly: estimating work, cutting scope, knowing when "done" is done. That's the real return on investment.</p>
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
