import { Col, Row } from "antd";
export function AntGrid() {
  return (
    <>
      <Row gutter={[0, { xs: 24, sm: 24, md: 16 }]}>
        <Col xs={{ span: 12 }} md={{ span: 2, offset: 6, order: 3 }}>
          <div className="bg-primary">3</div>
        </Col>
        <Col xs={{ span: 6, offset: 6 }} md={{ span: 8, offset: 5, order: 5 }}>
          <div className="bg-warning">5</div>
        </Col>
        <Col xs={{ span: 6, offset: 3 }}  md={{ span: 4, offset: 0, order: 1 }}>
          <div className="bg-info">1</div>
        </Col>
        <Col xs={{ span: 9 }} md={{ span: 6, offset: 4, order: 2 }}>
          <div className="bg-danger">2</div>
        </Col>
        <Col xs={{ span: 18 }} md={{ span: 6, offset: 4, order: 4 }}>
          <div className="bg-success">4</div>
        </Col>
        <Col
          xs={{ span: 12, offset: 12 }}
          md={{ span: 4, offset: 10, order: 6 }}
        >
          <div className="bg-light">6</div>
        </Col>
      </Row>
    </>
  );
}