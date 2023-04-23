export enum GithubActionType {
  GET_USERS = 'GET_USERS',
  SET_LOADING = 'SET_LOADING',
  CLEAR_USERS = 'CLEAR_USERS',
}

interface GithubState {
  users: User[];
  loading: boolean;
}

interface UserAction {
  type: GithubActionType;
  payload?: User[];
}

export const githubReducer = (
  state: GithubState,
  action: UserAction
): GithubState => {
  const { type, payload } = action;
  switch (type) {
    case GithubActionType.GET_USERS:
      return {
        ...state,
        users: payload ?? [],
        loading: false,
      };
    case GithubActionType.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GithubActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
