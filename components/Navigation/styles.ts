import { SxProps } from "@mui/system";
import { createTheme } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

const navigationHorizontal: SxProps = {
    display: { xs: "none", sm: "none", md: "flex" },
    alignItems: "center",
};

const navigationVertical: SxProps = {
    alignItems: "left",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
};

const navigationItem: SxProps = {
    fontFamily: "JetBrains Mono",
    "&:hover": {
        color: theme.palette.secondary.light,
    },
};

export const classes = {
    navigationHorizontal,
    navigationVertical,
    navigationItem,
};
