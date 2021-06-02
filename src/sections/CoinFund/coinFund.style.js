import styled from "styled-components";

import fundsBg from "assets/images/funds-bg.png";

const CoinFundWrapper = styled.div`
  padding: 110px 0 140px 0;
  position: relative;
  background: url(${fundsBg});
  background-repeat: no-repeat;
  background-size: inherit;
  background-position: 72% 0px;

  &::before {
    position: absolute;
    right: 0;
    top: 0%;
    width: 100%;
    height: 100%;
    content: " ";
  }

  .btn-wrapper{
    margin-top: 35px;
  }
  .btn-fill {
    font-size: 16px;
    padding: 18px 35px;
    background: #ffffff;
    color: ${(props) =>
      props.theme.linkColor ? props.theme.linkColor : "#1F2AD5"};
  }

  .progressbar-wrapper {
    position: relative;
    height: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    background: #fff;

    span {
      position: absolute;
      right: 0;
      bottom: -42px;
      color: #fff;
      font-size: 18px;
      margin: 0;
    }

    .progressbar {
      position: relative;
      width: 60%;
      height: 30px;
      border-radius: 20px;
      background: rgb(35, 42, 213);
      background: linear-gradient(
        90deg,
        rgba(35, 42, 213, 1) 0%,
        rgba(138, 50, 224, 1) 49%,
        rgba(176, 53, 228, 1) 100%
      );
      span {
        bottom: -38px;
      }
    }
  }

  .payment-getway {
    margin-top: 85px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    span {
      margin-right: 25px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .countBoxItem {
    min-width: 100px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
  }
  .countdown-wrapper {
    margin-bottom: 40px;
    .text {
      font-size: 14px;
      color: #fff;
      text-align: center;
      margin-bottom: 35px;
    }
    .countBox {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      .count {
        line-height: 46px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .label {
       font-size: 14px;
       color: #BEABDF;
      }
      .split {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        margin: 6px 8px 0 8px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    background-size: 36%;
    background-position: 86% 41%;
    .heading {
      font-size: 25px;
      line-height: 40px;
      text-align: left;
    }
    .countdown-wrapper {
      .count {
        font-size: 45px;
      }
    }
  }

  @media only screen and (max-width: 912px) {
    background-position: 86% 70%;
    .coin-fund-content-left{
      text-align: center;
      margin-bottom: 80px;
    }
  }
  @media only screen and (max-width: 768px) {
    .countdown-wrap{
      width: 100%;
    }
  }
  @media only screen and (max-width: 480px) {
    background: none;
    padding: 50px 0;
    .heading {
      font-size: 25px;
      line-height: 40px;
    }
    .countdown-wrapper {
      .split {
        display: none;
      }
      .count {
        font-size: 35px;
      } 
      .countBox{
        flex-direction: column-reverse;
      }
    }
  }
`;

export default CoinFundWrapper;
