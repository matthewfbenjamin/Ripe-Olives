import React, { useState, useRef, useEffect } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const PersonRating = ({ title, src }) => (
  <Box>
    <Text
      fontSize="4xl"
      textAlign="center"
    >{title}</Text>
    <Image
      src={src}
      alt={`${src} Picture`}
      maxH={386}
    />
  </Box>
)

export default PersonRating
