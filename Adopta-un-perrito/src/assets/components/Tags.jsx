import React from 'react'
import Badge from 'react-bootstrap/Badge';


const Tags = ({tag, tagColor}) => {
  return (
    <h4>
        <Badge bg={tagColor}>{tag}</Badge>
      </h4>
      
  )
}

export default Tags