import {
  GET_ALL_PERSONS,
  GET_PERSONS_LOAD,
  GET_PERSONS_FAIL,
  GET_ONE_PERSON,
} from "../constans/person";
import axios from "axios";

export const getAllPersons = () => async (dispatch) => {
  dispatch({ type: GET_PERSONS_LOAD });
  try {
    let result = await axios.get("/api/person");
    dispatch({ type: GET_ALL_PERSONS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PERSONS_FAIL });
  }
};
export const deletePerson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/person/${id}`);
    dispatch(getAllPersons());
  } catch (error) {}
};
export const addPerson = (person, history) => async (dispatch) => {
  try {
    await axios.post("/api/person", person);
    history.push("/personslist");
    dispatch(getAllPersons());
  } catch (error) {
    dispatch({ type: GET_PERSONS_FAIL });
  }
};
export const getOnePerson = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/person/${id}`);
    dispatch({ type: GET_ONE_PERSON, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PERSONS_FAIL });
  }
};
export const editPerson = (id, person) => async (dispatch) => {
  try {
    await axios.put(`/api/person/${id}`, person);
    dispatch(getAllPersons());
  } catch (error) {
    dispatch({ type: GET_PERSONS_FAIL });
  }
};
