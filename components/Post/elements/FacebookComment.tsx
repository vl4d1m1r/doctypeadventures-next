import { useEffect } from "react";

export default function FacebookComment({ dataHref }: { dataHref: string }) {
  useEffect(() => {
    // @ts-ignore
    if (window.FB) {
      // @ts-ignore
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div id="facebook-comment" className="rounded-xl el-color-primary">
      <div
        className="fb-comments"
        data-href={dataHref}
        data-width="100%"
        data-colorscheme="dark" // Don't work. Well-known Facebook plugin bug.
        data-numposts="15"
        data-order-by="reverse_time"
      ></div>
    </div>
  );
}
