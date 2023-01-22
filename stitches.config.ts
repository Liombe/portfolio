import {
  violet,
  violetDark
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { getCssText, createTheme, styled } = createStitches({
  theme: {
    colors: {
      ...violet
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value,
    }),
  }
});

export const darkTheme = createTheme({
  colors: {
    ...violetDark,
  },
});
