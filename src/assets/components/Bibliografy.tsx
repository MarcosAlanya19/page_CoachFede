import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react"

const Bibliografy = () => {
  return (
    <>
      <Grid templateColumns={{sm: 'repeat(2, 1fr)'}}>
        <Grid mb={{base:5, sm:0}} justifyItems={{lg:"end"}}>
          <Grid  w={{lg:"96"}} templateColumns={'repeat(2, 1fr)'} templateRows={'repeat(2, 1fr)'} mr={{sm: 15}}>
            <GridItem  h={{base:"64" ,lg:"72"}} bgSize={'cover'} bgRepeat="no-repeat" rowSpan={2} colSpan={1} bgImage='url("/img/Bibliografy.png")' />
            <GridItem bgPosition={'center'} bgSize={'cover'} bgRepeat="no-repeat" colSpan={1} bgImage='url("/img/Bibliografy2.png")' />
            <GridItem bgPosition={'center'} bgSize={'cover'} bgRepeat="no-repeat" rowSpan={1} colSpan={1} bgImage='url("/img/Bibliografy3.png")' />
          </Grid>
        </Grid>
        <Box w={{lg:"96"}} my={'auto'}>
          <Text color={'#F8BA32'} fontWeight={"bold"} textTransform={"uppercase"}>Me llamo Federico Céspedes:</Text>
          <Text color={'whiteAlpha.600'} textAlign={'justify'}>Soy Federico Céspedes coach deportivo y atleta de fisicoculturismo, actualmente campeón en la categoría Jr de Costa Rica. <br /> <br />
          Me dedico a transformar cuerpos, de la mano de un buen plan de entrenamiento y una buena guía alimenticia he logrado transformar la vida de muchos clientes mejorando su salud, calidad de vida, estética, seguridad y autoestima.</Text>
        </Box>
      </Grid>
    </>
  )
}

export default Bibliografy