import { useState, useEffect } from "react";
import { getEpisodeCollection } from "./api";
import { mapEpisodeCollectionFromApiToVm } from "./episode-collection.mapper";
import {
  EpisodeCollectionVm,
  createEmptyEpisodeCollection,
} from "./episode-collection.vm";

export const useEpisodeCollection = (searchQuery: string = "") => {
  const [episodeCollection, setEpisodeCollection] =
    useState<EpisodeCollectionVm>(createEmptyEpisodeCollection());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadEpisodeCollection = async () => {
      try {
        setLoading(true);
        const apiEpisodeCollection = await getEpisodeCollection(
          page,
          searchQuery
        );
        const viewModelEpisodeCollection =
          mapEpisodeCollectionFromApiToVm(apiEpisodeCollection);
        setEpisodeCollection(viewModelEpisodeCollection);
        setError(null);
      } catch (e) {
        setError("Error loading episodes");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodeCollection();
  }, [page, searchQuery]);

  return {
    episodeCollection,
    loading,
    error,
    page,
    setPage,
  };
};
