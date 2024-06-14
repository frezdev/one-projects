import { Icons } from '@/components/Icons'
import styles from './Footer.module.css';

const social = [
  { label: 'Twitter', url: 'https://twitter.com/frezdev', Icon: Icons.twitter },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/frezdev/', Icon: Icons.linkedIn },
  { label: 'Github', url: 'https://github.com/frezdev', Icon: Icons.github }
]
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.social}>
          <ul>
            {social.map(({ Icon, label, url }) => (
              <li key={label} style={{ color: '#fff' }}>
                <a href={url}>
                  <Icon width={30} height={30} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.logo}>
          <img src="/logos/logo.svg" alt="Logo de Org" />
        </section>

        <section className={styles.credits}>
          <p>Desarrollado por <a href={social[2].url}>Frezdev</a></p>
        </section>
      </div>
    </footer>
  )
}

