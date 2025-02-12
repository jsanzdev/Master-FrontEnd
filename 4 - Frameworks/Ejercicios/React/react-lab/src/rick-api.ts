const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/character`);
  return response.json();
}

export async function getCharacter(id: number) {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  return response.json();
}

export async function getEpisodes() {
  const response = await fetch(`${BASE_URL}/episode`);
  return response.json();
}

export async function getEpisode(id: number) {
  const response = await fetch(`${BASE_URL}/episode/${id}`);
  return response.json();
}
