import { Box, Text, Grid, Container } from "@chakra-ui/react"
import CardGym from "../CardGym"

const ContainerCardGym = () => {
  return (
    <>
        <Box display={"block"}  py={5}>
          <Grid>
            <Text textAlign={'center'} pb={5} color={'whiteAlpha.800'} textTransform={'uppercase'} fontWeight={'bold'}>¿Quieres lograr tu objetivo físico de la mano del campeón de fisicocultursmo Jr en Costa Rica?</Text>
            <CardGym/>
          </Grid>
        </Box>
    </>
  )
}

export default ContainerCardGym