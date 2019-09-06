// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { firestore, auth, signInWithGoogle } from "./firebase";
import "./App.css";
import styled from "styled-components";

import CollectionBar from "./Components/CollectionBar.js";
import List from "./Components/List.js";
import Authentication from "./Components/Authentication.js";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 10fr;
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
`;

const Navbar = styled.div`
  background: #a9a9a9;
  color: #5d5d5d;
  padding: 10px;

  background-size: cover;
  background-repeat: no-repeat;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #ececec;
`;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       newData: "",
//       user: null
//     };
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount = async () => {
//     const snapshot = await firestore.collection("MyLists").get();

//     const myLists = snapshot.docs.map(doc => {
//       return doc.get("listId");
//     });

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       this.setState({ user });
//     });

//     this.setState({
//       data: myLists
//     });
//   };

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <Wrapper>
//         <Navbar>
//           <Authentication user={this.state.user} />
//         </Navbar>
//         <CollectionBar />
//         <ListContainer>
//           {Object.entries(this.state.data).map(([key, value]) => (
//             <List key={value} listID={value} />
//           ))}
//         </ListContainer>
//       </Wrapper>
//     );
//   }
// }

const App = () => {
  const [state, setState] = useState({
    data: [],
    newData: "",
    user: null
  });

  let unsubscribeFromAuth = null;

  useEffect(async () => {
    const snapshot = await firestore.collection("MyLists").get();

    const myLists = snapshot.docs.map(doc => {
      return doc.get("listId");
    });

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setState({ user });
    });

    setState({
      data: myLists
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Wrapper>
      <Navbar>
        <Authentication user={state.user} />
      </Navbar>
      <CollectionBar />
      <ListContainer>
        {Object.entries(state.data).map(([key, value]) => (
          <List key={value} listID={value} />
        ))}
      </ListContainer>
    </Wrapper>
  );
};

export default App;
