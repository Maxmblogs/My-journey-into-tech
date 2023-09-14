import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/buttons/theme-button"

export default function About() {
    return (

    <div>

      <div className="flex m-2 sticky z-10">
        <Button variant="outline">
        <Link href={"/"}>Back</Link>
        </Button>
      </div>

    <div className='flex justify-center'>
      About Me
      </div>

    <div className='flex m-2 h-screen justify-center'>
      <ul>

      <li>
        I&apos;m A student right now at Harold Washingtion Comunnity College studing Computer science
      </li>

      <li>
        I&apos;m so far a self taught web-dev with knowledge in JavaScript, TypeScript, React, Nextjs, Nodejs, C++
      </li>

      <li>
        Looking to get into a I.T help desk role to grow my knowledge in the I.T industry and become a software engineer one day
      </li>

      </ul>
    </div>
    </div>
    )
}