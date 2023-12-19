import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Header() {
  return (
    <>
      <Row className='my-5 text-center'>
        <Col md='4'>
          <img src='/logo.png' className='img-fluid fenfc' />
        </Col>
        <Col>
          <img src='/DILL.png' className='img-fluid dill' />
        </Col>
        <Col md='4'>
          <img src='/uncrest.png' className='img-fluid un' />
        </Col>
      </Row>
    </>
  );
}