
import { getWeatherByCityName } from '@/lib/weather-api'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

type PageProps = {
  params: {
    cityName: string
  }
}

interface Weather {
  [key: string]: any
}

const Page = async({ params }: PageProps) => {

  const { cityName } = params

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  const weatherData = await getWeatherByCityName(cityName);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Main</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weatherData.weather.map((weather: Weather) => (
            <TableRow key={weather?.id}>
              <TableCell>{weather?.id}</TableCell>
              <TableCell>{weather?.main}</TableCell>
              <TableCell>{weather?.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
      <Link
          href="/home"
          className={buttonVariants()}
        >
          Back
        </Link>
      </div>
    </section>
  )
}

export default Page
