const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacterCollection(
  page: number = 1,
  name: string = ""
) {
  const response = await fetch(
    `${BASE_URL}/character/?page=${page}&name=${name}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
