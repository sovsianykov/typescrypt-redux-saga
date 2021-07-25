import {BASE_URL, FETCH} from "./constants";


export const apiAction = {
    fetchStart() {
        return {type: FETCH.START};
    },
    fetchSuccess(data:any) {
        return {type: FETCH.SUCCESS, payload: data};
    },
    errorMessage() {
        return {type: FETCH.FAILURE}
    },
    fetchData (uri:string)  {
        return {type: FETCH.DATA, url: `${BASE_URL}${uri}&format=json&page=5`}
    }

};