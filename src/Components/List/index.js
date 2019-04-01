import React, { Component } from "react";
import Card from "../Card/";
import { database } from "../../firebase";
import styled from "styled-components";

const StyledList = styled.div`
  display: inline-block;
  padding: 10px;
  width: 290px;
  text-align: center;
  background-color: #ddd;
  font-size: 1em;
  vertical-align: top;
`;

const ListHeader = styled.div`
  height: 10vh;
  line-height: 10vh;
  background-color: gainsboro;
  background-image: url("https://i.pinimg.com/originals/80/47/f0/8047f0869f4b3bd09a81d0faa149a25f.jpg");
  background-size: cover;
`;

const Title = styled.div`
  color: antiquewhite;
  font-size: 1.3em;
`;

const RollButton = styled.div`
  width: 100%;
  background-color: darkolivegreen;
  color: gainsboro;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 6px 0;
`;

const CardList = styled.div`
  height: 80vh;
  overflow: auto;
`;

const ListForm = styled.form``;

const ListInput = styled.input``;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeIndex: null,
      title: "",
      listItems: []
    };
  }
  handleClick = e => {
    let dataLength = Object.keys(this.state.data).length;
    let ranNum = Math.floor(Math.random() * dataLength);

    //TODO: Look into react way to scroll into view
    // elem.scrollIntoView({ behavior: "smooth", block: "center" });

    this.setState({ activeIndex: ranNum });
  };

  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    database
      .ref("ListItems")
      .child(this.props.listName)
      .push(this.state.newData);
    this.setState({ newData: "" });
  };

  componentDidMount() {
    database
      .ref("ListItems")
      .child(this.props.listName)
      .on("value", snap => {
        this.setState({
          data: snap.val()
        });
      });

    // Used to get title when separate component
    database
      .ref("Lists")
      .child(this.props.listName)
      .child("Name")
      .on("value", snapshot => {
        this.setState({ title: snapshot.val() });
      });
  }

  render() {
    return (
      <StyledList>
        <ListHeader>
          <Title>{this.state.title}</Title>
        </ListHeader>

        <RollButton onClick={this.handleClick}>Roll</RollButton>

        <CardList>
          {Object.entries(this.state.data).map(([key, value], i) => (
            <Card
              key={key}
              active={this.state.activeIndex === i}
              listName={this.props.listName}
              dataId={key}
              id={i}
              text={value}
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
