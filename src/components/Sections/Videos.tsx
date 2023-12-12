import { videos } from "../../assets/videos";
import VideoPlayer from "../VideoPlayer";

export const Videos = ({ ...rest }) => {
  return (
    <div className="px-6 py-8" {...rest}>
      <h1 className="font-light text-6xl">UGC VIDEO</h1>

      <div className="flex flex-wrap mt-10 gap-12 justify-evenly">
        {videos.map((video, index) => (
          <>
            <VideoPlayer
              description="Descriere"
              key={index}
              videoSource={video}
            />
          </>
        ))}
      </div>
    </div>
  );
};
