export const services = [
  {
    slug: "biostatistics",
    title: "Biostatistics",
    short: "Trial design, SAPs, and analysis you can defend at review.",
    icon: "LineChart",
  },
  {
    slug: "statistical-programming",
    title: "Statistical Programming",
    short: "CDISC-compliant SDTM/ADaM datasets and validated TLFs.",
    icon: "Terminal",
  },
  {
    slug: "clinical-data-management",
    title: "Clinical Data Management",
    short: "Clean, query-free data from first patient in to lock.",
    icon: "Database",
  },
  {
    slug: "statistical-consulting",
    title: "Statistical Consulting",
    short: "An experienced statistician in the room for every decision.",
    icon: "Users",
  },
  {
    slug: "regulatory-submission-support",
    title: "Regulatory Submission Support",
    short: "eCTD-ready packages built for FDA, EMA, and PMDA review.",
    icon: "FileCheck2",
  },
  {
    slug: "medical-writing",
    title: "Medical Writing",
    short: "Protocols, CSRs, and manuscripts written for the reader.",
    icon: "PenLine",
  },
];

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Solutions", to: "/solutions" },
  { label: "Resources", to: "/resources", hasDropdown: true },
  { label: "Contact", to: "/contact" },
];

export const resourceLinks = [
  { label: "Case studies", to: "/resources#case-studies", desc: "Real trials, real analysis problems, real outcomes." },
  { label: "Regulatory notes", to: "/resources#notes", desc: "Short reads on ICH, FDA, and EMA statistical guidance." },
  { label: "Glossary", to: "/resources#glossary", desc: "Plain-language definitions for trial statistics terms." },
  { label: "Webinars", to: "/resources#webinars", desc: "Recorded sessions with our senior biostatisticians." },
];
