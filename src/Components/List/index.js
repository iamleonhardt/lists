import React, { Component } from "react";
import Card from "../Card/";
import { firestore } from "../../firebase";
import styled from "styled-components";
import { collectIdsAndDocs } from "../../utils";

const StyledList = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr minmax(60vh, 75vh) 0.5fr;
  text-align: center;
  /* background-color: #ddd; */
  border: 1px solid lightgrey;
  font-size: 1em;
  vertical-align: top;
`;

const ListHeader = styled.div`
  background-color: gainsboro;
  /* background-image: url("https://i.pinimg.com/originals/80/47/f0/8047f0869f4b3bd09a81d0faa149a25f.jpg"); */
  background-size: cover;
  width: 80%;
  margin: 2vh auto 0;
  padding: 2vh;
`;

const Title = styled.div`
  /* color: antiquewhite; */
  font-size: 1.3em;
`;

const RollButton = styled.div`
  background: #ff3b3f;
  color: gainsboro;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 6px 0;
  user-select: none;
  width: 80%;
  margin: 0 auto;
  padding: 2vh;
`;

const CardList = styled.div`
  overflow-y: auto;
`;

const ListForm = styled.form``;

const ListInput = styled.input``;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeIndex: null,
      listItems: []
    };
  }

  // Roll button click
  handleClick = e => {
    let dataLength = Object.keys(this.state.listItems).length;
    let ranNum = Math.floor(Math.random() * dataLength);

    //TODO: Look into react way to scroll into view
    // elem.scrollIntoView({ behavior: "smooth", block: "center" });

    this.setState({ activeIndex: ranNum });
  };

  // Form data entry
  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  // Form submit adds list item
  handleSubmit = e => {
    e.preventDefault();

    let listItemDocsRef = firestore
      .collection("ListItems")
      .doc(this.props.listID)
      .collection("Items");

    listItemDocsRef.add({ content: this.state.newData });

    this.setState({ newData: "" });
  };

  handleRemove = () => {};

  unsubscribe = null;

  componentDidMount() {
    // Get list meta data based on listId
    let listDocRef = firestore.collection("Lists").doc(this.props.listID);
    listDocRef
      .get()
      .then(doc => {
        doc.exists
          ? this.setState({ ...doc.data() })
          : console.log("No such document!", listDocRef);
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });

    // Get List Items based on listId
    let listItemDocsRef = firestore
      .collection("ListItems")
      .doc(this.props.listID)
      .collection("Items");

    this.unsubscribe = listItemDocsRef.onSnapshot(snapshot => {
      console.log("snapshot is: ", snapshot);
      const listItems = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ listItems });

      console.log("state.listItems: ", this.state.listItems);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <StyledList>
        <ListHeader>
          <Title>{this.state.Name}</Title>
        </ListHeader>

        <RollButton onClick={this.handleClick}>Roll</RollButton>

        <CardList>
          {this.state.listItems.map((listItem, i) => (
            <Card
              key={listItem.id}
              active={this.state.activeIndex === i}
              listName={this.props.listName}
              dataId={listItem.content}
              id={i}
              text={listItem.content}
            />
          ))}
        </CardList>

        <ListForm onSubmit={this.handleSubmit}>
          <ListInput
            type="text"
            value={this.state.newData}
            onChange={this.handleChange}
          />
          <ListInput type="submit" />
        </ListForm>
      </StyledList>
    );
  }
}

export default List;
