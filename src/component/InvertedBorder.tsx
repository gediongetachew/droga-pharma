"use client";
import React from "react";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import '../asse/about.css'
interface InvertedBorderProps {
  name?: string;
  height?: string | number;
  icon?: string;
  buttonText?: string;
}

export default function InvertedBorder({
  name,
  height = "450px",
  icon,
  buttonText,
}: InvertedBorderProps) {
  console.log("Received name prop:", name);

  const [playVideo, setPlayVideo] = useState(false);

  const posterImage = (() => {
    switch (name) {
      case "somalia":
        return "/somaliLand.png";
      case "rwanda":
        return "/rwanda.png";
      case "aboutus":
        return "/aboutus.png";
      default:
        return "/aboutus.png";
    }
  })();

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  return (
    <main style={{ width: "100%", height: "100%", padding: "10px" }}>
      <div className="container" style={{ width: "100%", height: height }}>
        <div className="card video" style={{ width: "100%", height: "100%" }}>
          <div className="card-inner">
            <div className="box">
              <div
                className={`videoBox poster ${playVideo ? "poster-active" : ""}`}
                style={{
                  backgroundImage: `url(${posterImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/5D8TBicNIb8?si=x658Sysm10QHsnof&amp;controls=0${
                    playVideo ? "?autoplay=1" : ""
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div
                className="tag"
                onClick={handlePlayVideo}
                style={{ cursor: "pointer", width: "auto" }}
              >
                <a
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#FCEE23",
                    background: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {icon ? (
                    <img
                      src={icon}
                      alt="play"
                      style={{ width: "24px", height: "24px" }}
                    />
                  ) : (
                    <PlayArrowIcon />
                  )}
                  {buttonText || "Play Video"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
