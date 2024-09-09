import React from 'react';

const Form = ({ children, ...props }) => {
  return (
    <form className="w-full" {...props}>
      {children}
    </form>
  );
}

export default Form;
