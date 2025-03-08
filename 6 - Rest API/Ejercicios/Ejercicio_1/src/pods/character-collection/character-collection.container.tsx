import React from "react";
import { CharacterCollectionComponent } from "./character-collection.component";
import { useCharacterCollection } from "./character-collection.hook";

interface Props {
  searchQuery: string;
}

export const CharacterCollectionContainer: React.FC<Props> = ({
  searchQuery,
}) => {
  const { characterCollection, loading, error, page, setPage } =
    useCharacterCollection(searchQuery);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection.results}
      loading={loading}
      error={error}
      page={page}
      totalPages={characterCollection.info.pages}
      onPageChange={setPage}
    />
  );
};
