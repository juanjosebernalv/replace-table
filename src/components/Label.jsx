import React from 'react';
import { ShopOutlined } from '@ant-design/icons';
import { Avatar, Space, Badge, Card } from 'antd';

export const Label = () => {
  return (
    <Space wrap>
      <Badge.Ribbon text="Estado: En Mora " color="red">
        <Card>
                  
          <Space wrap> <Avatar size={48} icon={<ShopOutlined />} /> <h5>No. Línea:</h5> <p>138156</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Nit:</h5> <p>900008987</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Nombre:</h5> <p>Dantex S.A.</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Fecha desembolso:</h5> <p>9/15/2022</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Monto Financiado:</h5> <p>COP 118,000,000</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Tasa:</h5> <p>1.25%</p></Space>
          <Space wrap>  <p>   </p> </Space>
          <Space wrap><h5>Plazo:</h5> <p>120 Días</p></Space>
          <Space wrap>  <p>   </p> </Space>
        </Card>
      </Badge.Ribbon>

    </Space>
  );
};
