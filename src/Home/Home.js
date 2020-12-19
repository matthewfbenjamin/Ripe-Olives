import React, { useState, useRef, useEffect } from 'react'
import { VStack, Box, Image, Avatar, List, ListItem, Text, Grid, GridItem } from '@chakra-ui/react'
import ReactCardFlip from 'react-card-flip';

import {
  imdbLogo,
  metacriticLogo,
  rottenTomatoesLogo,
  bBad,
  bExcited,
  bNeutral,
  dBad,
  dNeutral,
  dExcited,
} from '../images'

import example from './stub/example.json'

const ratingImageMap = {
  'Internet Movie Database': imdbLogo,
  'Rotten Tomatoes': rottenTomatoesLogo,
  'Metacritic': metacriticLogo,
}

const Home = () => {
  const [flippedObject, setFlippedObject] = useState({})
  const [heightObject, setHeightObject] = useState({})
  return (
    <VStack spacing={20} p={{ base: 8, md: 20 }}>
      {example.map(movie => {
        if (!(movie.imdbID in flippedObject)) {
          setFlippedObject({
            ...flippedObject,
            [movie.imdbID]: false,
          })
        }
        return (
          <Box
            key={movie.imdbID}
            style={{ display: 'flex', flexDirection: 'row' }}
            onClick={(e) => {
              if (!heightObject[movie.imdbID]) setHeightObject({ ...heightObject, [movie.imdbID]: e.currentTarget.offsetHeight})
              setFlippedObject({
              ...flippedObject,
              [movie.imdbID]: !flippedObject[movie.imdbID],
              })
            }}
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            borderRadius={20}
            overflow="hidden"
            transition="0.3s"
            cursor="pointer"
            _hover={{
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
            }}
            p={{ base: 8, md: 0 }}
            maxHeight={{ base: 'none', md: heightObject[movie.imdbID] || 'none' }}
          >
            <ReactCardFlip isFlipped={flippedObject[movie.imdbID]}>
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
              <Grid
                templateColumns="repeat(2, 1fr)"
                display="flex"
                width="100%" 
                maxH="100%"
              >
                <GridItem
                  colSpan={1}
                  maxH="100%"
                >
                  <Box
                    maxH="100%"
                  >
                    <Text fontSize="4xl">Excited</Text>
                    <Image h={386} src={bExcited} alt={`${movie.Title} Poster`} maxH="100%" />
                  </Box>
                </GridItem>
                <GridItem colSpan={1}>
                  <Box
                    maxH="100%"
                  >
                    <Text fontSize="4xl">Neutral</Text>
                    <Image h={386} src={dNeutral} alt={`${movie.Title} Poster`} maxH="100%" />
                  </Box>
                </GridItem>
              </Grid>
            </ReactCardFlip>
          </Box>
        )}
      )}
    </VStack>
  )
}

export default Home
