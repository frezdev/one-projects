import styled from "styled-components"
import { Header } from "./components/Header"
import { LateralBar } from "./components/LateralBar"

const BackgroudGradient = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
      'header header header'
      'aside main main'
      'aside main main';
`

function App() {

  return (
    <BackgroudGradient>
      <Header />
      <LateralBar />
      <main></main>
    </BackgroudGradient>
  )
}

export default App
