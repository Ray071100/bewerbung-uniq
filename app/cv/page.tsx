"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import bild from "@/lib/bild.gif";
import bild2 from "@/lib/bild2.png";
import bild3 from "@/lib/bild3.gif";
import { Badge } from "@/components/ui/badge";
import { DialogImage } from "@/components/DialogImage";
import { FaGithub } from "react-icons/fa";

interface CVPageProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  startDate: string;
  endDate?: string;
  location: string;
}

const cvData: CVPageProps[] = [
  {
    title: "Allgemeine Hochschulreife",
    shortDescription: "",
    longDescription:
      "Abschluss am Paul-Klee-Gymnasium Augsburg mit Schwerpunkt auf naturwissenschaftlichen Fächern.",
    startDate: "Sep 2011",
    endDate: "Jun 2019",
    location: "Paul-Klee-Gymnasium, Augsburg",
  },
  {
    title: "Studium",
    shortDescription: "",
    longDescription:
      "Ich studiere aktuell Data Science, werde aber höchstwahrscheinlich in den Studiengang Ingenieurinformatik wechseln.",
    startDate: "Apr 2024",
    location: "Universität Augsburg",
  },
  {
    title: "Eventorganisation bei der Gemeinde Meitingen",
    shortDescription: "",
    longDescription:
      "Verantwortlich für die Organisation, den Aufbau und die technische Betreuung von Veranstaltungen der Gemeinde Meitingen.",
    startDate: "Jul 2019",
    endDate: "Sept 2019",
    location: "Gemeinde Meitingen",
  },
  {
    title: "Volleyballtrainer und Vereinsorganisation",
    shortDescription: "",
    longDescription:
      "Planung und Durchführung von Trainingseinheiten, Führung und Motivation eines Jugendteams sowie Organisation von Vereinsveranstaltungen und Wettkämpfen.",
    startDate: "Apr 2023",
    endDate: "Aug 2024",
    location: "TSV Gersthofen Volleyballverein",
  },
  {
    title: "Sportliche Leistungen",
    shortDescription: "",
    longDescription:
      "Mit großem Stolz am uniqbit FIFA-Turnier teilgenommen und mit Jan Pupeter, der mit Sicherheit nicht unser Team getragen hat, den zweiten Platz errungen.",
    startDate: "11.05.2023",
    endDate: "11.05.2023",
    location: "uniqbit AG",
  },
];

const hobbies = [
  {
    title: "Coding",
    description:
      "Programmierkenntnisse in vielseitigen Projekten anwenden und ausbauen",
    icon: "🖥️",
  },

  {
    title: "Sport",
    description:
      "Neben Vereinsvolleyball und Fitness beschäftige ich mich mit wissenschaftlichen Studien zur Ernährung",
    icon: "🏐",
  },

  {
    title: "Schreiben/Lesen",
    description:
      "Ich lese und schreibe gerne – von Sci-Fi-Romanen bis hin zu technischen Artikeln",
    icon: "📚",
  },

  {
    title: "Gaming",
    description: "Von Strategiespielen bis hin zu Game Development",
    icon: "🎮",
  },
];

export default function cvPage() {
  return (
    <div className=" flex min-h-screen pt-24 flex-col">
      <h1 className="text-5xl font-bold text-center pt-12">Lebenslauf</h1>
      <p className="text-muted-foreground text-center mb-12 pt-6">
        Übersicht über meine Ausbildung, Erfahrung und Hobbies.
      </p>

      <main className="flex-1 text-3xl pb-12 container mx-auto px-6">
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            a <span className="text-accent">BIT</span> about me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Ich studiere in einem technisch-orientierten Studiengang mit
                Schwerpunkt auf Informatik und Softwareentwicklung.
                Programmieren gehört für mich nicht nur zum Studium, sondern
                auch zu meinen eigenen Projekten – aktuell vor allem mit C#,
                Python und Java. Wichtig sind mir gute Kommunikation, Struktur
                und die Bereitschaft, ständig dazuzulernen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between items-center border-b py-2">
                <Badge>Name:</Badge>
                <span>Marvin Ray Siedlaczek</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <Badge>Alter:</Badge>
                <span>07.11.2000</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <Badge>Herkunft:</Badge>
                <span>Deutschland</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <Badge>Adresse:</Badge>
                <span>Augsburg, Oberhausen</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <Badge>Sprachen:</Badge>
                <span> Deutsch, Englisch</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="font-bold text-center">Hobbies</h2>
            <div className="max-w-3xl mx-auto px-12 pt-8">
              <Carousel>
                <CarouselContent>
                  {hobbies.map((hobby, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="h-72 flex flex-col justify-start overflow-hidden">
                        <div className="text-5xl mb-4 text-center">
                          {hobby.icon}
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                          {hobby.title}
                        </h2>
                        <p className="text-base text-muted-foreground text-center leading-relaxed">
                          {hobby.description}
                        </p>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto mb-16 pt-16">
          <div>
            <h2 className="font-bold text-center mb-12">
              Ausbildung und Erfahrung
            </h2>
            <Accordion type="single" collapsible className="pb-4">
              {cvData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-lg mb-4 last:border-b-2"
                >
                  <AccordionTrigger className="px-4 py-3 font-medium text-left">
                    <div className="flex justify-between w-full items-center">
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.shortDescription}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.startDate} - {item.endDate ? item.endDate : ""}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t border-muted">
                    <p className="text-muted-foreground leading-relaxed">
                      Ort: {item.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.longDescription}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section>
          <div>
            <h2 className="font-bold text-center mb-8">Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DialogImage
                image={bild}
                alt="Projektbild"
                title="Game Jam Projekt"
                description="Prototyp, der für einen Game Jam erstellt wurde. Enthält grundlegende Mechaniken und etwas GLSL ähnlichen Shader Code."
                content={
                  <div className="flex justify-center items-center w-full h-full">
                    <a
                      href="https://github.com/Ray071100/WTMJam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-4xl transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                  </div>
                }
              />
              <DialogImage
                image={bild2}
                alt="Projektbild"
                title="Youtube Watch Party Extension"
                description="Eine kleine Browser Extension, die es ermöglichen sollte Youtube Videos synchron zu schauen.
                Leider wurde das Projekt nie fertiggestellt aufgrund von Komplikationen mit Https/Zertifikaten."
                content={
                  <div className="flex justify-center items-center w-full h-full">
                    <a
                      href="https://github.com/Ray071100/VidSync"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-4xl transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                  </div>
                }
              />
              <DialogImage
                image={bild3}
                alt="Projektbild"
                title="Rollback Netcode Test"
                description="Implementierung eines Rollback Netcode Systems in Unity, inspiriert von GGPO. Eine Netzwerkarchitektur, 
                die durch Prediction und State Rewinding eine stabile Verbindung auch bei hohen Latenzen ermöglichen kann."
                content={
                  <div className="flex justify-center items-center w-full h-full">
                    <a
                      href="https://github.com/Ray071100/RollbackTest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-4xl transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
