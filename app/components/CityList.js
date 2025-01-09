'use client'
import { useRouter } from 'next/navigation'
import styles from './CityList.module.css'

export default function CityList({ cities, selectedCity }) {
  const router = useRouter()

  return (
    <div className={styles.grid}>
      {cities.map((city) => (
        <button
          key={city}
          className={`${styles.button} ${city === selectedCity ? styles.selected : ''}`}
          onClick={() => router.push(`/${encodeURIComponent(city)}`)}
        >
          {city}
        </button>
      ))}
    </div>
  )
}
