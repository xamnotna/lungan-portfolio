import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    z-0'>
      <Head>
        <title>Lungans Portfolio</title>
        <meta name="description" content="Art Protfolio" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center"> {/* //might change snap */}
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact */}
    </div>
  )
}
