import Link from "next/link"

export default async function BlogPost() {
    const fetchBlog = await fetch('http://localhost:3000/api/content').then((res) => res.json())
    return (
        <div>
            <h1>My Blogs</h1>
            <p>
                {fetchBlog.map((post: any) => (
                    <div className="border grid ">
                        <Link href={`/Blog/${post.id}`}>{post.title}</Link>
                    </div>
                ))}
            </p>
        </div>
    )
}