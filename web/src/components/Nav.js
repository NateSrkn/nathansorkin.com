import React from "react"
import { Link } from "./Link"

export const Nav = () => (
  <nav>
    <div className="nav-items">
      <h1>
        Nathan <br />
        Sorkin
      </h1>

      <ul>
        <ol>
          <Link to="mailto:hello@nathansorkin.com?Subject=Let's Talk!" general>
            Email
          </Link>
        </ol>
        <ol>
          <Link to="https://www.linkedin.com/in/natesrkn" general>
            Linkedin
          </Link>
        </ol>
        <ol>
          <Link to="https://www.instagram.com/n8bytes/" general>
            Instagram
          </Link>
        </ol>
        <ol>
          <Link to="https://github.com/NateSrkn" general>
            Github
          </Link>
        </ol>
      </ul>
    </div>
  </nav>
)
