
import React from 'react';
import documentation from './documentation.md';

const Documentation = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: documentation }} />
    </div>
  );
};

export default Documentation;