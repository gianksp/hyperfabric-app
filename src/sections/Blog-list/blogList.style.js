import styled from "styled-components";

import Icon1 from "assets/images/blog/icon1.svg";

export const BlogPageWrapper = styled.div`
  .blog-page-wrapper {
    padding-bottom: 50px;
  }
  .post-block {
    &.list {
      margin-bottom: 70px;
      border-radius: 6px;
 
      &:hover {
        .post-thumb-block {
          img {
            transform: scale3d(1.1, 1.1, 1);
          }
        }
        .readmore-btn {
         color: #beabdf;
        }
        .post-title {
          a {
            color: #beabdf;
          }
        }
      }
    }
    &.text-only {
      margin-bottom: 80px;
      border: 1px solid rgba(190,171,223,0.55);
      padding: 45px 55px 35px;
    }
    &.qutoe-post {
      padding: 100px 65px 70px;
      text-align: center;
      position: relative;
      z-index: 1;
      margin-bottom: 80px;
      position: relative;
      &:after{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 43px;
        background: rgb(200,56,231);
        background: linear-gradient( 0deg,rgba(200,56,231,1) 0%,rgba(31,42,213,1) 100% );
        content: "";
        opacity: .65;
        z-index: -1;
      }
      &:before {
        content: url(${Icon1});
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        z-index: -1;
        opacity: 1;
        transition: all 1s ease-in-out;
      }
      .post-title {
        a {
          color: ${props => props.theme.white};
          font-size: 30px;
          letter-spacing: 1px;
        }
      }
    }
  }

  .post-thumb-block {
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
    border-radius: 6px;
    .post-meta {
      padding: 15px 23px;
      border-radius: 6px;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      width: 100px;
      background: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 10px;
      right: 10px;
      em {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        display: block;
        font-style: normal;
      }
    }
    img {
      width: 100%;
      transition: all 0.6s ease-in;
      border-radius: 6px;
    }
  }
  .post-content-block {
    border-radius: 0 0 3px 3px;
    box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);
    padding: 25px 35px;
    position: relative;
  }
  .post-entry {
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 25px;
  }
  .post-title {
    a {
      font-size: 24px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 1.5px;
      margin-bottom: 25px;
      display: block;
      -webkit-transition: 450ms all;
      transition: 450ms all;
      &:hover {
        color: #C838E7;
      }
    }
  }
  .readmore-btn {
    display: flex;
    color: ${props => props.theme.white};
    align-items: center;
    transition: all 0.3s ease-in;
    svg {
      margin-left: 0px;
      font-size: 27px;
      transition: all 0.3s ease-in;
    }
    &:hover {
      svg {
        transform: translateX(8px);
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .blog-page-wrapper {
      padding-bottom: 80px;
    }
  }
  @media only screen and (max-width: 568px) {
    .post-block {
      .post-title {
        a {
          font-size: 20px;
          line-height: 33px;
        }
      }
      &.qutoe-post {
        .post-title {
          a {
            font-size: 20px;
            line-height: 33px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .post-block {
      &.text-only {
        padding: 25px 30px 30px;
      }
      &.qutoe-post {
        padding: 80px 25px 40px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .post-block {
      .post-title {
        a {
          font-size: 17px;
          line-height: 30px;
        }
      }
      &.qutoe-post {
        .post-title {
          a {
            font-size: 17px;
            line-height: 30px;
          }
        }
      }
    }
  }
`;
