import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HomePageComponent() {



    return (
      <div>
        <body className='backgroundImg'>
            

        <Container>
        <Row>
        <Col className='alignLeft mt-5 text-center'>
        <h1 className='boxBackground1'>Jobs That Interest Me</h1>
        </Col>
        </Row>

        <Row className='mt-5'>
        <Col className='alignRight'>
            <Button className='boxBackground2Btn' as={Link} to='Job1'>Job 1</Button>
        </Col>
        </Row>

        <Row>
        <Col className='alignLeft'>
            <Button className='boxBackground1Btn' as={Link} to='Job2'>Job 2</Button>
        </Col>
        </Row>

        <Row>
        <Col className='alignRight'>
            <Button className='boxBackground2Btn' as={Link} to='Job3'>Job 3</Button>
        </Col>
        </Row>

        <Row>
        <Col className='alignLeft'>
            <Button className='boxBackground1Btn' as={Link} to='Job4'>Job 4</Button>
        </Col>
        </Row>

        <Row className='paddingBtm1'>
        <Col className='alignRight'>
            <Button className='boxBackground2Btn' as={Link} to='Job5'>Job 5</Button>
        </Col>
        </Row>

        </Container>       
        </body>
      </div>

    );
  }