import { API } from "@/models/constants";
import { PostType } from "@/types/components";
import parse from "html-react-parser";

/*
 * This function converts props object (eg. { page: '1', categories: '2' }) to
 * an API route (eg. https://.../wp-json/wp/v2/posts/?_embed&slug=1&categories=2 )
 *
 */
export const convertPropsToApiRoute = (props: { [key: string]: number }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = API.basePath + API.postsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
    accumulator += key !== "page" ? `&${key}=${props[key]}` : "";
    return accumulator;
  }, apiRoute);
};

/*
 * This function converts props object (eg. { page: '1', categories: '2' }) to
 * local API route (eg. /posts/page/1/categories/2 )
 *
 */
export const convertPropsToLocalRoute = (props: { [key: string]: number }) => {
  const propsKeys = Object.keys(props);
  const apiRoute = API.localPostsPath + props.page;
  return propsKeys.reduce((accumulator: string, key: string) => {
    accumulator += key !== "page" ? `/${key}/${props[key]}` : "";
    return accumulator;
  }, apiRoute);
};

export const ExtractPostData = (post: PostType) => {
  const imageData = post._embedded["wp:featuredmedia"][0];
  const excerpt: any = parse(post.excerpt.rendered);
  const excerptFirstParagraph = excerpt[0].props.children;
  const excerptLimited = excerptFirstParagraph.slice(0, 250) + (excerptFirstParagraph.length > 250 ? "..." : "");
  return { imageData, excerptLimited };
};
