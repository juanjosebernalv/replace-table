import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

export const Label = () => {
  return (
    <Space wrap>
      <Space wrap><Avatar size={28} icon={<UserOutlined />} /><h5>Name:</h5> <p>Josefito</p></Space>
      <Space wrap><h5>type:</h5> <p>Raccon Fan</p></Space>
      <Space wrap><h5>Safenoseque:</h5> <p>NPI</p></Space>


    </Space>
  );
};
