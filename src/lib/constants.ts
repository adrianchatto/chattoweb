import type { NavItem } from '@/types';

export const SECTION_IDS = {
  HERO: 'hero',
  HIGHLIGHTS: 'highlights',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  IMPACT: 'impact',
  TESTIMONIALS: 'testimonials',
  CONTACT: 'contact',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.ABOUT, label: 'About', href: `#${SECTION_IDS.ABOUT}` },
  {
    id: SECTION_IDS.EXPERIENCE,
    label: 'Experience',
    href: `#${SECTION_IDS.EXPERIENCE}`,
  },
  {
    id: SECTION_IDS.PROJECTS,
    label: 'Projects',
    href: `#${SECTION_IDS.PROJECTS}`,
  },
  { id: SECTION_IDS.IMPACT, label: 'Impact', href: `#${SECTION_IDS.IMPACT}` },
  {
    id: SECTION_IDS.CONTACT,
    label: 'Contact',
    href: `#${SECTION_IDS.CONTACT}`,
  },
];

export const SCROLL_OFFSET = 80; // Offset for sticky header
export const SCROLL_SPY_OFFSET = 100; // Offset for scroll spy detection

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1.0,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
