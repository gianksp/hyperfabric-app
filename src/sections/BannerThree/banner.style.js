import styled from "styled-components";

import BannerImage from "assets/images/banner-image-three.png";
import aboutBgImage from "assets/images/about-bg.png";

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 278px 0 150px 0;

.paco {
  padding-top: 370px;
}
.banner__thumb{
  position: absolute;
  right: -22%;
  top: -15%;
  width: 85%;
  margin-top:300px;
}

.banner__thumbsmall{
  position: absolute;
  right: -50%;
  top:-20%;
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
      margin: 240px 0 33px 0;
      font-weight: 900;
    }

    .text {
      // margin-bottom: 65px;
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
  padding: 85px 0;

  background: url(${aboutBgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .about-list {
    margin-top: 24px;
    span {
      font-size: 18px;
      display: block;
      position: relative;
      padding-left: 43px;
      color: #fff;
      margin-bottom: 20px;

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        height: 30px;
        width: 30px;
        background: transparent;
        border: 8px solid #c838e7;
        border-radius: 50%;
        content: " ";
      }

      &:nth-child(2) {
        &::before {
          border-color: #6df7fb;
        }
      }
      &:nth-child(3) {
        &::before {
          border-color: #4268db;
        }
      }
    }
  }

  .about-btn-wrapper {
    a + a {
      margin-left: 20px;
    }

    a {
      display: inline-flex;
      border-color: #fff;
      justify-content: center;
      align-items: center;
      margin-top: 53px;
      transition: all 0.3s ease-in;
      &:hover{
        
      }
      svg {
        margin-right: 10px;
        font-size: 23px;
      }

      &:hover,
      &.btn-fill {
        border: none;
        background: rgb(37, 42, 213);
        background: -moz-linear-gradient(
          93deg,
          rgba(37, 42, 213, 1) 0%,
          rgba(122, 49, 222, 1) 52%,
          rgba(196, 56, 231, 1) 100%
        );
        background: -webkit-linear-gradient(
          93deg,
          rgba(37, 42, 213, 1) 0%,
          rgba(122, 49, 222, 1) 52%,
          rgba(196, 56, 231, 1) 100%
        );
        background: linear-gradient(
          93deg,
          rgba(37, 42, 213, 1) 0%,
          rgba(122, 49, 222, 1) 52%,
          rgba(196, 56, 231, 1) 100%
        );
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .about-image {
      margin-top: 70px;
    }
    .title__wrapper {
      .heading {
        font-size: 30px;
      }
    }
    .about-list {
      span {
        font-size: 17px;
        &::before {
          top: 3px;
          width: 25px;
          height: 25px;
        }
      }
    }

    .about-btn-wrapper {
      a {
        width: 155px;
        font-size: 14px;
        margin-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .about-image {
      width: 400px;
      margin: 0 auto 50px auto;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 375px) {
    .title__wrapper .heading {
      font-size: 25px;
      line-height: 35px;
    }
    .about-btn-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        &:last-child {
          margin: 20px 0 0;
        }
      }
    }
  }
`;
export default BannerWrapper;
