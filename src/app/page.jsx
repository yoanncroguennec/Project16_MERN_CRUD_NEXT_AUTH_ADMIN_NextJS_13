"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";

// import { DefaultPlayer as Video } from "react-html5video";
// import "react-html5video/dist/styles.css";


const slideImgsHome = [
  "/assets/imgs/home/1.jpg",
  "/assets/imgs/home/2.jpg",
  "/assets/imgs/home/3.jpg",
  "/assets/imgs/home/4.jpg",
  "/assets/imgs/home/5.jpg",
  "/assets/imgs/home/6.jpg",
  "/assets/imgs/home/7.jpg",
  "/assets/imgs/home/8.jpg",
];


//////////////////// EXPORT FUNCTION ////////////////////
export default function Home() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  //////////////////// STYLES ////////////////////
  const RootPortfolio = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    // gap: "100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const BoxItem = styled(Box)(({ theme }) => ({
    // flex: "1",
    // display: "flex",
    // flexDirection: "column",
    // gap: "50px",
  }));

  const stylesVideo = {
    width: `${matches ? "700px" : "380px"}`,
    height: `${matches ? "700px" : "380px"}`,
  };

  const TypoTitlePageHome = styled(Typography)(({ theme }) => ({
    background: "linear-gradient(to bottom, #194c33, #bbb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  const TypoDescHome = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }));

  const BoxBtnLinkPortfolio = styled(Box)(({ theme }) => ({
    padding: "20px",
    cursor: "pointer",
    background: "#53c28b",
    border: "none",
    borderRadius: "5px",
    width: "max-content",
    color: "#FFF",
  }));

  return (
    <RootPortfolio>
      <BoxItem>
        <video
          autoPlay
          // controls
          loop
          style={stylesVideo}
        >
          <source src='/videoHome.mp4' />
        </video>
        <TypoTitlePageHome variant={matches ? "h1" : "h3"}>
          Bienvenue sur le Blog du Voyage
        </TypoTitlePageHome>
        <TypoDescHome variant={matches ? "h5" : "h6"}>
          A travers ce Blog, vous y trouverez la partie Catégorie des diffèrents
          thèmes du voyages. Et vous pourrez créer un compte ou vous identifiez
          pour partagez vos différentes aventures dans la partie Blog. Le voyage
          commence ici....
        </TypoDescHome>
        <Link href='/pages/portfolio'>
          <BoxBtnLinkPortfolio className={styles.container}>
            Commencer le voyage...
          </BoxBtnLinkPortfolio>
        </Link>
      </BoxItem>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        // centerMode={false}
        // useKeyboardArrows={false}
        // autoFocus={false}
        // dynamicHeight={true}
        // emulateTouch={false}
        // preventMovementUntilSwipeScrollTolerance={false}
        // showArrows={false}

        // showThumbs={true}
        // stopOnHover={false}
        // swipeable={false}
      >
        {slideImgsHome.map((item, _id) => (
          <div style={{ border: "4px solid #FFF" }} key={_id}>
            <Image alt='' height={150} src={item} width={50} />
          </div>
        ))}
      </Carousel>
    </RootPortfolio>
  );
}
