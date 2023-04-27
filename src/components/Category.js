import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({filterByCategory,dataCategory}) => {
  return (
    <Row className="my-3 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
        {
            dataCategory  ? (dataCategory.map(item=>{
                return(<button onClick={()=>{filterByCategory(item)}} className="btm mx-2">{item}</button>)
            })):null
        }
      
        </div>
      </Col>
    </Row>
  );
};

export default Category;
