import styled from "styled-components";

const VideoWrapper = styled.div`

.video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  .title-log {
    background: darkorchid;
    padding: 10px;
    border-radius: 20px;
  }
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    margin-top: 50px;
  }
  
  input {
    margin-top: 10px;
    font-size: 0.6em;
    width: 540px;
    border: 3px solid #290E59;
    border-radius: 8px;
    padding: 4px 15px !important;
    font-weight: 100;
    font-style: initial;
    font-family: inherit;
    height: 44px;
 }
 .complete {
  background: #0097a7;
    color: white;
}

.pending {
  background: beige;
  color: #666;
}
`;

export default VideoWrapper;
