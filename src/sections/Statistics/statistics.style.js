import styled from "styled-components";

const StatisticsSectionWrapper = styled.div`
  .statistics-wrapper {
    padding: 85px 0;

    .statistics-image {
      text-align: center;
      .heading {
        font-size: 36px;
      }

      img {
        margin-top: 55px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .statistics-wrapper {
      .statistics-image {
        .heading {
          font-size: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .statistics-wrapper {
      .statistics-image {
        .heading {
          font-size: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .statistics-wrapper {
      .statistics-image {
        text-align: center;
        .heading {
          font-size: 25px;
        }
      }
    }
  }
  @media only screen and (max-width: 568px) {
    .statistics-wrapper {
      .statistics-image {
        text-align: center;
        img {
          margin: 50px auto 0px auto;
          width: 70%;
        }

        &:last-child {
          margin-top: 50px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .statistics-wrapper{
      padding: 10px 0;
    }
  }
`;

export default StatisticsSectionWrapper;
