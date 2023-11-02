import Posts from "@/components/Posts";

export default function PageRoute({ params }: { params: { page: number } }) {
  return (
    <section id="posts">
      <Posts page={params.page} />
    </section>
  );
}
