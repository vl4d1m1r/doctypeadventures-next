import { SxProps } from "@mui/system";
import { createTheme } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

const footer: SxProps = {
    marginTop: theme.spacing(6),
};

const footerTagline: SxProps = {
    textAlign: "center",
};

const footerTaglineText: SxProps = {
    fontFamily: "JetBrains Mono",
    padding: theme.spacing(0.2),
};

const footerTaglineTextLight: SxProps = {
    fontFamily: "JetBrains Mono",
    padding: theme.spacing(0.2),
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.secondary.contrastText,
};

const footerTaglineTextDark: SxProps = {
    fontFamily: "JetBrains Mono",
    padding: theme.spacing(0.2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
};

const footerDisclaimerLink: SxProps = {
    color: theme.palette.grey[400],
    cursor: "pointer",
    textDecoration: "underline",
};

export const classes = {
    footer,
    footerTagline,
    footerTaglineText,
    footerTaglineTextLight,
    footerTaglineTextDark,
    footerDisclaimerLink,
};
