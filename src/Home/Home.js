import React, { useState } from 'react'
import { Card, Row, Col, Space, Image, Avatar, List, Typography } from 'antd'
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
  return (
    <div style={{ padding: "20px 20px" }}>
      <Space direction="vertical" size={['large']}>
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
              hoverable
              style={{ display: 'flex' }}
              onClick={() => setFlippedObject({
                ...flippedObject,
                [movie.imdbID]: !flippedObject[movie.imdbID],
              })}
            >
              <ReactCardFlip isFlipped={flippedObject[movie.imdbID]}>
                <Row>
                  <Col span={8}>
                    <Image src={movie.Poster} alt={`${movie.Title} Poster`} />
                  </Col>
                  <Col span={16}>
                    <Card.Meta title={movie.Title} description={movie.Plot} />
                    <div>
                    <List
                      itemLayout="horizontal"
                      dataSource={movie.Ratings}
                      renderItem={rating => (
                        <List.Item style={{ justifyContent: 'flex-start' }}>
                          <Avatar style={{ marginRight: '5px' }} shape="square" size="large" src={ratingImageMap[rating.Source]} />
                          <Typography.Title style={{ margin: 0 }} level={5}>{rating.Value}</Typography.Title>
                        </List.Item>
                      )}
                    />
                    </div>
                  </Col>
                </Row>
                <div>
                  <Row>
                    <Col offset={6} span={6}>
                      <Image src={bExcited} alt={`${movie.Title} Poster`} />
                    </Col>
                    <Col span={6}>
                      <Image src={dExcited} alt={`${movie.Title} Poster`} />
                    </Col>
                  </Row>
                </div>
              </ReactCardFlip>
            </Card>
          )}
        )}
      </Space>
    </div>
  )
}

export default Home
