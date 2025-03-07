import { useState, useEffect } from "react";
import { getCharacterCollection } from "./api";
import { mapCharacterCollectionFromApiToVm } from "./character-collection.mapper";
import {
  CharacterCollectionVm,
  createEmptyCharacterCollection,
} from "./character-collection.vm";

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    useState<CharacterCollectionVm>(createEmptyCharacterCollection());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const loadCharacterCollection = async (pageNumber: number) => {
    try {
      setLoading(true);
      const apiCharacterCollection = await getCharacterCollection(pageNumber);
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

  useEffect(() => {
    loadCharacterCollection(page);
  }, [page]);

  return {
    characterCollection,
    loading,
    error,
    page,
    setPage,
  };
};
