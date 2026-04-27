import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

export function GoatMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
      {...props}
    >
      <path d="M8.35 8.2C5.75 6.6 4.35 4.35 4.35 2c3 .65 5 2.45 5.85 5.2" />
      <path d="M15.65 8.2c2.6-1.6 4-3.85 4-6.2-3 .65-5 2.45-5.85 5.2" />
      <path d="m7.65 11.25-3.05-1.2 1.55 4.2" />
      <path d="m16.35 11.25 3.05-1.2-1.55 4.2" />
      <path d="M8.55 8.65c.9-1.45 2.1-2.15 3.45-2.15s2.55.7 3.45 2.15c1.45 2.3 1.2 5.75-.55 7.8L12 19.9l-2.9-3.45c-1.75-2.05-2-5.5-.55-7.8Z" />
      <path d="M10 12.25h.01" />
      <path d="M14 12.25h.01" />
      <path d="M12 14.15v4.85" />
      <path d="m10.45 16.85 1.55 1.45 1.55-1.45" />
      <path d="m10.8 20 1.2 2 1.2-2" />
    </svg>
  );
}
