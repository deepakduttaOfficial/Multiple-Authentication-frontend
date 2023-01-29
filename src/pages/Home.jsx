import React, { useContext } from "react";
import Navbar from "../components/Navbar";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  const user = isAuthenticated?.user;

  return (
    <>
      <Navbar />
      <Container>
        {user ? (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {user?.name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user?.name}
            />
            <CardMedia
              component="img"
              image={
                user?.photo ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
              }
              alt="Your image"
            />

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ) : (
          <Typography>You are not authenticate</Typography>
        )}
      </Container>
    </>
  );
};

export default Home;
