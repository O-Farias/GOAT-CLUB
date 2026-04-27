import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "w-fit border-gold/30 bg-gold/5 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-gold",
        className
      )}
    >
      {children}
    </Badge>
  );
}
