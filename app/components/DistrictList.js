'use client'
import { useRouter } from 'next/navigation'
import styles from './DistrictList.module.css'

export default function DistrictList({ city, districts, selectedDistrict }) {
  const router = useRouter()

  return (
    <div className={styles.grid}>
      {districts.map((district) => (
        <button
          key={district}
          className={`${styles.button} ${district === selectedDistrict ? styles.selected : ''}`}
          onClick={() => router.push(`/${encodeURIComponent(city)}/${encodeURIComponent(district)}`)}
        >
          {district}
        </button>
      ))}
    </div>
  )
}
