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
};

// Legacy compatibility for landing page sections
export function getHomeContent() {
  return homeContent;
}