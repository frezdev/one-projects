import styled from "styled-components";
import { HeartIcon } from "./HeartIcon";
import { useState } from "react";

interface Props {
  path: string;
  title: string;
  source: string;
  handleOpenModal: () => void;
}

export const MainCard = ({ path, title, source, handleOpenModal }: Props) => {
  const [favorite, setFavorite] = useState(false)

  const favoriteHandleClick = () => setFavorite(!favorite)

  return (
    <Article>
      <Image src={path} alt={title} />
      <CardFooter>
        <div className="footer--info">
          <h3>{title}</h3>
          <p>{source}</p>
        </div>
        <div className="footer--actions">
          <ButtonAction onClick={favoriteHandleClick}>
            <HeartIcon active={favorite} />
          </ButtonAction>
          <ButtonAction onClick={handleOpenModal}>
            <img src="/icons/expandir.png" width={15} />
          </ButtonAction>
        </div>
      </CardFooter>
    </Article>
  )
}

const Article = styled.article`
  border-radius: 1rem;
  background-color: #011530;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  display: grid;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

const CardFooter = styled.footer`
  display: flex;
  padding: 1.2rem 1.5rem;
  justify-content: space-between;
  color: #fff;

  .footer--info {
    h3 {
      font-size: 1.6rem;
      margin-bottom: .4rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  .footer--actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`
const ButtonAction = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
`