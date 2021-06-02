import styled from "styled-components";

import BannerImage from "assets/images/banner-image-three.png";

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 278px 0 150px 0;

.banner__thumb{
  position: absolute;
  right: -22%;
  top: -15%;
  width: 85%;
}

.banner__thumbsmall{
  position: absolute;
  right: -50%;
  top:-25%;
  width: 55%;
}

.section__particle {
  position: absolute;
  &.top-left {
    left: -98px;
    top: -60px;
    height: 150px;
  }
  &.top-right {
    top: 65px;
    right: 28px;
    height: 74px;
  }
  &.bottom-left {
    bottom: 0px;
    left: 15px;
    height: 150px;
  }
  &.two {
    top: 6px;
    left: 140px;
    height: 87px;
  }
  &.bottom-right {
    right: -40px;
    bottom: 0px;
    height: 200px;
  }
}
  .banner-content {
    padding-right: 45px; 

    .heading {
      font-size: 50px;
      line-height: 65px;
      margin: 0 0 33px 0;
      font-weight: 900;
    }

    .text {
      margin-bottom: 65px;
    }

    .input-box {
      width: 470px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .input__wrapper {
        width: 100%;

        input {
          height: 60px;
          padding: 15px;
        }
      }

      button {
        position: absolute;
        right: 10px;
        height: 40px;
        color: #fff;
        background: #c838e7;
      }
    }
  }

  @media only screen and (max-width: 912px) { 
    padding: 215px 0 150px 0;
    .banner__thumb{
      display: none;
    }
    .banner-content {
      padding-right: 0;
      h1{
        font-size: 40px;
        line-height: 50px;
        font-weight: 600;
      }
    }
  }
  @media only screen and (max-width: 768px) { 
    padding: 180px 0 120px 0;
    .banner-content {
      .heading{
        font-size: 35px;
        line-height: 50px;
      }
    }
  }
  @media only screen and (max-width: 480px) { 
    .banner-content {
      .heading{
        font-size: 30px;
        line-height: 45px;
        br{
          display: none;
        }
      }
      .text{
        br{
          display: none;
        }
      }
      .input-box{
        width: 100%;
        display: block;
        button{
          margin: 15px auto 0 auto;
          right: 0;
          left: 0;
        }
      }
    }
    .section__particle{
      &.bottom-right{
        display: none;
      }
    }
  }
  @media only screen and (max-width: 375px) { 
    .banner-content {
      .heading{
        font-size: 25px;
        line-height: 35px;
      }
    }
  }
  @media only screen and (max-width: 320px) { 
    .banner-content {
      .heading{
        font-size: 22px;
        line-height: 35px;
      }
     
    }
  } 
`;
export default BannerWrapper;
