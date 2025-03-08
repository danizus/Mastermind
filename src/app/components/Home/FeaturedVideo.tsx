"use client";
import { MouseEvent, useRef } from "react";

import PosterImage from "@images/vlcsnap-2024-09-20-21h50m04s674.png";
import Image from "next/image";
import groupImage from "@/assets/images/group image.jpg"

export default function FeaturedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (e: MouseEvent<HTMLVideoElement>) => {
    e.preventDefault();
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().then(() => {
        if(videoRef.current) videoRef.current.muted = false
      });
    } else {
      videoRef.current && videoRef.current.pause();
    }
  };

  return (
    <section className="video-section pb-12">
      <div className="container">
        <div className="video-wrap relative">
          <video
            ref={videoRef}
            src="/volkoh-final-vid2.mp4"
            className="block w-full shadow rounded-lg"
            onClick={handleVideoClick}
            poster={PosterImage.src}
            autoPlay
            loop
            muted
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          />
       
        </div>
      </div>
    </section>
  );
}
