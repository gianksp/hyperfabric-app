import styled from "styled-components";

const StackSectionWrapper = styled.div`
  padding: 85px 0;

  .Stack-Wrapper {
    .title__wrapper {
      text-align: center;
    }
    .language-image {
      display: flex;
      margin-top: 45px;
      justify-content: space-between;
      a {
        &:hover {
          opacity: 0.7;
        }
        img {
          width: auto;
        }
      }
    }
  }

  @media only screen and (max-width: 568px) {
    .box.language-image a img{
      width: 85%;
    } 
  }

  @media only screen and (max-width: 480px) {
     padding: 20px 0;
    .box.language-image a img{
      width: 70%;
    } 
    .heading{
      font-size: 33px;
      line-height: 40px;
    }
  }
  @media only screen and (max-width:375px) {
    .heading{
      font-size: 28px;
      line-height: 35px;
    }
  }
`;

export default StackSectionWrapper;
