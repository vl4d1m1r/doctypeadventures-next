// import BackgroundImage00 from "/images/backgrounds/background01.jpg";
// import BackgroundImage01 from "/images/backgrounds/background02.jpg";
import { SxProps } from "@mui/system";
import { createTheme, alpha } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

import { components } from "@/models/constants";

const randomBackground = Math.floor(Math.random() * 2);

let backgroundImage;

switch (randomBackground) {
    case 1:
        backgroundImage = "/images/backgrounds/background01.jpg";
        break;
    default:
        backgroundImage = "/images/backgrounds/background02.jpg";
}

const hero: SxProps = {
    background: "black",
    color: "white",
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
};

const heroContainer: SxProps = {
    height: '100vh',
};

const heroBackground: SxProps = {};

const heroGridItem: SxProps = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: { xs: "center", lg: "left" },
    paddingLeft: { xs: 0, md: theme.spacing(10), lg: 0 },
    paddingRight: { xs: 0, md: theme.spacing(10), lg: 0 },
    "&:last-child": {
        justifyContent: { xs: "flex-start", lg: "center" },
    },
};

const heroTagline: SxProps = {
    fontSize: { xs: "3rem", md: "3.75rem" },
    lineHeight: { xs: 1.2, md: 1.4 },
};

export const classes = {
    hero,
    heroContainer,
    heroBackground,
    heroGridItem,
    heroTagline,
};
