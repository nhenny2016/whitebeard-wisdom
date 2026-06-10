import { assets } from "./assets";

export const siteConfig = {
  name: "Whitebeard Wisdom",
  legalName: "Whitebeard Wisdom LLC",
  shortName: "Whitebeard Wisdom",
  positioning: "Neuroscience-informed transformation catalyst",
  slogan: "Where earned wisdom meets how change actually works.",
  tagline:
    "A neuroscience-informed transformation catalyst for professionals ready to start over, find clarity, and build a second chapter with purpose — guided by someone who has rebuilt his own life from the ground up.",
  description:
    "Whitebeard Wisdom is the life coaching practice of Rodney Penn — a neuroscience-informed transformation catalyst who helps professionals and everyday leaders navigate reinvention, purpose, faith, and the hard work of becoming who they were meant to be.",
  url: "https://whitebeardwisdom.com",
  locale: "en_US",
  email: "hello@whitebeardwisdom.com",
  emailHref: "mailto:hello@whitebeardwisdom.com",
  phone: "(417) 555-0142",
  phoneHref: "tel:+14175550142",
  coach: {
    name: "Rodney Penn",
    title: "Neuroscience-Informed Transformation Catalyst & Life Coach",
    alumniClass: "2021",
    bioSource: "https://fhsualumni.com/rodney-penn-21/",
    bio: "Rodney Penn is what the Marine Corps calls a retread — someone who started over late in life. After decades fixing welders, wind turbines, and aviation radar, a renewed faith led him to serve homeless men and discover a passion for people facing mental illness. He earned his degree from Fort Hays State University and built a career in human services — walking alongside people through stress, habit loops, and identity shifts — before launching Whitebeard Wisdom as a neuroscience-informed transformation catalyst for others navigating their own second chapters.",
    shortBio:
      "Marine Corps veteran, FHSU alumnus, and case manager turned transformation catalyst — Rodney helps people rebuild with clarity, faith, and change that sticks.",
    credentials: [
      "Fort Hays State University alumnus (Class of 2021)",
      "Marine Corps veteran",
      "Case manager, Central Kansas Mental Health Center",
      "Supported employment & mental health services background",
    ],
    advice:
      "Stay the course. Finish strong. A brick wall is built one brick at a time. Just keep working at it.",
  },
  mission:
    "To catalyze lasting transformation at life's crossroads — combining earned wisdom, neuroscience-informed practice, and steady accountability so clarity becomes real change.",
  social: {
    instagram: "https://www.instagram.com/whitebeardwisdom",
    linkedin: "https://www.linkedin.com/company/whitebeard-wisdom",
    youtube: "https://www.youtube.com/@whitebeardwisdom",
  },
  booking: {
    label: "Book a Wisdom Call",
    cta: "Schedule a complimentary 30-minute Wisdom Call to explore whether coaching is the right next step.",
    discoveryLabel: "Book Your Free Wisdom Call",
    url: "https://cal.com/whitebeard-wisdom/wisdom-call",
  },
  images: assets,
  builtBy: {
    name: "LuminaForge",
    url: "https://luminaforge.ai",
  },
} as const;

export const painPoints = [
  { label: "Success without fulfillment", icon: "◎" },
  { label: "Decision fatigue at the top", icon: "◈" },
  { label: "Drifting from what matters", icon: "◉" },
  { label: "Repeating old patterns", icon: "◐" },
  { label: "Ready for a deeper chapter", icon: "◑" },
] as const;

export const approachPillars = [
  {
    title: "Clarity Before Strategy",
    description:
      "We start with the questions beneath the goals — who you are becoming, not just what you are trying to fix next.",
  },
  {
    title: "Neuroscience-Informed Change",
    description:
      "Rodney draws on how the brain handles stress, habit, and identity — informed by mental health practice and behavioral science, grounded in a life rebuilt.",
  },
  {
    title: "Catalyst, Not Cheerleader",
    description:
      "Direct, respectful support that sparks real movement — stay the course, finish strong, and keep laying one brick at a time until change sticks.",
  },
] as const;

export const outcomes = [
  "Crystal clarity on priorities and next steps",
  "Confidence to make hard decisions without second-guessing",
  "Breaking patterns that kept you stuck — not just understanding them",
  "Stronger boundaries between work and life",
  "A personal leadership philosophy you actually live by",
  "Renewed energy, purpose, and relationships aligned with your values",
] as const;

