import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

class App extends Component {
 render() {
   //  const isValid = false;
 return (
   <div>
     <h1>Products</h1>
     <UserForm />
     <JumboTronComponent>
       This is a long sentence, and I want to insert content into the jumbotron
       component from the outside.
     </JumboTronComponent>
     <Products />
   </div>
 );
 }
}
export default App;