'use client'
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Button } from "@mui/material";

import { posts, social, website } from "@/models/constants";
import { classes } from "./styles";

const PostPreview = ({ post }: { post: any }) => {
    const slugPath = `/post/${post?.slug ?? ""}`;
    const imageUrl = post._embedded["wp:featuredmedia"][0];
    /*
    const excerpt: any = parse(post.excerpt.rendered);
    const excerpt: any = post.excerpt.rendered;
    const excerptFirstParagraph = excerpt[0].props.children;
    const excerptLimited =
        excerptFirstParagraph.slice(0, posts.excerptLimit) +
        (excerptFirstParagraph.length > posts.excerptLimit ? "..." : "");
    */

    return (
        <>
            <Card sx={classes.card}>
                <Link href={'slugPath'} className='nav-link-card-post-preview'>
                    <CardActionArea>
                        <CardMedia
                            sx={classes.postImageSkeleton}
                            component='img'
                            height={posts.imageHeightPreview}
                            image={imageUrl.source_url}
                            alt={imageUrl.title.rendered}
                        />
                        <Box sx={classes.postPreviewImageCopyright}>
                            <Typography variant='caption'>
                                {imageUrl.title.rendered}
                            </Typography>
                        </Box>
                        <CardContent sx={classes.postPreviewCardContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='h4' sx={classes.postTitle}>
                                        {/* parse(post.title.rendered) */}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={classes.postCategoryGridItem}>
                                    <Typography variant='body1' sx={classes.postCategoryText}>
                                        {/* categories[post.categories[0]] */}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={classes.postDateGridItem}>
                                    <Typography variant='body1' sx={classes.postDateText}>
                                        {post.date.substring(0, 10)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1' color='text.secondary'>
                                        excerptLimited
                                        {/* excerptLimited */}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions sx={classes.postPreviewCardActions}>
                    {/*
                    <Tags tags={tags} />
                    */}
                </CardActions>
            </Card>
        </>
    );
}

export default PostPreview