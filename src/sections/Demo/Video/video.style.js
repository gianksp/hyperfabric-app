import styled from "styled-components";

const VideoWrapper = styled.div`

.video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    margin-top: 50px;
  }
  
`;

export default VideoWrapper;
