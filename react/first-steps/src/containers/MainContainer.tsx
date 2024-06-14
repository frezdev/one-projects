import { useState } from 'react'
import { FormSection } from '@/sections/FormSection'
import { AddColaboratorSection } from '@/sections/AddColaborator'

export function MainContainer() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  }

  return (
    <main>
      {showForm && <FormSection />}
      <AddColaboratorSection handleClick={handleShowForm} />
    </main>
  )
}