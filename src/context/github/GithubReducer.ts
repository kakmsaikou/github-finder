export enum GithubActionType {
  GET_USERS = 'GET_USERS',
}

type GithubState = {
  users: User[];
  loading: boolean;
};

type UserAction = { type: GithubActionType; payload: User[] };

export const githubReducer = (state: GithubState, action: UserAction) => {
  const { type, payload } = action;
  switch (type) {
    case GithubActionType.GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};
