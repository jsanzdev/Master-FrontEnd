const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacter(id: number) {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  return response.json();
}
