import React from 'react'
import { Container, Card, Col } from 'react-bootstrap'
import './Maincity.css'


export default function Maincity(props) {
  const dateBuilder = d => {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




    let day = days[d.getDay()];

    let date = d.getDate();

    let month = months[d.getMonth()];

    let year = d.getFullYear();


    return `${day} ${date} ${month} ${year}`;

  };

  return (
    <>
      <Container fluid className='citycontainer p-5 d-flex justify-content-center'>
        <Col xs={4}>
          <Card className=" cardbox text-secondary text-center">
            <Card.Img variant="top" src="./assets/images.jfif" className='Cardimage' />
            <Card.Body>
              <Card.Title className='location'>{props.weather.name} ,{props.weather.sys.country}</Card.Title>
              <Card.Title className='date'></Card.Title>

              <Card.Text>
                <div className='temp'>{Math.round(props.weather.main.temp)}°c</div>
                <div className='weather'>{props.weather.weather[0].main}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


      </Container>
    </>
  )
}
