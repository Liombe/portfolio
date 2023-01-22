import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from "../util/container";
import { useTheme } from ".";

export const Footer = ({ data }) => {
  const theme = useTheme();

  return (
    <footer>
      <Container>
        <div>
          <div>
            {data.social && data.social.github && (
              <a href={data.social.github} target="_blank">
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
