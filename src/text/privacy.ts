export const PRIVACY_PAGE_CONTENT = {
  hero: {
    eyebrow: "Policy and protection details",
    title: "Privacy Policy",
    titleHighlightSlice: [8, 14] as [number, number],
    subtitle:
      "How USDS handles information across this site and service-delivery workflows, including collection, usage boundaries, and protection controls.",
    details: [
      { label: "Collection model", value: "Minimal and purpose-bound" },
      { label: "Retention", value: "Only as required" },
      { label: "Safeguards", value: "Role-based and monitored" },
      { label: "Policy updates", value: "Published on change" },
    ],
  },
  quickLinksAriaLabel: "Privacy policy quick links",
  quickLinks: [
    { href: "#collection", label: "Collection" },
    { href: "#usage", label: "Usage and sharing" },
    { href: "#security", label: "Security and rights" },
  ],
  sections: [
    {
      id: "collection",
      header: {
        eyebrow: "Collection",
        title: "What information we collect",
      },
      faqs: [
        {
          question: "What do we collect from this website?",
          paragraphs: [
            "We collect technical request data needed to run and secure the site, such as browser, device, and basic request logs.",
            "If you submit a form, we collect only the information you provide in that submission.",
          ],
        },
        {
          question: "Do we collect more than we need?",
          paragraphs: [
            "No. We minimize collection and avoid requesting unnecessary personal information.",
            "Collection scope is reviewed as features change to keep data use aligned with mission needs.",
          ],
        },
      ],
    },
    {
      id: "usage",
      header: {
        eyebrow: "Usage and sharing",
        title: "How information is used",
      },
      faqs: [
        {
          question: "How is submitted information used?",
          paragraphs: [
            "Submitted information is used to respond to your request, route outreach to the correct team, and improve service reliability.",
            "Information is not used for unrelated profiling or commercial marketing.",
          ],
        },
        {
          question: "Do we share information outside USDS?",
          paragraphs: [
            "Information may be shared with federal partners only when needed to fulfill your request or meet legal obligations.",
          ],
          bullets: [
            "Operational routing to relevant agency or program teams",
            "Security and compliance workflows required by federal policy",
            "Records handling required under applicable law",
          ],
        },
      ],
    },
    {
      id: "security",
      header: {
        eyebrow: "Security and rights",
        title: "How information is protected",
      },
      faqs: [
        {
          question: "How do we protect information?",
          paragraphs: [
            "Systems are managed with federal security controls, including role-based access, auditing, and monitoring.",
            "Access is limited to personnel with mission need and authorized responsibilities.",
          ],
        },
        {
          question: "How are policy updates handled?",
          paragraphs: [
            "This policy is updated when service or legal requirements change.",
            "Material updates are posted on this page so users can review current handling practices.",
          ],
        },
      ],
    },
  ],
  cta: {
    eyebrow: "Need help?",
    title: "Questions about privacy practices?",
    body: "Contact our team with details about the service or page tied to your request.",
    primary: { text: "Contact us", href: "/contact" },
    secondary: { text: "Hiring FAQ", href: "/hiring-faq" },
  },
} as const;
