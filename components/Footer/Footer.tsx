'use client'

// import { useContext } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";

// import { AppContext } from "context/Context";
import { social, themeName } from "@/models/constants";
import { text } from "@/models/languages/en/text";
import { classes } from "./styles";

function Footer() {
    // const { state } = useContext(AppContext);
    const state = { theme: 'dark' }

    return (
        <>
            <AppBar position='static'>
                <Box sx={classes.footer}>
                    <Container maxWidth='xl'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={4}>
                                <Typography variant='body2' mb={2}>
                                    {text.copyrightNotice}
                                </Typography>
                                <Typography variant='body2' mb={2}>
                                    Website engine released under the MIT license.
                                </Typography>
                                <Button
                                    size='small'
                                    color='primary'
                                    variant='contained'
                                    href={social.githubRepo}
                                    target='_blank'
                                    endIcon={<GitHubIcon />}
                                >
                                    Check it out at my
                                </Button>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Box mb={2}>
                                    <Chip label={text.websiteVersionText} />
                                </Box>
                                <Typography variant='body2' mb={6}>
                                    {text.rant}
                                    <Tooltip title={text.disclaimer}>
                                        <Box component='span' sx={classes.footerDisclaimerLink}>
                                            {text.rantDisclaimer}
                                        </Box>
                                    </Tooltip>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box sx={classes.footerTagline}>
                        <Typography
                            variant='body2'
                            mt={0}
                            sx={
                                state.theme === themeName.dark
                                    ? classes.footerTaglineTextDark
                                    : classes.footerTaglineTextLight
                            }
                        >
                            {text.tagline}
                        </Typography>
                    </Box>
                </Box>
            </AppBar>
        </>
    );
}

export default Footer;
