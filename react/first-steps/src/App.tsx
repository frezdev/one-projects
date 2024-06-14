import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Organizations } from '@/sections/Organization'
import { MainContainer } from '@/containers/MainContainer'
import { OrganizationProvider } from '@/context/OrganizationsContext'
import './App.css'

function App() {

  return (
    <>
      <OrganizationProvider>
        <Header />
        <MainContainer />
        <Organizations />
        <Footer />
      </OrganizationProvider>
    </>
  )
}

export default App
