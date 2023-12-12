import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface VideoPlayerProps {
  videoSource: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSource,
  description,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          // Handle the error or show a play button
          console.error("Autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }

      setPlaying(!isPlaying);
    }
  };
  console.log({ isPlaying });
  return (
    <div className="relative">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          src={videoSource}
          loop
          muted
          autoPlay
          className="w-full max-w-[18rem] h-[35rem] object-cover"
          onClick={handlePlay}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-light text-sm bg-black bg-opacity-50">
          {description}
        </div>
      </div>

      <div
        className={`absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
          isPlaying ? "hidden" : "block"
        }`}
        onClick={handlePlay}
      >
        {isPlaying ? (
          <FaPlay className="text-white z-[100] text-5xl" />
        ) : (
          <>
            <FaPlay className="text-white z-[100] text-5xl" />
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
