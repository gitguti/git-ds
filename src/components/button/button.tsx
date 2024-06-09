import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  styleType?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
};

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', styleType = 'filled', size = 'medium', ...props }) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[styleType],
    styles[size]
  ].join(' ');

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  styleType: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
