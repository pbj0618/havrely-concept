import Image from "next/image";
import { OatMark } from "./oat-mark";

/**
 * A photograph, or - until it exists - a kraft panel saying what will go
 * there. Placeholders are honest about being placeholders rather than
 * borrowing stock photography that would not be the brand’s own.
 */
export function Photo({
  src,
  alt,
  className = "",
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
  pending,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** What the photo will show, for a slot still waiting on one. */
  pending?: string;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-4 bg-kraft text-forest/60 ${className}`}
      >
        <OatMark className="h-20 w-auto" />
        {pending && <p className="max-w-[16rem] px-6 text-center text-[13px] leading-snug">{pending}</p>}
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
