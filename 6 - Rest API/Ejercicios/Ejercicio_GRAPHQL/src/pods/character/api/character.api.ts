import { graphql } from "#core/api";
import { Character } from "./character.api-model";

const GRAPHQL_URL = "https://rickandmortyapi.com/graphql";

export async function getCharacter(id: number): Promise<Character> {
  const query = `
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          dimension
        }
        location {
          name
          dimension
        }
        image
        episode {
          id
          name
        }
      }
    }
  `;

  const data = await graphql<{ character: Character }>({
    query,
    variables: { id },
  });

  return data.character;
}
