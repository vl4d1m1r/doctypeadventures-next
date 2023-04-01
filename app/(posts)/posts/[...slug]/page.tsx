'use client'
import useSWR from 'swr'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import PostPreview from '@/components/PostPreview';

import { extractUrlParams } from '@/utils/converters'
import { createApiEndpointFromUrlParams } from '@/utils/converters'
import { api, grid } from '@/models/constants'
import { PostType } from './page.types';
import { classes } from './page.styles'

const fetcher = (path: string) => fetch(api.endpoint + path).then((res) => res.json())

export default function Posts({ params }: { params: { slug: [] } }) {
    const urlParams = extractUrlParams(['page', 'categories', 'tags'], params.slug)
    const postsEndpoint = createApiEndpointFromUrlParams(urlParams)

    const { data, error, isLoading } = useSWR(postsEndpoint, fetcher)

    let postGrid = { ...grid.postPreview };

    console.log('data === ', data)

    if (isLoading) {
        return <div><h1>LOADING. . . .</h1></div>
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