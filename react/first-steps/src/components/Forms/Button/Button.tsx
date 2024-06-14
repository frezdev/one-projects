import styles from './Button.module.css';

interface CustomButtomTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, ...rest }: CustomButtomTypes) {
  return (
    <button className={styles.submitButton} {...rest}>
      {children}
    </button>
  )
}
