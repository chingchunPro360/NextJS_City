'use client'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'
import Breadcrumb from '../../components/Breadcrumb'
import DistrictList from '../../components/DistrictList'
import CityList from '../../components/CityList'
import { getDistricts, getCityList } from '../../data/cities'

export default function DistrictPage({ params }) {
  const router = useRouter()
  const cityName = decodeURIComponent(params.city)
  const districtName = decodeURIComponent(params.district)
  const districts = getDistricts(cityName)
  const cities = getCityList()

  const breadcrumbItems = [
    { text: '首頁', link: '/' },
    { text: cityName, link: `/${encodeURIComponent(cityName)}` },
    { text: districtName }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cityName} - {districtName}</h1>
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
        selectedDistrict={districtName}
      />
    </div>
  )
}
