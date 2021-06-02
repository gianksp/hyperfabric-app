import styled from "styled-components";

const SubscribeWrapper = styled.div`
  padding: 100px 0;

  .title__wrapper {
    text-align: center;
  }

  .subscribe-box-bg {
    position: relative;
    padding: 100px 0;

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 43px;
      background: rgb(200, 56, 231);
      background: linear-gradient(
        94deg,
        rgba(200, 56, 231, 1) 0%,
        rgba(31, 42, 213, 1) 100%
      );
      content: "";
      opacity: 0.65;
    }
  }
  .form-box {
    position: relative;
    margin-top: 70px;
    button {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #fff;
      width: 220px;
      border-radius: 10px;
      border: none;
      transition: all 0.3s ease-in;
      background: rgb(200, 56, 231);
      background: linear-gradient(
        270deg,
        rgba(200, 56, 231, 1) 0%,
        rgba(31, 42, 213, 1) 100%
      );
      &:hover {
        background: rgb(200, 56, 231);
        background: linear-gradient(
          270deg,
          rgba(31, 42, 213, 1) 0%,
          rgba(200, 56, 231, 1) 100%
        );
      }
    }
    .input__wrapper {
      input {
        height: 80px;
        padding-left: 28px;
        border-radius: 10px;

        &::placeholder {
          color: #280d57;
        }
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .subscribe-box-wrapper {
      .subscribe-box-bg {
        padding: 100px 30px;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    .subscribe-box-wrapper {
      .subscribe-box-bg {
        padding: 50px 30px;
      }
      .form-box {
        text-align: center;
        margin-top: 35px;
        button {
          position: relative;
          right: 0;
          top: 0;
          margin: 30px auto 0 auto;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .subscribe-box-wrapper {
      .subscribe-box-bg {
        padding: 50px 18px;
      }
    }
    .heading {
      font-size: 30px;
      line-height: 40px;
    }
  }
  @media only screen and (max-width: 375px) {
    .heading {
      font-size: 25px;
      line-height: 35px;
    }
  }
`;

export default SubscribeWrapper;
