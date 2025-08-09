export default function Quote({
  children,
  cite
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <blockquote className="my-6 border-l-4 border-neutral-300 pl-4 text-lg italic dark:border-neutral-700">
      {children}
      {cite ? <footer className="mt-2 text-sm not-italic text-neutral-500">— {cite}</footer> : null}
    </blockquote>
  );
}

