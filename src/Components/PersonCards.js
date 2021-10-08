import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.css";
import { useDispatch } from "react-redux";
import { deletePerson } from "../JS/actions/person";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

const PersonCards = ({ person }) => {
  const dispatch = useDispatch();

  const handelClick = () => {
    let result = window.confirm("please confirme the delete");
    if (result) {
      dispatch(deletePerson(person._id));
    }
  };
  return (
    <div className="card-list">
      {" "}
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              className="first-char"
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              {person.name.toUpperCase().charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={person.name}
          subheader={person.age}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4h1B8CMfadXgfKeNcNleBEARIvHzdnjZRw&usqp=CAU"
          alt="Paella dish"
        />
        <CardContent>
          <Typography paragraph>Favorit Foods</Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          {person.favoritFoods.map((el, i) => (
            <Chip label={el} key={i} style={{ backgroundColor: "white" }} />
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="EditIcon">
            <Link to={`/editperson/${person._id}`}>
              <EditIcon />
            </Link>
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={handelClick}
            style={{ color: "red" }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PersonCards;
