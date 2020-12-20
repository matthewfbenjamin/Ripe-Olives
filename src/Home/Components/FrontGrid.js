import React from 'react'
import { Image, Avatar, List, ListItem, Text, Grid, GridItem } from '@chakra-ui/react'

import {
  imdbLogo,
  metacriticLogo,
  rottenTomatoesLogo,
} from '../../images'

const ratingImageMap = {
  'Internet Movie Database': imdbLogo,
  'Rotten Tomatoes': rottenTomatoesLogo,
  'Metacritic': metacriticLogo,
}

const FrontGrid = ({ movie }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
    >
      <GridItem
        colSpan={1}
        mr={{ base: '0', md: '20px' }}
        justifySelf={{ base: 'center', md: 'flex-start' }}
      >
        <Image src={movie.Poster} alt={`${movie.Title} Poster`} />
      </GridItem>
      <GridItem 
        colSpan={{ base: 2, lg: 3 }}
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontSize="4xl">{movie.Title}</Text>
        <Text fontSize="xl" mb={{ base: '10px', md: 0 }} >{movie.Plot}</Text>
        <List m={{ base: 'auto', md: 0 }}>
          {movie.Ratings.map((rating, idx) => (
            <ListItem
              key={rating.Source}
              display="flex"
              alignItems="center"
              mb={idx === movie.Ratings.length ? 0 : '10px'}
            >
              <Avatar
                size="lg"
                mr="10px"
                src={ratingImageMap[rating.Source]}
              />
              <Text fontSize="lg">{rating.Value}</Text>
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  )
}

export default FrontGrid
