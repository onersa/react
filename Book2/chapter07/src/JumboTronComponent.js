import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

class JumboTronComponent extends Component {
  render() {
    return (
      <div>
        <Container fluid className="p-5 mb-4 bg-light rounded-3">
          <h1>Hello, world!</h1>
          <p>
            {/* Example 2 from App.js
           {this.props.body} */}
           {/* Example 3 from App.js */}
           {this.props.children}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default JumboTronComponent;
