import { BASE_URL, ArticleActionTypes  } from "./constants";


export const apiAction = {
    fetchStart() {
        return {type: ArticleActionTypes.FETCH_START};
    },
    fetchSuccess(data:any[]) {
        return {type: ArticleActionTypes.FETCH_SUCCESS, payload: data};
    },
    errorMessage() {
        return {type: ArticleActionTypes.FETCH_FAILURE,
            payload:"Something vent wrong!"
        }
    },
    fetchData (uri:string)  {
        return {type: ArticleActionTypes.FETCH_DATA, url: `${BASE_URL}${uri}`}
    }
};
