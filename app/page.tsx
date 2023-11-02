import Posts from "@/components/Posts";

export default function Home() {
  return (
    <section id="posts">
      <Posts page={1} />
    </section>
  );
}
