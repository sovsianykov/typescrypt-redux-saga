import { ArticlesAction, ArticleActionTypes, ArticlesState } from "./constants";

const initialState: ArticlesState = {
  list: null,
  loading: false,
  error: null,
};

function apiReducer(
  state = initialState,
  action: ArticlesAction
): ArticlesState {
  switch (action.type) {
    case ArticleActionTypes.FETCH_START:
      return {
        list: null,
        loading: true,
        error: null,
      };
    case ArticleActionTypes.FETCH_SUCCESS:
      return {
        list: action.payload,
        loading: false,
        error: null,
      };
    case ArticleActionTypes.FETCH_FAILURE:
      return {
        list: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default apiReducer;
