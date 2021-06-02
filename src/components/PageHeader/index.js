import React from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";

import PageHeaderWrapper from "./pageHeader.style";


const PageHeader = ({ categories, title }) => {
  return (
    <PageHeaderWrapper>
      <div className="page-header">
        <h1>{title}</h1>
          <div className="breadcrumbs page">
            <>
              <span> Home </span> <span> <AiOutlineDoubleRight/> </span> {title}
            </>
          </div>
      </div>
    </PageHeaderWrapper>
  );
};
export default PageHeader;
