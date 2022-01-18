import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

function Menu({ items, title, content }) {
  const route = title.toLowerCase();
  return (
    <section className='col-md-4'>
      <Card>
        <CardBody>
          <CardTitle className='font-weight-bold text-center'>
            {title} Menu
          </CardTitle>
          <CardText>{content}</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${route}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
        <CardFooter>
          <Button outline>
            <Link to={`/${route}/add`}>Add {title}</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Menu;
