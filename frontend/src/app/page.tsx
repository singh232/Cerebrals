import { Brain, Send } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Chat from '@/components/chat'
import { Card, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <nav className='sticky top-0 w-full h-16 bg-black flex flex-row items-center justify-between px-4'>
        <Brain color='white' className='h-12 w-auto' />

        <Avatar>
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </nav>

      <main className='h-[calc(100dvh-5.5rem)]'>
        <div className='flex flex-col justify-center w-full'>
          <div className='flex justify-center items-center w-full'>
            <Card className='max-w-3xl m-6 drop-shadow-lg'>
              <CardHeader className='text-center font-extrabold text-xl md:text-2xl'>
                Chatbot Submission for the Cerebrals
              </CardHeader>
            </Card>
          </div>
        </div>

        <Chat />

      </main >
    </>
  )
}
