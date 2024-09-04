import { client } from "@/sanity/lib/client";
import {
  EXPERIENCE_QUERY,
  TRUNCATED_PROJECTS_QUERY,
} from "@/sanity/lib/queries";
import { Link } from "@/components/Link";

export default async function Home() {
  const [experience, projects] = await Promise.all([
    client.fetch(EXPERIENCE_QUERY),
    client.fetch(TRUNCATED_PROJECTS_QUERY),
  ]);

  const [currentRole] = experience;
  return (
    <div className="space-y-8">
      <section className="prose text-inherit text-xl sm:text-2xl tracking-tight">
        <p>
          Nathan Sorkin is a Columbus based full-stack developer with a passion
          for building great experiences.
        </p>
        <p>
          He&apos;s currently coding away at{" "}
          <Link
            href={currentRole.href || "#"}
            className="general-link text-inherit"
            style={{
              textDecorationColor: currentRole?.color?.hex || "#C4532C",
            }}
          >
            {currentRole.organization}
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
                href={item.href || "#"}
                className="group bulleted"
                style={
                  {
                    "--bullet-color": item?.color?.hex,
                  } as React.CSSProperties
                }
              >
                <div className="text-xs">
                  <span>{item.job_title}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3
                    className="group-hover:underline group-focus:underline"
                    style={{
                      textDecorationColor: item?.color?.hex,
                    }}
                  >
                    {item.organization}
                  </h3>
                  <span
                    className="sm:hidden"
                    style={{
                      color: item?.color?.hex,
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
                href={project.url || "#"}
                className="group bulleted"
                style={
                  {
                    "--bullet-color": project?.color?.hex,
                  } as React.CSSProperties
                }
              >
                <div className="text-xs">{project.type}</div>
                <div className="flex gap-2 justify-between items-center">
                  <h3
                    className="group-hover:underline group-focus:underline"
                    style={{
                      textDecorationColor: project?.color?.hex,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="sm:hidden"
                    style={{
                      color: project?.color?.hex,
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
  );
}
