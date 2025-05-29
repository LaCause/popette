import { DEFAULT_ALT_IMAGE } from "@/app/constants/seo";
import Image, { ImageProps } from "next/image";

export const ResolvedImage = (props: ImageProps) => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        {...props}
        src={props.src ?? ""}
        alt={props.alt ?? DEFAULT_ALT_IMAGE}
      />
    </div>
  );
};
