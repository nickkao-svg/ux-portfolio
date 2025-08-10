interface QuoteProps {
  children: React.ReactNode;
  cite?: string;
}

export default function Quote({ children, cite }: QuoteProps) {
  return (
    <blockquote className="my-6 border-l-4 border-neutral-300 pl-4 text-lg italic dark:border-neutral-700">
      {children}
      {cite && (
        <footer className="mt-2 text-sm not-italic text-neutral-500">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}

