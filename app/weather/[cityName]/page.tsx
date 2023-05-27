import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import { Weather, WeatherElement } from '@/types/weather'

type PageProps = {
  params: {
    cityName: string
  }
}

async function getWeatherByCity(cityName: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      notFound()
    }
  }
}

function getFormattedDate(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long'}).format(timestamp * 1000)
}

const Page = async({ params }: PageProps) => {

  const { cityName } = params


  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  
  const weatherInfo = await getWeatherByCity(cityName) as Weather;
  
  const dt = getFormattedDate(weatherInfo?.dt);

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-4xl'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Temp(F)</TableHead>
            <TableHead className='hidden md:table-cell'>Description</TableHead>
            <TableHead className='hidden md:table-cell'>Main</TableHead>
            <TableHead className='hidden md:table-cell'>Pressure</TableHead>
            <TableHead className='hidden md:table-cell'>Humidity</TableHead>
        
          </TableRow>
        </TableHeader>
        <TableBody>
          {weatherInfo.weather.map((weather: WeatherElement) => (
            <TableRow key={weather?.id}>
              <TableCell>{dt}</TableCell>
              <TableCell>{weatherInfo?.main?.temp}</TableCell>
              <TableCell className='hidden md:table-cell'>{weather?.description}</TableCell>
              <TableCell className='hidden md:table-cell'>{weather?.main}</TableCell>
              <TableCell className='hidden md:table-cell'>{weatherInfo?.main?.pressure}</TableCell>
              <TableCell className='hidden md:table-cell'>{weatherInfo?.main?.humidity}</TableCell>
              
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
