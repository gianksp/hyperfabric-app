import styled from "styled-components";

import SectionBG from "assets/images/section-title-bg.png";

export const SectionTitleWrapper = styled.div`
  .heading {
    font-size: 36px;
    font-weight: 700;
    line-height: 46px;
    margin: 0;
  }

  .text {
    margin-top: 27px;
  }
`;

export const SectionBgWrapper = styled.div`
  background: url(${SectionBG});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  .heading {
    padding: 10px 0 10px 22px;
  }
`;
