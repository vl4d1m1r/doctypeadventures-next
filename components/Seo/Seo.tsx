import { SeoDataType } from "@/types/components";

export default function Seo({ seoData }: { seoData: SeoDataType }) {
  return (
    <>
      <title>{seoData.title}</title>
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:url" content={seoData.url} />
      <meta property="title" content={seoData.title} />
      <meta property="description" content={seoData.description} />
      <meta property="image" content={seoData.image} />
      <meta property="url" content={seoData.url} />
    </>
  );
}
