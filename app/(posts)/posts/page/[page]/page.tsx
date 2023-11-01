import Posts from "@/components/Posts";

export default function PageRoute({ params }: { params: { page: number } }) {
  return (
    <>
      <Posts page={params.page} />
    </>
  );
}
