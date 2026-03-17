// Imports the connect function from react-redux. This is what links your React component to the Redux store.
import { connect } from "react-redux";
import Cart from "./Cart";

// This function takes the Redux store's state as an argument.
//  Its job is to pick which pieces of state your component needs access to.
function mapStateToProps(state) {
// Returns totalCost and productCart from the store as props that the Cart component can use. 
// So inside Cart, you'll be able to access these as props.totalCost and props.productCart. 
// We use state.cart because that's the key we gave the reducer in configureStore
  return {
    totalCost: state.cart.totalCost,
    productCart: state.cart.productCart
  }
}

// This function takes dispatch as an argument.
//  dispatch is how you send actions to the Redux store to update state. 
// Its job is to give your component functions it can call to update the store
function mapDispatchToProps(dispatch) {
  return {
// Creates a prop called onAddProduct that the Cart component can call. 
// When called, it dispatches an action of type "addProduct" to the reducer,
//  along with the product's name and price. The reducer then handles this action and updates the state
    onAddProduct: (productName, productPrice) => dispatch({ 
      type: "addProduct", 
      productData: { 
        productName: productName, 
        productPrice: productPrice 
      }
    }),

// reates a prop called onDeleteProduct that when called, dispatches a "deleteProduct"
// action to the reducer along with the product data to be removed.
    onDeleteProduct: (productData) => dispatch({ 
      type: "deleteProduct", 
      productData: productData 
    })
  }
}

//connect() takes your two mapping functions and connects the Cart component to the Redux store.
//  The result is a new component (connectedComponent) that has access to both the state props
//  and the dispatch props we defined above.
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);



export default connectedComponent;

// SUMMARY:
// In short — mapStateToProps gives your component read access to the store,
//  mapDispatchToProps gives it write access to the store, and connect 
// joins them all together onto the Cart component. Next will likely be creating the Cart.js file!



// import React, { Component } from 'react';
// import Products from './Products';
// import JumboTronComponent from './JumboTronComponent';
// import UserForm from './UserForm';
// import GitHub from './GitHub';
// // import { Button } from 'react-bootstrap';
// // import Rating from './Rating';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import GitHubUser from "./GitHubUser";
// import { getApp } from "firebase/app";
// import User from "./User";




// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log(getApp());
//   }

//   render() {
//     return (
//       <div>
//         {/* <GitHub /> */}
//         {/* <Header /> */}
//         {/* <User /> */}
//         <BrowserRouter>
//           <div>
//             <Routes>
//               <Route path="/add" element={<UserForm />} />
//               <Route path="/edit/:id" element={<UserForm />} />
//               <Route exact path="/" element={<User />} />
//               <Route path="/*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;

// class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/github">GitHub</Nav.Link>
//                 <Nav.Link href="/about">About</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//           <Routes>
//             <Route path="/github/user/:login/:id" element={<GitHubUser />} />
//             <Route path="/github" element={<GitHub />} />
//             <Route path="/about" element={<About />} />
//             <Route exact path="/" element={<Home />} />
//             <Route path="/*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

//   class Home extends Component {
//     render(){
//       return (
//       <div>
//       Home
//       </div>
//       )
//     }
//   }

//   class About extends Component {
//     render() {
//       return <div>About</div>;
//     }
//   }

//   class NotFound extends Component {
//     render(){
//       return <div>Not Found</div>
//     }
//   }