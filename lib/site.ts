import {
  TreePine,
  Axe,
  Trees,
  MessagesSquare,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Whitehead Tree Care",
  tagline: "Expert tree surgery across the Midlands",
  description:
    "Professional, fully qualified tree surgery, felling and stump removal. A family-run business serving Birmingham and the wider Midlands since 2009.",
  url: "https://www.whiteheadtreecare.com",
  phone: "07429 258819",
  phoneHref: "tel:+447429258819",
  whatsappHref: "https://wa.me/447429258819",
  email: "dave@whiteheadtreecare.com",
  location: "Birmingham, United Kingdom",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  foundedYear: 2009,
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: TreePine,
    title: "Tree Surgery",
    description:
      "Crown reduction, thinning, pruning and deadwooding carried out to industry standard. Over 20 years of experience keeping trees healthy, safe and beautifully shaped.",
  },
  {
    icon: Axe,
    title: "Tree Felling",
    description:
      "Safe, controlled removal of trees of any size, including technical dismantles in tight or sensitive spaces. Fully assessed, fully insured, and left tidy.",
  },
  {
    icon: Trees,
    title: "Stump Removal",
    description:
      "Complete stump grinding and removal to reclaim your space and prevent regrowth. Ready for replanting, paving or landscaping when we leave.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: MessagesSquare,
    title: "Fully Digital",
    description:
      "Quotes, scheduling and updates handled by email, text or WhatsApp — clear communication from first enquiry to final clean-up.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Qualified",
    description:
      "Certified, insured and environmentally compliant. Every job is risk-assessed and carried out to recognised safety standards.",
  },
  {
    icon: CalendarClock,
    title: "Booked in Advance",
    description:
      "We're in demand for good reason. Get in touch early so we can plan your work around the right season and your schedule.",
  },
];

export const serviceAreas = [
  "Birmingham",
  "Solihull",
  "Coventry",
  "Walsall",
  "Wolverhampton",
  "Sutton Coldfield",
  "Dudley",
  "West Bromwich",
  "Tamworth",
  "Lichfield",
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Dave Whitehead",
    role: "Founder & Lead Climber",
    initials: "DW",
    bio: "Founded the business in 2009 and brings over 20 years in the trade. There isn't a job Dave hasn't tackled, and he leads every project from the canopy down.",
  },
  {
    name: "Liam Harper",
    role: "Senior Tree Surgeon",
    initials: "LH",
    bio: "Fast, precise and endlessly reliable on the ground crew. Liam keeps every site moving safely and leaves it spotless.",
  },
  {
    name: "The Whitehead Team",
    role: "Ground Crew & Support",
    initials: "WT",
    bio: "A close-knit, family-run crew built on honesty and integrity — the people who make sure every job is done properly and on time.",
  },
];
