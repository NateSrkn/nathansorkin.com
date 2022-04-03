import { Layout } from "../components/Layout";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <Layout>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : `An error occurred on client`}
    </Layout>
  );
}
Error.getInitialProps = async ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
