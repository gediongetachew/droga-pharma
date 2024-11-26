"use client";
import { useEffect, useState } from "react";
import { Box, IconButton, Grid, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import play from "../../../public/play.svg";

import Image from "next/image";
import star from "../../../public/star.svg";

const HomeHero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      setShowVideo(false);
      setIsFirstTime(true);
    }
  }, [inView]);

  return (
    <Grid container sx={{ width: "100%", height:'100vh' }}>
      <Grid
        item
        ref={ref}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 0,
          height: "100vh",
          width: "100%",
          backgroundImage: `url("/HomeHero.png")`, // Updated path
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingX: { xs: "5%" },
          paddingTop:{xs:5, md:0}
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            justifyContent: "flex-start",
            alignContent: "flex-end",
            marginTop: {
              xs: "50px",
              sm: "30px",
              md: "200px",
            },
            height: "100%",
            gap: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "left",
              color: "black",
              position: "relative",
              zIndex: 1,
              fontSize: { xs: "50px", sm: "48px", md: "58px", lg: "96px" },
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Serving the People
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: "#737373",
              fontSize: { xs: "15px", sm: "17px", md: "18px", lg: "25px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
            }}
          >
            Droga Pharma Pvt. Ltd. Co., based in Addis Ababa, Ethiopia, focuses
            on sustainably supplying quality medicines, sutures, orthopedic
            implants, disposable medical devices, and diagnostic equipment at
            competitive prices.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            p: 4,
            justifyContent: "flex-center",
            alignItems: "flex-end",
            height: "100%",
            ml: "auto",
            gap: 2,
            marginTop: {
              xs: "210px",
              sm: "30px",
              md: "40px",
            },
          }}
        >
          <Image
            src={star}
            alt="star"
            width={100}
            height={100}
            style={{
              display: "block",
              height: "auto",
              marginRight: "auto",
              width: "clamp(10px, 10vw, 100px)", // responsive width
            }}
            sx={{
              width: {
                xs: "6px", // mobile
                sm: "70px", // tablet
                md: "85px", // small desktop
                lg: "100px", // large desktop
              },
              height: "auto",
            }}
          />
          <Typography
            sx={{
              textAlign: "left",
              color: "#737373",
              fontSize: { xs: "10px", sm: "17px", md: "18px", lg: "20px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              width: "100%",
            }}
          >
            Droga Pharma Pvt. Ltd. Co., based in Addis Ababa, Ethiopia, focuses
            on sustainably supplying quality medicines, sutures, orthopedic
            implants, disposable medical devices, and diagnostic equipment at
            competitive prices.
          </Typography>
        </Grid>

        {!showVideo && (
          <>
            <Box
              sx={{
                position: "absolute",
                bottom: "14px",
              }}
            >
              <IconButton
                onClick={() => {
                  const rootElement = document.getElementById("root-body");
                  if (rootElement) {
                    rootElement.style.overflowY = "hidden";
                  }
                  isFirstTime && setIsFirstTime(false);
                  setShowVideo(true);
                }}
                sx={{
                  scale: 1.5,
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                  background: "#FBFBFB",
                  color: "black",
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={play}
                  alt="play button"
                  width={40}
                  height={40}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </IconButton>
            </Box>

            <motion.div
              style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "black",
                zIndex: 10,
                position: "absolute",
                top: 0,
              }}
              initial={{ x: isFirstTime ? -3000 : 0 }}
              animate={{ x: -3000 }}
              transition={{ duration: 1.5 }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "32px",
                  right: "48px",
                  color: "grey.300",
                  zIndex: 10,
                }}
                onClick={() => setShowVideo(false)}
              >
                <IoMdClose size={38} />
              </IconButton>
            </motion.div>
          </>
        )}

        {showVideo && (
          <motion.div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "black",
              zIndex: 1000000,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
            initial={{ x: -3000 }}
            animate={{ x: showVideo ? 0 : -3000 }}
            transition={{ duration: 1.4 }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "32px",
                right: "48px",
                color: "grey.300",
                zIndex: 10000001,
              }}
              onClick={() => {
                document.body.style.overflowY = "scroll";
                setShowVideo(false);
              }}
            >
              <IoMdClose size={28} />
            </IconButton>

            <Player
              style={{
                width: "100%",
                height: "100%",
              }}
              autoPlay
              controls={false}
              stopOnUnmount
              playsInline
            >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </motion.div>
        )}
      </Grid>
    </Grid>
  );
};

export default HomeHero;
