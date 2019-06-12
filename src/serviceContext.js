import React from 'react';

export function withService(Component, service) {
  return (props) => {
    return <Component { ...props } service={ service } />;
  };
}