export const signaturePrograms = [
  {
    id: "clarity",
    name: "CLARITY",
    duration: "6 Weeks",
    price: "$2,400",
    summary:
      "A focused sprint for professionals at a crossroads — gain direction, resolve a key decision, and catalyze momentum fast.",
    href: "/programs#clarity",
    features: ["6 bi-weekly 1:1 sessions", "Decision clarity workbook", "Between-session email support"],
  },
  {
    id: "depth",
    name: "DEPTH",
    duration: "6 Months",
    price: "$9,600",
    summary:
      "The signature container for identity-level transformation — unpack patterns, rebuild self-trust, and lead from your truest self.",
    href: "/programs#depth",
    features: ["12 bi-weekly 1:1 sessions", "Values & vision mapping", "Quarterly progress reviews", "Priority email access"],
  },
  {
    id: "legacy",
    name: "LEGACY",
    duration: "12 Months",
    price: "$18,000",
    summary:
      "Long-term partnership for leaders building a life and career that will matter decades from now.",
    href: "/programs#legacy",
    features: ["24 bi-weekly sessions", "Executive advisory access", "Quarterly intensives", "Legacy planning framework"],
  },
] as const;

export const coachingFormats = [
  {
    name: "1:1 Executive Coaching",
    length: "Ongoing",
    fit: "Leaders navigating transition, burnout, or major decisions.",
    support: "Bi-weekly sessions with structured accountability.",
  },
  {
    name: "Wisdom Intensive",
    length: "Half Day",
    fit: "Need clarity on one critical decision or direction.",
    support: "Deep-dive session with written action plan.",
  },
  {
    name: "Group Wisdom Circle",
    length: "8 Weeks",
    fit: "Peers who want community and shared growth.",
    support: "Weekly group sessions with curated curriculum.",
  },
  {
    name: "Signature Programs",
    length: "6 Weeks – 12 Months",
    fit: "Ready for structured, transformational work.",
    support: "CLARITY, DEPTH, or LEGACY pathways.",
  },
] as const;

export const coachingSupportAreas = [
  "Starting over after career or life disruption",
  "Finding purpose in a second chapter",
  "Breaking stress-driven patterns and decision fatigue",
  "Faith-informed decision making and direction",
  "Navigating burnout, transition, and identity shifts",
  "Creating a life aligned with values, family, and legacy",
] as const;

export const bioTimeline = [
  {
    era: "Early career",
    title: "Fixing what others could not",
    description:
      "Rodney spent most of his life in skilled trades — repairing welders, wind turbines, and aviation radar systems. Problem-solving was his craft long before coaching became his calling.",
  },
  {
    era: "Service",
    title: "Marine Corps retread",
    description:
      "Rodney describes himself as what the Marine Corps calls a retread — someone who started over late and chose a path of service, discipline, and reinvention.",
  },
  {
    era: "Calling",
    title: "Faith, homeless ministry, and mental health",
    description:
      "A renewed faith prompted Rodney to work with homeless men. That experience developed a deep compassion for people struggling with mental illness and set him on a new path.",
  },
  {
    era: "Education",
    title: "Fort Hays State University",
    description:
      "Rodney chose FHSU for its online flexibility and affordability. Graduation was a tearful milestone — honoring the people who believed in him long before he crossed that stage.",
  },
  {
    era: "Human services",
    title: "Central Kansas Mental Health Center",
    description:
      "Rodney served as a case manager, developing supported employment programs and walking alongside individuals with severe and persistent mental illness.",
  },
  {
    era: "Today",
    title: "Whitebeard Wisdom",
    description:
      "Rodney now coaches through Whitebeard Wisdom as a neuroscience-informed transformation catalyst — helping others navigate crossroads with grit, faith, and change that lasts.",
  },
] as const;

export const bioSpotlight = [
  {
    question: "Why Fort Hays State?",
    answer:
      "The convenience of the online option coupled with the affordability was a big selling point. FHSU has a graduate program Rodney planned to pursue as well.",
  },
  {
    question: "Favorite student memory",
    answer:
      "Graduation. Many of the people in his life who believed in him years earlier had since passed away. Walking across that stage was a very tearful event — and a reminder that perseverance matters.",
  },
  {
    question: "What he valued at FHSU",
    answer:
      "Open conversations and discussions conducted with respect and appreciation for diverse thought — and a student body and faculty who truly wanted people to succeed.",
  },
] as const;

