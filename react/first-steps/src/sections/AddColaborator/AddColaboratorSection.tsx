import styles from './AddColaboratorSection.module.css';

interface AddColaboratorTypes {
  handleClick: () => void
}
export function AddColaboratorSection({ handleClick }: AddColaboratorTypes) {
  return (
    <section className={styles.conatiner}>
      <div className={styles.titleContainer}>
        <h2>Mi organización</h2>
      </div>

      <div className={styles.buttonAddConatiner}>
        <button onClick={handleClick}></button>
      </div>
    </section>
  )
}