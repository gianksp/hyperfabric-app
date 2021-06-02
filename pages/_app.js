import React, { Fragment } from 'react';

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};
