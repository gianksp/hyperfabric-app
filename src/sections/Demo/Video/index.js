import React from "react";
import PropTypes from "prop-types";
import VideoWrapper from "./video.style";

const Video = ({ embedId }) => (
    <VideoWrapper>
        <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    </VideoWrapper>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video;