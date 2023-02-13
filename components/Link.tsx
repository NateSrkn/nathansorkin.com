import NextLink from "next/link";

export const Link: React.FC<{
  href: string;
  forceNewTab?: boolean;
  [key: string]: any;
}> = ({ href, children, forceNewTab, ...props }) => {
  const isNewTab = forceNewTab || href.startsWith("http");
  const rel = isNewTab ? "noopener noreferrer" : undefined;
  const target = isNewTab ? "_blank" : "_self";
  return (
    <NextLink href={href} passHref {...props} rel={rel} target={target}>
      {children}
    </NextLink>
  );
};
