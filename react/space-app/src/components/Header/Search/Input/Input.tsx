import { usePhotosContext } from "@/hooks/usePhotosContext";
import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
`;

const StyledInput = styled.input`
  background: transparent;
  box-sizing: border-box;
  outline: none;
  border: none;
  width: 566px;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`
export const Input = () => {
  const { handleFilterPhotos } = usePhotosContext()
  const [curretValue, setCurrentValue] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target
    handleFilterPhotos(value)
    setCurrentValue(value)
  }

  return (
    <Label htmlFor="search">
      <StyledInput
        id="search"
        type="text"
        value={curretValue}
        placeholder="Search..."
        onChange={handleChange}
      />
    </Label>
  )
}