import AccessibleImage from '@/components/AccessibleImage';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function Figure({ 
  src, 
  alt, 
  caption, 
  width = 1600, 
  height = 900 
}: FigureProps) {
  return (
    <AccessibleImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
      caption={caption}
    />
  );
}

