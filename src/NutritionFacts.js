import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const numberPercentageShape = PropTypes.shape({
  number: PropTypes.number,
  percentage: PropTypes.number,
});

const NutritionFacts = ({ productName, servingSize, calories, fat, cholesterol, sodium }) => (
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
      <Row>
        <Col>Calories:</Col>
        <Col>{calories}</Col>
      </Row>
      <Row>
        <Col className="float-left text-nowrap">
          <h3>Fat</h3>
        </Col>
      </Row>
      <Row>
        <Col>Saturated</Col>
        <Col>{fat.saturated.number}</Col>
        <Col>({fat.saturated.percentage} %)</Col>
      </Row>
      <Row>
        <Col>Trans</Col>
        <Col>{fat.trans}</Col>
      </Row>
      <Row>
        <Col>Total</Col>
        <Col>{fat.total.number}</Col>
        <Col>({fat.total.percentage} %)</Col>
      </Row>
      <Row>
        <Col>Cholesterol</Col>
        <Col>{cholesterol.number}</Col>
        <Col>({cholesterol.percentage} %)</Col>
      </Row>
      <Row>
        <Col>Sodium</Col>
        <Col>{sodium.number}</Col>
        <Col>({sodium.percentage} %)</Col>
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
