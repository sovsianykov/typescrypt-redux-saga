export const BASE_URL2 = "https://chroniclingamerica.loc.gov/suggest/titles/?q=";
export const BASE_URL = "https://itunes.apple.com/search?term=";
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
export interface Artist {
    artistId: number;
    artistName: string;
    artistViewUrl: string;

}
export interface ArticlesState {
    list: any;
    loading: boolean;
    error: null | string;
}
