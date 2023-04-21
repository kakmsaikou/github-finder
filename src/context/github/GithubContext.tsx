import { createContext, useReducer } from 'react';
import { githubReducer, GithubActionType } from './GithubReducer';

interface GithubContextType {
  users: User[];
  loading: boolean;
  fetchUsers: () => void;
}

export const GithubContext = createContext<GithubContextType>({
  users: [],
  loading: true,
  fetchUsers: () => {},
});

interface Props {
  children: React.ReactNode;
}

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: Props) => {
  // const [users, setUsers] = useState([] as User[]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(
      `${GITHUB_URL}/users`
      // ,{
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );
    const data = await response.json();

    dispatch({
      type: GithubActionType.GET_USERS,
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
