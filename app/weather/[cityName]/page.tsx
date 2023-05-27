import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import axios from 'axios'

type PageProps = {
  params: {
    cityName: string
  }
}

interface Weather {
  [key: string]: any
}

async function getWeatherByCity(cityName: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const res = await axios.get(url);

  return res.data;
}

function getFormattedDate(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long'}).format(timestamp * 1000)
}

const Page = async({ params }: PageProps) => {

  const { cityName } = params


  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  
  const weatherInfo = await getWeatherByCity(cityName);
  
  const date = getFormattedDate(weatherInfo?.dt);

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Temp(F)</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Main</TableHead>
            <TableHead>Pressure</TableHead>
            <TableHead>Humidity</TableHead>
        
          </TableRow>
        </TableHeader>
        <TableBody>
          {weatherInfo.weather.map((weather: Weather) => (
            <TableRow key={weather?.id}>
              <TableCell>{date}</TableCell>
              <TableCell>{weatherInfo?.main?.temp}</TableCell>
              <TableCell>{weather?.description}</TableCell>
              <TableCell>{weather?.main}</TableCell>
              <TableCell>{weatherInfo?.main?.pressure}</TableCell>
              <TableCell>{weatherInfo?.main?.humidity}</TableCell>
              
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
