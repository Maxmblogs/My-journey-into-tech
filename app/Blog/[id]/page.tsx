import { type blogType } from "@/app/api/content/route";

interface Props {
    params: {id: string}
}

export default async function BlogPostPage({ params }: Props) {
    const posts:blogType[] = await fetch('http://localhost:3000/api/content', {cache: "no-cache"}).then((res) => res.json())
    const post = posts.find((post) => post.id === params.id)
    
    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    )
} 