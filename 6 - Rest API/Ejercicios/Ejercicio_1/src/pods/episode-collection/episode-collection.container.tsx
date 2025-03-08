import React from "react";
import { EpisodeCollectionComponent } from "./episode-collection.component";
import { useEpisodeCollection } from "./episode-collection.hook";

interface Props {
  searchQuery?: string;
}

export const EpisodeCollectionContainer: React.FC<Props> = ({
  searchQuery = "",
}) => {
  const { episodeCollection, loading, error, page, setPage } =
    useEpisodeCollection(searchQuery);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection.results}
      loading={loading}
      error={error}
      page={page}
      totalPages={episodeCollection.info.pages}
      onPageChange={setPage}
    />
  );
};
