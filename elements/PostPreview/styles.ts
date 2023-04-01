import { SxProps } from "@mui/system";
// import ImagePlaceholder from "assets/images/image-placeholder.svg";
import { createTheme, alpha } from "@mui/material/styles/";
import { customTheme } from "@/styles/themes/customTheme";

const theme = createTheme(customTheme);

const card: SxProps = {
    height: "100%",
};

const postPreviewCardContent: SxProps = {
    padding: theme.spacing(3),
};

const postTitle: SxProps = {
    fontFamily: "JetBrains Mono",
    wordBreak: "break-word",
};

const postCategoryGridItem: SxProps = {
    display: "flex;",
    justifyContent: "flex-start",
};

const postCategoryText: SxProps = {
    fontFamily: "JetBrains Mono",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1),
};

const postDateGridItem: SxProps = {
    display: "flex;",
    justifyContent: "flex-end",
};

const postDateText: SxProps = {
    fontFamily: "JetBrains Mono",
    padding: theme.spacing(1),
};

const postPreviewCardActions: SxProps = {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexWrap: "wrap",
};

const postImageSkeleton: SxProps = {
    background: theme.palette.grey[300],
    // backgroundImage: `url(${ImagePlaceholder})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const postPreviewImageCopyright: SxProps = {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    fontFamily: "JetBrains Mono",
    backgroundColor: alpha(theme.palette.common.black, 0.5),
    color: theme.palette.common.white,
};

const postSingleCardContent: SxProps = {
    [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
    },
};

const postSingleContent: SxProps = {
    "& .wp-block-image img": {
        [theme.breakpoints.down("lg")]: {
            width: "100%",
            height: "100%",
        },
    },
};

const postSingleImageContainer: SxProps = {
    display: "block",
    position: "relative",
};

const postSingleImageCopyright: SxProps = {
    fontFamily: "JetBrains Mono",
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.black, 0.5),
    color: theme.palette.common.white,
};

export const classes = {
    card,
    postImageSkeleton,
    postTitle,
    postCategoryGridItem,
    postCategoryText,
    postDateGridItem,
    postDateText,
    postPreviewCardContent,
    postPreviewCardActions,
    postPreviewImageCopyright,
    postSingleCardContent,
    postSingleContent,
    postSingleImageContainer,
    postSingleImageCopyright,
};
