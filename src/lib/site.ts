import { assets } from "./assets";

export const siteConfig = {
  name: "Whitebeard Wisdom",
  legalName: "Whitebeard Wisdom LLC",
  shortName: "Whitebeard Wisdom",
  slogan: "Decades of life. Distilled into wisdom you can use today.",
  tagline:
    "Executive and life coaching for professionals ready to stop drifting, find clarity, and lead with purpose — guided by a coach who has walked the long road.",
  description:
    "Whitebeard Wisdom offers executive life coaching, signature programs, workshops, and weekly wisdom for leaders and high achievers who want clarity, confidence, and a life aligned with what matters most.",
  url: "https://whitebeardwisdom.com",
  locale: "en_US",
  email: "hello@whitebeardwisdom.com",
  emailHref: "mailto:hello@whitebeardwisdom.com",
  phone: "(417) 555-0142",
  phoneHref: "tel:+14175550142",
  coach: {
    name: "James Whitfield",
    title: "Founder & Executive Life Coach",
    credentials: ["ICF Professional Certified Coach (PCC)", "25+ years leadership experience", "Former Fortune 500 executive"],
    bio: "James spent three decades in corporate leadership before realizing the success he built on the outside didn't match the clarity he craved on the inside. Today he coaches executives, entrepreneurs, and professionals who are accomplished on paper but hungry for meaning, direction, and wisdom that lasts.",
  },
  mission:
    "To help accomplished professionals translate decades of experience into intentional living — with clarity, courage, and wisdom that compounds over time.",
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
      "We start with the questions beneath the goals — who you are becoming, not just what you are achieving.",
  },
  {
    title: "Wisdom Over Hacks",
    description:
      "No quick fixes. We work with patterns, values, and choices that create lasting change.",
  },
  {
    title: "Accountability with Respect",
    description:
      "Direct, honest support from someone who has led at the highest levels and knows the weight you carry.",
  },
] as const;

export const outcomes = [
  "Crystal clarity on priorities and next steps",
  "Confidence to make hard decisions without second-guessing",
  "Stronger boundaries between work and life",
  "A personal leadership philosophy you actually live by",
  "Renewed energy and sense of purpose",
  "Relationships aligned with your values",
] as const;

export const signaturePrograms = [
  {
    id: "clarity",
    name: "CLARITY",
    duration: "6 Weeks",
    price: "$2,400",
    summary:
      "A focused sprint for professionals at a crossroads — gain direction, resolve a key decision, and build momentum fast.",
    href: "/programs#clarity",
    features: ["6 bi-weekly 1:1 sessions", "Decision clarity workbook", "Between-session email support"],
  },
  {
    id: "depth",
    name: "DEPTH",
    duration: "6 Months",
    price: "$9,600",
    summary:
      "The signature container for identity-level growth — unpack patterns, rebuild self-trust, and lead from your truest self.",
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
  "Executive transitions and career reinvention",
  "Leadership presence and decision-making under pressure",
  "Work-life integration without sacrificing ambition",
  "Building a personal philosophy of success",
  "Navigating midlife purpose and legacy questions",
  "Recovering energy, focus, and joy after burnout",
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
  "Leading with Wisdom: Decision-Making for Executives",
  "The Midlife Pivot: Reinvention Without Starting Over",
  "Building a Leadership Philosophy That Lasts",
  "From Burnout to Breakthrough: Recovery for High Achievers",
  "Legacy Leadership: What Will Matter in 20 Years",
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
      "James doesn't give you answers — he helps you find the ones that were already inside you. After six months, I made the career move I'd been avoiding for three years.",
    author: "Michael R.",
    role: "VP of Operations, Tech",
  },
  {
    quote:
      "I've worked with coaches before. James is different. He speaks from lived experience, not theory. That changes everything.",
    author: "Sarah K.",
    role: "Founder & CEO",
  },
  {
    quote:
      "The DEPTH program gave me back my confidence and my marriage. I didn't know how lost I'd become until I found my way back.",
    author: "David L.",
    role: "Managing Director, Finance",
  },
  {
    quote:
      "Our executive team still references James's workshop six months later. Practical, profound, and immediately applicable.",
    author: "Jennifer M.",
    role: "Chief People Officer",
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
      "Whitebeard Wisdom is an executive and life coaching practice founded by James Whitfield, offering 1:1 coaching, signature programs (CLARITY, DEPTH, LEGACY), workshops, and weekly wisdom for accomplished professionals seeking clarity, purpose, and lasting change.",
  },
  {
    question: "Who is Whitebeard Wisdom coaching for?",
    answer:
      "Whitebeard Wisdom serves executives, entrepreneurs, and high-achieving professionals who are successful on paper but feel stuck, unfulfilled, or at a crossroads — ready for deeper clarity and intentional living.",
  },
  {
    question: "What are the CLARITY, DEPTH, and LEGACY programs?",
    answer:
      "CLARITY is a 6-week focused sprint ($2,400) for decision clarity. DEPTH is a 6-month signature container ($9,600) for identity-level growth. LEGACY is a 12-month partnership ($18,000) for leaders building long-term impact.",
  },
  {
    question: "How is James Whitfield different from other coaches?",
    answer:
      "James brings 25+ years of corporate leadership experience and ICF PCC certification. He coaches from lived wisdom — not theory — and specializes in executives navigating transition, burnout, and purpose questions.",
  },
  {
    question: "Does Whitebeard Wisdom offer workshops and speaking?",
    answer:
      "Yes. James delivers keynotes, half-day workshops, and full-day executive retreats on leadership wisdom, midlife reinvention, decision-making, burnout recovery, and legacy leadership — virtual or in-person.",
  },
  {
    question: "What happens on the free Wisdom Call?",
    answer:
      "The 30-minute Wisdom Call is a no-pressure conversation to understand your situation, explore whether coaching fits, and identify the best path forward — 1:1 coaching, a program, or a referral.",
  },
  {
    question: "Is coaching confidential?",
    answer:
      "Absolutely. All coaching conversations are strictly confidential. James adheres to ICF ethics and creates a safe space for honest exploration.",
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
    { href: "/coaching", label: "Executive Coaching" },
    { href: "/programs", label: "Signature Programs" },
    { href: "/workshops", label: "Workshops & Speaking" },
    { href: "/wisdom", label: "Wisdom Blog" },
  ],
  company: [
    { href: "/about", label: "About James" },
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
    description: "Executive and life coaching for clarity, decisions, transitions, and purposeful leadership.",
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
    description: "Book James for your team, conference, or executive retreat.",
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
  { value: "25+", label: "Years leadership experience" },
  { value: "500+", label: "Clients coached" },
  { value: "PCC", label: "ICF certified coach" },
  { value: "4.9★", label: "Average client rating" },
] as const;
