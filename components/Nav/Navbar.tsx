import { ModeToggle } from "../buttons/theme-button";
import { AboutButton } from "../buttons/about-button";
import { BlogButton } from "../buttons/blog-button";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <div className="flex m-3 justify-between gap-8 border-b-2 pb-3 pt-2 px-2">
            <Link href={`/`} className=" flex items-center">
            Maxmblogs Crappy Blog Site
            </Link>
            
            <div className="">
            <AboutButton/>
            </div>

            <div>
              <BlogButton/>
            </div>

            <Button variant={"outline"}>
                <Link href={'https://github.com/Maxmblogs'}>Github</Link>
            </Button>

            <div className="ml-auto">
            <ModeToggle/>
            </div>
        </div>
    )
}