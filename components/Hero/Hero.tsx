'use client'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// import Search from "components/elements/Search";

import { text } from "@/models/languages/en/text";
import { classes } from "./styles";

function Hero() {
    return (
        <Box sx={classes.hero}>
            <Container maxWidth='lg' sx={classes.heroBackground}>
                <Grid container spacing={0} sx={classes.heroContainer}>
                    <Grid item xs={12} lg={6} sx={classes.heroGridItem}>
                        <Typography sx={classes.heroTagline}>{text.tagline}</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={classes.heroGridItem}>
                        {/* <Search /> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Hero;
