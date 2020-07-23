import React from 'react';
import Customers from './Customers/Customers';
import Bills from './Bills/Bills';
import Products from './Products/Products';

import {Card, Col, Row} from 'antd';

export default function LandingPage() {
  return (
    <div>
      <h2 align='center' style={{marginTop: '3%', color: 'green'}}>
        Welcome to Billing App
      </h2>
      <div align='center' style={{marginTop: '5%'}}>
        <div className='site-card-wrapper'>
          <Row gutter={22} justify='center' align='middle'>
            <Col span={5}>
              <Card
                bordered={true}
                style={{borderColor: 'blue', borderWidth: '8px'}}>
                <Products />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                bordered={true}
                style={{borderColor: 'blue', borderWidth: '8px'}}>
                <Customers />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                bordered={true}
                style={{borderColor: 'blue', borderWidth: '8px'}}>
                <Bills />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
