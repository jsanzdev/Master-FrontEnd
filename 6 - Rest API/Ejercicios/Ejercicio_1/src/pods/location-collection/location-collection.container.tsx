import React from "react";
import { LocationCollectionComponent } from "./location-collection.component";
import { useLocationCollection } from "./location-collection.hook";

interface Props {
  searchQuery?: string;
}

export const LocationCollectionContainer: React.FC<Props> = ({
  searchQuery = "",
}) => {
  const { locationCollection, loading, error, page, setPage } =
    useLocationCollection(searchQuery);

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection.results}
      loading={loading}
      error={error}
      page={page}
      totalPages={locationCollection.info.pages}
      onPageChange={setPage}
    />
  );
};
