import * as apiModel from "./api/character.api-model";
import * as viewModel from "./character.vm";

export const mapCharacterFromApiToVm = (
  data: apiModel.Character
): viewModel.CharacterVm => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  origin: data.origin?.name || "Unknown",
  location: data.location?.name || "Unknown",
  image: data.image,
  episodes: Array.isArray(data.episode) ? data.episode.length : 0,
  bestSentence: data.bestSentence || "",
});
