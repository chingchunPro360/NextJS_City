'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from '../page.module.css'
import Breadcrumb from '../../components/Breadcrumb'

export default function District() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cityName = searchParams.get('city')
  const districtName = searchParams.get('name')

  const breadcrumbItems = [
    { text: '首頁', link: '/' },
    { text: cityName, link: `/city?name=${cityName}` },
    { text: districtName }
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

      <h1>{cityName} - {districtName}</h1>
    </div>
  )
}
