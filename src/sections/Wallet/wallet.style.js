import styled from "styled-components";

const WalletSectionWrapper = styled.div`
  padding: 85px 0;
  .section__particle{
    position: absolute;
    top: 3%;
    left: -5%;
    width: 100px;
  }
  .wallet-info {
    display: flex;
    margin-top: 50px;

    .counter-item {
      padding: 0 24px;
      position: relative;
      span {
        font-size: 30px;
        font-weight: 700;
        color: #fff;
        line-height: 46px;
      }

      .text {
        margin: 5px 0 0 0;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;

        &:before {
          display: none;
        }
      }

      &:before {
        position: absolute;
        right: 0;
        bottom: 7px;
        width: 1px;
        height: 79%;
        content: "";
        background: #beabdf;
        opacity: 0.3;
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .wallet-image {
      img {
        width: 310px;
        margin: 0 auto 40px auto;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .wallet-left-content {
      .heading {
        font-size: 35px;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 50px 0;
    .wallet-left-content {
      .heading {
        font-size: 30px;
      }
    }
    .wallet-info{
      .counter-item{
        padding: 0 15px;
        span{
          font-size: 24px;
          line-height: 35px;
        }
      }
    } 
  }
  @media only screen and (max-width: 320px) {
    .wallet-left-content {
      .heading {
        font-size: 25px;
        line-height: 35px;
      }
    }
  }
`;

export default WalletSectionWrapper;
