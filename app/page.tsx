import Navbar from '@/components/Nav/Navbar'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="container mx-auto px-6">

      <div className='m-4 flex flex-col'>
        <li className='flex justify-center py-6'>
          Day 1
        </li>
        <p>Made this website show my Web-Dev skills. Tech-stack is Nextjs 13, TypeScript, and Tailwind made this site to keep track 
          of my journey into Tech going to be studying to get a help desk role. 
        </p>

        <li className='flex justify-center py-6'>Day 2</li>
        <p>Finished My resume not as bad as I thought. Learning Networks and TCP/IP model and how computer communicate to eachother via 5 different layers.</p>
        <p>Before that computers had no way to talk to each other. But in 1969 the U.S Defense Department created the Arpanet a forerunner to the internet.
          And here what that looked like.
        </p>
        <div className='flex justify-center pt-7 pb-7'>
        <Image
          src='/arpanet.svg'
          alt='picture of arpanet diagram'
          width={250}
          height={250}
          color='white'
        />
        <p className='flex items-center'>
          Photo here Turn on light mode to see.
        </p>
        
        </div>

        <div className='py-6'>
        <p>I know complicated right, this network paradigm was proprietary meaning IBM computers can only talk to other IBM computers and 
          macintosh computers and only talk to other macintosh computers. 
          This wasn&apos;t optimal plenty of situations can arise where company computers need to communicate with each other
          Eventually over the course of time after meetings and committees the standard for networks was TCP/IP model. This is what it look like.</p>

          <div className='flex justify-center pt-5'>
            <Image
            src='/tcp.svg'
            alt='tcp/ip model'
            width={250}
            height={250}
            />
          </div>
          </div>

          <div>
            <p className='flex justify-center'>
              We use this network paradigm today for communication between computer networks so no more proprietary networks and a lot less convoluted.
            </p>
          </div>
          <li className='flex justify-center py-6'>
            Day 3
          </li>
          <p>To be continued...</p>
      </div>
    </div>
  )
}
