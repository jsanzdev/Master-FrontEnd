import React from "react";
import { CharacterCollectionComponent } from "./character-collection.component";
import { useCharacterCollection } from "./character-collection.hook";

export const CharacterCollectionContainer: React.FC = () => {
  const { characterCollection, loading, error, page, setPage } =
    useCharacterCollection();

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
