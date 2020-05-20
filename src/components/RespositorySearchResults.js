import React from "react";
import styled from "styled-components";

const RepositorySearchResults = ({ searchResults }) => {
  const onClickItemCard = () => {};
  return (
    <List>
      {searchResults.map(
        (
          {
            full_name,
            description,
            stargazers_count,
            open_issues_count,
            score,
          },
          idx
        ) => (
          <ItemCard key={idx} onClick={onClickItemCard}>
            <h2>{full_name}</h2>
            <div>Description: {description}</div>
            <div>Stargazers Count: {stargazers_count}</div>
            <div>Open Issues Count: {open_issues_count}</div>
            <div>Match Score: {score}</div>
          </ItemCard>
        )
      )}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ItemCard = styled.li`
  border: 1px solid black;
  margin-top: 10px;
  padding: 0 10px 10px;
`;

export default RepositorySearchResults;
