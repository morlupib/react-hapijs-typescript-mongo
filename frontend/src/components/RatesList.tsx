import React, { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './RatesList.css';

export interface IRate extends Document {
  pair: String;
  original_rate: Number;
  fee: Number;
  fee_amount: Number;
  rate_with_fee: Number;
}

function RatesList() {
  const [rates, setRates] = useState<IRate[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/rates')
      .then(response => response.json())
      .then(response => setRates(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <Accordion>
      {rates.map((rate: IRate, i: number) => (
        <Card key={i}>
          <Accordion.Toggle as={Card.Header} eventKey={i.toString()}>
            {rate.pair}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body>
              <Card.Title>Original Rate: <b>{rate.original_rate.toFixed(4)}</b></Card.Title>
              <Card.Title>Fee: <b>{rate.fee}</b></Card.Title>
              <Card.Title>Fee amount: <b>{rate.fee_amount.toFixed(4)}</b></Card.Title>
              <Card.Title>Rate with fee: <b>{rate.rate_with_fee.toFixed(4)}</b></Card.Title>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default RatesList;
