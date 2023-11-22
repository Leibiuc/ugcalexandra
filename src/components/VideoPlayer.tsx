import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface VideoPlayerProps {
  videoSource: string;
  description: string; // Add a description prop
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

  return (
    <div className="relative">
      <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gray-800">
        <video
          ref={videoRef}
          src={videoSource}
          loop
          autoPlay
          className="w-full max-w-xs h-[35rem] object-cover"
          onClick={handlePlay}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-bold bg-black bg-opacity-50">
          {description}
        </div>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
          isPlaying ? "hidden" : "block"
        }`}
        onClick={handlePlay}
      >
        {!isPlaying && <FaPlay className="text-white text-5xl" />}
      </div>
    </div>
  );
};

export default VideoPlayer;
