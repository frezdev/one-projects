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
  return (
    <Label htmlFor="search">
      <StyledInput id="search" type="text" placeholder="Search..." />
    </Label>
  )
}