export const wisdomArticles = [
  {
    slug: "three-questions-before-every-big-decision",
    title: "Three Questions to Ask Before Every Big Decision",
    excerpt:
      "The decisions that define your life rarely announce themselves. These three questions cut through noise when the stakes are high.",
    date: "2026-05-28",
    readTime: "6 min",
    category: "Decision Making",
  },
  {
    slug: "why-success-feels-empty",
    title: "Why Success Can Feel Empty (And What to Do About It)",
    excerpt:
      "You checked every box. So why does the view from the top feel hollow? A coach's perspective on the achievement trap.",
    date: "2026-05-14",
    readTime: "8 min",
    category: "Purpose",
  },
  {
    slug: "wisdom-of-saying-no",
    title: "The Wisdom of Saying No",
    excerpt:
      "Every yes to the wrong thing is a no to what matters. How leaders reclaim their time and energy through intentional boundaries.",
    date: "2026-04-30",
    readTime: "5 min",
    category: "Leadership",
  },
  {
    slug: "building-a-life-not-just-a-resume",
    title: "Building a Life, Not Just a Resume",
    excerpt:
      "Your resume tells what you did. Your legacy tells who you became. Start designing the second story now.",
    date: "2026-04-16",
    readTime: "7 min",
    category: "Legacy",
  },
] as const;

export const workshopTopics = [
  "Starting Over: Reinvention Without Losing Yourself",
  "Why Change Sticks (and Why It Doesn't): A Neuroscience-Informed View",
  "From Fixing Machines to Building a Meaningful Life",
  "Faith, Purpose, and the Courage to Begin Again",
  "Supporting People Through Mental Health and Life Transitions",
  "Stay the Course: Resilience One Brick at a Time",
] as const;

export const workshopFormats = [
  "Keynote Speaking (45–90 min)",
  "Half-Day Workshops",
  "Full-Day Executive Retreats",
  "Virtual & In-Person",
] as const;

export const testimonials = [
  {
    quote:
      "Rodney doesn't hand you answers — he helps you find the ones already inside you. After six months, I finally made the move I'd been avoiding for years.",
    author: "Michael R.",
    role: "Operations Leader",
  },
  {
    quote:
      "I've worked with coaches before. Rodney is different. He speaks from lived experience, not theory. That changes everything.",
    author: "Sarah K.",
    role: "Small Business Owner",
  },
  {
    quote:
      "The DEPTH program gave me back my confidence and direction. I didn't realize how lost I'd become until I found my way back.",
    author: "David L.",
    role: "Community Leader",
  },
  {
    quote:
      "Our team still references Rodney's workshop months later. Practical, honest, and immediately useful.",
    author: "Jennifer M.",
    role: "Nonprofit Director",
  },
] as const;

export const gettingStartedSteps = [
  {
    step: "STEP 01",
    title: "Book a Free Wisdom Call",
    description:
      "A 30-minute conversation to understand where you are, what you're navigating, and whether coaching is the right fit.",
  },
  {
    step: "STEP 02",
    title: "Choose Your Path",
    description:
      "Together we'll determine whether 1:1 coaching, a signature program, or a group circle best serves your goals.",
  },
  {
    step: "STEP 03",
    title: "Begin the Work",
    description:
      "Start your coaching journey with clarity, structure, and a partner who respects both your ambition and your humanity.",
  },
] as const;

export const aboutValues = [
  {
    title: "Wisdom",
    description:
      "Real insight comes from experience, reflection, and time. We honor the long view — not quick fixes.",
  },
  {
    title: "Science-Informed Practice",
    description:
      "Change works better when you understand how stress, habit, and identity actually operate — not just what you wish they would do.",
  },
  {
    title: "Clarity",
    description:
      "Confusion is expensive. We help you see clearly so every decision aligns with what matters most.",
  },
  {
    title: "Courage",
    description:
      "Growth requires honesty. We create a space where you can face hard truths and act on them.",
  },
  {
    title: "Integrity",
    description:
      "Your values are your compass. We help you live them consistently — at work and at home.",
  },
  {
    title: "Legacy",
    description:
      "Success is what you achieve. Legacy is who you become. We design for both.",
  },
] as const;

export const freeGuide = {
  title: "Free Guide: The Wisdom Audit",
  subtitle: "5 questions every leader should answer before their next big move",
  bullets: [
    "Assess where you are vs. where you want to be",
    "Identify the one decision you've been avoiding",
    "Clarify your non-negotiable values",
    "Map your next 90 days with intention",
  ],
} as const;

