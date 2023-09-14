'use client'
import Link from "next/link"


export default async function BlogPost() {
    const fetchBlog = await fetch('http://localhost:3000/api/content').then((res) => res.json())
    

    return (
        <div className="container mx-auto">
            <h1 className="flex justify-center mt-2">My Blogs</h1>

            <div className="flex flex-col justify-center h-screen">
                {fetchBlog.map((post: any) => (
                    <button className="border h-44 my-3 hover:bg-zinc-900">
                        <Link href={`/Blog/${post.id}`}>{post.title}</Link>
                    </button>
                ))}
            </div>
        </div>
    )}
