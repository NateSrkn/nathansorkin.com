import NextLink from "next/link";

export const Link: React.FC<{
  href: string;
  [key: string]: any;
}> = ({ href, children, ...props }) => {
  const isNewTab = href.startsWith("http");
  const rel = isNewTab ? "noopener noreferrer" : undefined;
  const target = isNewTab ? "_blank" : "_self";
  return (
    <NextLink href={href} passHref>
      <a {...props} rel={rel} target={target}>
        {children}
      </a>
    </NextLink>
  );
};
