export type SubKeyService = {
  name: string;
  href: string;
};

export type SubService = {
  name: string;
  href: string;
  subServices?: SubKeyService[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  accent: "brand" | "red" | "yellow" | "green" | "orange";
  href?: string;
  subServices: SubService[];
};

export const industries = [
  "Manufacturing",
  "Transportation & Logistics",
  "Consumer Packaged Goods",
  "Management Consulting",
  "Information Technology",
  "Banking & Finance",
  "Insurance",
  "Human Resources",
  "Real Estate",
  "Professional Services",
  "Education",
  "Healthcare & Pharmaceuticals",
  "Media & Publishing",
  "Telecommunications",
  "Hospitality & Tourism",
  "Retail & Ecommerce",
  "Oil & Gas",
  "Environmental Services",
  "Automotive",
  "Non-Profit Organizations",
  "Energy & Utilities",
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "executive-support",
    title: "Executive Admin Services",
    tagline: 
  "Executive Admin Services — one delivery model, with the key capabilities you need.",
    accent: "brand",
    href: "https://www.brickworkindia.com/services/executive-admin-services",

    /*
     * ONLY THIS SERVICE CATEGORY HAS SUB-KEY SERVICES.
     */
    subServices: [
      {
        name: "Executive Admin Services1",
        href: "https://www.brickworkindia.com/services/executive-admin-services",

        subServices: [
          {
            name: "General Admin Services11",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "Document Management",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "Training Coordination",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "SharePoint Administration",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "Presentation Template Development",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "Executive Presentations",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
          {
            name: "Content Quality Services",
            href: "https://www.brickworkindia.com/services/executive-admin-services",
          },
        ],
      },

      {
        name: "Calendar, Email & Travel Management",
        href: "https://www.brickworkindia.com/services/executive-admin-services",

        subServices: [],
      },
    ],
  },

  // {
  //   slug: "it-digital",
  //   title: "IT & Consulting",
  //   tagline: "Build, run and modernise your digital core.",
  //   accent: "green",
  //   href: "https://www.brickworkindia.com/services/it-consulting",

  //   subServices: [
  //     {
  //       name: "Software & Application Development",
  //       href: "https://www.brickworkindia.com/services/software-development",
  //     },
  //     {
  //       name: "Data Analytics & Data Science",
  //       href: "https://www.brickworkindia.com/services/data-analytics-and-visualization",
  //     },
  //     {
  //       name: "Website & E-Commerce Development",
  //       href: "https://www.brickworkindia.com/services/software-development",
  //     },
  //     {
  //       name: "Cloud & DevOps Services",
  //       href: "https://www.brickworkindia.com/services/software-development",
  //     },
  //     {
  //       name: "IT Managed Services & Support",
  //       href: "https://www.brickworkindia.com/services/it-consulting",
  //     },
  //     {
  //       name: "IT Strategy & Digital Transformation",
  //       href: "https://www.brickworkindia.com/services/it-consulting",
  //     },
  //   ],
  // },

  // {
  //   slug: "finance-accounting",
  //   title: "Finance & Accounting",
  //   tagline: "Close faster, forecast sharper, fund smarter.",
  //   accent: "yellow",
  //   href: "https://www.brickworkindia.com/services/finance-and-accounting-services",

  //   subServices: [
  //     {
  //       name: "Accounting & Bookkeeping",
  //       href: "https://www.brickworkindia.com/services/finance-and-accounting-services",
  //     },
  //     {
  //       name: "Accounts Payable / Receivable & Reconciliation",
  //       href: "https://www.brickworkindia.com/finance-and-accounting-services/finance-support",
  //     },
  //     {
  //       name: "Financial Planning & Analysis",
  //       href: "https://www.brickworkindia.com/financial-budgeting-services/budget-planning-and-cost-control",
  //     },
  //     {
  //       name: "Investment Banking & Equity Research",
  //       href: "https://www.brickworkindia.com/services/investment-banking-service",
  //     },
  //   ],
  // },

  // {
  //   slug: "sales-marketing",
  //   title: "Digital Marketing Services",
  //   tagline: "Pipeline engineering, not just campaigns.",
  //   accent: "brand",
  //   href: "https://www.brickworkindia.com/services/sales-and-digital-marketing",

  //   subServices: [
  //     {
  //       name: "Lead & Demand Generation",
  //       href: "https://www.brickworkindia.com/services/sales-and-digital-marketing",
  //     },
  //     {
  //       name: "Email Marketing & Content Creation",
  //       href: "https://www.brickworkindia.com/sales-and-digital-marketing/marketing-and-communication-design",
  //     },
  //     {
  //       name: "SEO Optimization",
  //       href: "https://www.brickworkindia.com/services/sales-and-digital-marketing",
  //     },
  //     {
  //       name: "Creative & Graphic Design",
  //       href: "https://www.brickworkindia.com/sales-and-digital-marketing/creative-design",
  //     },
  //   ],
  // },

  // {
  //   slug: "research-strategy",
  //   title: "Research & Consulting",
  //   tagline: "Decisions backed by evidence, delivered fast.",
  //   accent: "brand",
  //   href: "https://www.brickworkindia.com/research-support-services/industry-and-market-research",

  //   subServices: [
  //     {
  //       name: "Market & Industry Research",
  //       href: "https://www.brickworkindia.com/research-support-services/industry-and-market-research",
  //     },
  //     {
  //       name: "Business Strategy Consulting",
  //       href: "https://www.brickworkindia.com/research-support-services/business-strategy",
  //     },
  //   ],
  // },

  // {
  //   slug: "hr-services",
  //   title: "HR Services",
  //   tagline: "Hire, pay and retain talent without friction.",
  //   accent: "red",
  //   href: "https://www.brickworkindia.com/services/hr-services",

  //   subServices: [
  //     {
  //       name: "Recruitment",
  //       href: "https://www.brickworkindia.com/services/hr-services",
  //     },
  //     {
  //       name: "Payroll",
  //       href: "https://www.brickworkindia.com/services/hr-services",
  //     },
  //     {
  //       name: "Employee Engagement",
  //       href: "https://www.brickworkindia.com/services/hr-services",
  //     },
  //   ],
  // },

  // {
  //   slug: "operations",
  //   title: "Operations",
  //   tagline: "Throughput, visibility and control at scale.",
  //   accent: "red",
  //   href: "https://www.brickworkindia.com/services/supply-chain-operations",

  //   subServices: [
  //     {
  //       name: "Supply Chain & Logistics Management",
  //       href: "https://www.brickworkindia.com/services/supply-chain-operations",
  //     },
  //     {
  //       name: "Procurement & Vendor Management",
  //       href: "https://www.brickworkindia.com/project-and-program-management/project-finance",
  //     },
  //     {
  //       name: "Project & Program Management",
  //       href: "https://www.brickworkindia.com/services/project-and-program-management",
  //     },
  //   ],
  // },

  // {
  //   slug: "compliance-risk",
  //   title: "Compliance & Audit",
  //   tagline: "Stay audit-ready across every jurisdiction.",
  //   accent: "brand",
  //   href: "https://www.brickworkindia.com/services/compliance-and-audit-services",

  //   subServices: [
  //     {
  //       name: "Regulatory Compliance Consulting (GDPR, ISO 27001, HIPAA)",
  //       href: "https://www.brickworkindia.com/compliance-and-audit-services/regulatory-readiness-gdpr-dpdpa-hipaa",
  //     },
  //     {
  //       name: "Compliance Audits",
  //       href: "https://www.brickworkindia.com/services/compliance-and-audit-services",
  //     },
  //   ],
  // },
];

/** Hero infinity nodes — four pillars. */
export const heroServiceNodes = [
  {
    label: "Lead Generation",
    href: "https://www.brickworkindia.com/sales-and-digital-marketing/lead-and-demand-generation",
    accent: "red" as const,
  },
    {
    label: "Sales Collateral",
    href: "https://www.brickworkindia.com/sales-and-digital-marketing/sales-collateral-design",
    accent: "orange" as const,
  },
  {
    label: "Digital Presence",
    href: "https://www.brickworkindia.com/sales-and-digital-marketing/digital-presence-management",
    accent: "yellow" as const,
  },
  {
    label: "Customer Engagement",
    href: "https://www.brickworkindia.com/executive-admin/executive-presentationshttps://www.brickworkindia.com/sales-and-digital-marketing/customer-engagement-and-account-support",
    accent: "green" as const,
  },
] as const;

export const accentVar: Record<ServiceCategory["accent"], string> = {
  brand: "var(--brand)",
  red: "var(--red)",
  yellow: "var(--yellow)",
  green: "var(--green)",
  orange: "var(--orange)",
};