"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/app/components/layouts/btn/Button";
import { useEffect } from "react";
import Link from "next/link";
import { Box, Typography, styled } from "@mui/material";

// import { DefaultPlayer as Video } from "react-html5video";
// import "react-html5video/dist/styles.css";


const slideImgsHome = [
  "assets/imgs/home/1.jpg",
  "assets/imgs/home/2.jpg",
  "assets/imgs/home/3.jpg",
  "assets/imgs/home/4.jpg",
  "assets/imgs/home/5.jpg",
  "assets/imgs/home/6.jpg",
  "assets/imgs/home/7.jpg",
  "assets/imgs/home/8.jpg",
];


//////////////////// EXPORT FUNCTION ////////////////////
export default function Home() {
  //////////////////// STYLES ////////////////////
  const RootPortfolio = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "100px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxItem = styled(Box)(({ theme }) => ({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  }));

  const stylesVideo = {
    width: "700px",
    height: "700px",
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
        <TypoTitlePageHome variant='h1'>
          Bienvenue sur le Blog du Voyage
        </TypoTitlePageHome>
        <TypoDescHome variant='h5'>
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
      {/* <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div> */}

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        useKeyboardArrows={false}
        autoFocus={false}
        centerMode={false}
        dynamicHeight={true}
        emulateTouch={false}
        preventMovementUntilSwipeScrollTolerance={true}
        showArrows={false}
        showStatus={false}
        showThumbs={true}
        stopOnHover={false}
        swipeable={false}
      >
        {slideImgsHome.map((item, _id) => (
          <div style={{ border: "4px solid #FFF" }} key={_id}>
            <Image alt='' height={350} src={item} width={350} />
          </div>
        ))}
      </Carousel>
    </RootPortfolio>
  );
}
