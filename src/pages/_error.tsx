import React from 'react';

// https://nextjs.org/docs/advanced-features/custom-error-page

const Error = ({ statusCode }: any) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '200px 0' }}>
      <h1>{statusCode ? `${statusCode} Error` : 'Client Error'}</h1>;
    </div>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
