import { Button } from "@/components/ui/button"
import Link from "next/link"
export function AboutButton() {
    
  return (
    <div>
    <Link href={"/About"}>
  <Button variant="outline">About Me</Button>
    </Link>
    </div>
)}
