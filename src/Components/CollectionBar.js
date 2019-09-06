import React, { useState } from "react";
import collectionData from "../Data/collectionData";
import styled from "styled-components";
import Collection from "./Collection.js";

const Container = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 56px;
`;
const CollectionList = styled.div`
  padding: 8px;
`;

const CollectionBar = props => {
  const [collectionState] = useState(collectionData);

  return (
    <Container>
      <CollectionList>
        {collectionState.collections.map((collection, index) => (
          <Collection
            key={collection.id}
            collection={collection}
            index={index}
          />
        ))}
      </CollectionList>
    </Container>
  );
};

export default CollectionBar;
