import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const numberPercentageShape = PropTypes.shape({
  number: PropTypes.number,
  percentage: PropTypes.number,
});

const NutritionFacts = ({ productName, servingSize }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <h2>{productName} Nutrition Facts</h2>
        </Col>
      </Row>
      <Row>
        <Col>Serving Size</Col>
        <Col>
          {servingSize.amount} {servingSize.dimension}
        </Col>
      </Row>
    </Container>
  </div>
);

NutritionFacts.propTypes = {
  productName: PropTypes.string.isRequired,
  servingSize: PropTypes.shape({
    amount: PropTypes.number,
    dimension: PropTypes.string,
  }).isRequired,
  calories: PropTypes.number.isRequired,
  fat: PropTypes.shape({
    saturated: numberPercentageShape,
    trans: PropTypes.number,
    total: numberPercentageShape,
  }),
  cholesterol: numberPercentageShape,
  sodium: numberPercentageShape,
  carbs: PropTypes.shape({
    total: numberPercentageShape,
    fiber: numberPercentageShape,
    sugars: PropTypes.number,
  }),
  protein: PropTypes.number,
  vitamins: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: numberPercentageShape,
    })
  ),
};

export default NutritionFacts;
