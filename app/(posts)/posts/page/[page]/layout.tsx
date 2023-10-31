export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section id="posts" className="wrapper p-4">
      {children}
    </section>
  );
}
