import styled from "styled-components";

const UserMapWrapper = styled.div`
  padding: 85px 0;

  .usermap-wrapper {
    img {
      margin-top: 37px;
    }
  }
  
  @media only screen and (max-width: 912px) {
    .heading{
      font-size: 34px;
    }
  }
  @media only screen and (max-width: 568px) {
    .heading{
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;

export default UserMapWrapper;
