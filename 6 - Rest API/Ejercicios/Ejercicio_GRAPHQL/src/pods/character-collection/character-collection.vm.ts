export interface CharacterEntityVm {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

export interface PaginationInfoVm {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterCollectionVm {
  info: PaginationInfoVm;
  results: CharacterEntityVm[];
}

export const createEmptyCharacterCollection = (): CharacterCollectionVm => ({
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
});
