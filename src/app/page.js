import logo from '/public/logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="w-full bg-blue-700 h-20">
        <Image src={logo} alt='Logo' width={100} height={100} />
      </div>
    </main>
  )
}
