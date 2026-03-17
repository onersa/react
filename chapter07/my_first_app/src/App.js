import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

class App extends Component {
 render() {
   //  const isValid = false;
 return (
   <div>
     {/* <h1>Products</h1> */}
    
     {/* <Products />
 <Button variant="danger" disabled={!isValid}>Default</Button> */}
     {/* <Rating rating="1"/>
 <Rating rating="2"/>
 <Rating rating="3"/>
 <Rating rating="4"/>
 <Rating rating="5"/> */}
     {/* Example 1 */}
     {/* <JumboTronComponent /> */}
     {/* Example 2 */}
     {/* <JumboTronComponent body="This is text from App.js"/> */}

     {/* Example 3 */}
     {/* <JumboTronComponent>
       This is a long sentence, and I want to insert content into the jumbotron
       component from the outside.
     </JumboTronComponent>
     <Products /> */}
    <GitHub />
   </div>
 );
 }
}
export default App;