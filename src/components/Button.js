import React from 'react';
import classNames from 'classnames';


const Button = ({ onCLick, className, outline, children}) => {
  return (
    <button
      onClick={onCLick}
      className = {classNames('button', className,{
        'button--outline': outline,

      })}>
        {children}
      </button>
  );
}



export default Button