import styled from "styled-components";
import bannerImage from '@/assets/banner.png';
import { Title } from "@/components/Title";


interface FigureProps {
  $backgroundImage: string
}

const Figure = styled.figure<FigureProps>`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 30px 40px;
  background-image: url(${props => props.$backgroundImage});
  display: flex;
  align-items: center;

  .title-container {
    width: 100%;
    max-width: 300px;
  }
`
export function Banner() {
  return (
    <section>
      <Figure $backgroundImage={bannerImage}>
        <div className="title-container">
          <Title $size="3.2rem">La galería más completa de fotos del espacio</Title>
        </div>
      </Figure>
    </section>
  )
}