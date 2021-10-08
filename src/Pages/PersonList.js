import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPersons } from "../JS/actions/person";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PersonCards from "../Components/PersonCards";

const Personlist = () => {
  const persons = useSelector((state) => state.personsReducer.persons);
  const isLoad = useSelector((state) => state.personsReducer.isLoad);
  const isError = useSelector((state) => state.personsReducer.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPersons());
  }, [dispatch]);

  return (
    <div>
      {isLoad ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : isError ? (
        <h2>Error to fetch DATA</h2>
      ) : (
        persons.map((el) => <PersonCards person={el} key={el._id} />)
      )}
    </div>
  );
};

export default Personlist;
