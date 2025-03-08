import * as apiModel from "./api/location-collection.api-model";
import * as viewModel from "./location-collection.vm";

export const mapLocationFromApiToVm = (
  data: apiModel.Location
): viewModel.LocationEntityVm => ({
  id: data.id,
  name: data.name,
  type: data.type,
  dimension: data.dimension,
  residentCount: data.residents.length,
});

export const mapLocationCollectionFromApiToVm = (
  data: apiModel.LocationCollectionResponse
): viewModel.LocationCollectionVm => ({
  info: data.info,
  results: data.results.map(mapLocationFromApiToVm),
});
