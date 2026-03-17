import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
 render() {
    const isValid = false;
 return (
 <div>
 <h1>Products</h1>
 {/* <Products />
 <Button variant="danger" disabled={!isValid}>Default</Button> */}
 <Rating rating="1"/>
 <Rating rating="2"/>
 <Rating rating="3"/>
 <Rating rating="4"/>
 <Rating rating="5"/>
 </div>
 );
 }
}
export default App;