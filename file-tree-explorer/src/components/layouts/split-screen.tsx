import type { ReactNode } from "react";

interface ISplitScreenProps {
  leftWeight: number;
  rightWeight: number;
  children: [ReactNode, ReactNode];
}
const SplitScreen = ({
  children,
  leftWeight,
  rightWeight,
}: ISplitScreenProps) => {
  const [left, right] = children;

  const leftWidth = `${leftWeight}%`;
  const rightWidth = `${rightWeight}%`;

  return (
    <section className="flex w-screen h-lvh">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
