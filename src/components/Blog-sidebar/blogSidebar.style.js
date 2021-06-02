import styled from "styled-components";

const BlogSideBarWrapper = styled.div`
  .search-box {
    position: relative;
    display: flex;
    input {
      flex-basis: 100%;
      padding: 15px 45px 15px 15px;
      border: none;
      border-radius: 5px;
      background: #65528f;
      color: ${(props) => props.theme.white};
      &:focus {
        border-color: #8a57de;
      }
    }
    button {
      position: absolute;
      right: 0px;
      top: 0;
      height: 100%;
      width: auto;
      border-radius: 5px;
      background: transparent;
      font-size: 22px;
      color: #beabdf;
      line-height: 40px;
    }
  }

  .sidebar-widgets {
    padding: 0 30px;
  }

  .widgets-title {
    margin-bottom: 20px;
    h3 {
      display: inline-block;
      font-size: 21px;
      font-weight: 500;
      line-height: 30px;
      position: relative;
      &:before {
        position: absolute;
        top: 50%;
        right: -80px;
        content: "";
        width: 70px;
        height: 1px;
      }
    }
  }
  .recent-post-block {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgba(190, 171, 223, 0.55);
    border-radius: 5px;
    & + .recent-post-block {
      margin-top: 30px;
    }
    img {
      margin-right: 20px;
      height: 80px;
      width: 80px;
      border-radius: 5px;
    }
    a {
      h3 {
        font-size: 16px;
        font-weight: 400;
        color: #beabdf;
        margin: 0;
        margin-bottom: 8px;
        transition: all 0.3s ease-in;
        &:hover {
          color: ${(props) => props.theme.white};
        }
      }
    }
    .post-meta-block {
      margin-bottom: 0;
      font-size: 14px;
      color: #7a848e;
      a {
        font: 400 13px/20px "Poppins", sans-serif;
        color: #7a848e;
        &:hover {
          color: ${(props) => props.theme.white};
        }
      }
      a + a {
        position: relative;
        &:before {
          content: "/";
          display: inline-block;
          margin: 0px 5px 0px 0px;
        }
      }
    }
  }

  .sidebar-widgets {
    & + .sidebar-widgets {
      margin-top: 52px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &.catagorie {
      li {
        & + li {
          margin-top: 3px;
        }
        a {
          color: #beabdf;
          display: flex;
          line-height: 25px;
          justify-content: space-between;
          font: 400 16px/35px "Poppins", sans-serif;
          em {
            font-style: normal;
            margin: 0;
          }
          span {
            margin: 0;
            border-bottom: 1px solid transparent;
            transition: all 0.3s linear;
          }
          &:hover {
            span,
            em {
              color: ${(props) => props.theme.white};
              border-color: #beabdf;
            }
          }
        }
      }
    }
    &.tags {
      ul {
        margin-top: -5px;
        margin-left: -5px;
        margin-right: -5px;
      }
      li {
        display: inline-block;
        a {
          margin: 5px;
          display: block;
          padding: 6px 18px;
          border-radius: 3px;
          background: #2b1867;
          font: 400 13px/26px "Poppins", sans-serif;
          transition: all 0.3s linear;
          &:hover {
            color: #2b1867;
            background: ${(props) => props.theme.white};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .sidebar-widgets {
      padding: 0;
    }
  }
`;

export default BlogSideBarWrapper;
