import styled from "styled-components";
import { Search } from "./Search";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  grid-area: header;

  img {
    height: 50px;
  }
`

export const Header = () => {
  return (
    <HeaderStyled>
      <img src="/images/logo.png" alt="" />
      <Search />
    </HeaderStyled>
  )
}