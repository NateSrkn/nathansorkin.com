import { Link } from "./Link";
import { useRouter } from "next/router";
export const Header = () => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;
  return (
    <>
      <nav className="mt-3 sm:mt-10 mb-6">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className={`general-link ${isActive("/") ? "underline" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`general-link ${
                isActive("/about") ? "underline" : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
