import React, { useState, useEffect, useCallback } from "react";
import RepositorySearchResults from "./RespositorySearchResults";

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const WAIT_INTERVAL = 500;
const SEARCH_REPOS_URL = "https://api.github.com/search/repositories";

const formatSearchResultsData = (data) =>
  data.items.map(
    ({
      id,
      full_name,
      description,
      stargazers_count,
      open_issues_count,
      score,
    }) => ({
      id,
      full_name,
      description,
      stargazers_count,
      open_issues_count,
      score,
    })
  );

const Repositories = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const fetchRepos = useCallback(() => {
    if (searchTerms) {
      const url = new URL(SEARCH_REPOS_URL);
      url.search = new URLSearchParams({ q: searchTerms });
      fetch(url)
        .then((response) =>
          response.json().then((data) => {
            setSearchResults(formatSearchResultsData(data));
          })
        )
        .catch((e) => setError(e.toString()));
    }
  }, [searchTerms]);

  const onSearchTermsChange = (e) => {
    setSearchTerms(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(fetchRepos, WAIT_INTERVAL);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerms, fetchRepos]);

  return (
    <div>
      <input
        name="search-terms"
        value={searchTerms}
        onChange={onSearchTermsChange}
      />
      {searchResults ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <div>Enter some text to search GitHub repositories</div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Repositories;
