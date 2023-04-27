import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const ItemList = ({data}) => {

  return (
    <Row>
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <Col sm="12" key={item.id}>
              <Card 
                className="d-flex flex-sm-row mb-3"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <Card.Img className="img-item"  variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title"> {item.title} </div>
                    <div className="item-price">{item.pric} </div>
                  </Card.Title>
                  <Card.Text className="my-3">
                    <div className="item-description">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h2 className="text-center">لا توجد بيانات</h2>
      )}
    </Row>
  );
};

export default ItemList;
