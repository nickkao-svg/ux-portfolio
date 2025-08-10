interface MetricProps {
  value: string;
  label: string;
}

export default function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  );
}

