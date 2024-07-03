import styled from "styled-components"
import { MainGallery } from "./MainGallery"
import { Popular } from "./Popular"

export const Gallery = () => {
  return (
    <Container>
      <MainGallery />
      <Popular />
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 2rem;
`