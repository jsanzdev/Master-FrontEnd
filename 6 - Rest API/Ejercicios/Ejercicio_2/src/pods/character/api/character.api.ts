const BASE_URL = "http://localhost:3000";

export async function getCharacter(id: number) {
  const response = await fetch(`${BASE_URL}/api/character/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}
