import { pullInitials } from "../shared/lib";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import NextImage from "next/image";
export const Image: React.FC<{
  src: string | undefined;
  alt: string;
  height: number | string;
  width: number | string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined;
}> = ({ src, alt, height, width, className, layout }) => {
  return src ? (
    <NextImage
      src={src}
      alt={alt}
      height={Number(height)}
      width={Number(width)}
      className={classNames(
        "object-cover h-full max-w-full w-full aspect-square",
        className
      )}
      layout={layout}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    />
  ) : (
    <div
      className={classNames("filler-img aspect-square object-cover", className)}
      style={{
        aspectRatio: `${width || 1} / ${height || 1}`,
      }}
    >
      {pullInitials(alt)}
    </div>
  );
};
