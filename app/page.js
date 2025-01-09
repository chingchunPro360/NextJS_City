'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Breadcrumb from './components/Breadcrumb'
import CityList from './components/CityList'
import { getCityList } from './data/cities'

export default function Home() {
  const router = useRouter()
  const cities = getCityList()

  const breadcrumbItems = [
    { text: '首頁' }
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>台灣主要城市</h1>
      <Breadcrumb items={breadcrumbItems} />
      <CityList cities={cities} />
    </main>
  )
}
