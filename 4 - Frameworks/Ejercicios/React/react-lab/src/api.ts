const BASE_URL = "https://api.github.com";

export const getUser = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getUserRepos = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getUserOrgs = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}/orgs`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getUserStarred = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}/starred`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
