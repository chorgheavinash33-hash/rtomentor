import React from "react";
// import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

export default function BentoGridSecondDemo() {
  return (
   <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 min-h-screen flex items-center justify-center px-4">
  <BentoGrid className="max-w-4xl w-full md:auto-rows-[20rem]">
    {items.map((item, i) => (
        <Link  key={i}  href={item.href} className="block">
      <BentoGridItem
        title={item.title}
        description={item.description}
        header={item.header}
        className={item.className}
        icon={item.icon}
      />
      </Link>
    ))}
  </BentoGrid>
</div>

   
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Practice Test",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "/practice-test",
  },
  {
    title: "Question Bank",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "/question-bank",
  },
  {
    title: "Mock Exam",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "/mock-test",
  },
  {
    title: "Informational Services",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "/services",
  },
];

