import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Button } from "@mui/material";
import { addPerson, getOnePerson, editPerson } from "../JS/actions/person";
import ChipInput from "material-ui-chip-input";

const AddPerson = () => {
  const [person, setPerson] = useState({});
  const [edit, setEdit] = useState(false);
  const editPersonState = useSelector((state) => state.personsReducer.person);
  const [chips, setChips] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const handelChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handelPerson = () => {
    if (person.name && person.age) {
      if (edit) {
        let result = window.confirm("please confirme the edit");
        if (result) {
          dispatch(editPerson(person._id, { ...person, favoritFoods: chips }));
        }
      }
      let result = window.confirm("please confirme the add");
      if (result) {
        dispatch(addPerson({ ...person, favoritFoods: chips }, history));
      }
    } else {
      alert("name and age required");
    }
  };
  useEffect(() => {
    if (params.id) {
      dispatch(getOnePerson(params.id));
    }
  }, [params, dispatch]);
  useEffect(() => {
    if (params.id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setPerson(editPersonState)
      : setPerson({ name: "", age: "", favoritFoods: [] });
  }, [params.id, edit, editPersonState]);
  // Add Chips
  const handleAddChip = (chip) => {
    setChips([...chips, chip]);
  };
  // Delete Chips
  const handleDeleteChip = (chip) => {
    setChips(chips.filter((el) => el !== chip));
  };

  return (
    <div className="form-class">
      <Box className="form-add">
        <TextField
          type="text"
          name="name"
          label="name"
          id="name"
          onChange={handelChange}
          value={person.name || ""}
        />
        <TextField
          type="text"
          name="age"
          label="age"
          id="age"
          onChange={handelChange}
          value={person.age || ""}
        />
        <ChipInput
          type="text"
          name="favoritFoods"
          label="favorit Foods"
          id="favoritFoods"
          value={chips || []}
          onChange={handelChange}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
        />
      </Box>
      <Button variant="contained" onClick={handelPerson}>
        {edit ? "Edit" : "Save"}
      </Button>
    </div>
  );
};

export default AddPerson;
