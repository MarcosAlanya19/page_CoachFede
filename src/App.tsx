import { Box } from '@chakra-ui/react'
import ContainerBibliografy from './assets/components/containers/ContainerBibliografy'
import ContainerCardGym from './assets/components/containers/ContainerCardGym'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'

function App() {

  return (
    <div className="App">
        <Box bg={"blackAlpha.900"}>
          <Header/>
          <Box maxW={'container.xl'} mx={{base: 10,lg:'auto'}}>
            <ContainerCardGym/>
            <ContainerBibliografy/>
          </Box>
          <Footer/>
        </Box>
    </div>
  )
}

export default App
