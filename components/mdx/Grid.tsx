interface GridProps {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}

const gridColsClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4'
} as const;

export default function Grid({ children, cols = 2 }: GridProps) {
  return (
    <div className={`my-6 grid gap-4 ${gridColsClasses[cols]}`}>
      {children}
    </div>
  );
}

