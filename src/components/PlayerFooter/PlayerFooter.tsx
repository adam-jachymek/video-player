import VideoStats from "../VideoStats";
import FollowButton from "../FollowButton";
import { mainVideo } from "mocked/data";

import "./styles.sass";

const PlayerFooter = () => {
  return (
    <div className="player-footer">
      <div className="player-footer__header">
        <div>
          <h1 className="player-footer__title">{mainVideo.title}</h1>
          <p className="player-footer__description">{mainVideo.description}</p>
        </div>
        <VideoStats
          views={mainVideo.views}
          likes={mainVideo.likes}
          comments={mainVideo.comments}
        />
      </div>
      <div className="player-footer__footer">
        <div className="player-footer__uploader">
          <img
            className="player-footer__user-avatar"
            src={`assets/avatars/${mainVideo.user.avatar}.jpg`}
          />
          <div>
            <h4 className="player-footer__username">
              {mainVideo.user.username}
            </h4>
            <p className="player-footer__user-followers">
              {mainVideo.user.followers} followers
            </p>
          </div>
          <FollowButton />
        </div>
        <div className="player-footer__uploaded">
          <p className="player-footer__uploaded-title">Uploaded:</p>
          <p className="player-footer__uploaded-date">{mainVideo.uploaded}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerFooter;
