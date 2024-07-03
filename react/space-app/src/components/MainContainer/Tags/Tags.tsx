import { tagsService } from "@/services/tags";
import { type Tag as TagType } from "@/types";
import { useEffect, useState } from "react";
import styled from "styled-components";

// const tags = ['Estrellas', 'Galaxias', 'Lunas', 'Planetas', 'Todas'];

export const Tags = () => {
  const [tags, setTags] = useState<TagType[]>([])

  useEffect(() => {
    tagsService.getAll()
      .then(({ data, error }) => {
        if (error) {
          console.error(error)
          alert(error.message)
          return
        }
        setTags(data)
      })
  }, [])
  return (
    <SectionTags>
      <p>Busque por tags:</p>
      <div>
        <TagsList>
          {tags.map(({ id, title }) => (
            <li key={id}>
              <Tag>
                {title}
              </Tag>
            </li>
          ))}
        </TagsList>
      </div>
    </SectionTags>
  )
}

const SectionTags = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    color: #fff;
    font-size: 2rem;
  }
`

const TagsList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 1rem;
`

const Tag = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  background-color: #728089;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: .8rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;

  &:hover {
    opacity: 80%;
  }
`
