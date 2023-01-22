import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { Box } from "../Box";
import { Flex } from "../Flex";

export const Projects = ({ data, parentField = "" }) => {
  return (
    <Section>
      <Container data-tinafield={`${parentField}.body`}>
        <Flex gap="4">
          {data.featuredProjects?.map(({ item: project }) => (
            <Box
              css={{
                flexGrow: 1,
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "$violetA1",
                  border: "1px solid $violetA3",
                  backdropFilter: "blur(20px)",
                  zIndex: 2,
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 100%, $violet3, $violet3 50%, $violet1 75%, $violet3 75%)",

                  border: "1px solid $violetA3",
                  borderRadius: "50%",
                  zIndex: 1,
                },
              }}
            >
              <Box css={{ position: "relative", padding: "24px", zIndex: 10 }}>
                {project?.title}
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Section>
  );
};

export const projectsBlockSchema: Template = {
  name: "projects",
  label: "Projects",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "object",
      list: true,
      name: "featuredProjects",
      label: "Featured Projects",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.item,
          };
        },
      },
      fields: [
        {
          type: "reference",
          label: "Project",
          name: "item",
          collections: ["project"],
        },
      ],
    },
  ],
};
