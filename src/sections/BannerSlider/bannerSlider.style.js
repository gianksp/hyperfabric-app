import styled from "styled-components";

const BannerSliderWrapper = styled.div`
  ul.slick-dots {
    left: 21%;
    bottom: 8%;
    width: 200px;
    text-align: left;
    font-size: 20px;

    li + li {
      margin-left: 30px;
    }

    li {
      margin: 0;
      height: auto;
      width: auto;
      &.slick-active {
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 1024px) { 
    ul.slick-dots {
      left: 50px;
    }
  }
  @media only screen and (max-width: 568px) { 
    ul.slick-dots {
      left: 18px;
    }
  }
`;

export default BannerSliderWrapper;
