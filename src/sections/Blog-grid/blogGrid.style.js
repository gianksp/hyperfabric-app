import styled from "styled-components";
export const BlogPageWrapper = styled.div`
  .blog-list-wrapper {
    padding: 50px 0;
  }
  .blog-grid-wrapper {
    padding-bottom: 60px;
  }
  .post-block {
    margin-bottom: 30px;
    border-radius: 3px;
    &:hover {
      .readmore-btn {
        color: #ffffff;
      }
    }
  }
  .post-thumb-block {
    border-radius: 3px 3px 0 0;
    position: relative;
    z-index: 2;
    img {
      border-radius: 3px 3px 0 0;
    }
  }
  .post-content-block {
    border-radius: 0 0 3px 3px;
    border: 1px solid rgba(190,171,223,0.55);
    padding: 25px 35px;
    transform: translateY(-11px);
    position: relative;
    z-index: 1;
  }
  .post-entry {
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
  }

  .post-meta-block {
    margin-bottom: 10px;
    a {
      margin-right: 10px;
      -webkit-transition: 450ms all;
      transition: 450ms all;
      &:hover {
        color: #ffebec;
      }
    }
    a,
    span {
      color: #beabdf;
      font-size: 14px;
      font-weight: 300;
    }
    span + span {
      margin-left: 10px;
    }
    .divider {
      font-size: 11px;
    }
  }
  .post-title {
    a {
      font-size: 21px;
      font-weight: 500;
      line-height: 30px;
      margin-bottom: 17px;
      display: block;
      color: ${props => props.theme.white};
      -webkit-transition: 450ms all;
      transition: 450ms all;
      &:hover {
        color: #beabdf;
      }
    }
  }
  .readmore-btn {
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in;
    svg {
      margin-left: 0px;
      font-size: 27px;
      transition: all 0.3s ease-in;
    }
    &:hover {
      svg {
        margin-left: 8px;
      }
    }
  }

  .pagination-wrapper {
    display: flex;
    margin: 30px 0 60px 0;
    ul,
    .pagination {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;

        &.active {
          a {
            opacity: 1;
          }
        }
        a {
          display: block;
          padding: 12px 20px;
          margin-right: 10px;
          border-radius: 5px;
          opacity: 0.6;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .blog-page-wrapper {
      padding-bottom: 80px;
    }
  }
  @media only screen and (max-width: 568px) {
    .post-thumb-block{
      img{
        width: 100%;
      }
    }
  }
`;
