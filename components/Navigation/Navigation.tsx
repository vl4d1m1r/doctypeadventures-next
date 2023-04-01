'use client'
import Link from 'next/link'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { api } from "@/models/constants";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/redux-store/store";

import { classes } from "./styles";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function Navigation({ orientation }: { orientation: string }) {
    // const { filteringParameter } = useParams();
    const filteringParameter = 1
    const categories = useAppSelector((state) => state.categoriesData.data);

    console.log('categories === ', categories)

    if (!categories.length) {
        return (
            <Box ml={2}>
                <CircularProgress color='inherit' size={22} />
            </Box>
        );
    }

    return (
        <Box
            sx={
                orientation === "horizontal"
                    ? classes.navigationHorizontal
                    : classes.navigationVertical
            }
        >
            {categories.map((category: { id: number, name: string }) => {
                return (
                    <Link
                        key={category.id}
                        className={
                            "nav-link-menu" +
                            (Number(filteringParameter) === category.id ? " active" : "")
                        }
                        href={api.categoryEndpoint + category.id}
                    >
                        <Typography variant='body1' sx={classes.navigationItem}>
                            {category.name}
                        </Typography>
                    </Link>
                );
            })}
        </Box>
    );
}

export default Navigation;
