import { SxProps } from "@mui/system";
import { createTheme, alpha } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

import { components } from "@/models/constants";

const theme = createTheme(customTheme);

const header: SxProps = {
  height: components.header.height,
};

const headerLeft: SxProps = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
};

const iconButton: SxProps = {
  mr: theme.spacing(2),
  display: { sm: "inline-flex", md: "none" },
};

const themeSwitcher: SxProps = {
  display: "flex",
  alignItems: "center",
};

const menuDrawer: SxProps = {
  backgroundColor: theme.palette.grey[900],
};

const tagsDrawer: SxProps = {
  width: "250px",
  backgroundColor: theme.palette.grey[900],
  flexDirection: "row",
  flexWrap: "wrap",
  padding: theme.spacing(2),
};

const tagsDrawerButton: SxProps = {
  minWidth: "auto",
  marginLeft: theme.spacing(2),
};

export const classes = {
  header,
  headerLeft,
  iconButton,
  themeSwitcher,
  menuDrawer,
  tagsDrawer,
  tagsDrawerButton,
};
