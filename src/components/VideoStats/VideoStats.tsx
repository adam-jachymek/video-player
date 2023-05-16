import "./styles.sass";

type Props = {
  views: string;
  likes?: string;
  comments?: string;
};

const VideoStats = ({ views, likes, comments }: Props) => {
  return (
    <div className="video-stats">
      <div className="video-stats__views">
        <img src="assets/icons/views-icon.png" alt="views" />
        {views}
      </div>
      {likes && (
        <div className="video-stats__likes">
          <img src="assets/icons/heart-icon.png" alt="like" />
          {likes}
        </div>
      )}
      {comments && (
        <div className="video-stats__comments">
          <img src="assets/icons/comment-icon.png" alt="comments" />
          {comments}
        </div>
      )}
    </div>
  );
};

export default VideoStats;
