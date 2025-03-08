import { useState, useEffect } from "react";
import { getLocationCollection } from "./api";
import { mapLocationCollectionFromApiToVm } from "./location-collection.mapper";
import {
  LocationCollectionVm,
  createEmptyLocationCollection,
} from "./location-collection.vm";

export const useLocationCollection = (searchQuery: string = "") => {
  const [locationCollection, setLocationCollection] =
    useState<LocationCollectionVm>(createEmptyLocationCollection());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadLocationCollection = async () => {
      try {
        setLoading(true);
        const apiLocationCollection = await getLocationCollection(
          page,
          searchQuery
        );
        const viewModelLocationCollection = mapLocationCollectionFromApiToVm(
          apiLocationCollection
        );
        setLocationCollection(viewModelLocationCollection);
        setError(null);
      } catch (e) {
        setError("Error loading locations");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadLocationCollection();
  }, [page, searchQuery]);

  return {
    locationCollection,
    loading,
    error,
    page,
    setPage,
  };
};
