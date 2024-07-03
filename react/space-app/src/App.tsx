import styled from "styled-components"
import { Header } from "@/components/Header"
import { LateralBar } from "@/components/LateralBar"
import { MainContainer } from "@/components/MainContainer"

const BackgroudGradient = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    'header header header header header'
    'aside main main main main'
    'aside main main main main';
`

function App() {

  return (
    <BackgroudGradient>
      <Header />
      <LateralBar />
      <MainContainer />
    </BackgroudGradient>
  )
}

export default App
