import { FETCH } from "./constants";

interface ArticlesState {
  list: any[];
  loading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  list: [],
  loading: false,
  error: null,
};
interface ArticlesAction {
  type: string;
  payload?: any;
}

function apiReducer(
  state = initialState,
  action: ArticlesAction
): ArticlesState {
  switch (action.type) {
    case FETCH.START:
      return {
        list: [],
        loading: true,
        error: null,
      };
    case FETCH.SUCCESS:
      return {
        list: action.payload,
        loading: false,
        error: null,
      };
    case FETCH.FAILURE:
      return {
        list: [],
        loading: false,
        error: "Something wrong",
      };
    default:
      return state;
  }
}

export default apiReducer;
