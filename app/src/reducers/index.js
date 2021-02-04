import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

const initialState = {
    is_loading: false,
    lyricData: [],
    error: ""
};

const lyricReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                is_loading: true,
            };
        case DATA_LOAD_SUCCESS: {
            return {
                ...state,
                is_loading: false,
                lyricData: [action.payload]
            };
        }    
        case DATA_LOAD_ERROR: {
            return {
                ...state,
                is_loading:false,
                error: action.payload
            };
        }
        default:
            return state;
    }
};

export default lyricReducer;