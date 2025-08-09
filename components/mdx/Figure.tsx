import AccessibleImage from "@/components/AccessibleImage";

export default function Figure({
  src,
  alt,
  caption,
  width,
  height
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <AccessibleImage
      src={src}
      alt={alt}
      width={width ?? 1600}
      height={height ?? 900}
      className="h-auto w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
      caption={caption}
    />
  );
}

