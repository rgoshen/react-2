import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import '../styles/AddItemForm.css';

function AddItemForm({ add }) {
  /** Send value to parent and clear form **/
  const INITIAL_STATE = { name: '', serve: '', description: '', recipe: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Get the type from the route :type  */
  const { type } = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(formData, type);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <section className='col-sm-6'>
      <Card>
        <CardBody>
          <CardTitle>Add {type}</CardTitle>
          <Form className='inline' onSubmit={handleSubmit}>
            <FormGroup floating>
              <Input
                onChange={handleChange}
                id='name'
                name='name'
                placeholder='Name'
                type='text'
                value={formData.name}
              />
              <Label htmlFor='name'>Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                onChange={handleChange}
                id='serve'
                name='serve'
                placeholder='Serve'
                type='text'
                value={formData.serve}
              />
              <Label htmlFor='serve'>Serve</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                onChange={handleChange}
                id='description'
                name='description'
                placeholder='Description'
                type='text'
                value={formData.description}
              />
              <Label htmlFor='description'>Description</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                onChange={handleChange}
                id='recipe'
                name='recipe'
                placeholder='Recipe'
                type='text'
                value={formData.recipe}
              />
              <Label htmlFor='recipe'>Recipe</Label>
            </FormGroup>{' '}
            <Button
              outline
              id='newItemButton'
              type='submit'
              onClick={() => alert('Successfully added!')}
            >
              Add {type}
            </Button>{' '}
            <Button outline>
              <Link to={`/${type}`}>Back</Link>
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddItemForm;
