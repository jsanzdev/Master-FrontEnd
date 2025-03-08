const BASE_URL = "https://rickandmortyapi.com";

export const getLocationCollection = async (
  page: number = 1,
  name: string = ""
) => {
  const searchParams = new URLSearchParams({
    ...(name && { name }),
    ...(page && { page: page.toString() }),
  });

  const response = await fetch(
    `${BASE_URL}/api/location?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
