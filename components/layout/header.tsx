import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "@stitches/react";
import { Box } from "../Box";
import { useTheme } from ".";

export const Header = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");

  React.useEffect(() => {
    if (window && window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  }, []);

  return (
    <HeaderTag
      css={{
        position: "sticky",
        top: "1rem",
      }}
    >
      <Box
        as="ul"
        css={{
          display: "flex",
          margin: 0,
          padding: 0,
          listStyle: "none",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgb(255 255 255 / 10%)",
          marginLeft: "1rem",
        }}
        role="list"
      >
        {data.nav &&
          data.nav.map((item, i) => {
            const activeItem =
              item.href === ""
                ? router.asPath === "/"
                : router.asPath.includes(item.href);
            return (
              <Box
                as="li"
                css={{ position: "relative" }}
                key={`${item.label}-${i}`}
              >
                <Link href={`${prefix}/${item.href}`} passHref>
                  <Box
                    as="a"
                    css={{
                      display: "block",
                      px: "2.25rem",
                      py: "1.5rem",
                      color: activeItem ? "$violet10" : "$violet12",
                      position: "relative",
                      textDecoration: "none",
                      background: activeItem && "White",
                      "&:after": {
                        content: activeItem ? "''" : "none",
                        display: "block",
                        width: "60%",
                        borderTop: "3px solid $violet10",
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      },
                    }}
                  >
                    {activeItem && (
                      <Box
                        as="svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 230 230"
                        width={100}
                        height={100}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        css={{
                          color: "$violet8",
                          opacity: 0.2,
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          top: 0,
                        }}
                      >
                        <rect
                          x="230"
                          y="230"
                          width="230"
                          height="230"
                          transform="rotate(-180 230 230)"
                          fill="url(#paint0_radial_1_33)"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_1_33"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(345 230) rotate(90) scale(230 115)"
                          >
                            <stop stopColor="currentColor" />
                            <stop
                              offset="1"
                              stopColor="currentColor"
                              stopOpacity="0"
                            />
                          </radialGradient>
                        </defs>
                      </Box>
                    )}
                    <span>{item.label}</span>
                  </Box>
                </Link>
              </Box>
            );
          })}
      </Box>
    </HeaderTag>
  );
};

const HeaderTag = styled("header", {
  display: "flex",
});
