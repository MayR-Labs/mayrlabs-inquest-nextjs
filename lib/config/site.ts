export const siteConfig = {
  name: 'MayR Labs InQuest',
  description: 'Enterprise-grade form builder and data collection platform.',
  links: {
    github: 'https://github.com/mayrlabs/inquest',
    twitter: 'https://twitter.com/mayrlabs',
    discord: 'https://discord.gg/mayrlabs',
  },
  copyright: {
    year: new Date().getFullYear(),
    organization: 'MayR Labs',
  },
  welcome: {
    hero: {
      badge: 'New Feature',
      title: 'Data Collection,',
      titleGradient: 'Reimagined.',
      description:
        'Build dynamic forms, collect verified data, and gain actionable insights with AI-powered analytics. Secure, scalable, and simple.',
    },
    features: [
      {
        title: 'Dynamic Forms',
        description: 'Conditional logic, real-time validation, and multi-step flows.',
        icon: 'FileText',
      },
      {
        title: 'Enterprise Security',
        description: 'Role-based access control, encryption, and audit logs.',
        icon: 'Shield',
      },
      {
        title: 'AI Insights',
        description: 'Automated data analysis and visualization powered by Gemini.',
        icon: 'Sparkles',
      },
      {
        title: 'Seamless Integrations',
        description: 'Connect with your favorite tools via Webhooks and API.',
        icon: 'Network',
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
