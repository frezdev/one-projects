import { type OrganizationMapItem } from '@/types';
import { Card } from './Card'
import { useOrganization } from '@/hooks/useOrganization';
import styles from './Organization.module.css';
import { useState } from 'react';

interface OrganizationProps extends OrganizationMapItem { }

export function Organization({ title, asentColor, bgColor, members, id }: OrganizationProps) {
  const { deleteMember, updateOrg } = useOrganization();
  const [colors, setColors] = useState({ bgColor, asentColor });

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColors(prev => ({
      ...prev,
      asentColor: e.target.value,
      bgColor: `${e.target.value}55`
    }))
  }

  const handleCancel = () => {
    setColors({ asentColor, bgColor })
  }

  const handleSave = () => {
    updateOrg(id, (currentOrg) => ({
      ...currentOrg,
      asentColor: colors.asentColor,
      bgColor: colors.bgColor
    }))
  }


  if (members.size < 1) return null;

  return (
    <div className={styles.organization} style={{ backgroundColor: colors.bgColor }}>
      <div className={styles.selectColorContainer}>
        <input className={styles.input} type="color" value={colors.asentColor} onChange={handleChangeColor} />
        {
          colors.asentColor !== asentColor && (
            <div className={styles.buttonsContainer}>
              <button className={`${styles.button} ${styles.btnPrimary}`} onClick={handleSave}>Guardar</button>
              <button className={`${styles.button} ${styles.btnSecondary}`} onClick={handleCancel}>Cancelar</button>
            </div>
          )
        }
      </div>
      <div className={styles.titleContainer}>
        <h2
          className={styles.title}
          style={{ borderColor: colors.asentColor }}
        >
          {title}
        </h2>
      </div>
      <div className={styles.grid}>
        {
          Array.from(members, ([memberId, member]) => (
            <Card
              handleDelete={() => deleteMember(id, memberId)}
              key={memberId}
              color={colors.asentColor}
              {...member}
            />
          ))
        }
      </div>
    </div>
  )
}

