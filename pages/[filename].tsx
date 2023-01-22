import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import { client } from "../.tina/__generated__/client";
import { Box } from "../components/Box";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <Layout data={data.global as any}>
      <Box css={{ textAlign: "center" }}>
        <Box
          as="h1"
          css={{
            display: "inline-block",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611625105602-42ee06be977e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80')",
            WebkitTextFillColor: "transparent",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            fontFamily: "'Abril Fatface', display",
            letterSpacing: "0.05em",
            fontSize: "125px",
            fontWeight: "900",
            textAlign: "center",
          }}
          style={{
            WebkitBackgroundClip: "text",
          }}
        >
          {data.page.title}
        </Box>
      </Box>
      <Blocks {...data.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`,
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();
  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
