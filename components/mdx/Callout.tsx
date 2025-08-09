import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export default function Callout({
  children,
  intent = "info"
}: {
  children: React.ReactNode;
  intent?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200",
    warning:
      "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200"
  } as const;
  return (
    <div className={cn("my-6 flex gap-3 rounded-md border p-4", styles[intent])}>
      <Info className="mt-0.5 h-5 w-5 flex-none" />
      <div className="space-y-2">{children}</div>
    </div>
  );
}

