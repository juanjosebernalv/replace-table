import React from 'react';
import { Collapse as AntCollapse } from 'antd';
import { Description } from './Description';
import { Label } from './Label';

export const Collapse = () => {

  const items = [
    {
      key: '1',
      label: <Label />,
      children: <Description />,
    },
    {
      key: '2',
      label: <Label />,
      children: <Description />,
    },
    {
      key: '3',
      label: <Label />,
      children: <Description />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <AntCollapse items={items} defaultActiveKey={['1']} onChange={onChange} />
  );
};
