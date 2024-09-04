import { pullInitials } from "@/shared/lib";
import classNames from "classnames";
import { ComponentProps } from "react";
import NextImage from "next/image";

type NextImageProps = ComponentProps<typeof NextImage>;
export const Image: React.FC<NextImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
  layout,
  ...props
}) => {
  return src ? (
    <NextImage
      src={src}
      alt={alt}
      height={Number(height)}
      width={Number(width)}
      className={classNames(
        "object-cover h-full max-w-full w-full aspect-square",
        className,
      )}
      layout={layout}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
      {...props}
    />
  ) : (
    <div
      className={classNames(
        "filler-img aspect-square object-cover bg-slate-800 flex justify-center items-center",
        className,
      )}
      style={{
        aspectRatio: `${width || 1} / ${height || 1}`,
      }}
    >
      {pullInitials(alt)}
    </div>
  );
};
