// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
const query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;

// Define our query variables and values that will be used in the query request
const variables = searchString => {
  return {
    search: searchString,
    page: 1,
    perPage: 10
  };
};

// Define the config we'll need for our Api request
const url = "https://graphql.anilist.co";

const options = searchString => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: query,
      variables: variables(searchString)
    })
  };
};

// Make the HTTP Api request
function fetchAnime(searchString) {
  return fetch(url, options(searchString))
}

export default fetchAnime;
