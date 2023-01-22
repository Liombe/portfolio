import React from "react";
import { useTheme } from "../layout";

export const Section = ({ children, color = "", className = "" }) => {
  const theme = useTheme();

  return <section>{children}</section>;
};
