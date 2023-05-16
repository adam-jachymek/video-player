import { useState, useEffect } from "react";
import { mainVideo } from "mocked/data";
import { parseDuration } from "utils";
import VolumeSlider from "../VolumeSlider";
import Timeline from "../Timeline";

import "./styles.sass";

const VideoPlayer = () => {
  const [currentSecond, setCurrentSecond] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecond((prevCurrentSecond) =>
        prevCurrentSecond <= mainVideo.durationInSeconds - 1
          ? prevCurrentSecond + 1
          : 0
      );
    }, 1000);

    if (!isPlaying) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="video-player">
      <div className="video-player__top-menu">
        <img
          onClick={() => setLiked(!liked)}
          src={`assets/icons/love-icon${liked ? "-full" : ""}.png`}
          alt="love icon"
        />
        <img src="assets/icons/share-icon.png" alt="share" />
      </div>
      <div className="video-player__bottom-menu">
        <div className="video-player__play">
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="video-player__play-button"
          >
            <img
              src={`assets/icons/player-${isPlaying ? "pause" : "play"}.png`}
              alt="play pause"
            />
          </div>
          <Timeline
            value={currentSecond}
            maxValue={mainVideo.durationInSeconds}
            setValue={setCurrentSecond}
          />
        </div>
        <div className="video-player__duration">
          {parseDuration(currentSecond)} /{" "}
          {parseDuration(mainVideo.durationInSeconds)}
        </div>
        <div className="video-player__volume">
          <img src="assets/icons/volume-icon.png" alt="duration" />
          <VolumeSlider />
        </div>
        <div className="video-player__quality">720</div>
        <img
          className="video-player__fullscreen"
          src="assets/icons/fullscreen-icon.png"
          alt="fullscreen"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
