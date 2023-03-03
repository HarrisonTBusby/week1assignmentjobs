import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Job1Component() {



    return (
      <>
       <body className='backgroundImg'>
        <Row className='alignRight'>
       <Button as={Link} to='/' className='boxBackground2Btn'>Home</Button>
            </Row>
       </body>
      </>
    );
  }
  
  
  