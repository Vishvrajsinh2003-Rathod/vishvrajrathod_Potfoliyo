export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  category: "Websites & Platforms" | "Mobile Applications" | "Design Services" | "Quick Start";
  icon: string;
};

export const services: Service[] = [
  // Websites & Platforms
  {
    slug: "corporate-websites",
    title: "Corporate Websites",
    subtitle: "Premium business showrooms",
    description:
      "A bespoke, fast-loading React website built to establish credibility for your brand from the first visit — custom-designed, not templated.",
    longDescription:
      "Your website is often the first handshake with a potential client. I design and build a fully custom corporate website — no drag-and-drop templates — coded from scratch in React/Next.js for speed and a distinct look. This includes a clean information architecture, on-brand visuals, SEO-friendly markup, and a build that's easy for you to extend later.",
    price: "₹80,000",
    category: "Websites & Platforms",
    icon: "🖥",
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    subtitle: "Bespoke business portals & platforms",
    description:
      "Secure web apps, admin dashboards, and client portals engineered around your exact business logic.",
    longDescription:
      "When off-the-shelf software doesn't fit how you actually work, I build a custom web application around your real process — client portals, internal dashboards, booking systems, or approval workflows. Includes authentication, role-based access, a database designed for your data, and an admin panel so your team can manage things without needing a developer for every change. Starting price covers a single-role portal with core CRUD workflows; multi-role systems, complex integrations, or AI-agent features are scoped separately.",
    price: "₹1,45,000 – ₹4,00,000",
    category: "Websites & Platforms",
    icon: "🖥",
  },
  {
    slug: "responsive-web-design",
    title: "Responsive Redesign",
    subtitle: "Fix an existing site that breaks on mobile",
    description:
      "Already have a website that looks broken or clunky on phones and tablets? I retrofit it into a clean, mobile-first experience without a full rebuild.",
    longDescription:
      "This service is for sites that already exist but weren't built mobile-first — text overflowing, buttons too small to tap, layouts breaking on smaller screens. Instead of a full rebuild, I audit the existing site and rework the layout, typography, and navigation for phones and tablets, testing across real devices before handoff. (New builds already come mobile-first by default — see Corporate Websites or Custom Web Applications for those.)",
    price: "₹35,000",
    category: "Websites & Platforms",
    icon: "🖥",
  },
  {
    slug: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    subtitle: "Secure Stripe, Razorpay & card checkout",
    description:
      "Seamless, secure payment flows integrated directly into your site or app, covering Stripe, Razorpay, and local card checkout options.",
    longDescription:
      "I integrate payment collection directly into your website or app — Stripe for international cards, Razorpay for Indian payment methods (UPI, cards, netbanking), or both. This includes secure checkout flows, webhook handling for order confirmation, and testing across the payment lifecycle so transactions are reliable from day one.",
    price: "₹55,000",
    category: "Websites & Platforms",
    icon: "🖥",
  },

  // Mobile Applications
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Custom iOS & Android apps",
    description:
      "High-performance React Native apps built for both iOS and Android from a single, well-structured codebase.",
    longDescription:
      "I build native-feeling mobile apps for both iOS and Android using React Native, sharing one well-organized codebase instead of maintaining two separate apps. This covers UI implementation, API integration, push notifications, and preparing your app for submission to the App Store and Play Store. Pricing scales with feature complexity — the starting price covers a single-role app with core screens and a standard backend; real-time features, payments, or multi-role systems are quoted after a scope call.",
    price: "₹2,50,000",
    category: "Mobile Applications",
    icon: "📱",
  },

  // Design Services
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Wireframes to polished interfaces",
    description:
      "User-centered design for websites and apps — wireframes, prototypes, and pixel-perfect UI ready to hand off to development.",
    longDescription:
      "I design interfaces people actually enjoy using — starting with user flows and wireframes, then moving to high-fidelity, pixel-perfect screens in Figma. Every screen is built around clarity and usability first, visual polish second, so the end product looks great and makes sense at a glance. Deliverables include a full screen set, a reusable component/design system, and developer-ready specs.",
    price: "₹45,000",
    category: "Design Services",
    icon: "🎨",
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    subtitle: "Print & digital promotional posters",
    description:
      "Eye-catching poster designs for events, products, or campaigns — optimized for both print and social media.",
    longDescription:
      "Whether it's for an event, a product launch, or a social campaign, I design posters that grab attention and communicate the message in seconds. Each poster is delivered print-ready (high-resolution, correct bleed/margins) alongside social-media-optimized versions, so you get one design that works everywhere you need it.",
    price: "₹4,000",
    category: "Design Services",
    icon: "🎨",
  },

  // Quick Start — low-barrier, fast-turnaround services
  {
    slug: "landing-page",
    title: "One-Page Landing Site",
    subtitle: "Launch in days, not weeks",
    description:
      "A single, focused landing page for a product launch, event, or campaign — live in 3-5 days, no long back-and-forth.",
    longDescription:
      "Sometimes you don't need a full website — just one strong page that converts. This covers a single-page site with a hero section, key details, and a clear call-to-action (contact form, WhatsApp button, or signup), mobile-first and fast-loading. Ideal for testing an idea, promoting an event, or getting a professional presence live quickly while a bigger project is planned.",
    price: "₹12,000",
    category: "Quick Start",
    icon: "⚡",
  },
  {
    slug: "website-audit",
    title: "Website Speed & SEO Audit",
    subtitle: "Know what's actually wrong",
    description:
      "A clear, no-jargon report on why your site loads slowly or ranks poorly — plus a prioritized fix list.",
    longDescription:
      "Before spending money on a rebuild, it often helps to know exactly what's broken. I run your site through performance and SEO diagnostics, then deliver a plain-language report — page speed issues, mobile usability problems, broken links, missing meta tags — ranked by impact and effort so you know what to fix first. No commitment to further work required.",
    price: "₹3,000",
    category: "Quick Start",
    icon: "🔍",
  },
  {
    slug: "bug-fix-small-update",
    title: "Bug Fix / Small Update",
    subtitle: "For existing sites — quick turnaround",
    description:
      "Something broken, outdated, or just needs a small tweak? Get it fixed without committing to a full redesign.",
    longDescription:
      "For an existing website that just needs attention — a broken form, an outdated section, a small design tweak, or a bug that's been bothering you. Scoped and quoted per request, usually turned around within 1-3 days. A low-commitment way to work together before a bigger project.",
    price: "₹1,500",
    category: "Quick Start",
    icon: "🛠️",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const categories = [
  "Quick Start",
  "Websites & Platforms",
  "Mobile Applications",
  "Design Services",
] as const;
