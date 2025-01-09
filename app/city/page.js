'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import Breadcrumb from '../components/Breadcrumb'
import DistrictList from '../components/DistrictList'
import { getDistricts } from '../data/cities'

export default function City() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cityName = searchParams.get('name')
  const districts = getDistricts(cityName)

  const breadcrumbItems = [
    { text: '首頁', link: '/' },
    { text: cityName }
  ]

  return (
    <div className={styles.container}>
      <Breadcrumb items={breadcrumbItems} />
      
      <button 
        className={styles.backButton}
        onClick={() => router.back()}
      >
        返回上一頁
      </button>

      <h1>{cityName}</h1>
      <h2>主要行政區</h2>
      <DistrictList city={cityName} districts={districts} />
    </div>
  )
}
