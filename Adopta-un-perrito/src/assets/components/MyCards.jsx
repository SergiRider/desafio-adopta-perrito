import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tags from './Tags';


const MyCards = ({image, name, description,tag,tagColor}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}
        </Card.Text>
        <Tags/>
        <Button variant={tagColor}>{tag}</Button>
     </Card.Body>
    </Card>
    </>
  )
}

export default MyCards