import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-5xl py-4'>Hello World</h1>
        <h2 className='text-4xl'>Deployed</h2>
      </div>
    </main>
  )
}
