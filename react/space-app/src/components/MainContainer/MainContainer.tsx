import styled from "styled-components";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { Tags } from "./Tags";

export function MainContainer() {
  return (
    <Main>
      <Banner />
      <Tags />
      <Gallery />
    </Main>
  )
}

const Main = styled.main`
  grid-area: main;
  display: grid;
  padding: 20px;
  grid-template-rows: 220px auto;
  gap: 3.5rem;
`;