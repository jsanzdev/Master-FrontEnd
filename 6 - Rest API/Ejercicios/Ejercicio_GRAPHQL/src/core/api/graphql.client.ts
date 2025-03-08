import axios from "axios";

const GRAPHQL_URL = "https://rickandmortyapi.com/graphql";

export const graphql = async <T>({ query, variables = {} }) => {
  try {
    const { data } = await axios.post<{ data: T }>(
      GRAPHQL_URL,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error("GraphQL request failed:", error);
    throw error;
  }
};
