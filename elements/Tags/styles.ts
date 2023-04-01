import { SxProps } from "@mui/system";
import { createTheme, alpha } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

const tagItem: SxProps = {
    fontFamily: "JetBrains Mono",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    cursor: "pointer",
};

export const classes = {
    tagItem,
};