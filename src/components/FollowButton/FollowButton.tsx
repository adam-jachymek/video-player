import { useState } from "react";

import "./styles.sass";

const FollowButton = () => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  return (
    <button
      onClick={() => setIsFollowed(!isFollowed)}
      className="follow-button"
    >
      <div className="follow-button__icon">{isFollowed ? "-" : "+"}</div>
      <div className="follow-button__text">
        {isFollowed ? "Unfollow" : "Follow"}
      </div>
    </button>
  );
};

export default FollowButton;
