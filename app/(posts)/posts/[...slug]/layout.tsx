import Hero from "@/components/Hero"

export default async function PostsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Hero />
            {children}
        </>
    )
}
