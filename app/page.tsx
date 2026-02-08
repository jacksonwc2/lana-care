import Hero from '@/components/Hero'
import ContactButton from '@/components/ContactButton'
import DescriptionText from '@/components/DescriptionText'
import ShareButton from '@/components/ShareButton'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileContainer}>
        <ShareButton />
        <main className={styles.main}>
          <div className={styles.topSection}>
            <Hero />
          </div>
          <div className={styles.centerSection}>
            <DescriptionText />
          </div>
          <div className={styles.bottomSection}>
            <ContactButton />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
