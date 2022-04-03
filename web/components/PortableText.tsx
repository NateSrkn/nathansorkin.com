import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";
import { urlFor } from "../shared/lib";
import { Link } from "./Link";

export const PortableText: React.FC<{
  value: PortableTextProps["value"];
  accent?: string;
  overrides?: PortableTextComponents;
}> = ({ value, accent = "inherit", overrides }) => {
  const components: PortableTextComponents = {
    types: {
      custom_image: ({ value }) => {
        const image = urlFor(value);
        return (
          <img src={image.url()} alt={value.alt} className="rounded shadow" />
        );
      },
      ...overrides?.types,
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <Link
            href={value.href}
            className="general-link"
            style={{
              color: accent,
            }}
          >
            {children}
          </Link>
        );
      },
      ...overrides?.marks,
    },
  };
  return <PortableTextComponent value={value} components={components} />;
};
