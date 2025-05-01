import { DEFAULT_ALT_IMAGE } from "@/app/constants/seo";
import Image, { ImageProps } from "next/image";

export const ResolvedImage = (props: ImageProps) => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image {...props} fill alt={props.alt ?? DEFAULT_ALT_IMAGE} />
    </div>
  );
};
