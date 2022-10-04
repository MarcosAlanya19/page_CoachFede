import { Box, Grid, Image } from "@chakra-ui/react"

const Header = () => {
  return (
    <>
      <Grid  justifyItems={"stretch"}>
        <Box >
          <picture>
            <source srcSet="./img/HeaderMovil.png" media="(max-width: 385px)"/>
            <source srcSet="./img/Header.png" media="(min-width: 385px)" />
            <Image w={'full'} src="./img/Header.png" alt="img__header" />
          </picture>
        </Box>
      </Grid>
    </>
  )
}

export default Header