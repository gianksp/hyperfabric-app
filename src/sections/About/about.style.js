import styled from "styled-components";

import aboutBgImage from "assets/images/about-bg.png";

const AboutSectionWrapper = styled.div`
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

export default AboutSectionWrapper;
