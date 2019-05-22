import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD_USER,
  SET_USER_ID,
  ADD_HOBBY,
  DELETE_HOBBY
} from "./users.actions";

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  activeUser: null
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case ADD_USER:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    case SET_USER_ID:
      return {
        ...state,
        activeUser: action.payload
      };
    case ADD_HOBBY:
      return {
        ...state,
        data: state.data.map(user => {
          if (user.id !== state.activeUser) return user;
          return { ...user, hobbies: [...user.hobbies, action.payload] };
        })
      };
    case DELETE_HOBBY:
      return {
        ...state,
        data: state.data.map(user => {
          if (user.id !== state.activeUser) return user;
          const updatedHobbies = user.hobbies.filter(
            item => item.id !== action.payload
          );
          return { ...user, hobbies: updatedHobbies };
        })
      };
    default:
      return state;
  }
}

export const getUserHobbies = state => {
  if (state.users.activeUser === null) return [];
  const selectedUser = state.users.data.find(
    user => user.id === state.users.activeUser
  );
  return selectedUser.hobbies;
};

export default usersReducer;
