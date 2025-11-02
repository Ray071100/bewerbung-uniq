"use client";
import { useState, useEffect } from "react";
import SectionInfo from "./components/sectionInfo";
import Header from "./components/header";
import { FaHome, FaPagelines, FaPhone } from "react-icons/fa";

const sections = [
  {
    id: "section1",
    title: "Section 1",
    heading: "Bewerbung uniqbit",
    text: "",
    icon: <FaHome stroke="white" strokeWidth={5} />,
    bg: "bg-background text-white",
  },
  {
    id: "section2",
    title: "Section 2",
    heading: "Motivation",
    text: (
      <>
        Hey! Ich hatte in der Vergangenheit mehrfach Kontakt mit eurem Team bei
        uniqbit und habe dadurch einen guten Eindruck von euch bekommen.
        <br />
        Ich programmiere leidenschaftlich und studiere in einem
        technisch-orientierten Studiengang mit Fokus auf Informatik.
        <br />
        <br />
        Ich bringe starke organisatorische Fähigkeiten, klare Kommunikation und
        schnelle Auffassungsgabe mit, um mich effektiv in neue Technologien
        einzuarbeiten.
        <br />
        <br />
        Genau deshalb suche ich eine Werkstudentenstelle, bei der ich viel
        lernen, meine Fähigkeiten gezielt weiterentwickeln und gleichzeitig an
        Webprojekten mitarbeiten kann.
        <br />
        <br />
        Besonders gefällt mir bei uniqbit, wie Feedbackrunden und
        Teamzusammenhalt gelebt werden. So entsteht wirklich das Gefühl,
        gemeinsam an Projekten zu arbeiten, statt jeder allein für sich.
        <br />
        <br />
        Wenn das zu euch passt, würde ich mich sehr über ein Gespräch freuen!
      </>
    ),
    icon: <FaPagelines stroke="white" strokeWidth={5} />,
    bg: "bg-background text-white",
  },
  {
    id: "section3",
    title: "Section 3",
    heading: "Kontakt",
    text: (
      <>
        Email: marvin.siedlaczek@gmail.com <br />
        Telefon: +49 160 97066624
      </>
    ),
    icon: <FaPhone stroke="white" strokeWidth={5} />,
    bg: "bg-background text-white",
  },
];

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    const handleWheel = (e: { deltaY: number }) => {
      if (isTransitioning) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }

      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 200);
    };

    let touchStart: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning || touchStart === null) return;

      const touchEnd = e.changedTouches[0].clientY;
      const delta = touchStart - touchEnd;
      // scroll hoch
      if (delta > 50 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (delta < -50 && currentSection > 0) {
        // scroll runter
        setCurrentSection(currentSection - 1);
      }

      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 200);

      touchStart = null;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection, isTransitioning]);

  return (
    <div className="relative h-screen overflow-hidden">
      <main>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute left-0 right-0 flex flex-col justify-start transition-opacity duration-500 ${section.bg}`}
            style={{
              top: "var(--header-height)",
              height: "calc(100vh - var(--header-height))",
              opacity: currentSection === index ? 1 : 0,
              paddingTop: "calc((100vh - var(--header-height)) / 4)",
            }}
          >
            <div className="px-6 max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">{section.heading}</h1>
              <p className="flex text-lg leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </main>

      <SectionInfo
        sections={sections}
        currentSection={currentSection}
        onSectionClick={(index) => setCurrentSection(index)}
      />
    </div>
  );
}
