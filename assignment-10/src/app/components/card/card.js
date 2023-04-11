import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './card.css';

export default function CardComponent(props) {
  
  const imageCard = props.isImageCard ? (
    <Card className="card">
      <Card.Img src={props.data.image} alt="Card image" className="card-image"/>
      <Card.Body>
        <Card.Title style={props.data.title_style}>{props.data.title}</Card.Title>
        <Card.Text style={props.data.description_style}>
         {props.children}
        </Card.Text>
        <div className="card-button">
          {props.data.isButton1 && (<Button variant="primary" style={props.data.button_style}>{props.data.btnTitle}</Button>)}
          {props.data.isButton2 && (<Button variant="primary" style={props.data.button_style}>{props.data.btnTitle2}</Button>)}
        </div>
        <Card.Text style={props.data.description2_style}>{props.data.description2}</Card.Text>
      </Card.Body>
    </Card>
  ) : null;


  const smallCards = props.isSmallCard ? (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{ height: '150px' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {props.isList && (
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.listData.des1}</ListGroup.Item>
            <ListGroup.Item>{props.listData.des2}</ListGroup.Item>
          </ListGroup>
        )}
        {props.isButton && (
          <Button variant="primary">{props.btnName}</Button>
        )}
      </Card.Body>
    </Card>
  ) : null;


  return (
    <>
      <Card>
        <Card.Body>
          <div>
            <Card.Img src={`/icons/${props.img}.png`} style={{ width: "60px" }} />
            <Card.Text>{props.maxTemp}&#8451; / {props.minTemp}&#8451;</Card.Text>
          </div>
          <div>
            <Card.Text className="card-title">{props.desc1}</Card.Text>
            <Card.Text className="card-text">{props.desc2}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
