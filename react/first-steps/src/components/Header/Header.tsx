import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <img className={styles.logo} src="/logos/logo.svg" alt="" />
        <div className={styles.heroTitleContainer}>
          <h1>Personas y equipos</h1>
          <p>organizados en un solo lugar.</p>
        </div>
      </div>
    </header>
  )
}
