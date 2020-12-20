import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { VStack, Flex } from '@chakra-ui/react'
import ReactCardFlip from 'react-card-flip';

import { Card, FrontGrid, PersonRating } from './Components'
import {
  bExcited,
  dNeutral,
} from '../images'
import { FirebaseContext } from '../Contexts'

import example from './stub/example.json'

const Home = () => {
  const fbContext = useContext(FirebaseContext)
  const [flippedObject, setFlippedObject] = useState({})
  const [heightObject, setHeightObject] = useState({})
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get('http://www.omdbapi.com/?apikey')
      console.log(res)
    }
    console.log(fbContext)
  }, [])
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
          <Card
            key={movie.imdbID}
            onClick={(e) => {
              if (!heightObject[movie.imdbID]) setHeightObject({ ...heightObject, [movie.imdbID]: e.currentTarget.offsetHeight})
              setFlippedObject({
              ...flippedObject,
              [movie.imdbID]: !flippedObject[movie.imdbID],
              })
            }}
            maxHeight={{ base: 'none', md: heightObject[movie.imdbID] || 'none' }}
            w="100%"
          >
            <ReactCardFlip isFlipped={flippedObject[movie.imdbID]}>
              <FrontGrid movie={movie} />
              <Flex
                w="100%"
                flexDir={{ base: 'column', md: 'row' }}
                align={{ base: 'center' }}
                justifyContent={{ base: 'center', md: 'space-around' }}
              >
                <PersonRating title="Excited" src={bExcited} />
                <PersonRating title="Neutral" src={dNeutral} />
              </Flex>
            </ReactCardFlip>
          </Card>
        )}
      )}
    </VStack>
  )
}

export default Home
