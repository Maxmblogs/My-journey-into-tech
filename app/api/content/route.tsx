import { NextResponse } from "next/server";

export type blogType = {
    title: string
    id: string
    content: string
    image?: HTMLImageElement | string
}

const blogs: blogType[] = [
    {
        title: 'Day 1',
        id: 'day1',
        content: 'Made this website show my Web-Dev skills. Tech-stack is Nextjs 13, TypeScript, and Tailwind made this site to keep track of my journey into Tech going to be studying to get a help desk role.'

    },
    {
        title: 'Day 2',
        id: 'day2',
        content: 'Finished My resume not as bad as I thought. Learning Networks and TCP/IP model and how computer communicate to eachother via 5 different layers. Before that computers had no way to talk to each other. But in 1969 the U.S Defense Department created the Arpanet a forerunner to the internet. And here what that looked like.',
    },
    {
        title: 'Day 3',
        id: 'day3',
        content: 'I know complicated right, this network paradigm was proprietary meaning IBM computers can only talk to other IBM computers and macintosh computers and only talk to other macintosh computers. This wasnt optimal plenty of situations can arise where company computers need to communicate with each other Eventually over the course of time after meetings and committees the standard for networks was TCP/IP model. This is what it look like. We use this network paradigm today for communication between computer networks so no more proprietary networks and a lot less convoluted.'
    },
    {
        title: 'Day 4',
        id: 'day4',
        content: 'bguerpbgubgfr3u8ebgf83bgfuy8r4e30bgu8yuyuyuyuyuyuyuyuyuyuyuyuyu0upor84bg98r543ebg9-hbnfg49ur380bgffbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfb'
    }
]

export async function GET() {
    return NextResponse.json(blogs)
}