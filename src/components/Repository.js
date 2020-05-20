import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_REPO_BY_ID_URL = "https://api.github.com/repositories";

const formatRepoData = ({
  full_name,
  description,
  stargazers_count,
  open_issues_count,
  score,
  issues_url,
  pulls_url,
  license,
}) => ({
  full_name,
  description,
  stargazers_count,
  open_issues_count,
  score,
  issues_url,
  pulls_url,
  license,
});

const Repository = () => {
  const { id } = useParams();
  const [repoData, setRepoData] = useState({});
  const [error, setError] = useState(null);

  const fetchRepo = useCallback(() => {
    const url = GET_REPO_BY_ID_URL + "/" + id;
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          setRepoData(formatRepoData(data));
        })
      )
      .catch((e) => setError(e.toString()));
  }, [id]);

  useEffect(() => {
    fetchRepo();
  }, [fetchRepo]);

  const {
    full_name,
    description,
    stargazers_count,
    open_issues_count,
    score,
    issues_url,
    pulls_url,
    license,
  } = repoData;

  return (
    <>
      <div>
        <h2>{full_name}</h2>
        <div>Description: {description}</div>
        <div>Stargazers Count: {stargazers_count}</div>
        <div>Open Issues Count: {open_issues_count}</div>
        <div>Match Score: {score}</div>
        <div>
          <a href={issues_url}>Issues</a>
        </div>
        <div>
          <a href={pulls_url}>Pull Requests</a>
        </div>
        <div>License: {!license && "none"}</div>
        {license && (
          <LicenseInfo>
            <div>Name: {license.name}</div>
            <div>SPDX ID: {license.spdx_id}</div>
            <div>
              URL: <a href={license.url}>{license.url}</a>
            </div>
          </LicenseInfo>
        )}
      </div>
      {error && <p>Error: {error}</p>}
    </>
  );
};

const LicenseInfo = styled.div`
  margin-left: 20px;
`;

export default Repository;
