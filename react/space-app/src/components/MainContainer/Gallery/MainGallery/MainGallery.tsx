import { Title } from "@/components/Title"
import { PhotosService } from "@/services/photos"
import { useEffect, useState } from "react"
import { MainCard } from "./MainCard"
import styled from "styled-components"
import { usePhotosContext } from "@/hooks/usePhotosContext"
import { ModalPhoto } from "./ModalPhoto"
import { type Photo } from "@/types"
import { ModalCard } from "./ModalPhoto/ModalCard"

export const MainGallery = () => {
  const { handleSetPhotos, filteredPhotos } = usePhotosContext()
  const [currentOpen, setCurrentOpen] = useState<Photo | null>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    PhotosService.getAll()
      .then(({ error, data }) => {
        if (error) {
          console.error(error)
          alert(error.message)
          return
        }
        handleSetPhotos(data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenModal = (currentPhoto?: Photo) => () => {
    setIsOpenModal(!isOpenModal)
    if (currentPhoto) {
      setCurrentOpen(currentPhoto)
      return
    }
    setCurrentOpen(null)
  }

  return (
    <section>
      <Title $color="#c98cf1" $size="2.5rem">Navegue por la galería</Title>
      <Grid>
        {filteredPhotos.length < 1
          ? <h4>Ho hay resultados</h4>
          : (
            filteredPhotos.map((photo) => (
              <li key={photo.id}>
                <MainCard
                  path={photo.path}
                  source={photo.source}
                  title={photo.title}
                  handleOpenModal={handleOpenModal(photo)} />
              </li>
            ))
          )
        }
      </Grid>
      {
        currentOpen && (
          <ModalPhoto open={isOpenModal}>
            <ModalCard
              {...currentOpen}
              handleCloseModal={handleOpenModal()}
            />
          </ModalPhoto>
        )
      }
    </section>
  )
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  list-style: none;
  margin-top: 2rem;

  @media (width < 870px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`