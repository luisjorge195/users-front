import Image from 'next/image'
import usuarios from '../public/usuarios.jpg'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="h-screen w-full grid place-items-center content">
      <button className='bg-black text-white p-5 opacity-70  hover:opacity-100 rounded-md text-2xl px-6'>
        <Link href="/usuario">
          Ingresa Aquí para iniciar a gestionar tus clientes
        </Link>
      </button>
    </main>
  )
}
