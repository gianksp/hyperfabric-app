import styled from "styled-components";

const AwardsSectionWrapper = styled.div`
  padding: 85px 0;
  .heading {
    padding-right: 103px;
  }
  .col:nth-of-type(odd) {
    .awards-item {
      margin-right: 10px;
    }
  }

  .awards-item-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .awards-item {
      display: flex;
      width: 49%;
      color: #fff;
      align-items: center;
      padding: 20px 0 20px 50px;
      margin-bottom: 10px;
      background: #2b1867;
      border-radius: 5px;
      cursor: pointer;
      &.active,
      &:hover {
        background: rgb(32, 47, 213);
        background: linear-gradient(
          90deg,
          rgba(32, 47, 213, 1) 0%,
          rgba(139, 51, 224, 1) 57%,
          rgba(195, 56, 231, 1) 100%
        );
        box-shadow: 0px 0px 17px #221156;
      }

      .award-icon {
        margin-right: 50px;
        font-size: 30px;
      }

      .counter-text {
        span {
          display: block;

          &:first-child {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          &.text {
            margin: 0;
            color: #beabdf;
            font-family: Open sans;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .awards-item-wrapper{
      .awards-item{
        padding: 20px 0 20px 30px;
        .award-icon{
          margin-right: 30px;
        }
      }
    }  
  }
  @media only screen and (max-width: 912px) {
    .awards-item-wrapper{
      .awards-item{
        padding: 20px 0 20px 15px;
        .counter-text {
          span:first-child{
            font-size: 23px;
          }
        }
        .award-icon{
          margin-right: 15px;
        }
      }
    }  
  }
  @media only screen and (max-width: 736px) {
    .title__wrapper{
      margin-bottom: 50px;
    }
    .awards-item-wrapper{
      .awards-item{
        padding: 20px 0 20px 30px;
        .counter-text {
          span:first-child{
            font-size: 30px;
          }
        }
        .award-icon{
          margin-right: 30px;
        }
      }
    }  
  }
  @media only screen and (max-width: 480px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 480px) {
    .heading{
      padding-right: 0;
      font-size: 30px;
    }
    .awards-col{
      width: 100%;
    }
    .awards-item-wrapper{
      flex-direction: column;
      width: 100%;
      .awards-item{
        width: 100%;
        margin-bottom: 30px;
      }
    }  
  }
  @media only screen and (max-width: 375px) {
    .heading{
      font-size: 25px;
      line-height: 35px;
    }
  }
`;

export default AwardsSectionWrapper;
