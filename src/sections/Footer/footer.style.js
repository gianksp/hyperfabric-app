import styled from "styled-components";
import footerBg from "assets/images/footer-bg.png";

const FooterWrapper = styled.div`
  .footer-content-wrapper {
    background: url(${footerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  a {
    &:hover {
      color: #fff;
    }
  }

  

  .footer-widgets { 
    margin-bottom: 60px;

    a {
      color: #beabdf;
      font-size: 18px;
      font-weight: 300;
      line-height: 38px;
    }

    img {
      width: 180px;
      margin-bottom: 27px;
    }

    &.company-desc {
      .text {
        line-height: 26px;
      }
    }

    &.address {
      font-size: 18px;
      p {
        line-height: 38px;
      }
    }

    .heading {
      font-size: 24px;
      font-weight: 500;
      color: #beabdf;
      margin-bottom: 23px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      a {
        display: flex;
        align-items: center;
        svg {
          margin-right: 15px;
        }
      }
    }
  }

  .footer-social-links {
    padding: 45px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.5px solid #4e55aa;
    border-bottom: 0.5px solid #4e55aa;
    a {
      font-size: 36px;
      font-weight: 700;
      color: #beabdf;
      &:hover {
        color: #fff;
      }
    }
  }

  .copyright-text {
    display: flex;
    justify-content: space-between;
    padding: 65px 0 50px 0px;
  }
  @media only screen and (max-width: 480px) {
    .footer-social-links{
      flex-wrap: wrap;
      a{
        max-width: 16%;
        flex: 0 0 16%;
        margin: 15px 0;
      }
    }
    .copyright-text{
      flex-direction: column-reverse;
    }
  }
`;

export default FooterWrapper;
