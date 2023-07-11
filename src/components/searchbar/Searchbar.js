import React from 'react'
import { useState } from 'react'
import './Searchbar.css'
import { BsSearch } from 'react-icons/bs'
import { Container, Card, Col, Form, Row } from 'react-bootstrap'


export default function Searchbar() {

  const api = {
    key: "995b9b166a8821d8e97b3cccc32a0e13",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [title, setTitle] = useState('')
  const [weather, setWeather] = useState({})
  const [weatherLength, setWeatherLength] = useState([])


  // const dateBuilder = d => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();
  //   return `${day} ${date} ${month} ${year}`;
  // };


  const inputHandler = (event) => {

    setTitle(event.target.value)
  }
  const searchHandler = (event) => {
    event.preventDefault()

    fetch(`${api.base}weather?q=${title}&units=metric&APPID=${api.key}`)
      .then(res => res.json())

      .then(result => {

        setWeather(result);

        setTitle('');
        setWeatherLength((prevState) => prevState + 1)

        console.log(result);

      })
    console.log(weather);

  }


  return (
    <>
      <Container fluid className='maindev'>
        <Row className='d-flex justify-content-center' >
          <Col xs={8}>
            <Form className='d-flex justify-content-center mt-5 p-4 formbox'>
              <input className='searchbox' value={title} onChange={(event) => inputHandler(event)} type='search' placeholder='enter here' />
              <button className=' searchbtn text-white fw-bold pe-3 ps-3' onClick={(event) => searchHandler(event)}>
                <BsSearch className='fs-3' />Search
              </button>
            </Form>
          </Col>
        </Row>
        <Row>
          {weatherLength.length > 0 && typeof weather.main != "undefined" &&
            <div className='d-flex justify-content-center'>
              <Col xs={8}>
                <div className="text-secondary text-center d-flex justify-content-between mt-5 pt-4 pb-4 cardbox">
                  {weather.weather[0].main == 'Clouds' &&
                    <Col xs={7}>
                      <img src="./assets/images.jfif" className='rounded-3' />
                    </Col>
                  }
                  {weather.weather[0].main == 'Clear' &&

                    <Col xs={7}>
                      <img src="./assets/images.jfif" className='rounded-3' />
                    </Col>
                  }
                  {weather.weather[0].main == 'Snow' &&
                    <Col xs={7}>
                      <img src="./assets/images (3).jfif" className='rounded-3' />
                    </Col>
                  }
                  {weather.weather[0].main == 'Rainy' &&
                    <Col xs={7}>
                      <img src="./assets/images (2).jfif" className='rounded-3' />
                    </Col>
                  }
                  {weather.weather[0].main == 'Windy' &&
                    <Col xs={7}>
                      <img src="./assets/images (1).jfif" className='rounded-3' />
                    </Col>
                  }
                  <Col xs={4} className='mt-2 text-start text-secondary fw-bold'>
                    <h2 className='location'>{`${weather.name}`} {`${weather.sys.country}`}</h2>
                    <h2 className='date'></h2>
                    <div className='temp'>{`temp:  ${Math.round(weather.main.temp)}`}°c</div>
                    <div className='weather'>{`weather:${weather.weather[0].main}`}</div>
                    <div className='description'>{`description:${weather.weather[0].description}`}</div>
                    <div className='humidity'>{`humidity:${weather.main.humidity}`}</div>
                    <div className='windspeed'>{`windspeed:${weather.wind.speed}`}</div>
                  </Col>
                </div>
              </Col>
            </div>

          }
        </Row>

      </Container>





      {/* <Container fluid className='searchContainer d-flex justify-content-center'>
      <div className='formbox'>
        <Form className='p-5 d-flex justify-content-center'>
        <input value={title} onChange={(event)=>inputHandler(event)} type='search' className='searchbox' placeholder='enter here'/>
        <button className=' searchbtn text-white fw-2 p-2' onClick={(event)=>searchHandler(event)}>
        <BsSearch/>Search
        </button>
      </Form>
      { weatherLength.length > 0 && typeof weather.main != "undefined" &&
     <div className='citycontainer mt-4 d-flex justify-content-center'>
     <Col xs={8}>
       <Card className=" cardbox text-secondary text-center">
         <Card.Img variant="top" src="./assets/images.jfif" className='Cardimage' />
         <Card.Body>
           <Card.Title className='location'>{`${weather.name}`} {`${weather.sys.country}`}</Card.Title>
           <Card.Title className='date'></Card.Title>
           <Card.Text>
             <div className='temp'>{`temp:  ${Math.round(weather.main.temp)}`}°c</div>
             <div className='weather'>{`weather:${weather.weather[0].main}`}</div>
             <div className='humidity'>{`humidity:${weather.main.humidity}`}</div>
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   </div> 
      
    }
      </div> 
    </Container> */}



    </>

  )
}










// fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)