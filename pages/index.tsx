import type { GetStaticProps, NextPage } from "next";
import client from "../client";
import { Link } from "../components/Link";
import { ProjectDocument } from "../shared/types";
import { Layout } from "../components/Layout";
import { ExperienceDocument } from "../shared/types/sanity";

const Home: NextPage<{
  projects: ProjectDocument[];
  experience: ExperienceDocument[];
}> = ({ projects, experience }) => {
  return (
    <Layout
      meta={{
        title: "Home | Nathan Sorkin",
        description: "Nathan Sorkin's personal website.",
      }}
    >
      <div className="space-y-8">
        <section className="prose text-inherit text-xl sm:text-2xl tracking-tight">
          <p>
            Nathan Sorkin is a Brooklyn based full-stack developer with a
            passion for building great experiences.
          </p>
          <p>
            He&apos;s currently coding away at{" "}
            <Link
              href="https://www.locusview.com"
              className="general-link text-inherit decoration-[#C4532C]"
            >
              Locusview
            </Link>
          </p>
        </section>
        <section>
          <h4 className="section-header">Contact Me</h4>
          <nav className="flex gap-4 flex-col sm:flex-row">
            <Link
              className="general-link decoration-orange-600"
              href="https://instagram.com/n8bytes"
            >
              Instagram
            </Link>
            <Link
              className="general-link decoration-slate-500"
              href="https://github.com/natesrkn"
            >
              GitHub
            </Link>
            <Link
              className="general-link decoration-[#0072B1]"
              href="https://www.linkedin.com/in/natesrkn/"
            >
              LinkedIn
            </Link>
            <Link
              className="general-link decoration-green-600"
              href="mailto:hello@nathansorkin.com?subject=Let's Talk!"
            >
              Email
            </Link>
          </nav>
        </section>
        <section>
          <h4 className="section-header">Experience</h4>
          <ul className="flex flex-col gap-4">
            {experience.map((item) => (
              <li key={item._id}>
                <Link
                  href={item.href}
                  className="group bulleted"
                  style={{
                    "--bullet-color": item.color.hex,
                  }}
                >
                  <div className="text-xs">
                    <span>{item.job_title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3
                      className="group-hover:underline group-focus:underline"
                      style={{
                        textDecorationColor: item.color.hex,
                      }}
                    >
                      {item.organization}
                    </h3>
                    <span
                      className="sm:hidden"
                      style={{
                        color: item.color.hex,
                      }}
                    >
                      &bull;
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="section-header">Projects</h4>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project._id}>
                <Link
                  href={project.url}
                  className="group bulleted"
                  style={{
                    "--bullet-color": project.color.hex,
                  }}
                >
                  <div className="text-xs">{project.type}</div>
                  <div className="flex gap-2 justify-between items-center">
                    <h3
                      className="group-hover:underline group-focus:underline"
                      style={{
                        textDecorationColor: project.color.hex,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="sm:hidden"
                      style={{
                        color: project.color.hex,
                      }}
                    >
                      &bull;
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [experience, projects] = await Promise.all([
    client.fetch(`*[_type == "experience"] | order(order)`),
    client.fetch(`*[_type == "project"] | order(order) [0...6] `),
  ]);
  return {
    props: {
      projects,
      experience,
    },
  };
};
