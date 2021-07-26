export const BASE_URL = "https://chroniclingamerica.loc.gov/search/titles/results/?terms=";
export enum ArticleActionTypes {
    FETCH_START = "FETCH_START",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILURE = "FETCH_FAILURE",
    FETCH_DATA = "FETCH_DATA",
}

interface FetchStartAction {
    type: ArticleActionTypes.FETCH_START;
}

interface FetchSuccessAction {
    type: ArticleActionTypes.FETCH_SUCCESS;
    payload : any[];
}
interface FetchFailure {
    type: ArticleActionTypes.FETCH_FAILURE;
    payload: string;
}
interface FetchData {
    type: ArticleActionTypes.FETCH_DATA;
    payload: string;
}

export type ArticlesAction = FetchStartAction | FetchSuccessAction | FetchFailure | FetchData

export interface ArticlesState {
    list: any[];
    loading: boolean;
    error: null | string;
}
