import { Title } from "@/components/Title"
import { PhotosService } from "@/services/photos"
import { PopularPhoto } from "@/types"
import { useEffect, useState } from "react"
import styled from "styled-components"

export const Popular = () => {
  const [popular, setPopular] = useState<PopularPhoto[]>([])

  useEffect(() => {
    PhotosService.getPopular()
      .then(({ data, error }) => {
        if (error) {
          console.error(error)
          alert(error.message)
          return
        }
        setPopular(data);
      })
  }, [])
  return (
    <section>
      <Title $color="#c98cf1" $align="center" $size="2.5rem">Populares</Title>
      <List>
        {popular.map(photo => (
          <li key={photo.id}>
            <Card>
              <img src={photo.path} alt={photo.alt} />
            </Card>
          </li>
        ))}
      </List>
    </section>
  )
}

const List = styled.ul`
  display: grid;
  list-style: none;
  gap: 2rem;
  margin-top: 2rem;
`
const Card = styled.article`
  width: 100%;
  border-radius: .8rem;
  overflow: hidden;
  aspect-ratio: 5/3;
  box-shadow: 0 0 1rem rgba(0, 0, 0);
  display: flex;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
