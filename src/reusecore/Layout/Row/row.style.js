import styled from "styled-components";

const RowWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  &.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  &.no-gutters > .col,
  &.no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
`;
export default RowWrapper;
