export interface CharacterVm {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: string;
  location: string;
  image: string;
  episodes: number;
}

export const createEmptyCharacter = (): CharacterVm => ({
  id: 0,
  name: "",
  status: "unknown",
  species: "",
  type: "",
  gender: "unknown",
  origin: "",
  location: "",
  image: "",
  episodes: 0,
});
