import styles from './Input.module.css';

interface CustomInputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  id: string,
  name: string
}

export function Input({ placeholder, type, label, id, name, ...rest }: CustomInputTypes) {

  return (
    <label className={styles.label} htmlFor={id}>
      <span className={styles.labelTitle}>{label}</span>
      <input
        placeholder={placeholder}
        className={styles.input}
        name={name}
        type={type ?? 'text'}
        id={id}
        {...rest}
      />
      <span></span>
    </label>
  )
}
