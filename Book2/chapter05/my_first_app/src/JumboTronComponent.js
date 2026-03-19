// import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

function JumboTronComponent(props) {
    return (
      <div>
        <Container fluid className="p-5 mb-4 bg-light rounded-3">
          <h1>Hello, world!</h1>
          <p>
            {/* Example 2 from App.js
           {this.props.body} */}
           {/* Example 3 from App.js */}
           {props.body}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </div>
    );
  }

export default JumboTronComponent;
