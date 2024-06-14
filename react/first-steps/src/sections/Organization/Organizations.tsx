import { Organization } from '@/components/Organization';
import { useOrganization } from '@/hooks/useOrganization';
import styles from './OrganizationSection.module.css';

export function Organizations() {
  const { organizations } = useOrganization()
  return (
    <section className={styles.container}>
      {
        Array.from(organizations, ([id, org]) => (
          <Organization key={id} {...org} />
        ))
      }
    </section>
  )
}

