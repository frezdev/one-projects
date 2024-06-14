import { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button'
import { useOrganization } from '@/hooks/useOrganization'
import styles from './Form.module.css';

type EventInput = React.ChangeEvent<HTMLInputElement>;

const defaultValue = {
  name: '',
  color: '#000000'
}
export function AddOrganizationForm() {
  const { createOrg } = useOrganization();
  const [data, setData] = useState(defaultValue)

  const handlesubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const { name, color } = data;
    if (name.trim() === "") return

    createOrg(name, color);
  }

  const handleName = (e: EventInput) => setData(prev => ({ ...prev, name: e.target.value }));
  const handleColor = (e: EventInput) => setData(prev => ({ ...prev, color: e.target.value }));


  return (
    <div className={styles.formContainer}>
      <h3>Rellena el formulario para crear una Organización.</h3>
      <form onSubmit={handlesubmit} className={styles.form}>
        <Input
          onChange={handleName}
          value={data.name}
          label='Nombre'
          placeholder='Ingresar nombre de la organización'
          name='name'
          id="name"
          required
        />

        <Input
          onChange={handleColor}
          value={data.color}
          label='Color'
          type='color'
          placeholder='Selecciona un color'
          name='color'
          id="color"
          required
        />

        <Button>Enviar</Button>
      </form>
    </div>
  )
}
