import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RepositorySearchResults = ({ searchResults }) => (
  <List>
    {searchResults.map(
      (
        {
          id,
          full_name,
          description,
          stargazers_count,
          open_issues_count,
          score,
        },
        idx
      ) => (
        <Link key={idx} to={`/repositories/${id}`} style={linkStyle}>
          <ItemCard>
            <h2>{full_name}</h2>
            <div>Description: {description}</div>
            <div>Stargazers Count: {stargazers_count}</div>
            <div>Open Issues Count: {open_issues_count}</div>
            <div>Match Score: {score}</div>
          </ItemCard>
        </Link>
      )
    )}
  </List>
);

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

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

export default RepositorySearchResults;
