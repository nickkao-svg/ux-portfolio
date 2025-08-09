import React from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import AccessibleImage from "@/components/AccessibleImage";

// Simple inline components to avoid client/server issues
function Callout({
  children,
  intent = "info"
}: {
  children: React.ReactNode;
  intent?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200",
    warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
    success: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200"
  } as const;
  return (
    <div className={cn("my-6 flex gap-3 rounded-md border p-4", styles[intent])}>
      <Info className="mt-0.5 h-5 w-5 flex-none" />
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      <img 
        src={src} 
        alt={alt} 
        className="h-auto w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`my-6 grid gap-4 sm:grid-cols-${cols}`}>{children}</div>
  );
}

function Quote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="my-6 border-l-4 border-neutral-300 pl-4 text-lg italic dark:border-neutral-700">
      {children}
      {cite ? <footer className="mt-2 text-sm not-italic text-neutral-500">— {cite}</footer> : null}
    </blockquote>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-block rounded-lg border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900 mr-4 mb-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  );
}

export const mdxComponents = {
  Callout,
  Figure,
  Grid,
  Quote,
  Metric,
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="my-10 border-neutral-200 dark:border-neutral-800" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-left" {...props} />
    </div>
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a {...props} className={cn("underline underline-offset-4", props.className)} />
  ),
};

