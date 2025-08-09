import Image, { type ImageProps } from "next/image";

type Props = ImageProps & { caption?: string };

export default function AccessibleImage({ caption, ...props }: Props) {
  return (
    <figure className="my-6">
      <Image {...props} />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

