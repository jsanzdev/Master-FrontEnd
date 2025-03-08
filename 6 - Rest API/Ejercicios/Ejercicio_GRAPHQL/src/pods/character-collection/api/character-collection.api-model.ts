export interface CharacterCollection {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

export interface CharacterCollectionResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterCollection[];
}

export const createEmptyCharacterCollection = (): CharacterCollection => ({
  id: 0,
  name: "",
  status: "unknown",
  species: "",
  image: "",
});
