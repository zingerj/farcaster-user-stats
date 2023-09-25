import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Statscaster`,
  description: 'Statscaster - Inspect your profile data on Farcaster',
  manifest: '/manifest.json',
  icons: { apple: '/hatecast_logo.png' },
  themeColor: '#1B1A1F'
}

export const dynamic = 'force-dynamic';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className="header homepageHeader">
        <div>
          <section className="header_h1">
              <Image id="h1_logo" src="/logo.png" alt="Statscaster logo" width="42" height="42" />
              <h1>Statcaster</h1>
          </section>
          <p>Search for a Farcaster user's profile data.</p>
        </div>
        <Suspense fallback={<p>Loading search...</p>}>
          <Search />
        </Suspense>
      </div>
    </main>
  )
}