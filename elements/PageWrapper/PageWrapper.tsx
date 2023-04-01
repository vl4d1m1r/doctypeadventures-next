'use client'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { classes } from "./styles";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <CssBaseline />
            <Box sx={classes.layout}>
                {children}
            </Box>
        </>
    )
}
