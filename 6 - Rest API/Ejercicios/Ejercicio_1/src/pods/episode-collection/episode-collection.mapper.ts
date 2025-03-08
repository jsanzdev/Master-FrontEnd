import * as apiModel from "./api/episode-collection.api-model";
import * as viewModel from "./episode-collection.vm";

export const mapEpisodeFromApiToVm = (
  data: apiModel.Episode
): viewModel.EpisodeEntityVm => ({
  id: data.id,
  name: data.name,
  airDate: data.air_date,
  episode: data.episode,
  characterCount: data.characters.length,
});

export const mapEpisodeCollectionFromApiToVm = (
  data: apiModel.EpisodeCollectionResponse
): viewModel.EpisodeCollectionVm => ({
  info: data.info,
  results: data.results.map(mapEpisodeFromApiToVm),
});
