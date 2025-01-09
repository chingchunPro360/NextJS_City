'use client'
import { useRouter } from 'next/navigation'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ items }) {
  const router = useRouter()

  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className={styles.separator}> / </span>}
          {item.link ? (
            <span 
              className={styles.link}
              onClick={() => router.push(item.link)}
            >
              {item.text}
            </span>
          ) : (
            <span>{item.text}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
