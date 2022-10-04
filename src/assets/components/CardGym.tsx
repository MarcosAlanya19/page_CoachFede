import {
  Box,
  Center,
  Grid,
  Image,
} from '@chakra-ui/react';

const CardGym = () => {
  return (
    <>
      <Center>
            <Grid gap={10} templateColumns={{sm: 'repeat(3, 1fr)'}}>
              <Box>
                <Image
                  rounded={'lg'}
                  width={'full'}
                  objectFit={'cover'}
                  src="./img/1.png"
                  _hover={{transform: "scale(1.03)"}}
                />
              </Box>
              <Box>
                <Image
                  rounded={'lg'}
                  width={'full'}
                  objectFit={'cover'}
                  src="./img/2.png"
                  _hover={{transform: "scale(1.03)"}}
                />
              </Box>
              <Box>
                <Image
                  rounded={'lg'}
                  width={'full'}
                  objectFit={'cover'}
                  src="./img/3.png"
                  _hover={{transform: "scale(1.03)"}}
                />
              </Box>
            </Grid>
      </Center>
    </>
  )
}

export default CardGym