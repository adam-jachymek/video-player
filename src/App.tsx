import PlayerFooter from "components/PlayerFooter";
import VideoPlayer from "components/VideoPlayer";
import RelatedVideos from "components/RelatedVideos";

import "./app.sass";

const App = () => {
  return (
    <div className="app">
      <div className="app__columns">
        <div className="app__column-left">
          <VideoPlayer />
          <PlayerFooter />
        </div>
        <div className="app__column-right">
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default App;