export const faqs = [
  {
    question: "What is Whitebeard Wisdom?",
    answer:
      "Whitebeard Wisdom is the life coaching practice of Rodney Penn — a neuroscience-informed transformation catalyst. Rodney offers 1:1 coaching, signature programs (CLARITY, DEPTH, LEGACY), workshops, and weekly wisdom for people navigating reinvention, purpose, and life's harder chapters.",
  },
  {
    question: "What does neuroscience-informed mean?",
    answer:
      "It means Rodney's coaching draws on how the brain actually handles stress, habit formation, and identity change — informed by his mental health case management background and behavioral science, not coaching trends or pop psychology. You get practical tools for change that sticks, not jargon.",
  },
  {
    question: "Who is Whitebeard Wisdom coaching for?",
    answer:
      "Whitebeard Wisdom serves professionals, veterans, caregivers, and everyday leaders who feel stuck, unfulfilled, or ready for a second chapter — especially those who want a transformation catalyst grounded in real life, faith, and neuroscience-informed practice.",
  },
  {
    question: "What are the CLARITY, DEPTH, and LEGACY programs?",
    answer:
      "CLARITY is a 6-week focused sprint ($2,400) for decision clarity. DEPTH is a 6-month signature container ($9,600) for identity-level growth. LEGACY is a 12-month partnership ($18,000) for people building a life that will matter long-term.",
  },
  {
    question: "What is Rodney Penn's background?",
    answer:
      "Rodney is a Marine Corps veteran, Fort Hays State University alumnus (Class of 2021), and former case manager at Central Kansas Mental Health Center. Before human services, he spent decades in skilled trades and later worked with homeless men before discovering his calling in mental health support and coaching.",
  },
  {
    question: "Does Whitebeard Wisdom offer workshops and speaking?",
    answer:
      "Yes. Rodney delivers keynotes, workshops, and retreats on reinvention, faith and purpose, resilience, mental health awareness, and building a meaningful second chapter — virtual or in-person.",
  },
  {
    question: "What happens on the free Wisdom Call?",
    answer:
      "The 30-minute Wisdom Call is a no-pressure conversation to understand your situation, explore whether coaching fits, and identify the best path forward — 1:1 coaching, a program, or a referral.",
  },
  {
    question: "Is coaching confidential?",
    answer:
      "Absolutely. All coaching conversations are strictly confidential. Rodney creates a safe, respectful space for honest exploration.",
  },
  {
    question: "How do I get started with Whitebeard Wisdom?",
    answer:
      "Book a free Wisdom Call at whitebeardwisdom.com/contact, email hello@whitebeardwisdom.com, or download The Wisdom Audit guide to begin reflecting on your next chapter.",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/coaching", label: "Coaching" },
  { href: "/programs", label: "Programs" },
  { href: "/wisdom", label: "Wisdom" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  services: [
    { href: "/coaching", label: "Life Coaching" },
    { href: "/programs", label: "Signature Programs" },
    { href: "/workshops", label: "Workshops & Speaking" },
    { href: "/wisdom", label: "Wisdom Blog" },
  ],
  company: [
    { href: "/about", label: "About Rodney" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/contact#schedule", label: siteConfig.booking.label },
    { href: "/contact#guide", label: "Free Wisdom Audit" },
    { href: "/llms.txt", label: "LLM Brief" },
  ],
} as const;

export const contactPaths = [
  {
    id: "coaching",
    title: "I want 1:1 coaching",
    description: "Neuroscience-informed coaching for clarity, decisions, transitions, and purposeful next chapters.",
    href: "/contact#coaching",
  },
  {
    id: "program",
    title: "I'm interested in a program",
    description: "CLARITY, DEPTH, or LEGACY — structured pathways for transformational growth.",
    href: "/contact#program",
  },
  {
    id: "workshop",
    title: "I want a workshop or keynote",
    description: "Book Rodney for your team, church, conference, or community event.",
    href: "/contact#workshop",
  },
  {
    id: "group",
    title: "I want to join a group circle",
    description: "8-week Wisdom Circles for peers who want community and shared growth.",
    href: "/contact#group",
  },
  {
    id: "unsure",
    title: "I'm not sure where to start",
    description: "No problem. Book a Wisdom Call and we'll figure out the best path together.",
    href: "/contact#schedule",
  },
] as const;

export const stats = [
  { value: "FHSU '21", label: "Fort Hays State alumnus" },
  { value: "USMC", label: "Marine Corps veteran" },
  { value: "Decades", label: "Skilled trades & problem-solving" },
  { value: "1:1", label: "Transformation catalyst coaching" },
] as const;
