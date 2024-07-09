import React from 'react';
import { Row, Col } from 'antd';
import './Grid.css';  // CSS 파일 import

const Grid = () => (
  <Row className="grid-container" gutter={[16, 16]}>
    <Col
      xs={{ span: 22, offset: 1 }}
      lg={{ span: 7, offset: 1 }}
      className="grid-item"
    >
      <div className="grid-content">
        <img src="/path/to/image1.jpg" alt="지역별 공연 정보" className="grid-image" />
        <div>지역별 공연 정보</div>
      </div>
    </Col>
    <Col
      xs={{ span: 22, offset: 1 }}
      lg={{ span: 7, offset: 1 }}
      className="grid-item"
    >
      <div className="grid-content">
        <img src="/path/to/image2.jpg" alt="장르별 공연 정보" className="grid-image" />
        <div>장르별 공연 정보</div>
      </div>
    </Col>
    <Col
      xs={{ span: 22, offset: 1 }}
      lg={{ span: 7, offset: 1 }}
      className="grid-item"
    >
      <div className="grid-content">
        <img src="/path/to/image3.jpg" alt="인기별 공연 정보" className="grid-image" />
        <div>인기별 공연 정보</div>
      </div>
    </Col>
  </Row>
);
