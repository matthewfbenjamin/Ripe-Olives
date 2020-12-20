import React from 'react'
import { Box } from '@chakra-ui/react'

const Card = (props) => (
  <Box
    {...props}
    display="flex"
    flexDir="row"
    boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
    borderRadius={20}
    overflow="hidden"
    transition="0.3s"
    cursor="pointer"
    _hover={{
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    }}
    p={{ base: 8, md: 0 }}
  />
  )

export default Card
