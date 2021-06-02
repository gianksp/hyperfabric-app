import styled from "styled-components";


const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 278px 0 150px 0;

  .banner__thumb{
    position: absolute;
    right: -4%;
    top: -12%;
    width: 40%;
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
    .offer-text {
      color: #ffffff;
      padding: 12px 30px;
      border-radius: 30px;
      font-size: 14px;
      margin-bottom: 33px;
      font-weight: 400;
      background: rgb(35, 42, 213);
      background: linear-gradient(
        87deg,
        rgba(35, 42, 213, 1) 45%,
        rgba(194, 56, 231, 1) 100%
      );
    }

    h1 {
      margin: 0 0 30px 0;
      font-size: 45px;
      line-height: 65px;
    }

    p {
      margin-bottom: 60px;
      color: #BEABDF;
      font-size: 18px;
      line-height: 28px;
    }

    .banner-btn {
      a {
        font-size: 16px;
        padding: 18px 35px;
        border: 1px solid #ffffff;
        color: #ffffff;
        transition: all 0.3s ease-in;
        &:hover{
          background: #ffffff;
          color: ${(props) =>
          props.theme.linkColor ? props.theme.linkColor : "#1F2AD5"};
        } 
      }

      .btn-fill {
        background: #ffffff;
        color: ${(props) =>
        props.theme.linkColor ? props.theme.linkColor : "#1F2AD5"};
      }

      a + a {
        margin-left: 20px;
      }
    }
  }


  @media only screen and (max-width: 912px) { 
    padding: 215px 0 150px 0;
    .banner__thumb{
      display: none;
    }
    .banner-content {
      h1{
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
  @media only screen and (max-width: 768px) { 
    padding: 180px 0 120px 0;
    .banner-content {
      h1{
        font-size: 35px;
        line-height: 55px;
      }
    }
  }
  @media only screen and (max-width: 480px) { 
    .banner-content {
      h1{
        font-size: 30px;
        line-height: 50px;
        br{
          display: none;
        }
      }
      .text{
        br{
          display: none;
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
      h1{
        font-size: 25px;
        line-height: 40px;
      }
      .banner-btn{
        .btn{
          width: 155px;
          padding: 18px 5px;
        }
      }
    }
  }
  @media only screen and (max-width: 320px) { 
    .banner-content {
      h1{
        font-size: 22px;
        line-height: 35px;
      }
      .banner-btn{
        .btn{
          width: 170px;
          padding: 18px 5px;
          display: block;
        }
        a+a{
          margin: 15px 0 0 0;
        }
      }
    }
  } 
`;
export default BannerWrapper;
