import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Container from '../../styles/shared-styles';

export interface IRate {
  pair: String;
  original_rate: Number;
  fee: Number;
  fee_amount: Number;
  rate_with_fee: Number;
}
const columns = ['PAIR', 'ORIGINAL RATE', 'FEE', 'FEE AMOUNT', 'RATE WITH FEE'];

function RatesList() {
  const [rates, setRates] = useState<IRate[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/rates')
      .then(response => response.json())
      .then(response => setRates(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            {columns.map((column: string, i: number) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rates.map((rate: IRate, i: number) => (
            <tr key={i}>
              <td>{rate.pair}</td>
              <td>{rate.original_rate.toFixed(4)}</td>
              <td>{rate.fee}</td>
              <td>{rate.fee_amount.toFixed(4)}</td>
              <td>{rate.rate_with_fee.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default RatesList;
