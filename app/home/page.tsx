
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { SearchWeatherForm } from '@/components/search-weather-form'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl">
        {/* <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image as string} alt="" />
            <AvatarFallback></AvatarFallback>
          </Avatar> */}
        <div className="flex-auto text-center">
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
        
        <SearchWeatherForm></SearchWeatherForm>
  
    </section>
  )
}
