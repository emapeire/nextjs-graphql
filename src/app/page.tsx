import { fetchData } from '@/lib/fetch-data'
import Image from 'next/image'

export default async function Home() {
  const characters = await fetchData()
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-6xl font-bold font-mono'>Morty&apos;s characters</h1>
      <div className='grid grid-cols-3 gap-4 pt-12'>
        {characters.map(({ id, name, image }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center space-y-4 p-4 dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-md shadow'
          >
            <Image
              className='rounded-full w-32 h-32'
              src={image}
              alt={name}
              width={128}
              height={128}
            />
            <p className='text-xl font-mono font-medium dark:text-neutral-200 text-neutral-800'>
              {name}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
