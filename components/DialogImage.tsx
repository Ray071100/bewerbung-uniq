"use client";
import { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import Image from "next/image";

export const DialogImage = ({
  image,
  alt,
  title,
  description,
  content,
}: {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  content: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {content}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
