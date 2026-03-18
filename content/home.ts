export const homeContent = {
  navbar: {
    brand: "LaunchSpark",
  },
  hero: {
    title: "Ignite Your Email Marketing",
    subtitle: "LaunchSpark empowers your team to create, send, and analyze email campaigns with ease.",
    cta: "Start Sending Emails",
  },
  features: {
    title: "Powerful Features for Growing Teams",
    items: [
      {
        title: "Build & Manage Contacts",
        description: "Effortlessly organize your audience and grow your reach.",
      },
      {
        title: "Design Stunning Campaigns",
        description: "Use our intuitive editor to craft beautiful, responsive emails.",
      },
      {
        title: "Real-Time Analytics",
        description: "Track opens, clicks, and performance to optimize every send.",
      },
    ],
  },
  benefits: {
    eyebrow: "Why LaunchSpark",
    heading: "Email Marketing, Simplified",
    description: "Powerful contact management, stunning campaign creation, and deep analytics—all in one intuitive platform.",
    items: [
      {
        icon: "users",
        title: "Multi-Tenant Teams",
        description: "Easily manage multiple brands, workspaces, or clients under one account.",
      },
      {
        icon: "send",
        title: "Effortless Campaigns",
        description: "From concept to send in minutes—empower your marketing team with tools built for speed.",
      },
      {
        icon: "bar-chart-3",
        title: "Actionable Insights",
        description: "Real-time reporting, open/click tracking, and trend analysis drive smarter campaigns.",
      },
      {
        icon: "lock-keyhole",
        title: "Enterprise-Grade Security",
        description: "Data protection and privacy features designed for today’s compliance standards.",
      },
    ],
  },
  sponsors: {
    eyebrow: "Integrations",
    heading: "Connect with Your Favorite Tools",
    description: "Easily integrate LaunchSpark with your favorite apps and tools to streamline your marketing workflow.",
    logos: [
      { src: "/next.svg", alt: "Next.js" },
      { src: "/vercel.svg", alt: "Vercel" },
      { src: "/github-icon.svg", alt: "GitHub" },
      { src: "/discord-icon.svg", alt: "Discord" },
    ],
  },
  team: {
    eyebrow: "Trusted by Teams",
    heading: "Meet the LaunchSpark Team",
    description: "Our passionate builders and marketing pros work behind the scenes to deliver a frictionless email marketing solution.",
    members: [
      {
        image: "/team1.jpg",
        name: "Chirag Dodiya",
        title: "Founder & CEO",
        bio: "Building SaaS platforms for growth-minded teams.",
        social: {
          linkedin: "https://linkedin.com/in/chiragdodiya",
          github: "https://github.com/chiragdodiya",
        },
      },
      {
        image: "/team2.jpg",
        name: "Priya Shah",
        title: "Product Designer",
        bio: "Crafting delightful user experiences, one pixel at a time.",
        social: {
          linkedin: "https://linkedin.com/in/priyashah",
        },
      },
      {
        image: "/team3.jpg",
        name: "Ravi Patel",
        title: "Lead Developer",
        bio: "Engineering robust, scalable systems for SaaS.",
        social: {
          github: "https://github.com/ravipatel",
        },
      },
    ],
  },
  pricing: {
    eyebrow: "Flexible Pricing",
    heading: "Choose the Right Plan for Your Team",
    description: "Start free, pay only as you grow. No hidden fees or contracts.",
    plans: [
      {
        name: "Starter",
        price: "Free",
        features: [
          "Up to 1,000 contacts",
          "Send up to 5,000 emails/month",
          "Basic analytics & templates",
        ],
        cta: "Get Started",
      },
      {
        name: "Pro",
        price: "$49/mo",
        features: [
          "Up to 25,000 contacts",
          "Unlimited email sends",
          "Advanced segmentation",
          "Automated campaigns",
          "Priority support",
        ],
        cta: "Upgrade to Pro",
      },
      {
        name: "Enterprise",
        price: "Contact Us",
        features: [
          "Custom contact limits",
          "Dedicated onboarding",
          "Advanced deliverability tools",
          "Custom integrations",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Answers to Your Top Questions",
    description: "Everything you need to know before launching your first campaign.",
    items: [
      {
        question: "Do I need to know how to code?",
        answer: "No coding needed! Our intuitive campaign editor is built for everyone.",
      },
      {
        question: "Can I import contacts from another platform?",
        answer: "Yes, bulk CSV imports and integrations are supported.",
      },
      {
        question: "Is LaunchSpark GDPR compliant?",
        answer: "Absolutely. We take compliance and privacy seriously—your data is protected.",
      },
      {
        question: "Can I invite team members?",
        answer: "Yes, LaunchSpark is multi-tenant and supports rich team access controls.",
      },
    ],
  },
  testimonials: {
    title: "Teams Love LaunchSpark",
    quote: "“LaunchSpark makes our email marketing seamless and effective.”",
    author: "Marketing Lead, GrowthCo",
  },
  cta: {
    title: "Ready to Spark Your Growth?",
    description: "Sign up now and launch your first campaign in minutes.",
    button: "Get Started Free",
  },
  footer: {
    brandName: "LaunchSpark",
    copyright: `© ${new Date().getFullYear()} LaunchSpark. All rights reserved.`,
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Contact", href: "/#contact" },
    ],
    social: [
      { platform: "github", url: "https://github.com/chiragdodiya" },
      { platform: "linkedin", url: "https://linkedin.com/in/chiragdodiya" },
    ],
  },
};

// Static named export for Next.js and section compatibility
export function getHomeContent() {
  return homeContent;
}