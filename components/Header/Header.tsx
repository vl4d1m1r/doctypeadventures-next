'use client'
import { useState, useContext } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MenuIcon from "@mui/icons-material/Menu";

import Navigation from "@/components/Navigation";
import Tags from "@/elements/Tags";
import Logo from "@/elements/Logo";

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/redux-store/store";

// import { AppContext } from "context/Context";
import { HeaderPropsType, DrawerStateType } from "@/types/components";
import { classes } from "./styles";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function Header({ dark, changeTheme }: HeaderPropsType) {
    // const { state, dispatch } = useContext(AppContext);
    const tags = useAppSelector((state) => state.tagsData.data);
    const [isNavDrawerOpen, setIsNavDrawerOpen]: DrawerStateType =
        useState(false);
    const [isTagsDrawerOpen, setIsTagsDrawerOpen]: DrawerStateType =
        useState(false);

    return (
        <>
            <AppBar sx={classes.header}>
                <Toolbar>
                    <Box sx={classes.headerLeft}>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={classes.iconButton}
                            onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Navigation orientation='horizontal' />
                        <Button
                            sx={classes.tagsDrawerButton}
                            size='small'
                            color='primary'
                            variant='contained'
                            onClick={() => setIsTagsDrawerOpen(!isTagsDrawerOpen)}
                        >
                            <AccountTreeIcon />
                        </Button>
                    </Box>
                    <Box sx={classes.themeSwitcher}>
                        <LightModeIcon />
                        {/* <Switch checked={dark} onChange={() => changeTheme()} /> */}
                        <DarkModeIcon />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={isNavDrawerOpen}
                onClose={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
                PaperProps={{ sx: classes.menuDrawer }}
            >
                <Navigation orientation='vertical' />
            </Drawer>
            <Drawer
                anchor='left'
                open={isTagsDrawerOpen}
                onClose={() => setIsTagsDrawerOpen(!isTagsDrawerOpen)}
                PaperProps={{ sx: classes.tagsDrawer }}
            >
                <Tags tags={tags} />
            </Drawer>
        </>
    );
}

export default Header;
