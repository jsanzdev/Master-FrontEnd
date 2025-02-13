const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page: number = 1, name: string = "") {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
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
