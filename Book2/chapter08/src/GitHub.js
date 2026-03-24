import React, { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GitHub() {
const [data, setData] = useState([]);
const [searchTerm, setSearchTerm] = useState("greg");
const [isLoading, setIsLoading] = useState(true);

const getData = () => {
   axios
     .get(`https://api.github.com/search/users?q=${searchTerm}`)
     .then((res) => {
       console.log(res.data.items);
       setData(res.data.items);
       setTimeout(() => {
         setIsLoading(false);
       }, 1000);
     });
}

useEffect(() => {
  getData();
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  getData();
}

    const listUsers = data.map((user) => (
      <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
        <Card>
          <a href={user.html_url}>
            <Card.Img src={user.avatar_url} alt="Generic placeholder" />
          </a>
          <Card.Body>
            <h5>Login: {user.login}</h5>
            <p>Id: {user.id}</p>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <BeatLoader />}
      <Row>{listUsers}</Row>
    </div>
  );
}
export default GitHub;

// import React, { Component } from "react";
// import axios from "axios"; // npm install axios
// import { BeatLoader } from  "react-spinners"
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import {Form, Button } from "react-bootstrap";
// class GitHub extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       isLoading: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   //   componentDidMount() {
//   //     this.getGitHubData("greg");
//   //   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({
//       isLoading: true,
//     });
//     this.getGitHubData(this.state.searchTerm);
//   }

//   handleChange(e) {
//     this.setState({ searchTerm: e.target.value });
//   }

//   getGitHubData(_searchTerm) {
//     axios
//       .get("https://api.github.com/search/users?q=" + _searchTerm)
//       .then((res) => {
//         this.setState({
//           isLoading: false,
//           data: res.data.items,
//         });
//         console.log(res.data.items);
//       });
//   }

//   render() {
//     const listUsers = this.state.data.map((user) => (
//       <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
//         <Card>
//           <a href={user.html_url}>
//             <Card.Img src={user.avatar_url} alt="Generic placeholder" />
//           </a>
//           <Card.Body>
//             <h5>Login: {user.login}</h5>
//             <p>Id: {user.id}</p>
//           </Card.Body>
//         </Card>
//       </Col>
//     ));

//     return (
//       <div>
//         <Form inline onSubmit={this.handleSubmit}>
//           <Form.Group controlId="formInlineName">
//             <Form.Control
//               type="text"
//               value={this.state.searchTerm}
//               placeholder="Enter Search Term"
//               onChange={this.handleChange}
//             />
//           </Form.Group>{" "}
//           <Button type="submit">Search</Button>
//         </Form>
//         <h3>Users</h3>
//         {this.state.isLoading && <BeatLoader />}
//         <Row>{listUsers}</Row>
//       </div>
//     );
//   }
// }

// export default GitHub;
