import styles from './Card.module.css'

interface CardPropsTypes {
  color: string,
  name: string,
  role: string,
  image: string,
  handleDelete: () => void
}

export function Card({ color, name, role, image, handleDelete }: CardPropsTypes) {
  return (
    <div className={styles.card}>
      <div
        className={styles.imgContainer}
        style={{ background: color }}
      >
        <img
          src={image}
          alt={`Fotografia de ${name}`}
        />
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <button onClick={handleDelete} className={styles.deleteBtn}>+</button>
    </div>
  )
}