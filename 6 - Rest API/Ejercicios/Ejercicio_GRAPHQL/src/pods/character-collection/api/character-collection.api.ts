import { graphql } from "#core/api";
import { CharacterCollection } from "./character-collection.api-model";

export async function getCharacterCollection(
  page: number = 1,
  name: string = ""
) {
  const query = `
    query GetCharacters($page: Int!, $name: String) {
      characters(page: $page, filter: { name: $name }) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  const data = await graphql<{ characters: CharacterCollection }>({
    query,
    variables: {
      page,
      name,
    },
  });

  return data.characters;
}
