import MiniVideo from "./MiniVideo";
import { relatedVidoes } from "../../mocked/data";
import { RelatedVideo } from "../../types";

import "./styles.sass";

const RelatedVideos = () => {
  return (
    <div className="related">
      <div className="related__header">
        <h3 className="related__title">Related videos</h3>
      </div>
      <div className="related__videos">
        {relatedVidoes.map((relatedVideo: RelatedVideo, index: number) => (
          <div key={index}>
            <MiniVideo
              title={relatedVideo.title}
              duration={relatedVideo.duration}
              views={relatedVideo.views}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
