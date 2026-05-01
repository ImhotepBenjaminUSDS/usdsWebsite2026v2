export const ROUTE_CONTENT_PAGE_TEXT = {
  tableHeaders: [
    "Agency",
    "Domain",
    "Teams",
    "People",
    "Status",
    "Highlights",
  ],
  impactShowcaseTones: ["blue", "sky", "gold", "teal"],
  wideCardTones: ["blue", "teal", "gold", "sky"],
  about: {
    hero: {
      eyebrow: "About",
      title: "The government's top technologists",
      subtitle:
        "When a federal system fails and millions are affected, we deploy. USDS is the elite technology unit within government - engineers, designers, and product leaders who take on the hardest problems at the highest stakes.",
      imageAlt: "Cross-functional government delivery teams collaborating",
      cta: [
        { text: "View people", href: "/about/people" },
        { text: "See impact", href: "/impact" },
      ],
    },
    stats: {
      foundedValue: "2014",
      foundedLabel: "Organization founded",
      profilesLabel: "Employee profiles",
      milestonesLabel: "Recorded milestones",
      agenciesValue: "30+",
      agenciesLabel: "Agencies served",
    },
    sections: {
      objectives: {
        eyebrow: "Objectives",
        title: "How the mission is translated into execution",
        subtitle:
          "These delivery objectives come directly from the child site and are now surfaced in the parent experience.",
      },
      timeline: {
        eyebrow: "Timeline",
        title: "Major milestones",
        subtitle:
          "From initial crisis response to permanent authorization, this timeline captures key moments from the child site history pages.",
      },
      values: {
        eyebrow: "Values",
        title: "Operating principles",
        subtitle:
          "Consistent values are now represented in the parent site theme and components.",
      },
    },
    cta: {
      eyebrow: "Explore",
      title: "Meet the people behind the mission",
      body:
        "Read opt-in employee profile stories about work delivered and why people choose mission-focused service.",
      primary: { text: "View people", href: "/about/people" },
      secondary: { text: "See impact", href: "/impact" },
    },
  },
  aboutPeople: {
    hero: {
      eyebrow: "People",
      title: "Employee profiles",
      subtitle:
        "Opt-in stories from across USDS about what employees have worked on and why they like serving.",
      imageAlt: "USDS employee profile collaboration session",
      cta: [
        { text: "Open careers", href: "/careers" },
        { text: "See join page", href: "/join" },
      ],
    },
    stats: {
      profilesShownLabel: "Profiles shown",
      rolePerspectivesLabel: "Role perspectives",
      projectHighlightsSharedLabel: "Project highlights shared",
      participationValue: "Opt-in",
      participationLabel: "Participation model",
    },
    participationNotice:
      "Employee profiles are shared voluntarily and represent a sample of roles and mission work across USDS.",
    sections: {
      profiles: {
        eyebrow: "Profiles",
        title: "Employee stories",
        subtitle:
          "Each story includes what the employee worked on and why they like serving at USDS.",
      },
    },
    workedOnLabel: "Worked on:",
    whyUsdsLabel: "Why USDS:",
    cta: {
      eyebrow: "Join",
      title: "Bring your background to mission-critical work",
      body:
        "Explore open career tracks and the tours of service model used across agencies.",
      primary: { text: "See join page", href: "/join" },
      secondary: { text: "Open careers", href: "/careers" },
    },
  },
  impactCongress: {
    hero: {
      eyebrow: "Impact for Congress",
      title: "Agency-by-agency delivery and capacity snapshot",
      subtitle:
        "A compact operational view for oversight and planning, built from child-site engagement and impact data.",
      imageAlt: "Congressional impact overview background",
    },
    stats: {
      engagementsLabel: "Agency engagements",
      activeLabel: "Active engagements",
      teamsLabel: "Embedded teams",
      peopleLabel: "People deployed",
    },
    sections: {
      caseStudies: {
        eyebrow: "Case studies",
        title: "Representative results",
      },
      portfolio: {
        eyebrow: "Portfolio",
        title: "Engagement table",
        subtitle: "Status, team footprint, and delivery focus by agency.",
      },
    },
    cta: {
      eyebrow: "Continue",
      title: "Review the full impact portfolio",
      body:
        "Return to impact overview or browse agency-specific engagement details.",
      primary: { text: "Back to impact", href: "/impact" },
      secondary: { text: "Open agencies", href: "/agencies" },
    },
  },
  impactDetail: {
    heroEyebrow: "Impact case study",
    stats: {
      beforeLabelPrefix: "Before",
      afterLabelPrefix: "After",
      agencyLabel: "Agency",
      domainLabel: "Domain",
    },
    sections: {
      related: {
        eyebrow: "Related case studies",
        title: "More impact routes",
        subtitle: "Continue into other impact pages from the same portfolio.",
      },
      implementation: {
        eyebrow: "Implementation",
        title: "What changed",
      },
      outcomes: {
        eyebrow: "Outcomes",
        title: "Why this mattered",
      },
    },
    cards: {
      implementationEyebrow: "Implementation",
      implementationTitle: "Delivery update",
      implementationSideLabel: "Update",
      outcomesEyebrow: "Outcomes",
      outcomesSideLabel: "Result",
      measureEyebrow: "Measure",
      measureSideLabel: "Change",
      measureDescriptionPrefix: "Primary tracked movement:",
    },
    cta: {
      eyebrow: "Explore",
      title: "Continue through impact content",
      body: "Return to the impact index or open the congressional summary view.",
      primary: { text: "Back to impact", href: "/impact" },
      secondary: { text: "Congress view", href: "/impact/congress" },
    },
    entries: {
      fafsa: {
        subtitle:
          "Reducing form friction, clarifying eligibility, and improving mobile completion for students and families.",
        highlights: [
          "Condensed the application from 108 prompts to 36 guided questions.",
          "Rebuilt the flow for mobile-first completion with clearer dependency logic.",
          "Improved plain-language copy so applicants understand progress and next steps.",
          "Integrated validation checkpoints earlier to prevent late-stage form failures.",
        ],
        outcomes: [
          "Record FAFSA completion gains over prior years.",
          "Higher completion confidence among first-generation students.",
          "Lower support-ticket volume for form navigation questions.",
        ],
      },
      "va-ai": {
        subtitle:
          "Pairing adjudicators with explainable AI signals to reduce backlog while maintaining decision quality.",
        highlights: [
          "Introduced AI-assisted triage for disability-claim intake routing.",
          "Added reliability and observability controls around model-assisted workflows.",
          "Built reviewer interfaces that surface model context for human verification.",
          "Modernized data pipelines to keep downstream processing continuously updated.",
        ],
        outcomes: [
          "Major cycle-time improvements for disability-claim decisions.",
          "Sustained high-quality outcomes with human-in-the-loop review.",
          "More predictable queue operations for high-volume intake periods.",
        ],
      },
      "state-visas": {
        subtitle:
          "Stabilizing throughput for a mission-critical international processing platform under production load.",
        highlights: [
          "Identified and resolved timeout behavior that silently dropped submissions.",
          "Added instrumentation and alerting for failure-pattern detection before user impact.",
          "Hardened queue and session management for sustained peak traffic.",
          "Implemented release safeguards to reduce regression risk during high-demand windows.",
        ],
        outcomes: [
          "Throughput recovered to large-scale daily application volumes.",
          "Improved operational resilience and uptime consistency.",
          "Shorter incident-diagnosis cycles across platform teams.",
        ],
      },
      passport: {
        subtitle:
          "Designing an end-to-end digital renewal journey with clearer status visibility and lower processing delay.",
        highlights: [
          "Launched a structured online renewal flow replacing paper-heavy handoffs.",
          "Improved applicant status transparency with clearer state transitions.",
          "Reduced operational bottlenecks through better case prioritization paths.",
          "Expanded national rollout with staged reliability checks.",
        ],
        outcomes: [
          "Lower end-to-end renewal time for applicants.",
          "Increased completion rates for online submission.",
          "Higher support efficiency due to cleaner status reporting.",
        ],
      },
    },
  },
  join: {
    hero: {
      eyebrow: "Join",
      title: "Tours of service for mission-critical systems",
      subtitle:
        "The child site's join and career pathways are now available in the parent site using the same tone and layout conventions.",
    },
    stats: {
      tourRangeValue: "6-24 months",
      tourRangeLabel: "Typical tour range",
      disciplinesLabel: "Disciplines represented",
      journeysLabel: "Before/after journeys",
      operatingModelValue: "Mission-first",
      operatingModelLabel: "Operating model",
    },
    sections: {
      roles: {
        eyebrow: "Roles",
        title: "Where people contribute",
        membersSuffix: "members",
        representativeRolesPrefix: "Representative roles:",
      },
      journeys: {
        eyebrow: "Journeys",
        title: "From private sector to public impact",
        beforePrefix: "Before:",
        nowPrefix: "Now:",
      },
    },
    cta: {
      eyebrow: "Start",
      title: "Ready to apply for a tour?",
      body:
        "Review the application path or jump directly to current careers information.",
      primary: { text: "Open apply page", href: "/apply" },
      secondary: { text: "View careers", href: "/careers" },
    },
  },
  joinAlumni: {
    hero: {
      eyebrow: "Alumni",
      title: "Long-term impact beyond a single tour",
      subtitle:
        "Alumni data from the child site is now connected to the parent site's join pathways.",
    },
    stats: {
      destinationCategoriesLabel: "Destination categories",
      trackedOutcomesLabel: "Tracked outcomes",
      networkEstimateValue: "1,000+",
      networkEstimateLabel: "Estimated alumni network",
      careerPathsValue: "Cross-sector",
      careerPathsLabel: "Career paths",
    },
    sections: {
      destinations: {
        eyebrow: "Destinations",
        title: "Where alumni lead",
        destinationBody: "Reported destination count from child-site alumni data.",
      },
      stories: {
        eyebrow: "Stories",
        title: "What alumni carry forward",
      },
    },
    cta: {
      eyebrow: "Join",
      title: "Start your own tour",
      body:
        "Open the application route or return to careers to view active opportunities.",
      primary: { text: "Apply now", href: "/apply" },
      secondary: { text: "Open careers", href: "/careers" },
    },
  },
} as const;

export type ImpactDetailSlug = keyof typeof ROUTE_CONTENT_PAGE_TEXT.impactDetail.entries;
