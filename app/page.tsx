import Auth0SignInButton  from '@/components/auth0-signin-button';
import { buttonVariants } from '@/components/ui/button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';


export default async function Home() {
  const session = await getServerSession(authOptions)
  
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl mt-12">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Welcome to the weather forecast web application. Please login with your Github user to
          use the application and view the weather in your city.
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        {
          !session ? <Auth0SignInButton></Auth0SignInButton> : <Link href='/home' className={buttonVariants()}>Go to home</Link>
        }
      </div>
    </section>
  )
}
