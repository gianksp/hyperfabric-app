import styled from "styled-components";

const DemoSectionWrapper = styled.div`
 .mbox {
    border: 1px solid;
    border-radius: 25px;
    padding: 20px;
    margin-top: 20px;
    max-height:615px;
    overflow: hidden;
 }

 .me {
     width:100%;
     text-align:center;
     margin-top: 50px;
 }

 .team {
     border-radius: 50%;
 }

 .lefty {
    text-align: left;
    margin-bottom: 400px;
 }

 
 .about-list {
    margin-top: 24px;
    span {
      font-size: 18px;
      display: block;
      position: relative;
      padding-left: 43px;
      color: #fff;
      margin-bottom: 20px;

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        height: 30px;
        width: 30px;
        background: transparent;
        border: 8px solid #c838e7;
        border-radius: 50%;
        content: " ";
      }

      &:nth-child(2) {
        &::before {
          border-color: #6df7fb;
        }
      }
      &:nth-child(3) {
        &::before {
          border-color: #4268db;
        }
      }
    }
  }
`;

export default DemoSectionWrapper;
