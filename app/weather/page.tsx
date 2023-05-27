'use client'

import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { useSession } from 'next-auth/react'

export default function Weather() {
  
  const { data: session } = useSession({
    required: true
  })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
        <p>{session?.user?.name}</p>
    </section>
  )
}
