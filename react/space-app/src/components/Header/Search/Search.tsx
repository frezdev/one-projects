import styled from "styled-components";
import { Input } from './Input'

const Form = styled.form`
  display: flex;
  padding: 12px 16px;
  border-radius: 20px;
  border: 2px solid #C98CF1;
`;

const ButtonSearch = styled.button`
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-image: url('/icons/search.png');
`;

export const Search = () => {
  return (
    <Form>
      <Input />
      <ButtonSearch />
    </Form>
  )
}
