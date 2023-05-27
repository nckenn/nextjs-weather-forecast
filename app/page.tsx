import Auth0SignInButton  from '@/components/auth0-signin-button';


export default function Home() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Welcome to the weather forecast web application. Please login with your Github user to
          use the application and view the weather in your city.
        </p>
      </div>
      <div className="flex gap-4">
        <Auth0SignInButton></Auth0SignInButton>
      </div>
    </section>
  )
}
