import { SxProps } from "@mui/system";
import { components } from "@/models/constants";

const layout: SxProps = {
    width: "100%",
    height: "100vh",
    bgcolor: "background.default",
    color: "text.primary",
    padding: 0,
    paddingTop: `${components.header.height}px`,
    margin: 0,
};

export const classes = {
    layout,
};
