const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(
    `${GITHUB_URL}/search/users?${params}`
    // ,{
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // }
  );
  const { items } = await response.json();

  return items;
};
