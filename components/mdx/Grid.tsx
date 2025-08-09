export default function Grid({
  children,
  cols = 2
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}) {
  return (
    <div className={`my-6 grid gap-4 sm:grid-cols-${cols}`}>{children}</div>
  );
}

