import React, { Component } from "react";
import { firestore } from "./firebase";
import "./App.css";
import styled from "styled-components";
import imgLine from "./Images/footer.png";
import img from "./Images/2.png";

import List from "./Components/List";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 10fr;
  grid-gap: 8px;
  width: 100vw;
  height: 100vh;

  /* Color Samples */
  /* Sky */
  background: #caebf2;
  /* Carbon */
  background: #a9a9a9;
  /* Watermelon */
  background: #ff3b3f;
  /* Neutral */
  background: #efefef;

  /* Color Samples 2 */
  /* red */
  background: #b23850;
  /* blue */
  background: #3b8beb;
  /* tan */
  background: #e7e3d4;
  /* light blue */
  background: #c4dbf6;
  /* grey */
  background: #8590aa;

  /* Neutral */
  background: #efefef;

  background-image: url(${img});

  background-size: cover;
  /* background-repeat: no-repeat; */
`;

const Navbar = styled.div`
  /* background: #a9a9a9; */
  color: #5d5d5d;
  padding: 10px;
  background-image: url(${imgLine});

  background-size: cover;
  background-repeat: no-repeat;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: ""
    };
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection("MyLists").get();

    const myLists = snapshot.docs.map(doc => {
      return doc.get("listId");
    });
    console.log("myLists are: ", myLists);

    this.setState({
      data: myLists
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar>Nav</Navbar>
        <ListContainer>
          {Object.entries(this.state.data).map(([key, value]) => (
            <List key={value} listID={value} />
          ))}
        </ListContainer>
      </Wrapper>
    );
  }
}

export default App;
