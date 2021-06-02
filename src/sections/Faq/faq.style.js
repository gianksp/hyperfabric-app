import styled from "styled-components";

const FaqSectionWrapper = styled.div`
  padding: 85px 0;

  .title__wrapper {
    .heading {
      padding-right: 106px;
    }
  }

  .faq-content {
    position: relative;
    margin-top: 95px;

    ul.react-tabs__tab-list {
      position: absolute;
      right: -106%;
      top: -160px;
      border: none;

      li {
        padding: 14px 33px;
        border: none;
        border-radius: 5px;

        &.react-tabs__tab--selected {
          background: #280d57;
          color: #fff;
        }
      }
    }
  }

  .accordion__item {
    background: #2b1867;
    border: 1px solid #beabe0;
    border-radius: 5px;
    padding: 30px;

    .heading {
      font-size: 17px;
      font-weight: 300;
      margin: 0;
    }

    > div {
      [aria-expanded="true"] {
        .heading {
          margin-bottom: 10px;
        }
      }
    }
  }

  .accordion__item + .accordion__item {
    margin-top: 30px;
  }

  .faq-image {
    width: 390px;
    margin-top: 67px;
    opacity: 0.7;
  }

  @media only screen and (max-width: 1024px) {
    .faq-content {
      ul.react-tabs__tab-list {
        right: -109%;
        top: -160px;

        li {
          padding: 10px 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .faq-content {
      ul.react-tabs__tab-list {
        right: -109%;
        top: -188px;

        li {
          padding: 10px 18px;
        }
      }
    }
    .title__wrapper{
      .heading{
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .faq-content {
      margin-top: 120px;
      ul.react-tabs__tab-list {
        left: 0;
        top: -90px;
        right: 0;
      }
    }
    .faq-image{
      margin: 70px auto 0 auto;
    }
    .title__wrapper{
      .heading{
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .title__wrapper{
      .heading{
        font-size: 30px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .title__wrapper{
      .heading{
        font-size: 25px;
        line-height: 35px;
      }
    }
    .faq-content{
      ul.react-tabs__tab-list{
        li{
          padding: 10px 8px;
        }
      }
    }
    .accordion__item {
      .heading {
        font-size: 15px;
        line-height: 25px;
      }
    } 
  }
`;

export default FaqSectionWrapper;
