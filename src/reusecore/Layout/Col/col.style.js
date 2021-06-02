import styled from "styled-components"; 

const ColWrapper = styled.div`
  position: relative;  
  padding-right: 15px;
  padding-left: 15px; 

  &.p-0{
    padding: 0;
  }

  &.col-1 {
  flex: 0 0 auto;
  width: 8.333333%;
}

  &.col-2 {
  flex: 0 0 auto;
  width: 16.666667%;
}

&.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

&.col-4 {
  flex: 0 0 auto;
  width: 33.333333%;
}

&.col-5 {
  flex: 0 0 auto;
  width: 41.666667%;
}

&.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

&.col-7 {
  flex: 0 0 auto;
  width: 58.333333%;
}

&.col-8 {
  flex: 0 0 auto;
  width: 66.666667%;
}

&.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

&.col-10 {
  flex: 0 0 auto;
  width: 83.333333%;
}

&.col-11 {
  flex: 0 0 auto;
  width: 91.666667%;
}

&.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

&.offset-1 {
  margin-left: 8.333333%;
}

&.offset-2 {
  margin-left: 16.666667%;
}

&.offset-3 {
  margin-left: 25%;
}

&.offset-4 {
  margin-left: 33.333333%;
}

&.offset-5 {
  margin-left: 41.666667%;
}

&.offset-6 {
  margin-left: 50%;
}

&.offset-7 {
  margin-left: 58.333333%;
}

&.offset-8 {
  margin-left: 66.666667%;
}

&.offset-9 {
  margin-left: 75%;
}

&.offset-10 {
  margin-left: 83.333333%;
}

&.offset-11 {
  margin-left: 91.666667%;
}   

@media only screen and (min-width: 320px) {
  &.xs-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.xs-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.xs-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.xs-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.xs-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.xs-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.xs-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.xs-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.xs-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.xs-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.xs-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.xs-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.order-xs-first {
      -ms-flex-order: -1;
      order: -1;
    }
    &.order-xs-last {
      -ms-flex-order: 13;
      order: 13;
    }
    &.order-xs-0 {
      -ms-flex-order: 0;
      order: 0;
    }
    &.order-xs-1 {
      -ms-flex-order: 1;
      order: 1;
    }
    &.order-xs-2 {
      -ms-flex-order: 2;
      order: 2;
    }
    &.order-xs-3 {
      -ms-flex-order: 3;
      order: 3;
    }
    &.order-xs-4 {
      -ms-flex-order: 4;
      order: 4;
    }
    &.order-xs-5 {
      -ms-flex-order: 5;
      order: 5;
    }
    &.order-xs-6 {
      -ms-flex-order: 6;
      order: 6;
    }
    &.order-xs-7 {
      -ms-flex-order: 7;
      order: 7;
    }
    &.order-xs-8 {
      -ms-flex-order: 8;
      order: 8;
    }
    &.order-xs-9 {
      -ms-flex-order: 9;
      order: 9;
    }
    &.order-xs-10 {
      -ms-flex-order: 10;
      order: 10;
    }
    &.order-xs-11 {
      -ms-flex-order: 11;
      order: 11;
    }
    &.order-xs-12 {
      -ms-flex-order: 12;
      order: 12;
    }
    &.offset-xs-0 {
      margin-left: 0;
    }
    &.offset-xs-1 {
      margin-left: 8.333333%;
    }
    &.offset-xs-2 {
      margin-left: 16.666667%;
    }
    &.offset-xs-3 {
      margin-left: 25%;
    }
    &.offset-xs-4 {
      margin-left: 33.333333%;
    }
    &.offset-xs-5 {
      margin-left: 41.666667%;
    }
    &.offset-xs-6 {
      margin-left: 50%;
    }
    &.offset-xs-7 {
      margin-left: 58.333333%;
    }
    &.offset-xs-8 {
      margin-left: 66.666667%;
    }
    &.offset-xs-9 {
      margin-left: 75%;
    }
    &.offset-xs-10 {
      margin-left: 83.333333%;
    }
    &.offset-xs-11 {
      margin-left: 91.666667%;
    }
  }

  @media (min-width: 576px) {
    &.sm-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.sm-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.sm-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.sm-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.sm-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.sm-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.sm-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.sm-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.sm-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.sm-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.sm-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    &.order-sm-first {
      -ms-flex-order: -1;
      order: -1;
    }
    &.order-sm-last {
      -ms-flex-order: 13;
      order: 13;
    }
    &.order-sm-0 {
      -ms-flex-order: 0;
      order: 0;
    }
    &.order-sm-1 {
      -ms-flex-order: 1;
      order: 1;
    }
    &.order-sm-2 {
      -ms-flex-order: 2;
      order: 2;
    }
    &.order-sm-3 {
      -ms-flex-order: 3;
      order: 3;
    }
    &.order-sm-4 {
      -ms-flex-order: 4;
      order: 4;
    }
    &.order-sm-5 {
      -ms-flex-order: 5;
      order: 5;
    }
    &.order-sm-6 {
      -ms-flex-order: 6;
      order: 6;
    }
    &.order-sm-7 {
      -ms-flex-order: 7;
      order: 7;
    }
    &.order-sm-8 {
      -ms-flex-order: 8;
      order: 8;
    }
    &.order-sm-9 {
      -ms-flex-order: 9;
      order: 9;
    }
    &.order-sm-10 {
      -ms-flex-order: 10;
      order: 10;
    }
    &.order-sm-11 {
      -ms-flex-order: 11;
      order: 11;
    }
    &.order-sm-12 {
      -ms-flex-order: 12;
      order: 12;
    }
    &.offset-sm-0 {
      margin-left: 0;
    }
    &.offset-sm-1 {
      margin-left: 8.333333%;
    }
    &.offset-sm-2 {
      margin-left: 16.666667%;
    }
    &.offset-sm-3 {
      margin-left: 25%;
    }
    &.offset-sm-4 {
      margin-left: 33.333333%;
    }
    &.offset-sm-5 {
      margin-left: 41.666667%;
    }
    &.offset-sm-6 {
      margin-left: 50%;
    }
    &.offset-sm-7 {
      margin-left: 58.333333%;
    }
    &.offset-sm-8 {
      margin-left: 66.666667%;
    }
    &.offset-sm-9 {
      margin-left: 75%;
    }
    &.offset-sm-10 {
      margin-left: 83.333333%;
    }
    &.offset-sm-11 {
      margin-left: 91.666667%;
    }
  }

  @media (min-width: 768px) {
    &.md-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.md-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.md-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.md-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.md-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.md-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.md-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.md-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.md-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.md-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.md-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.md-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    &.order-md-first {
      -ms-flex-order: -1;
      order: -1;
    }
    &.order-md-last {
      -ms-flex-order: 13;
      order: 13;
    }
    &.order-md-0 {
      -ms-flex-order: 0;
      order: 0;
    }
    &.order-md-1 {
      -ms-flex-order: 1;
      order: 1;
    }
    &.order-md-2 {
      -ms-flex-order: 2;
      order: 2;
    }
    &.order-md-3 {
      -ms-flex-order: 3;
      order: 3;
    }
    &.order-md-4 {
      -ms-flex-order: 4;
      order: 4;
    }
    &.order-md-5 {
      -ms-flex-order: 5;
      order: 5;
    }
    &.order-md-6 {
      -ms-flex-order: 6;
      order: 6;
    }
    &.order-md-7 {
      -ms-flex-order: 7;
      order: 7;
    }
    &.order-md-8 {
      -ms-flex-order: 8;
      order: 8;
    }
    &.order-md-9 {
      -ms-flex-order: 9;
      order: 9;
    }
    &.order-md-10 {
      -ms-flex-order: 10;
      order: 10;
    }
    &.order-md-11 {
      -ms-flex-order: 11;
      order: 11;
    }
    &.order-md-12 {
      -ms-flex-order: 12;
      order: 12;
    }
    &.offset-md-0 {
      margin-left: 0;
    }
    &.offset-md-1 {
      margin-left: 8.333333%;
    }
    &.offset-md-2 {
      margin-left: 16.666667%;
    }
    &.offset-md-3 {
      margin-left: 25%;
    }
    &.offset-md-4 {
      margin-left: 33.333333%;
    }
    &.offset-md-5 {
      margin-left: 41.666667%;
    }
    &.offset-md-6 {
      margin-left: 50%;
    }
    &.offset-md-7 {
      margin-left: 58.333333%;
    }
    &.offset-md-8 {
      margin-left: 66.666667%;
    }
    &.offset-md-9 {
      margin-left: 75%;
    }
    &.offset-md-10 {
      margin-left: 83.333333%;
    }
    &.offset-md-11 {
      margin-left: 91.666667%;
    }
  }
  @media (min-width: 992px) {
    &.lg-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.lg-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.lg-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.lg-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.lg-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.lg-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.lg-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.lg-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.lg-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.lg-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    &.order-lg-first {
      -ms-flex-order: -1;
      order: -1;
    }
    &.order-lg-last {
      -ms-flex-order: 13;
      order: 13;
    }
    &.order-lg-0 {
      -ms-flex-order: 0;
      order: 0;
    }
    &.order-lg-1 {
      -ms-flex-order: 1;
      order: 1;
    }
    &.order-lg-2 {
      -ms-flex-order: 2;
      order: 2;
    }
    &.order-lg-3 {
      -ms-flex-order: 3;
      order: 3;
    }
    &.order-lg-4 {
      -ms-flex-order: 4;
      order: 4;
    }
    &.order-lg-5 {
      -ms-flex-order: 5;
      order: 5;
    }
    &.order-lg-6 {
      -ms-flex-order: 6;
      order: 6;
    }
    &.order-lg-7 {
      -ms-flex-order: 7;
      order: 7;
    }
    &.order-lg-8 {
      -ms-flex-order: 8;
      order: 8;
    }
    &.order-lg-9 {
      -ms-flex-order: 9;
      order: 9;
    }
    &.order-lg-10 {
      -ms-flex-order: 10;
      order: 10;
    }
    &.order-lg-11 {
      -ms-flex-order: 11;
      order: 11;
    }
    &.order-lg-12 {
      -ms-flex-order: 12;
      order: 12;
    }
    &.offset-lg-0 {
      margin-left: 0;
    }
    &.offset-lg-1 {
      margin-left: 8.333333%;
    }
    &.offset-lg-2 {
      margin-left: 16.666667%;
    }
    &.offset-lg-3 {
      margin-left: 25%;
    }
    &.offset-lg-4 {
      margin-left: 33.333333%;
    }
    &.offset-lg-5 {
      margin-left: 41.666667%;
    }
    &.offset-lg-6 {
      margin-left: 50%;
    }
    &.offset-lg-7 {
      margin-left: 58.333333%;
    }
    &.offset-lg-8 {
      margin-left: 66.666667%;
    }
    &.offset-lg-9 {
      margin-left: 75%;
    }
    &.offset-lg-10 {
      margin-left: 83.333333%;
    }
    &.offset-lg-11 {
      margin-left: 91.666667%;
    }
  }

  @media (min-width: 1200px) {
    &.xl-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.xl-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.xl-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.xl-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.xl-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.xl-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.xl-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.xl-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.xl-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.xl-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.xl-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.xl-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    &.xl-first {
      -ms-flex-order: -1;
      order: -1;
    }
    &.xl-last {
      -ms-flex-order: 13;
      order: 13;
    }
    &.order-xl-0 {
      -ms-flex-order: 0;
      order: 0;
    }
    &.order-xl-1 {
      -ms-flex-order: 1;
      order: 1;
    }
    &.order-xl-2 {
      -ms-flex-order: 2;
      order: 2;
    }
    &.order-xl-3 {
      -ms-flex-order: 3;
      order: 3;
    }
    &.order-xl-4 {
      -ms-flex-order: 4;
      order: 4;
    }
    &.order-xl-5 {
      -ms-flex-order: 5;
      order: 5;
    }
    &.order-xl-6 {
      -ms-flex-order: 6;
      order: 6;
    }
    &.order-xl-7 {
      -ms-flex-order: 7;
      order: 7;
    }
    &.order-xl-8 {
      -ms-flex-order: 8;
      order: 8;
    }
    &.order-xl-9 {
      -ms-flex-order: 9;
      order: 9;
    }
    &.order-xl-10 {
      -ms-flex-order: 10;
      order: 10;
    }
    &.order-xl-11 {
      -ms-flex-order: 11;
      order: 11;
    }
    &.order-xl-12 {
      -ms-flex-order: 12;
      order: 12;
    }
    &.offset-xl-0 {
      margin-left: 0;
    }
    &.offset-xl-1 {
      margin-left: 8.333333%;
    }
    &.offset-xl-2 {
      margin-left: 16.666667%;
    }
    &.offset-xl-3 {
      margin-left: 25%;
    }
    &.offset-xl-4 {
      margin-left: 33.333333%;
    }
    &.offset-xl-5 {
      margin-left: 41.666667%;
    }
    &.offset-xl-6 {
      margin-left: 50%;
    }
    &.offset-xl-7 {
      margin-left: 58.333333%;
    }
    &.offset-xl-8 {
      margin-left: 66.666667%;
    }
    &.offset-xl-9 {
      margin-left: 75%;
    }
    &.offset-xl-10 {
      margin-left: 83.333333%;
    }
    &.offset-xl-11 {
      margin-left: 91.666667%;
    }
  }
`;

export default ColWrapper;
