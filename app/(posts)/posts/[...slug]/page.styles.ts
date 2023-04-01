import { SxProps } from "@mui/system";
import { createTheme, alpha } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

const main: SxProps = {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
};

export const classes = {
    main,
};
