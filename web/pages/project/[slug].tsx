import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../client";
import { Layout } from "../../components/Layout";
import { PortableText } from "../../components/PortableText";
import { ProjectDocument } from "../../shared/types";
import ErrorPage from "next/error";

const Project: NextPage<{ project: ProjectDocument }> = ({ project }) => {
  if (!project) return <ErrorPage statusCode={404} />;
  const style = { "--bullet-color": project.color.hex } as React.CSSProperties;
  return (
    <Layout
      meta={{
        title: project.title,
      }}
    >
      <section className="bulleted" style={style}>
        <div className="text-xs">{project.type}</div>
        <div className="flex gap-2 justify-between items-center">
          <h3
            className="text-2xl"
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
      </section>
      <article className="prose text-inherit">
        <PortableText value={project.content} accent={project.color.hex} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as { slug: string };
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      project,
    },
  };
};

export default Project;
