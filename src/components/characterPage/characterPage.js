import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails, { Field } from "../charDetails";
import ErrorMessage from "../error";

export default class CharacterPage extends Component {
  state = {
    selectedChar: 130,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <Row>
        <Col md="6">
          <ItemList onItemSelected={this.onItemSelected} />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar}>
            <Field field="gender" label="Gender" />
            <Field field="born" label="Born" />
          </CharDetails>
        </Col>
      </Row>
    );
  }
}
