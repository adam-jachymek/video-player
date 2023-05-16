import { RelatedVideo } from "../../../types";
import VideoStats from "../../VideoStats";

import "./styles.sass";

const MiniVideo = ({ title, duration, views }: RelatedVideo) => {
  return (
    <div className="related-video">
      <div className="related-video__thumbnail">
        <div className="related-video__duration">{duration}</div>
      </div>
      <div className="related-video__content">
        <h4 className="related-video__title">{title}</h4>
        <VideoStats views={views} />
      </div>
    </div>
  );
};

export default MiniVideo;
