import { Button } from "@/components/ui/button"
import Link from "next/link"
export function BlogButton() {
    
  return (
    <div>
    <Link href={"/Blog"}>
  <Button variant="outline">My Blogs</Button>
    </Link>
    </div>
)}
