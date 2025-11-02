"use client";

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactNode } from "react";

interface SectionInfoProps {
  sections: { id: string; title: string; icon: ReactNode }[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

export default function SectionInfo({
  sections,
  currentSection,
  onSectionClick,
}: SectionInfoProps & { sections: { icon: React.ReactNode }[] }) {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
      {sections.map((section, index) => (
        <div
          key={section.id}
          title={section.title}
          onClick={() => onSectionClick(index)}
          className={`cursor-pointer transition-transform duration-300 pt-4 ${
            currentSection === index ? "scale-200" : "scale-150"
          }`}
        >
          {section.icon}
        </div>
      ))}
    </div>
  );
}
