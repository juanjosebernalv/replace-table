import React from 'react';
import { Button, Descriptions } from 'antd';


export const Description = () => {

  const items = [
    {
      key: '1',
      label: 'Periodo de Gracia',
      children: <p>9/30/2022</p>,
    },
    {
      key: '2',
      label: 'Squad',
      children: <p>C2</p>,
    },
    {
      key: '3',
      label: 'Fondo',
      children: <p>P.A. GRAMERCY – OMNI I</p>,
    },
    {
      key: '4',
      label: 'Estado',
      children: <p>Legal</p>,
    },
    {
      key: '5',
      label: 'Estado Periodo de Gracia',
      children: <p>Legal</p>,
    },
    {
      key: '6',
      label: 'Fecha Max 1er Cuota',
      children: <p>11/14/2022</p>,
    },
  ];


  return (
    <>
      <Descriptions title="Detalle Crédito Rotativo" items={items} />
      <Button type='primary'>Ver Detalle</Button>
    </>
  );
};
