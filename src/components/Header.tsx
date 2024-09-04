import { Link } from "./Link";

export const Header = () => {
  return (
    <nav className="mt-3 sm:mt-10 mb-6 root px-4 md:px-0">
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/" className="general-link" activeClassName={"underline"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="general-link"
            activeClassName={"underline"}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
