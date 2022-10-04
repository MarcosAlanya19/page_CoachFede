import { Box, Grid, Text } from "@chakra-ui/react"
import Bibliografy from "../Bibliografy"

const ContainerBibliografy = () => {
  return (
    <>
      <Box py={10}>
        <Text textAlign={'center'} pb={5} color={'whiteAlpha.800'} textTransform={'uppercase'} fontWeight={'bold'}>¿Quién es Fede Céspedes y por qué puedo ayudarte a cumplir tus metas físicas, deportivas y motivacionales?</Text>
        <Bibliografy/>
      </Box>
    </>
  )
}

export default ContainerBibliografy