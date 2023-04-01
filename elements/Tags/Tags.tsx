'use client'
import { Fragment } from "react";
import Link from "next/link";

import Chip from "@mui/material/Chip";

import { api } from "@/models/constants";
import { TagType } from "@/types/system";

import { classes } from "./styles";

function Tags({ tags }: { tags: TagType[] }) {
    const tagLink = api.tagsEndpoint;
    // const size = props.tagSize ?? "small";
    const size = 'small'

    return (
        <Fragment>
            {tags.map((tag: TagType) => {
                return (
                    <Link
                        style={{ textDecoration: "none", marginLeft: 0 }}
                        key={tag.id}
                        href={tagLink + tag.id}
                    >
                        <Chip
                            sx={classes.tagItem}
                            label={tag.name}
                            size={size}
                            color='info'
                        />
                    </Link>
                );
            })}
        </Fragment>
    );
}

export default Tags;
