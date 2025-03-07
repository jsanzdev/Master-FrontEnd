import * as apiModel from "./api/character-collection.api-model";
import * as viewModel from "./character-collection.vm";

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterCollection
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});

export const mapCharacterCollectionFromApiToVm = (
  data: apiModel.CharacterCollectionResponse
): viewModel.CharacterCollectionVm => ({
  info: {
    count: data.info.count,
    pages: data.info.pages,
    next: data.info.next,
    prev: data.info.prev,
  },
  results: data.results.map(mapCharacterFromApiToVm),
});
