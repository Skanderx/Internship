import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import Hero from "./images/hero.jpg";
import { Button } from "@mui/material";
import { useState} from "react";
import { useTheme } from "@emotion/react";
import { useRef } from "react";

const HeroContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Hero})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundPosition: "90% 0%",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
}));

const BrandMotto = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "3vw",
  justifyContent: "flex-start",
  alignItems: "center",
  "& .motto": {
    color: "white",
    textShadow: "black 0px 0px 10px",
    marginBottom: "5vh",
  },
  "& .description": {
    color: "white",
    textShadow: "black 0px 0px 10px",
    marginBottom: "3vh",
  },
}));

const BrandMottoMobile = ({ marginBot, setMarginBot }) => {
  const mobileMotto = useRef();
  function changeHeight() {
    setMarginBot(mobileMotto.current.clientHeight);
  }

  return (
    <div
      ref={mobileMotto}
      elevation={24}
      style={{
        width: "70vw",
        minHeight: "30vh",
        margin: "auto",
        padding: "20px",
        maxWidth: "500px",
        position: "relative",
        top: `35vh`,
        textAlign: "center",
        backgroundColor: "#0288d1",
        borderRadius: "10%",
        marginBottom: `${marginBot}px`,
      }}
    >
      <Typography variant="h3"> Hire experts to get the job done</Typography>
      <Typography variant="h5">
        We bring you the best professionals from all fields to match all your
        needs
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "150px", mt: "20px" }}
      >
        Get started
      </Button>
    </div>
  );
};

function BrandHero() {
  //++ this is only to test responisveness ++
  const [marginBot, setMarginBot] = useState(0);
  //++++++++++++++++++++++++++++++++++++++++++++
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroContainer
      style={{ marginBottom: breakpoint ? `${marginBot}px` : "0px" }}
    >
      {!breakpoint && (
        <BrandMotto>
          <div
            style={{
              width: "50vw",
              height: "calc(100vh + 75px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" className="motto">
              Hire experts to get the job done{" "}
            </Typography>
            <Typography variant="h4" className="description" sx={{ margin: 0 }}>
              We bring you the best professionals from all fields to match all
              your needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "15vw", maxWidth: "200px", minWidth: "150px" }}
            >
              Get started
            </Button>
          </div>
        </BrandMotto>
      )}
      {breakpoint && (
        <BrandMottoMobile marginBot={marginBot} setMarginBot={setMarginBot} />
      )}
    </HeroContainer>
  );
}

export default BrandHero;
