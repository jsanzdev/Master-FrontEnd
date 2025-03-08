import { useState, useEffect } from "react";
import { getCharacterCollection } from "./api";
import { mapCharacterCollectionFromApiToVm } from "./character-collection.mapper";
import {
  CharacterCollectionVm,
  createEmptyCharacterCollection,
} from "./character-collection.vm";

export const useCharacterCollection = (searchQuery: string) => {
  const [characterCollection, setCharacterCollection] =
    useState<CharacterCollectionVm>(createEmptyCharacterCollection());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCharacterCollection = async () => {
      try {
        setLoading(true);
        const apiCharacterCollection = await getCharacterCollection(
          page,
          searchQuery
        );
        const viewModelCharacterCollection = mapCharacterCollectionFromApiToVm(
          apiCharacterCollection
        );
        setCharacterCollection(viewModelCharacterCollection);
        setError(null);
      } catch (e) {
        setError("Error loading characters");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadCharacterCollection();
  }, [page, searchQuery]);

  return {
    characterCollection,
    loading,
    error,
    page,
    setPage,
  };
};
