import React, { useEffect } from 'react';

function Twitter({ href }) {
  useEffect(() => {
    window.location.href = href;
  }, []);

  return <></>;
}

export default Twitter;
