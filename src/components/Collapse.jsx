import React from 'react';
import { Collapse as AntCollapse } from 'antd';
import { Description } from './Description';
import { Label } from './Label';

export const Collapse = () => {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
