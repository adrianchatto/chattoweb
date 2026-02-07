'use client';

import { useEffect, useState } from 'react';
import { NAV_ITEMS, SCROLL_SPY_OFFSET } from '@/lib/constants';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_SPY_OFFSET;

      // Get all section elements
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean);

      // Find the current section
      let currentSection = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      // If we're at the bottom of the page, activate the last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          currentSection = lastSection.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
