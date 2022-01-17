import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404_image.jpeg';
import '../styles/Custom404.css';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

function NotFoundPage() {
  return (
    <section className='col-sm-6'>
      <Link to='/'>
        <Card>
          <CardBody>
            <CardTitle className='font-weight-bold text-center'>
              Hmmm. I can't seem to find what you want.
            </CardTitle>
          </CardBody>
          <CardImg
            alt='Page not found'
            bottom
            src={NotFoundImage}
            width='100%'
          />
        </Card>
      </Link>
    </section>
  );
}

export default NotFoundPage;
