'use client'

import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  
  const { data: session } = useSession({
    required: true
  })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
        <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image as string} alt="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
    </section>
  )
}
