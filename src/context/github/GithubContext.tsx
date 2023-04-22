import { createContext, useReducer } from 'react';
import { githubReducer, GithubActionType } from './GithubReducer';

interface GithubContextType {
  users: User[];
  loading: boolean;
  searchUsers: (text: string) => void;
}

export const GithubContext = createContext<GithubContextType>({
  users: [],
  loading: false,
  searchUsers: () => {},
});

interface Props {
  children: React.ReactNode;
}

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    loading: false,
  });

  const setLoading = () => {
    dispatch({
      type: GithubActionType.SET_LOADING,
    });
  };

  const searchUsers = async (text: string) => {
    setLoading();

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

    dispatch({
      type: GithubActionType.GET_USERS,
      payload: items,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
