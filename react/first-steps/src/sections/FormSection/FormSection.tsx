import { AddColaboratorForm, AddOrganizationForm } from "@/components/Forms";

export function FormSection() {
  return (
    <section style={styles}>
      <AddColaboratorForm />
      <AddOrganizationForm />
    </section>
  )
}

const styles = {
  paddingInline: 'var(--spacing-6)',
  paddingBlock: 'var(--spacing-6)',
  maxWidth: 'var(--max-w)',
  margin: 'auto',
  display: 'flex',
  gap: '2rem'
}