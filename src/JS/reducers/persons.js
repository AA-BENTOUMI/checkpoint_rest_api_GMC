import {
  GET_ALL_PERSONS,
  GET_PERSONS_LOAD,
  GET_PERSONS_FAIL,
  GET_ONE_PERSON,
} from "../constans/person";

const initialState = {
  persons: [],
  isLoad: false,
  isError: false,
  person: {},
};

const personsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERSONS_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_PERSONS:
      return { ...state, persons: payload.persons, isLoad: false };
    case GET_PERSONS_FAIL:
      return { ...state, isError: true, isLoad: false };
    case GET_ONE_PERSON:
      return { ...state, person: payload.person };
    default:
      return state;
  }
};

export default personsReducer;
