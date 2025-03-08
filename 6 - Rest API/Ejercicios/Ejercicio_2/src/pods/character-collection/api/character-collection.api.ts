const BASE_URL = "http://localhost:3000";

export async function getCharacterCollection(
  page: number = 1,
  name: string = ""
) {
  const response = await fetch(
    `${BASE_URL}/api/character?page=${page}&name=${name}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
