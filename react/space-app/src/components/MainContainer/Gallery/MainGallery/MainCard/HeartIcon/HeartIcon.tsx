import heartActive from '@/assets/favorito-activo.png'
import heartInactive from '@/assets/favorito.png'

export const HeartIcon = ({ active }: { active?: boolean }) => {

  const icon = active ? heartActive : heartInactive

  return (
    <img src={icon} width={20} />
  )
}
