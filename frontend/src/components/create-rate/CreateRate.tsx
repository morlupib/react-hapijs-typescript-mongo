import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Container from '../../styles/shared-styles';
import { IRate } from '../rates-list/RatesList';

function CreateRate() {
  const { register, handleSubmit, errors, reset, clearErrors } = useForm();

  const onSubmit = (rate: IRate) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rate)
    };
    fetch('http://localhost:3000/rates', requestOptions)
        .then(response => response.json())
        .then(data => {
          reset(data);
          clearErrors();
        });
  };

  return (
    <Container>
      <h2>Create Rate</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Pair name</Form.Label>
          <Form.Control type="text" placeholder="Pair name" name="pair" ref={register({required: 'Pair name is required'})}/>
          {errors.pair && <Form.Text className="text-danger">{errors.pair.message}</Form.Text>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Original rate</Form.Label>
          <Form.Control type="number" placeholder="Example: 12.34" name="original_rate" step="0.01" ref={register({required: 'Original rate is required'})}/>
          {errors.original_rate && <Form.Text className="text-danger">{errors.original_rate.message}</Form.Text>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Fee</Form.Label>
          <Form.Control type="number" placeholder="Example: 0.02" name="fee" step="0.01" ref={register({required: 'fee is required'})}/>
          {errors.fee && <Form.Text className="text-danger">{errors.fee.message}</Form.Text>}
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreateRate;
