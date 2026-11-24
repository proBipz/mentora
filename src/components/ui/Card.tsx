import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverable = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-card border border-border bg-surface p-6 shadow-card ${
        hoverable
          ? "transition-shadow duration-200 hover:shadow-card-hover"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
