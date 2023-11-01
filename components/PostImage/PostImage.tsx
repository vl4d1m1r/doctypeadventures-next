import Image from "next/image";
import { ImageDataType } from "@/types/components";

export default function PostImage({ imageData }: { imageData: ImageDataType }) {
  return (
    <picture id="post-image">
      <Image
        src={imageData.source_url}
        alt={imageData.title.rendered}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
      <div className="image-copyright">{imageData.title.rendered}</div>
    </picture>
  );
}
