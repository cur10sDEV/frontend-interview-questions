import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ISplitScreeProps {
  leftWeight: number;
  rightWeight: number;
  children: [ReactNode, ReactNode];
}

const SplitScreen = ({
  children,
  leftWeight,
  rightWeight,
}: ISplitScreeProps) => {
  const leftWidth = `w-${leftWeight}%`;
  const rightWidth = `w-${rightWeight}%`;

  const [left, right] = children;

  return (
    <section className="flex justify-center w-screen h-screen gap-12">
      <div className={cn(leftWidth)}>{left}</div>
      <div className={cn(rightWidth)}>{right}</div>
    </section>
  );
};

export default SplitScreen;
