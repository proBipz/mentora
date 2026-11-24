export const resourceCategories = [
  "All",
  "Study in Serbia",
  "Student Guides",
  "Serbia Living Guides",
  "Technology",
  "Business & Entrepreneurship",
  "Digital Transformation",
] as const;

export type ResourceCategory = (typeof resourceCategories)[number];

export interface ResourceArticle {
  slug: string;
  title: string;
  category: Exclude<ResourceCategory, "All">;
  summary: string;
  readingTime: string;
  status: "Template Placeholder";
  sections: {
    heading: string;
    body: string;
  }[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "how-to-research-universities-in-serbia",
    title: "How to Research Universities in Serbia",
    category: "Study in Serbia",
    summary:
      "A structured framework for comparing Serbian higher-education institutions, degree programs, and official admission requirements.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Clarify Your Academic & Language Criteria",
        body: "Template placeholder: Outline how prospective students should check accreditation, language of instruction (English or Serbian), and degree recognition requirements before shortlisting universities.",
      },
      {
        heading: "2. Review Official University Portals",
        body: "Template placeholder: Verify tuition schedules, application deadlines, and entrance exam or document legalization requirements directly on each institution's official website.",
      },
      {
        heading: "3. Next Steps",
        body: "Template placeholder: Add verified links, checklist downloads, or consultation CTAs once editorial review is complete.",
      },
    ],
  },
  {
    slug: "understanding-the-cost-of-studying-in-serbia",
    title: "Understanding the Cost of Studying in Serbia",
    category: "Student Guides",
    summary:
      "How to budget for tuition, accommodation, utilities, health insurance, and everyday student expenses without guesswork.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Tuition & Administrative Fees",
        body: "Template placeholder: Break down how tuition varies by public vs. private institutions and by field of study, referencing official university fee schedules.",
      },
      {
        heading: "2. Monthly Living Expense Categories",
        body: "Template placeholder: Cover housing, utilities, groceries, local transit, mobile connectivity, and personal expenses using verified local benchmarks.",
      },
    ],
  },
  {
    slug: "living-in-belgrade-practical-beginners-guide",
    title: "Living in Belgrade: A Practical Beginner's Guide",
    category: "Serbia Living Guides",
    summary:
      "An orientation template covering neighborhoods, public transport, everyday services, and settling into Belgrade.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. City Orientation & Neighborhoods",
        body: "Template placeholder: Introduce Belgrade's main municipalities and practical factors such as commute times and proximity to universities or business districts.",
      },
      {
        heading: "2. Everyday Logistics",
        body: "Template placeholder: Summarize public transportation, local SIM cards, banking basics, and essential day-one checklists.",
      },
    ],
  },
  {
    slug: "choosing-accommodation-in-serbia",
    title: "Choosing Accommodation in Serbia",
    category: "Student Guides",
    summary:
      "Comparing student dormitories, shared apartments, and private rentals, plus key lease questions to ask.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Housing Options Overview",
        body: "Template placeholder: Compare university dormitories, private studio apartments, and shared housing options.",
      },
      {
        heading: "2. Lease & Registration Considerations",
        body: "Template placeholder: Explain why written lease agreements and local address registration rules matter for international residents.",
      },
    ],
  },
  {
    slug: "what-international-students-should-know-before-arriving",
    title: "What International Students Should Know Before Arriving",
    category: "Study in Serbia",
    summary:
      "Pre-arrival preparation checklist covering documents, climate, currency, connectivity, and realistic expectations.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Document Preparation",
        body: "Template placeholder: List academic transcripts, translated/legalized documents, and copies to organize prior to departure.",
      },
      {
        heading: "2. Arrival & First Week",
        body: "Template placeholder: Outline airport transit, local currency (RSD), SIM activation, and university orientation steps.",
      },
    ],
  },
  {
    slug: "how-smes-can-use-ai-and-automation",
    title: "How SMEs Can Use AI and Automation",
    category: "Digital Transformation",
    summary:
      "Practical ways small and medium businesses can streamline repetitive workflows without over-engineering.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Identify High-Friction Workflows",
        body: "Template placeholder: Focus on repetitive manual tasks such as lead intake, document routing, reporting, and internal knowledge lookup.",
      },
      {
        heading: "2. Start with Measurable Pilots",
        body: "Template placeholder: Evaluate cost, data privacy, and team adoption before scaling AI-assisted workflows across operations.",
      },
    ],
  },
  {
    slug: "how-to-plan-an-mvp",
    title: "How to Plan an MVP",
    category: "Technology",
    summary:
      "A practical product-management approach to scoping a Minimum Viable Product, avoiding feature bloat, and validating assumptions.",
    readingTime: "Guide Template",
    status: "Template Placeholder",
    sections: [
      {
        heading: "1. Define the Core Problem & User",
        body: "Template placeholder: Document the primary user pain point and the single core workflow your MVP must solve reliably.",
      },
      {
        heading: "2. Prioritize Scope & Technical Architecture",
        body: "Template placeholder: Separate must-have features from later iterations and align architecture with budget and timeline constraints.",
      },
    ],
  },
];
