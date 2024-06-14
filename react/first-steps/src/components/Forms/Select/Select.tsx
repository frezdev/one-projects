import styles from './Select.module.css';
import { useOrganization } from '@/hooks/useOrganization';

interface CustomSelectTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  id: string,
  name: string,
}

export function Select({ label, id, name, ...rest }: CustomSelectTypes) {
  const { organizations } = useOrganization()

  const options = Array.from(organizations, ([, value]) => value)

  return (
    <label className={styles.label} htmlFor={id}>
      <span className={styles.labelTitle}>{label}</span>
      <select className={styles.select} name={name} id={id} required {...rest}>
        <option value="" defaultValue="" hidden>Seleccionar {label}</option>
        {options.map(({ title, id }, index) => (
          <option key={`${index}_option_item`} value={id}>{title}</option>
        ))}
      </select>
      <span></span>
    </label>
  )
}
