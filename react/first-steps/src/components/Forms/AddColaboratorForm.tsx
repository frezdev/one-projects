import { useState } from 'react';
import { Input } from './Input';
import { Select } from './Select'
import { Button } from './Button'
import { useOrganization } from '@/hooks/useOrganization'
import styles from './Form.module.css';

type EventInput = React.ChangeEvent<HTMLInputElement>;
type EventSelect = React.ChangeEvent<HTMLSelectElement>;

const defaultValue = {
  team: '',
  name: '',
  image: '',
  role: ''
}
export function AddColaboratorForm() {
  const { addMemberToOrg } = useOrganization();
  const [data, setData] = useState(defaultValue)

  const handlesubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { team, ...rest } = data;

    addMemberToOrg(team, { ...rest, id: crypto.randomUUID() })
    setData(defaultValue)
  }

  const handleName = (e: EventInput) => setData(prev => ({ ...prev, name: e.target.value }));
  const handleRole = (e: EventInput) => setData(prev => ({ ...prev, role: e.target.value }));
  const handleImage = (e: EventInput) => setData(prev => ({ ...prev, image: e.target.value }));
  const handleTeam = (e: EventSelect) => setData(prev => ({ ...prev, team: e.target.value }));


  return (
    <div className={styles.formContainer}>
      <h3>Rellena el formulario para crear el colaborador.</h3>
      <form onSubmit={handlesubmit} className={styles.form}>
        <Input
          onChange={handleName}
          value={data.name}
          label='Nombre'
          placeholder='Ingresar nombre'
          name='name'
          id="name"
          required />

        <Input
          onChange={handleRole}
          value={data.role}
          label='Puesto'
          placeholder='Ingresar puesto'
          name='role'
          id="role"
          required />

        <Input
          onChange={handleImage}
          value={data.image}
          label='Foto'
          placeholder='Ingresar enlace de foto'
          name='image'
          id="image"
          required />

        <Select
          onChange={handleTeam}
          value={data.team}
          label='Equipo'
          name='team'
          id='team' />

        <Button>Enviar</Button>
      </form>
    </div>
  )
}
