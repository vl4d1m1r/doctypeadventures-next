'use client'
import Link from 'next/link'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { api } from "@/models/constants";
import { categoriesToArray } from "@/utils/converters";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/redux-store/store";

import { classes } from "./navigation.styles";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function Navigation({ orientation }: { orientation: string }) {
    // const { filteringParameter } = useParams();
    const filteringParameter = 1
    const categories = useAppSelector((state) => state.categoriesData.data);
    console.log('categories XXX === ', categories)

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
            {categories.map((category: { id: number, name: string }, index: number) => {
                return (
                    <Link
                        key={category.id}
                        className={
                            "nav-link-menu" +
                            (Number(filteringParameter) === index ? " active" : "")
                        }
                        href={api.categoryEndpoint + index}
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
