import { createContext, useReducer } from 'react';
import { githubReducer, UserAction } from './GithubReducer';

interface GithubContextType {
  users: User[];
  user: User;
  repos: Repo[];
  loading: boolean;
  dispatch: React.Dispatch<UserAction>;
}

export const GithubContext = createContext<GithubContextType>({
  users: [],
  user: {} as User,
  repos: [],
  loading: false,
  dispatch: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    loading: false,
    user: {} as User,
    repos: [],
  });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
