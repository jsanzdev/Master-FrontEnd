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
