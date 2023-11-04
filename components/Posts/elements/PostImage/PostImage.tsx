import Image from "next/image";
import { imagePlaceholder } from "./model";
import { ImageDataType } from "@/types/components";

export default function PostImage({ imageData }: { imageData: ImageDataType }) {
  return (
    <picture id="post-image">
      <Image
        // blurDataURL={appData.blurDataImage /* Dummy blur data image, sorry */}
        placeholder={imagePlaceholder}
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
