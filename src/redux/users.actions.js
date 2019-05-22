export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const ADD_USER = "ADD_USER";
export const SET_USER_ID = "SET_USER_ID";
export const ADD_HOBBY = "ADD_HOBBY";
export const DELETE_HOBBY = "DELETE_HOBBY";

const url = "https://next.json-generator.com/api/json/get/4Joo4bp38";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA_LOADING });
  fetch(url)
    .then(response => response.json())
    .then(data => dispatch({ type: FETCH_DATA_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_DATA_ERROR, payload: error }));
};

export const addUser = ({ id, name, hobbies }) => dispatch => {
  dispatch({ type: ADD_USER, payload: { id, name, hobbies } });
};

export const setUserId = id => dispatch => {
  dispatch({ type: SET_USER_ID, payload: id });
};

export const addHobby = ({ id, level, text, year }) => dispatch => {
  dispatch({ type: ADD_HOBBY, payload: { id, level, text, year } });
};

export const deleteHobby = id => dispatch => {
  dispatch({ type: DELETE_HOBBY, payload: id });
};
