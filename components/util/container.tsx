import { styled } from "@stitches/react";

export const Container = styled("div", {
  marginInline: "auto",
  variants: {
    size: {
      md: {
        maxWidth: "80%",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
