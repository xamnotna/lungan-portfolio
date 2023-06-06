import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lungans Portfolio</title>
        <meta name="description" content="Art Protfolio" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center h-screen">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact */}
    </>
  )
}
