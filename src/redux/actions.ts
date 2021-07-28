import { BASE_URL, ArticleActionTypes, List } from "./constants";


export const apiAction = {
    fetchStart() {
        return {type: ArticleActionTypes.FETCH_START};
    },
    fetchSuccess(data: List) {
        return {type: ArticleActionTypes.FETCH_SUCCESS, payload: data};
    },
    errorMessage() {
        return {type: ArticleActionTypes.FETCH_FAILURE,
            payload:"Something vent wrong!"
        }
    },
    fetchData (uri:string)  {
        return {type: ArticleActionTypes.FETCH_DATA, url: `${BASE_URL}${uri}&limit=200&entity=album`}
    }
};
