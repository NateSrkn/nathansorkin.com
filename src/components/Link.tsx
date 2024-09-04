"use client";

import NextLink from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

type NextLinkProps = ComponentProps<typeof NextLink>;

type LinkProps = NextLinkProps & {
  forceNewTab?: boolean;
  activeClassName?: string;
};
export const Link: React.FC<LinkProps> = ({
  href = "",
  children,
  forceNewTab,
  activeClassName,
  ...props
}) => {
  const pathname = usePathname();
  const active = pathname === href;
  const isNewTab =
    forceNewTab || (typeof href === "string" && href.startsWith("http"));
  const rel = isNewTab ? "noopener noreferrer" : undefined;
  const target = isNewTab ? "_blank" : "_self";
  const className = classNames(
    { [activeClassName as string]: active && activeClassName },
    props.className,
  );
  return (
    <NextLink
      {...props}
      href={href}
      passHref
      className={className}
      rel={rel}
      target={target}
    >
      {children}
    </NextLink>
  );
};
