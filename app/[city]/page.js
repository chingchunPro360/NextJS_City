'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Breadcrumb from '../components/Breadcrumb'
import DistrictList from '../components/DistrictList'
import CityList from '../components/CityList'
import { getDistricts, getCityList } from '../data/cities'

export default function CityPage({ params }) {
  const router = useRouter()
  const cityName = decodeURIComponent(params.city)
  const districts = getDistricts(cityName)
  const cities = getCityList()

  const breadcrumbItems = [
    { text: '首頁', link: '/' },
    { text: cityName }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cityName}</h1>
      <Breadcrumb items={breadcrumbItems} />
      <h2 className={styles.subtitle}>城市</h2>
      <CityList 
        cities={cities}
        selectedCity={cityName}
      />
      <h2 className={styles.subtitle}>行政區</h2>
      <DistrictList 
        city={cityName} 
        districts={districts}
      />
    </div>
  )
}
