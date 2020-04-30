import React from "react"
import { Link } from "./Link"

export const Nav = () => (
  <nav style={{ paddingBottom: 50 }} className="root">
    <section className="section">
      <Link to="/" activeClass="nav-active">
        Home
      </Link>
    </section>
  </nav>
)
