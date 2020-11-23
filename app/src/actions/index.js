import axios from "axios";


export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadDataForLocation = (location) => (dispatch) => {
    // transition to IS_LOADING state
    dispatch({ type: IS_LOADING });

    // AXIOS CALL

    const apiUrl = `https://api.lyrics.ovh/v1/${location.artist}/${location.title}`

    axios
        .get(apiUrl)
        .then( (res) => {
            console.log(`ab: actions/index.js: loadDataForLocation: axios good: res `,
            res.data.lyrics
            );
            // action that updates the lyric page
            dispatch({ type: DATA_LOAD_SUCCESS, payload: res.data.lyrics});
        })
        .catch( (err) => {
            console.log(
                `ab:actions/index.js: loadDataForLocation: axios bad: err: `,
                err
            );

            dispatch({
                type: DATA_LOAD_ERROR,
                payload: `error lfetching data: ${err}`
            });
            // action to set err
        });

};