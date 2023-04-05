'use client'
import useSWR from 'swr'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import PostPreview from '@/elements/PostPreview';

import { api, grid } from '@/models/constants'
import { PostType } from './types';
import { classes } from './styles'

const fetcher = (path: string) => fetch(api.endpoint + path).then((res) => res.json())

export default function Posts({ postsEndpoint }: { postsEndpoint: string }) {
    const { data, error, isLoading } = useSWR(postsEndpoint, fetcher)
    console.log('data ===> ', data, ' | error ===> ', error)

    let postGrid = { ...grid.postPreview };

    if (isLoading) {
        return <div><h1>LOADING. . . .</h1></div>
    }

    if (data.data && (data.data?.status < 200 || data.data?.status > 299)) {
        return <div><h1>There is an ERROR mothafucka!</h1></div>
    }

    return (
        <Container maxWidth='xl' sx={classes.main}>
            <Grid container spacing={4}>
                {data.map((post: PostType) => {
                    return (
                        <Grid
                            item
                            sm={postGrid.sm}
                            md={postGrid.md}
                            lg={postGrid.lg}
                            key={post.id}
                        >
                            <PostPreview post={post} />
                        </Grid>
                    );
                })}
            </Grid>
            <Box mt={4}>
                {/*
                <Pagination paginationData={paginationData} />
                */}
            </Box>
        </Container>
    )
}