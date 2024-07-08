import React from 'react';
import { Row, Col } from 'antd';

const Grid = () => (
  <Row className="grid-container">
    <Col
      xs={{ span: 5, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
      className="grid-item"
    >
      <div className="grid-content">지역별 공연 정보</div>
    </Col>
    <Col
      xs={{ span: 11, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
      className="grid-item"
    >
      <div className="grid-content">장르별 공연 정보</div>
    </Col>
    <Col
      xs={{ span: 5, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
      className="grid-item"
    >
      <div className="grid-content">인기별 공연 정보</div>
    </Col>
  </Row>
);

export default Grid;
