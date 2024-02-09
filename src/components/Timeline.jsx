import React from 'react';
import { Timeline as TimelineCollapse } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export const Timeline = () => {
  const items = [
      {
        children: 'Creación Propuesta: 9/5/2022',
        color: 'green',
      },
      {
        children: 'Fecha Desembolso: 9/15/2022',
        color: 'green',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'red',
        children: 'Fecha Fin Periodo de Gracia: 10/15/2022',
      },
      {
        children: 'Fecha Max 1er Cuota: 11/14/2022',
        color: 'green',
      },
      {
        children: 'Fecha Max 2da Cuota: 12/14/2022',
        color: 'gray',
      },
      {
        children: 'Fecha Max 3er Cuota: 1/14/2023',
        color: 'gray',
      },
      {
        children: 'FechaFinal: 1/14/2023',
        color: 'gray',
      },
  ]
 

  return (
    <TimelineCollapse items={items}/>
  );
};
