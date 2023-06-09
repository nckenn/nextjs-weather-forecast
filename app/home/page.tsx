
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { SearchWeatherForm } from '@/components/search-weather-form'
import axios from 'axios';
import { GithubUser } from '@/types/github-user';

async function getGithubInfo(username: string) {
  const url = `https://api.github.com/users/${username}`;
  const res = await axios.get(url);

  return res.data;
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  const githubUser = await getGithubInfo(session?.user?.name as string) as GithubUser
  
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 sm:max-w-4xl">
        <div className="flex-auto text-center">
          <p>{githubUser?.name}</p>
          <p>{githubUser?.html_url}</p>
        </div>
        
        <SearchWeatherForm></SearchWeatherForm>
  
    </section>
  )
}
